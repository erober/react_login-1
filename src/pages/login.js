import React, { Component } from 'react';
import { Link } from "react-router-dom";
class login extends Component{
    
    constructor(props){
        super(props)
        this.state={
            uname:"",
            password:""
        }
        this.handleChange=this.handleChange.bind(this);
    }
    
    handleChange= event=>{
        this.setState({
            [event.target.name]: event.target.value,
        });

    }
    handleSubmit = event => {
        event.preventDefault();
        console.log("Submitting");
        console.log(this.state);
      };
    
    render(){
         return(
                <div>
                
                   <div><center><h1>Login</h1></center></div>
                   
                    <div>
                    <center>
                    <form  onChange={this.handleChange} onSubmit={this.handleSubmit}>
                       <label>Username</label>
                       <input 
                       name="uname"
                       placeholder="User Name"
                       value={this.state.uname}
                       type="text"
                       onChange={this.handleChange}
                       ></input>
                       <br></br>
                       <br></br>
                       <label>Password</label>
                       <input 
                       name="password"
                       placeholder="Password"
                       value={this.state.password}
                       type="password"
                       onChange={this.handleChange}
                       ></input>
                       <br></br>
                       <br></br>
                       <button type="submit" onSubmit={this.handleSubmit}>Submit</button>
                       <Link to="/signup" ><button>SignUp</button></Link>
                       


                   </form>
                   </center> 
                   </div>
                    
                </div>
               
        );
    
    }
}

export default login;