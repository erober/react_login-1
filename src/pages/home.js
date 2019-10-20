import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class home extends Component{
    render(){
        return(
             <div>
                 <div>
                     <NavLink to="/login" activeClassName="formclass--Active" className="formclass" >Login</NavLink>
                 </div>

                 <div>
                     <NavLink to="/signup" activeClassName="formclass--Active" className="formclass"> Signup</NavLink>
                 </div>

             </div>
        );
    }
}

export default home;