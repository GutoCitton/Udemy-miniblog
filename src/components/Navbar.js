import { NavLink } from "react-router-dom";

import { useAuthentication } from "../hooks/useAuthentication";

import { useAuthValue } from "../context/AuthContext";

import styles from './Navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightToBracket, faArrowUpRightFromSquare, faBlog, faCamera, faCircleInfo, faCloud, faHouseChimney, faInfo, faInfoCircle, faTableColumns, faTableList, faUserPlus } from '@fortawesome/free-solid-svg-icons'

import CreatePost from "../pages/CreatePost/CreatePost";




const Navbar = () => {
  const { user } = useAuthValue();
  const { logout } = useAuthentication();

  return (
    <nav className={styles.navbar}>
      <NavLink to='/' className={styles.brand}>
        Mini <span>Blog</span> <FontAwesomeIcon className={styles.cloudIcon} icon={faBlog}/>
      </NavLink>
      
      <ul className={styles.links_list}>
        <li>
          <NavLink to='/' className={({ isActive }) => (isActive ? styles.active : '')}>
            Home <FontAwesomeIcon className={styles.cloudIcon} icon={faHouseChimney}/>
          </NavLink>
        </li>
        {!user && (
          <>
            <li>
              <NavLink to='/login' className={({ isActive }) => (isActive ? styles.active : '')}>
                Entrar <FontAwesomeIcon className={styles.cloudIcon} icon={faArrowUpRightFromSquare}/>
              </NavLink>
            </li>
            <li>
              <NavLink to='/register' className={({ isActive }) => (isActive ? styles.active : '')}>
                Cadastrar <FontAwesomeIcon className={styles.cloudIcon} icon={faUserPlus}/>
              </NavLink>
            </li>
          </>
        )}
        {user && (
          <>
            <li>
              <NavLink to='/posts/create' className={({ isActive }) => (isActive ? styles.active : '') } >
                Novo Post <FontAwesomeIcon className={styles.cloudIcon} icon={faCamera}/>
              </NavLink>
            </li>
            <li>
              <NavLink to='/dashboard' className={({ isActive }) => (isActive ? styles.active : '')}>
                Dashboard <FontAwesomeIcon className={styles.cloudIcon} icon={faTableList}/>
              </NavLink>
            </li>
          </>
        )}
        <li>
          <NavLink to='/about' className={({ isActive }) => (isActive ? styles.active : '')}>
            Sobre <FontAwesomeIcon className={styles.cloudIcon} icon={faCircleInfo}/>
          </NavLink>
        </li>
        {user && (
          <li>
            <button onClick={logout}>Sair <FontAwesomeIcon className={styles.cloudIcon} icon={faArrowRightToBracket}/></button>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default Navbar;