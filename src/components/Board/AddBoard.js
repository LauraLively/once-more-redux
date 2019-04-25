import React, { Component } from 'react';
// import DatePicker from './DatePicker';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import PropTypes from 'prop-types';
import slugify from "slugify";

const styles = {
  button: {
    // height: "100%",
    width: 300,
    backgroundColor: "#ccc",
  },
  icon: {
    paddingRight: ".5rem",
  }
};

class AddBoard extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
  };

  handleClickOpen = () => {
    this.setState({ isOpen: true });
  };
  handleClose = () => {
    this.setState({ isOpen: false });
  };
  handleChange = async (event) => {
    this.setState({
      title: event.target.value
    });
  };

  handleSubmit = (event) => {
    // Dispatch action to put new empty board in redux store and db + push new url to history
    event.preventDefault();
    const { title } = this.state;
    if (title === "") {
      return;
    }
    const { dispatch, history } = this.props;
    dispatch({
      type: "ADD_BOARD",
      payload: {
        title: title,
      }
    });
    const urlSlug = slugify(title, { lower: true });
    history.push(`/board/${board._id}/${urlSlug}`);

    this.setState({ isOpen: false, title: "" });
  };

  render = () => {
    const { isOpen, title } = this.state;
    return isOpen ? (
      <div>
        <Dialog  {...this.props}
          isOpen={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title">
          <form onSubmit={this.handleSubmit}>

            <DialogTitle id="form-dialog-title">{title}</DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                type='text'
                name="title"
                placeholder='New Board...'
                value={title}
                onChange={this.handleChange}
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} >
                Cancel
                          </Button>
              <Button type="submit" onClick={this.handleClose} >
                Save
                          </Button>
            </DialogActions>
          </form>
        </Dialog>
      </div>
    ) : (<Button style={styles.button} onClick={this.handleClickOpen}> <AddCircleIcon style={styles.icon} />Add a new board...</Button>
      );
  };
}

export default AddBoard;
