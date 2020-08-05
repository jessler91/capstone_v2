  
import React from 'react'
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom'
import '../App.css'


const ulStyle = {
    display: "flex", 
    width:"20%", 
    justifyContent: "space-around", 
    listStyle: "none"
  }


// Was never successful, 
// but the goal of NavBar2 was to change the nagivation links if the user was logged in

const TopNavBar2 = () => {
    return (

        {document.cookie === "loggedIn=true" ? 

            (
                <AppBar position="relative"color="secondary">
                <Toolbar>
                    <IconButton color="default">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" style={{ flexGrow: "1" }}>
                        FBA_PM
                    </Typography>
                    <ul style={ulStyle} className="nav-list">
                        <li className="nav-list-item">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="nav-list-item">
                            <Link to="/dashboard">Dashboard</Link>
                        </li>
                        <li className="nav-list-item">
                            <Link to="/Logout">Logout</Link>
                        </li>
                    </ul>
                </Toolbar>
            </AppBar>

            ) : (

                <AppBar position="relative"color="secondary">
                <Toolbar>
                    <IconButton color="default">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" style={{ flexGrow: "1" }}>
                        FBA_PM
                    </Typography>
                    <ul style={ulStyle} className="nav-list">
                        <li className="nav-list-item">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="nav-list-item">
                            <Link to="/about">About</Link>
                        </li>
                        <li className="nav-list-item">
                            <Link to="/login">Login</Link>
                        </li>
                    </ul>
                </Toolbar>
            </AppBar>

            )       
        }

    )
}

export default TopNavBar2;