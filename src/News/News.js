import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });
  
const News = (props) => {
    const classes = useStyles();
   
    const [likeColor, setLikeColor] = useState('');
    const handleLike = () => {
       const color = likeColor ? '' : 'primary';
       setLikeColor(color)
    }
    return (
        <div className='col-md-6 col-12 my-2'>
            <Card >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.news.urlToImage}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.news.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.news.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" style={{color:"gray"}}>
          <ThumbUpIcon onClick={handleLike}  color={likeColor} ></ThumbUpIcon>
        </Button>
        <a href={props.news.url}>Learn </a>
      </CardActions>
    </Card>
        </div>
    );
};

export default News;