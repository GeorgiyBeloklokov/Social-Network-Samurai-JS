import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';


export const InputCustom = (props) => {

let savePhoto = props.savePhoto;

    const useStyles = makeStyles((theme) => ({
        root: {
            '& > *': {
                margin: theme.spacing(1),
            },
        },
        input: {
            display: 'none',
        },
    }));


    const classes = useStyles();

    return (
        <div className={classes.root}>
            <input
                accept="image/*"
                className={classes.input}
                id="contained-button-file"
                multiple
                type="file"
                onChange={savePhoto}
            />
            <label htmlFor="contained-button-file">
                <Button  style={{maxWidth: '5.8rem', maxHeight: '1.5rem', minWidth: '2.4rem', minHeight: '1rem', fontSize:'0.5rem', textAlign:'center'}}  variant="contained" color="primary" component="span">
                    Upload Image
                </Button>
            </label>
            {/*<input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
            <label htmlFor="icon-button-file">
                <IconButton   color="primary" aria-label="upload picture" component="span">
                    <PhotoCamera fontSize="medium"/>
                </IconButton>
            </label>*/}
        </div>
    );
}