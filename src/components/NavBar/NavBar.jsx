import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import styles from './NavBar.module.css'
import { Link } from 'react-router-dom'
import PathRoutes from '../../helpers/Router.helper'

const NavBar = (props) => {
    const {onSearch} = props
  return (
    <div className={styles.conteiner }>
      <Link to={PathRoutes.HOME}>Home</Link>
      <Link to={PathRoutes.ABOUT }>About</Link>
      <SearchBar onSearch={onSearch} />
    </div>
  )
}

export default NavBar



//rafce
