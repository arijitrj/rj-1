import React, { Component } from 'react'
import LoginComponent from './LoginComponent'
import WelcomeComponent from './WelcomeComponent'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import ErrorComponent from './ErrorComponent';
  

export default class TodoApp extends Component {
    render() {
        return (
            <div className= "TodoApp">
                <Router>
                    <>
                    <Switch>
                    <Route path ="/" exact component= {LoginComponent}></Route>
                    <Route path ="/login" component= {LoginComponent}></Route>
                    <Route path ="/welcome/:name" component= {WelcomeComponent}></Route>
                    <Route component= {ErrorComponent}></Route>
                    </Switch>
                    </>
                </Router>
               
            </div>
        )
    }
}
