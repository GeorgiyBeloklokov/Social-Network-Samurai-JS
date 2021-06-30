import React from "react";
import './App.css';
import {Redirect, Route, Switch} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import NewsContainer from "./components/News/NewsContainer";
import MusicContainer from "./components/Music/MusicContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/Users.Container";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/Preloader/Preloader";
import {withSuspense} from "./components/hoc/WithSuspense";
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Button, Container, Typography} from "@material-ui/core";


const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));




class App extends React.Component {
    catchAllUnhandledErrors = (promiseRejectionEvent) => {
        alert(promiseRejectionEvent);
//console.error(promiseRejectionEvent);

    }

    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }

    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }




    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (


           /* <main>
                <Paper className={classes.mainFeaturesPost}
                       style={{backgroundImage: `url(https://source.unsplash.com/random)`}}>
                    <Container maxWidth="md">
                        <Grid container>
                            <Grid item md={6}>
                                <div className={classes.mainFeaturesPostContent}>
                                    <Typography component="h1" color="inherit" gutterBottom >
                                        Social network JS
                                    </Typography>
                                    <Typography component="h5" color="inherit" paragraph >
                                        Lorem rlkgmrktgm,ertkgmromgti,etgrkom4rtgimo,e4kmgrt4oemgt,erogngt,wcini3ruv,wiu3fne.
                                    </Typography>
                                    <Button variant="contained" color="secondary">Learn more</Button>
                                </div>
                            </Grid>
                        </Grid>
                    </Container>
                </Paper>
            </main>*/





            <div className='app-wrapper'>
                <NavbarContainer/>
                <HeaderContainer/>

                <div className='app-wrapper-content'>
                    <Switch>
                        <Route path='/dialogs'
                               render={withSuspense(DialogsContainer)}/>
                        <Route path='/profile/:userId?'
                               render={withSuspense(ProfileContainer)}/>
                        <Route path='/news' render={() => <NewsContainer/>}/>
                        <Route path='/music' render={() => <MusicContainer/>}/>
                        <Route path='/settings' render={() => <Settings/>}/>
                        <Route path='/users' render={() => <UsersContainer/>}/>
                        <Route path='/friends' render={() => <Friends/>}/>
                        <Route path='/login' render={() => <Login/>}/>
                        <Route exact path="/">{this.props.initialized ? <Redirect to="/profile"/> : <Login/>}</Route>
                        <Route path='*' render={() => <div className="error1">ERROR 404 PAGE NOT FOUND</div>}/>
                    </Switch>
                </div>
            </div>
        )

    }

}


const mapStateToProps = (state) => ({

    initialized: state.app.initialized

})

export default connect(mapStateToProps, {initializeApp})(App);
