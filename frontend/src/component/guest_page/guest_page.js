import React from 'react';
import './App.scss';
import Login_page from './component/login_page/login_page'

class guest_page extends React.Component {

    render() {

        return (

            <div className="App">
                <Login_page />
            </div>
        );
    }

}

export default guest_page;
