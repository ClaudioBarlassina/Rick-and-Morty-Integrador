import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import PathRoutes from "../../helpers/Router.helper";

const NavBar = props => {
  const { onSearch } = props;
  return (
    <div className={styles.conteiner}>
      <Link className={styles.btn} to={PathRoutes.HOME}>
        Home
      </Link>
      <Link className={styles.btn} to={PathRoutes.ABOUT}>
        About
      </Link>
      <Link className={styles.btn} to={"/favorites"}>
        Favorites
      </Link>
      <SearchBar onSearch={onSearch} />
    </div>
  );
};

export default NavBar;

//rafce
