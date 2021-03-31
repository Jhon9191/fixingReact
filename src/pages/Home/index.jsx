import './styles.css';
import { Component } from 'react'

import { loadPosts } from '../../utils/loadPost';
import { Posts } from '../../components/PostList';
import { Button } from '../../components/Button';

export class Home extends Component {

    state = {
        posts: [],
        allPosts: [],
        page: 0,
        postPerPege: 1,
        search: ''
    };

    async componentDidMount() {
        await this.loadPosts();
    }

    loadPosts = async () => {
        const { page, postPerPege } = this.state;

        const postsAndPhotos = await loadPosts();
        this.setState({
            posts: postsAndPhotos.slice(page, postPerPege),
            allPosts: postsAndPhotos
        });
    }

    loadMorePosts = () => {
        const { page, postPerPege, posts, allPosts } = this.state;

        const nextPage = page + postPerPege;
        const nextPost = allPosts.slice(nextPage, nextPage + postPerPege)
        posts.push(...nextPost);

        this.setState({ posts, page: nextPage })
    }

    handleChange = (e) => {
        const { value } = e.target;
        this.setState({ search: value })
    }

    render() {
        const { posts, page, postPerPege, allPosts, search } = this.state;
        const noMorePosts = page + postPerPege >= allPosts.length;

        const filteredPosts = !!search ? allPosts.filter(post =>{
            return post.title.toLowerCase().includes(
                search.toLowerCase()
            );
        }) 
        : posts;

        return (
            <section className="container">
                {!!search && (
                    <>
                        <h1>Search value: {search}</h1>
                    </>
                )}
                <input
                    value={search}
                    onChange={this.handleChange}
                    type="search" />
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
                               onClick={this.loadMorePosts}
                            />
                    )}
                </div>
            </section>
        )
    }
}

