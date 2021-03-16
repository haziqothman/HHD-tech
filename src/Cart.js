import React from 'react';
import Header from './Header';
import './Cart.css'
import Grid from '@material-ui/core/Grid';
import {withStyles, makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Link } from 'react-router-dom';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';



const useStyles = makeStyles((theme) => ({
  root: {
      flexGrow: 1,   
  },

  table: {
    minWidth: 700,
  },
}));

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('XS', 159, 6.0, 24, 4.0),
  createData('S', 237, 9.0, 37, 4.3),
  createData('M', 262, 16.0, 24, 6.0),
  createData('L', 305, 3.7, 67, 4.3),
  createData('XL', 356, 16.0, 49, 3.9),
  createData('2XL', 356, 16.0, 49, 3.9),
];

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
                  <div className="table__modal">
                    <TableContainer component={Paper}>
                      <Table className={classes.table} aria-label="customized table">
                        <TableHead>
                          <TableRow>
                            <StyledTableCell >SIZE(CM)</StyledTableCell>
                            <StyledTableCell align="right">SHOULDER</StyledTableCell>
                            <StyledTableCell align="right">CHEST</StyledTableCell>
                            <StyledTableCell align="right">SLEEVE</StyledTableCell>
                            <StyledTableCell align="right">LENGTH</StyledTableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {rows.map((row) => (
                            <StyledTableRow key={row.name}>
                              <StyledTableCell component="th" scope="row">
                                {row.name}
                              </StyledTableCell>
                              <StyledTableCell align="right">{row.calories}</StyledTableCell>
                              <StyledTableCell align="right">{row.fat}</StyledTableCell>
                              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                              <StyledTableCell align="right">{row.protein}</StyledTableCell>
                            </StyledTableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </div>
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

      <hr className="line__description"/>
      <h2 className="text__cart">RELATED PRODUCT</h2>
            <div className="trending__shirt">
                <Grid container spacing={3}>
                    <Grid item xs>
                        <div className="image__text">
                            <img className="image__white" src="/images/assets/red.png" alt="" />
                            <h1 className="image__description">POKRO JERSEY</h1>
                        </div>
                        <h2 className="price__description">RM 690.00</h2>
                        <div className="icon__text">
                            <FavoriteBorderOutlinedIcon className="icon__love" />
                            <Link to="./Cart" className="header__link">
                              <LocalMallOutlinedIcon />
                            </Link>
                        </div>
                    </Grid>
                    <Grid item xs>
                        <div className="image__text">
                            <img className="image__white" src="/images/assets/white.png" alt="" />
                            <h1 className="image__description">POKRO JERSEY</h1>
                        </div>
                        <h2 className="price__description">RM 69.00</h2>
                        <div className="icon__text">
                            <FavoriteBorderOutlinedIcon className="icon__love" />
                            <Link to="./Cart" className="header__link">
                              <LocalMallOutlinedIcon />
                            </Link>
                        </div>
                    </Grid>
                    <Grid item xs>
                        <div className="image__text">
                            <img className="image__white" src="/images/assets/white.png" alt="" />
                            <h1 className="image__description">WEEBCLASS SHIRT</h1>
                        </div>
                        <h2 className="price__description">RM 25.00</h2>
                        <div className="icon__text">
                            <FavoriteBorderOutlinedIcon className="icon__love" />
                            <Link to="./Cart" className="header__link">
                              <LocalMallOutlinedIcon />
                            </Link>
                        </div>
                    </Grid>
                </Grid>
            </div>
     </>
    );
      }


