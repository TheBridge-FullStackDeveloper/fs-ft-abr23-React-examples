import React from 'react'
// import "./DestinationItem.css";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

//function DestinationItem(props) {
  function DestinationItem({name,price,url,deleteItem}) {
  return (
    // <article>Tu destino es:{props.name} y precio:{props.price}</article>

    // <article>
    //   <h3>{name}</h3>
    //   <p> Precio: {price} € </p>
    //   <img className="img-destination" src={url} alt={name}/> <br />
    //   <button onClick={deleteItem}>Borrar</button>
    // </article> 

    <Card sx={{ maxWidth: 345, minWidth:345 }}>
    <CardMedia
      component="img"
      alt={name}
      height="140"
      image={url}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Precio: {price} €
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Borrar</Button>
    </CardActions>
  </Card>
      )
}

export default DestinationItem