import {Fragment} from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Navbar.module.scss';
import logo from '../../assets/logo.webp';
const Navbar = () => {
  return (
    <Fragment>
      <nav className={styles.navbar}>
        <img src={logo} alt="logo" />
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/About">About</NavLink></li>
          <li><NavLink to="/Submissions">Submissions</NavLink></li>
          <li><NavLink to="/Support">Support</NavLink></li>
          <li><NavLink to="/Evaluations">Evalutions</NavLink></li>
          <li><NavLink to="/Team">Team</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </nav>
    </Fragment>
  );
};
export default Navbar;