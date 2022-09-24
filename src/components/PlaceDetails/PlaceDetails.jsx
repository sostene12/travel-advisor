import React from 'react';
import {Box,Typography,Button,Card,CardMedia,CardContent,CardActions,Chip} from "@material-ui/core";
import { LocationOnOutlined,Phone } from '@material-ui/icons';
import Rating from "@material-ui/lab/Rating";

import useStyles from "./styles"

const PlaceDetails = ({place}) => {
  const classes = useStyles();
  return (
    <Card elevation={6}>
      <CardMedia 
      style={{height:350}} 
      image={place.photo ? place.photo.images.medium.url : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"}
      title={place.name}
      />
      <CardContent>
        <Typography variant="h5" gutterBottom>{place.name}</Typography>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Price</Typography>
          <Typography variant="subtitle1" gutterBottom >{place.price_level}</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Ranking</Typography>
          <Typography variant="subtitle1" gutterBottom >{place.ranking}</Typography>
        </Box>
        {place?.awards?.map((award) => (
          <Box my={1} display="flex" justifyContent="space-between" alignItems="center">
            <img src={award.images.small} alt={award.display_name}/>
            <Typography variant="subtitle2" color="textSecondary">{award.displa}</Typography>
          </Box>

        ))}
      </CardContent>
    </Card>
  )
}

export default PlaceDetails