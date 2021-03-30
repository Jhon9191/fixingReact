import logo from './logo.svg';
import './App.css';
import { Component } from 'react'

class App extends Component {

  // constructor(props) {
  //   super(props);
  //this.
  state = {
    name: "João",
    counter: 0
  };

  //   this.handleClick = this.handleClick.bind(this);
  // }

  //PRECISA DE BIND PARA FUNCIONAR
  handleClick = () => {
    this.setState({ name: "João 2" });
  }

  //NÃO PRECISA DE BIND BUSCA DIRETO NO COMPONENT PAI
  handleClickLink = (e) => {
    e.preventDefault();
    const { counter } = this.state;
    this.setState({ counter: counter + 1 })
  }

  render() {
    const { name, counter } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p onClick={this.handleClick}>
            {name} {counter}
          </p>
          <a
            onClick={this.handleClickLink}
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Link
         </a>
        </header>
      </div>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
