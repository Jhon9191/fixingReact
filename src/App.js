import './App.css';
import { Component } from 'react'

class App extends Component {

  state = {
    counter: 0,
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

  timeoutUpdate = null;

  //Executa quando abre a aplicação
  componentDidMount() {
    this.handleTimeOut(); 
  }

  //executa sempre quando algo é alterado
  componentDidUpdate(){
    //clearTimeout(this.timeoutUpdate);
    this.handleTimeOut(); 
  }

  //Desmontar os componentes
  componentWillUnmount(){
    clearTimeout(this.timeoutUpdate);
  }

  handleTimeOut = () => {
    const { posts, counter } = this.state;
    posts[0].title = "Novo titulo"
    this.timeoutUpdate = setTimeout(() => {
      this.setState({ posts, counter: counter+1 });
    }, 5000);
  }

  render() {
    const { posts, counter } = this.state;
    return (
      <div className="App">
        {counter}
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
