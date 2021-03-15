import React from 'react';
import Header from './Header';
import './Cart.css'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
      flexGrow: 1,
  },
  paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
  },
}));

function Cart() {
    return (   
      <>
        <Header />
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>   
            <img className="image__white" src="/images/assets/red.png" alt="" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className="tshirt__description">
            <h1 className="description__text">POKRO DARK JERSEY</h1>
            <p className="description__text1">RM 20.00</p>
          </div>
        </Grid>
      </Grid>
   
      </>
    );
}

export default Cart;
