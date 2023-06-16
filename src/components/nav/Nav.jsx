import React from "react";
import NavLink from "../NavLink/NavLink";
import SearchBar from "../searchbar/SearchBar";
import style from "./nav.module.css";


class Nav extends React.Component{
    constructor(props){
        super()
    }

    render(){
        return  <nav className={style.nav}> 

                    <NavLink to={'/home'}> 
                        <span>Home</span>
                    </NavLink>
                    <NavLink to={'/about'}> 
                        <span>About</span>
                    </NavLink>

                    <SearchBar onSearch={this.props.onSearch} />     
                </nav>
        
    }
}

export default Nav;