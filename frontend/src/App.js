import React from 'react';
import logo from './logo.svg';
import './App.scss';
import {Login} from './component/login/index'

class App extends React.Component{

  constructor(props){
    super(props);
    this.state ={
      isLogginActive: true,
    }
  }
render() {
  const { isLogginActive } = this.state;
  return (
  <div className="App">
      <div className="login">
        <div className="container">
          {isLogginActive && <Login containerRef={(ref)=>this.current = ref} />}
        </div>
      </div>
    </div>);
  
}

}
export default App;
