import './App.css';
import { Component } from 'react'

class App extends Component {

  state = {
    posts: [
      {
        id: 1,
        title: "Ola",
        body: "Ola mundo"
      },
      {
        id: 2,
        title: "Ola 2",
        body: "Ola mundo 2"
      },
      {
        id: 3,
        title: "Ola 3",
        body: "Ola mundo 3"
      },
    ] 
  };

  render() {
    const { posts } = this.state;
    return (
      <div className="App">
        {posts.map(post => (
          <div key={post.id}>
            <h1> {post.title}</h1>
            <p> {post.body}</p>
          </div>
        ))}
      </div>
    )
  }
}

export default App;
