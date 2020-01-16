import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#081C24',
    display: 'flex',
    justifyContent :'center',
    alignItems :'center',
    height: '80px',
    
  },
  appBar :{
    backgroundColor: '#081C24',
    width: '70%',
    height: '70px',
    fontFamily: "'Oswald', sans-serif"
  
  },
  
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className ={classes.appBar} id = 'navBar' id = 'navBar'>
        <Toolbar>
          
          <Typography variant="h6" className={classes.title}>
            <img src = "https://pbs.twimg.com/profile_images/789117657714831361/zGfknUu8_400x400.jpg" height = '76' width = '80' />
          </Typography>
          <Button color="inherit"> <span className = "navFont">Movies And TV Shows</span></Button>
          
          
        </Toolbar>
      </AppBar>
    </div>
  );
}