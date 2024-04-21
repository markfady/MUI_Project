import {
    Avatar,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Checkbox,
    IconButton,
    Typography,
  } from "@mui/material";
  import { red } from "@mui/material/colors";
  import ShareIcon from "@mui/icons-material/Share";
  import MoreVertIcon from "@mui/icons-material/MoreVert";
  import image1 from "../assets/paella.jpg";
  import { Favorite, FavoriteBorder } from "@mui/icons-material";
const Post = () => {
  return (
    <Card sx={{ maxWidth: "80%",margin:5}}>
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
          R
        </Avatar>
      }
      action={
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      }
      title="WaterFall and Amazon"
      subheader="April 18, 2024"
    />
    <CardMedia
      component="img"
      height="10%"
      image={image1}
      alt="Waterfall"
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
        The waterfall cascaded down the rugged cliff, its relentless flow
        echoing through the canyon. Each drop danced with the light, a
        mesmerizing display of nature's power and grace.
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
        <Checkbox
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite sx={{ color: "red" }} />}
        />
      </IconButton>
      <IconButton aria-label="share">
        <ShareIcon />
      </IconButton>
    </CardActions>
  </Card>
  )
}

export default Post