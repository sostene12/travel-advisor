import React from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar,Toolbar ,InputBase,Typography,Box } from '@material-ui/core';
import  { Search as SearchIcon } from '@material-ui/icons';
import useStyles from "./styles"
const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position='static'>
      <Toolbar  className={classes.toolbar}>
        <Typography variant='h5' className={classes.title}>
            Travel Advisor
        </Typography>
        <Box display="flex" style={{display:"flex"}}>
          <Typography variant='h6' className={classes.title}>
              Explore New Places
          </Typography>
          {/* <Autocomplete> */}
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase  placeholder='Search...'  classes={{root:classes.inputRoot,input:classes.inputInput}} />
            </div>
          {/* </Autocomplete> */}
        </Box>
      </Toolbar >
    </AppBar>
  )
}

export default Header