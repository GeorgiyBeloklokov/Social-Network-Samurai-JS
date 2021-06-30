import React from "react";
import b from "./Header.module.css";
import {NavLink} from "react-router-dom";
import {AppBar, Box, Button, Container, IconButton, Toolbar, Typography} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import {makeStyles} from "@material-ui/core/styles";

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
root:{
    flexGrow: 1
},
        menuButton: {
    marginRight: theme.spacing(1) // 8px, 2=16px, 3=24px
        },
        title: {
    flexGrow:1 // коэф увеличения ширины флекс элемента страницы относительно других флекс элеменитов внутри контейнера

        }
}
))

const Header = (props) => {
     const classes = useStyles();
    return (
        <AppBar position="fixed">
            <Container>
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu" className={classes.menuButton}>
                        <MenuIcon />

                    </IconButton>
                    < Typography variant="h6" className={classes.title}>SocialNetworkSamJS</Typography>
                    <Box mr={2} > {props.isAuth ?  <div>{props.login} <Button onClick={props.logout} color="inherit" variant="outlined" type="submit" >Log Out</Button></div>
                        : <NavLink to={'/login'}><Button  color="inherit" variant="outlined" type="submit" >Log In</Button></NavLink>
                    }

                    </Box>
                    <Button color="secondary" variant="contained" >Sign Up</Button>
                </Toolbar>
            </Container>
        </AppBar>


    );
}

export default Header;
