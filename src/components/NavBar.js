import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@material-ui/core";
import './NavBar.css';
import { withStyles, makeStyles } from '@material-ui/core';
import logo from '../photos/aarontech2.png';
import {useNavigate} from 'react-router-dom';


const StyledButton = withStyles({
    root: { 
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "44px",
        width: '200px',
        variant: 'h6',
        boxSizing: "border-box",
        fontFamily:'Roboto',
        fontSize: '20px',
        cursor: "pointer", 
        flexGrow: 1,
        "&:hover": {
            background:  "#4f25f7"
        },
        borderRadius: 0, 
        background: "#232e3a",
        color: "#fff",
        transform: "none",
        transition: "background .3s,border-color .3s,color .3s"
    },
    label: {
      textTransform: 'capitalize',
    },
  })(Button);

const styles = makeStyles({
    logo: {
        width: "75px",
        ['@media (max-width:780px)']: { 
           display: "none"
           }
    },
})

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const classes = styles()
    const history = useNavigate();
    const [loggedIn, setLoggedIn] = useState(false);

    //If windows size is less than or equal to 960px, 
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    };

    const showLoggedIn = () => {
        if (sessionStorage.getItem('Name') == null) {
            setLoggedIn(false);
        } else {
            setLoggedIn(true);
        }
    };

    useEffect(() => {
        showLoggedIn()
    }, []);

    {/*keeps login button hidden on refresh*/ }
    useEffect(() => {
        showButton()
    }, []);


    window.addEventListener('resize', showButton);

   
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Button className= {classes.buttons} onClick = { () =>{ 
                     history("/home");
                      }
                         }  > <img  className = {classes.logo} src={logo} /></Button>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        AaronTech {/* Icon? */}
                    </Link>

                    {/* Navigation Bar */}
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                                About Us
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                                Contact
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to='/login' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Sign Up
                            </Link>
                            
                        </li>
                       
                    </ul>
                    <StyledButton  className = 'nav-links' onClick = { () =>{ 
                            history("/login");
                               }
                              } >Log In</StyledButton>
                </div>
            </nav>
        </>
    )
}

export default Navbar
