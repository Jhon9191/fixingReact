import './styles.css';
import { useState, useEffect, useCallback } from 'react'

import { loadPosts as handleLoadPosts } from '../../utils/loadPost';
import { Posts } from '../../components/PostList';
import { Button } from '../../components/Button';
import { TextInput } from '../../components/TextInput';

export const Home = ( ) => {
    const [posts, setPost] = useState([]);
    const [allPosts, setAllPosts] = useState([]);
    const [page, setPage] = useState(0);
    const [postPerPege] = useState(10);
    const [search, setSearch] = useState('');
    const noMorePosts = page + postPerPege >= allPosts.length;

    const filteredPosts = !!search ? allPosts.filter(post =>{
        return post.title.toLowerCase().includes(
            search.toLowerCase()
        );
    }): posts;

    const loadPosts = useCallback (async (page, postPerPege) => {
        const postsAndPhotos = await handleLoadPosts();
        setPost(postsAndPhotos.slice(page, postPerPege));
        setAllPosts(postsAndPhotos);
    }, [])
        
    const loadMorePosts = () => {
        const nextPage = page + postPerPege;
        const nextPost = allPosts.slice(nextPage, nextPage + postPerPege)
        posts.push(...nextPost);
        setPost(posts);
        setPage(nextPage)
    }
        
    const handleChange = (e) => {
        const { value } = e.target;
        setSearch(value)
    }
        
    useEffect(() =>{
        loadPosts(0, postPerPege);
    },[loadPosts, postPerPege])

   return(
    <section className="container">
    {!!search && (
        <>
            <h1>Search value: {search}</h1>
        </>
    )}
    <TextInput search={search} handleChange={handleChange}/>
    <br /><br />
    {filteredPosts.length === 0 && (
        <h1>Sorry, don't have any posts :(</h1>
    )}
    {filteredPosts.length > 0 && (    
        <Posts posts={filteredPosts} />
    )}
    <div className="button-container">
        {!search && (
                <Button
                    disabled={noMorePosts}
                    name="Adicionar"
                   onClick={loadMorePosts}
                />
        )}
    </div>
</section>
   ) 
}

// export class Home2 extends Component {

//     state = {
//         posts: [],
//         allPosts: [],
//         page: 0,
//         postPerPege: 1,
//         search: ''
//     };

//     async componentDidMount() {
//         await this.loadPosts();
//     }

//     loadPosts = async () => {
//         const { page, postPerPege } = this.state;

//         const postsAndPhotos = await loadPosts();
//         this.setState({
//             posts: postsAndPhotos.slice(page, postPerPege),
//             allPosts: postsAndPhotos
//         });
//     }

//     loadMorePosts = () => {
//         const { page, postPerPege, posts, allPosts } = this.state;

//         const nextPage = page + postPerPege;
//         const nextPost = allPosts.slice(nextPage, nextPage + postPerPege)
//         posts.push(...nextPost);

//         this.setState({ posts, page: nextPage })
//     }

//     handleChange = (e) => {
//         const { value } = e.target;
//         this.setState({ search: value })
//     }

//     render() {
//         const { posts, page, postPerPege, allPosts, search } = this.state;
//         const noMorePosts = page + postPerPege >= allPosts.length;

//         const filteredPosts = !!search ? allPosts.filter(post =>{
//             return post.title.toLowerCase().includes(
//                 search.toLowerCase()
//             );
//         }) 
//         : posts;

//         return (
//             <section className="container">
//                 {!!search && (
//                     <>
//                         <h1>Search value: {search}</h1>
//                     </>
//                 )}

//                 <TextInput search={search} handleChange={this.handleChange}/>

//                 <br /><br />
//                 {filteredPosts.length === 0 && (
//                     <h1>Sorry, don't have any posts :(</h1>
//                 )}
//                 {filteredPosts.length > 0 && (    
//                     <Posts posts={filteredPosts} />
//                 )}
//                 <div className="button-container">
//                     {!search && (
//                             <Button
//                                 disabled={noMorePosts}
//                                 name="Adicionar"
//                                onClick={this.loadMorePosts}
//                             />
//                     )}
//                 </div>
//             </section>
//         )
//     }
// }

