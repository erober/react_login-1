import React, { Component } from 'react';
import { Link} from "react-router-dom";


class signup extends Component{
    
    constructor() {
        super();

        this.state = {
            uname: '',
            email:'',
            password: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
          [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        console.log('The form was submitted with the following data:');
        console.log(this.state);
    }
    
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
                <label>Email</label>
                <input 
                name="email"
                placeholder="Email"
                value={this.state.email}
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
                <Link to="/login" ><button>Login</button></Link>
                


            </form>
            </center> 
            </div>
             
         </div>
        );
    }
}

export default signup;