import React from 'react';
import './App.scss';
import {Route} from 'react-router-dom'
import Login_page from './component/login_page/login_page'
import Guest_page from './component/guest_page/guest_page'

class App extends React.Component{





  render() {

    return (

      <div className="App">
        <Route exact path = "/guest" component={Guest_page} />
       <Route path ="/" component={Login_page} />
      </div>
    );
  }

}

export default App;
