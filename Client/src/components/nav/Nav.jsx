import React from "react";
import NavLink from "../NavLink/NavLink";
import SearchBar from "../searchbar/SearchBar.jsx";
import style from "./nav.module.css";

class Nav extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className={style.container}>
        <aside>
          <nav className={style.nav}>
            <NavLink to={"/home"}>
              <span>Home</span>
            </NavLink>

            <NavLink to={"/favorites"}>
              <span>Favorite</span>
            </NavLink>

            <NavLink to={"/about"}>
              <span>About</span>
            </NavLink>

            <span>
              <SearchBar
                className={style.SearchBar}
                onSearch={this.props.onSearch}
              />
            </span>

            <NavLink to={"/"}>
              <span>Cerrar</span>
            </NavLink>
          </nav>
        </aside>
      </div>
    );
  }
}

export default Nav;
