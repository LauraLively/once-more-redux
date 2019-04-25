import React, { Component } from 'react';
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
// import { Draggable } from "react-beautiful-dnd";
import { Grid, Card, CardContent, CardActions } from '@material-ui/core';
// import EditIcon from  '@material-ui/icons/Edit';
// import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
// import CloseIcon from '@material-ui/icons/Close';
// import DeleteIcon from '@material-ui/icons/Delete';
import styled from 'styled-components'

const Container = styled.div`
    padding: 1px;
    margin-bottom: 5px;
    border-radius: 3px;
`;


class Task extends Component {
  render() {
    return (
        <Container>
        <Grid>
          <Card>
            <CardContent>
              {this.props.list.taskIds.name}
            </CardContent>
            <CardActions className="actions">
              {/* {this.state.isUpdating ? <this.editDelete/> : <this.moreButton/> }         */}
            </CardActions>
          </Card>
        </Grid>
        </Container>
    );
  }
};

// const mapStateToProps = (state, ownProps) => ({
//   tasks: state.lists[ownProps._id].taskIds
// });


export default Task;
