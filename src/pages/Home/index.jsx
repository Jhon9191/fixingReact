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
                <Posts posts={posts} />
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

