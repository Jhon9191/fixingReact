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
        postPerPege: 2
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
        const { page ,postPerPege, posts, allPosts } = this.state;

        const nextPage = page + postPerPege;
        const nextPost = allPosts.slice(nextPage, nextPage+postPerPege)
        posts.push(...nextPost);

        this.setState({ posts, page: nextPage })
    }

    render() {
        const { posts } = this.state;
        return (
            <section className="container">
                <Posts posts={posts} />
                <Button 
                name="Adicionar"
                onClick={this.loadMorePosts}
                />
            </section>
        )
    }
}

