import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { Link } from 'react-router-dom';

const styles = theme=> ({
  root: {
    backgroundColor: 'teal',
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  button:{
    color : '#ffffff !important'
  },  
  homeButton:{
    color : '#ffffff !important',
    textTransform: 'none',
    fontSize: '2rem',
    fontFamily: 'Dancing Script',
  },  
  title:{
    justifyContent: 'center',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -18,
    marginRight: 10,
  },
  searchIcon: {
    // width: theme.spacing.unit * 9,
    height: '60%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
})

function Appbar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar className={classes.root}sticky="top">
        <Toolbar variant="dense">
          <IconButton className={classes.menuButton} component={Link} to="/" color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" color="inherit">
          <Button className={classes.homeButton} component={Link} to="/">Lively</Button>
          </Typography>
          {/* <div className={classes.grow}><p>Once More With Feeling</p></div> */}
          <div className={classes.grow} />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
            />
            
          </div>
          <Typography className={classes.title} color="inherit" noWrap>
          <Button className={classes.button} component={Link} to="/Login">Login</Button>
          <Button className={classes.button} component={Link} to="/Register">Register</Button>
          </Typography>

        </Toolbar>
      </AppBar>
      
    </div>
  );
}

Appbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Appbar);