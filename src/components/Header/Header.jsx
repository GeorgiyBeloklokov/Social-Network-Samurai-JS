import React, {useState} from "react";
import b from "./Header.module.css";
import {NavLink,withRouter} from "react-router-dom";
import {AppBar, Box, Button, Container, IconButton, Link, MenuItem, Toolbar, Typography} from "@material-ui/core";
import Menu from '@material-ui/core/Menu';
import MenuIcon from "@material-ui/icons/Menu";
import {makeStyles} from "@material-ui/core/styles";
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import Navbar from "../Navbar/Navbar";
import s from "../Navbar/Navbar.module.css";

/*const Header = (props) => {
    return <header className={b.header}>
        <img src='https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg' alt=" "/>

        <div className={b.loginBlock}>
            {props.isAuth ?  <div>{props.login}  <button onClick={props.logout}>Log out</button></div>
                : <NavLink to={'/login'}><button className={b.but} >Login</button></NavLink>
            }
        </div>
    </header>
}
export default Header;*/


export const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1
        },
        menuButton: {
            marginRight: theme.spacing(1) // 8px, 2=16px, 3=24px

        },

        title: {
            flexGrow: 1 // коэф увеличения ширины флекс элемента страницы относительно других флекс элеменитов внутри контейнера

        },

    }
))

const Header = (props) => {
    const {history} = props;
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClick = (pageURL) => {
        history.push(pageURL);
        setAnchorEl(null);
    };

    return (
        <AppBar position="fixed">
            <Container>
                <Toolbar>
                    <div>
                        <IconButton onClick={handleMenu} edge="start" color="inherit" aria-label="menu"
                                    className={classes.menuButton}>
                            <MenuIcon/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={open}
                            onClose={()=>setAnchorEl(null)}
                        >
                            <MenuItem onClick={()=>handleMenuClick('/profile')}>Profile</MenuItem>
                            <MenuItem onClick={()=>handleMenuClick('/dialogs')}>Messages</MenuItem>
                            <MenuItem onClick={()=>handleMenuClick('/news')}>News</MenuItem>
                            <MenuItem onClick={()=>handleMenuClick('/music')}>Music</MenuItem>
                            <MenuItem onClick={()=>handleMenuClick('/settings')}>Settings</MenuItem>
                            <MenuItem onClick={()=>handleMenuClick('/users')}>Users</MenuItem>
                        </Menu>

                    </div>
                    < Typography variant="h6" className={classes.title}>SocialNetworkSamJS</Typography>
                    <Box mr={2}> {props.isAuth ?
                        <div>{props.login} <Button onClick={props.logout} color="inherit" variant="outlined"
                                                   type="submit">Log Out</Button></div>
                        :
                        <NavLink to={'/login'}><Button color="inherit" variant="outlined" type="submit">Log In</Button></NavLink>
                    }

                    </Box>
                    <Button color="secondary" variant="contained">Sign Up</Button>
                </Toolbar>
            </Container>
        </AppBar>


    );
}


export default withRouter(Header);
