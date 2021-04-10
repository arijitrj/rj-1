import React, { Component } from 'react'

export default class LoginComponent extends Component {

    constructor(props){
        super(props)
        this.state= {
            username: "in28minutes",
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
        this.handleChange= this.handleChange.bind(this);
        this.loginClick = this.loginClick.bind(this);
        }
        
        handleChange(event){
            this.setState({
                [event.target.name]: event.target.value
            })
        }
        loginClick() {

            console.log(this.state)
        
            if (this.state.username==='in28minutes' && this.state.password==='dummy') {
        
                this.props.history.push(`/welcome/${this.state.username}`);
        
               // this.setState({showSuccessMessage:true})
        
                //this.setState({hasLoginFailed:false})
        
                }
        
            else {
        
            console.log('Failed')
        
              this.setState({showSuccessMessage:false})
        
              this.setState({hasLoginFailed:true})
        
              }
        
            }
     
        
    render() {
        return (
            <div>
                <ShowInvalidCredentials hasLoginFailed= {this.state.hasLoginFailed}/>
                <ShowLoginSucess showSuccessMessage= {this.state.showSuccessMessage}/>
               User Name: <input type= "text" name = "username" value = {this.state.username} onChange= {this.handleChange}/>
               Password: <input type= "password" name = "password" value = {this.state.password} onChange= {this.handleChange} />
                <button onClick ={this.loginClick}>Log in</button>
            </div>
        )
    }
}

function  ShowInvalidCredentials(props) {
          
    if(props.hasLoginFailed){return (<div>Invalid Credentials</div>)}
    return null
  }

  function ShowLoginSucess(props) {
      
    if (props.showSuccessMessage){return (<div>Login Successful</div>) }
        return null;
    
  }