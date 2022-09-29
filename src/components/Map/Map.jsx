import React from 'react';
import GoogleMapReact from "google-map-react";
import { Paper,Typography,useMediaQuery } from '@material-ui/core';
import  {LocationOnOutlined} from '@material-ui/icons';
import {Rating} from "@material-ui/lab";

import useStyles from "./styles";
import { useDispatch } from 'react-redux';
import {setChildClicked} from "../../redux/childRedux"

const Map = ({coordinates,setCoordinates,setBounds,places}) => {
  const classes = useStyles();
  const isDesktop = useMediaQuery('(min-width:600px)');
  const dispatch = useDispatch()

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
        onChildClick={(child) => dispatch(setChildClicked(child))}
       >
        {places?.map((place,i) => (
          <div className={classes.markerContainer} lat={Number(place.latitude)} lng={Number(place.longitude)} ke={i}>
             { !isDesktop ? (
              <LocationOnOutlined color="primary" fontSize='large' />
             ) : (
                <Paper elevation={3} className={classes.paper}>
                  <Typography className={classes.Typography} variant="subtitle2" gutterBottom >
                    {place.name}
                  </Typography>
                  <img 
                  src={place.photo ? place.photo.images.small.url : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"} 
                  alt={place.name}
                  className={classes.pointer}
                   />
                   <Rating size="small" value={Number(place.rating)} readOnly />
                </Paper>
             )}
          </div>
        ))}
       </GoogleMapReact>
    </div>
  )
}

export default Map