import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    justifyContent :'center',
    alignItems :'center',
    flexWrap: 'wrap',
    width: '100%',
    backgroundColor: 'white',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '60%',
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  iconButton: {
    marginTop :'20px',
  },
}));



export default function TextFields(props) {
  const classes = useStyles();
 


  return (
    <form className={classes.container} noValidate autoComplete="off" onSubmit = {props.getNameFromSearch} id = 'searchBar' >
      
      
      <TextField
        id="standard-with-placeholder standard-full-width "
        label="Search"
        placeholder="Search"
        className={classes.textField}
        margin="normal"
        name = 'itemName'
        
      />

      <IconButton type = 'submit' className={classes.iconButton} aria-label="Search"  >
        <SearchIcon />
      </IconButton>
  
     
    </form>
  );
}