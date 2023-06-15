import React from "react";
import { Link } from "react-router-dom";
import NavLink from "../NavLink/NavLink";
import SearchBar from "../searchbar/SearchBar";
import style from "./nav.module.css";


class Nav extends React.Component{
    constructor(props){
        super()
    }

    render(){
        return  <nav className={style.nav}> 

        <Link to={'/home'}> 
            <button>Home</button>
        </Link>
        <NavLink to={'/about'}> 
            <span>About</span>
        </NavLink>

        <SearchBar onSearch={this.props.onSearch} />     
           </nav>
        
    }
}

export default Nav;