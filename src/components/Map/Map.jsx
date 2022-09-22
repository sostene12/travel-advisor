import React from 'react';
import GoogleMapReact from "google-maps-react";
import { Paper,Typography,useMediaQuery } from '@material-ui/core';
import  {LocationOnOutlined} from '@material-ui/icons';
import Rating from "@material-ui/lab";

import useStyles from "./styles";

const Map = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(min-width:600px)')

  const coordinates = {lat:0,lng:0};

  return (
    <div className={classes.mapContainer}>
       <GoogleMapReact
        bootstrapURLKeys={{key:'AIzaSyA9RpOw_VI_8EPo9mogq3VI2ENJBkKyT5U'}}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50,50,50,50]}
        options={''}
        onChange={''}
        onChildClick={''}
       >

       </GoogleMapReact>
    </div>
  )
}

export default Map