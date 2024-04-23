import React ,{Component} from 'react';
import './App.css';
import Todo from './component/Todo';


class App extends Component {  //using class
  state = {
    myString : "Hello",
    myString1 : "World"

  };
          
  render() {
    return (
      <div className='App'>
        <h1>{this.state.myString} Welcome To React</h1>
        <Todo />
      </div>
    );
  }
}

export default App;





// function App() {
//   return (
//     <div className="App">
//      <h1>Welcome</h1>
//     </div>
//   );
// }