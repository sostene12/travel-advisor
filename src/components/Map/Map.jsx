import React from 'react';
import GoogleMapReact from "google-map-react";
import { Paper,Typography,useMediaQuery } from '@material-ui/core';
import  {LocationOnOutlined} from '@material-ui/icons';
import Rating from "@material-ui/lab";

import useStyles from "./styles";

const Map = ({coordinates,setCoordinates,setBounds}) => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(min-width:600px)');

  return (
    <div className={classes.mapContainer}>
       <GoogleMapReact
        bootstrapURLKeys={{key:process.env.REACT_APP_GOOGLE_API_KEY}}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50,50,50,50]}
        options={''}
        onChange={(e) => {
          console.log(e)
          setCoordinates({lat:e.center.lat,lng:e.center.lng});
          setBounds({ne:e.marginBounds.ne,sw:e.marginBounds.sw})
        }
        }
        onChildClick={() => console.log("onClick")}
       >

       </GoogleMapReact>
    </div>
  )
}

export default Map