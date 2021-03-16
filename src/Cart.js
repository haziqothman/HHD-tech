import React from 'react';
import Header from './Header';
import './Cart.css'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Link } from 'react-router-dom';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';


const useStyles = makeStyles((theme) => ({
  root: {
      flexGrow: 1,

      modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
      },
  },
}));

export default function Cart() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    return (   
      <>
      <Header />
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>   
            <img className="image__cart" src="/images/assets/red.png" alt="" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className="tshirt__description">
            <h1 className="description__text">POKRO DARK JERSEY</h1>
            <p className="description__text1">RM 20.00</p>
          </div>
          <h5 className="size__description">Select Size</h5>
          <div className="box__size">
            <button className="btn__size1">
              XS
            </button>
            <button className="btn__size1">
              S
            </button>
            <button className="btn__size1">
              M
            </button>
            <button className="btn__size1">
              L
            </button>
          </div>
          <div className="box__size2">
            <button className="btn__size2">
              XL
            </button>
            <button className="btn__size2">
              XXL
            </button>
          </div>

          <div className="size__modal">
            <Link className="size__guide" type="button" onClick={handleOpen}>
              Size Guide
            </Link>
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              className={classes.modal}
              open={open}
              onClose={handleClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={open}>
                <div className={classes.paper}>
                <h1>test</h1>
                </div>
              </Fade>
            </Modal>
          </div>
          <h5 className="size__description">Your NameSet</h5>
          <TextareaAutosize aria-label="empty textarea" placeholder="All Caps" className="nameSet__shirt" />
          <div className="btn__addToCart">
            <button className="btn__addToCart2">ADD TO CART</button>
            <button className="btn__addToCart3">FAVOURITE</button>
          </div>
          <Link className="size__guide" type="button" onClick={handleOpen}>
              View Product Details
            </Link>
        </Grid>
      </Grid>
     </>
    );
      }


