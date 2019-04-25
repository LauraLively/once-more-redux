import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from "react-redux";
import { Grid, Card, CardContent, Button } from '@material-ui/core';
// import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
// import CloseIcon from '@material-ui/icons/Close';
// import DeleteIcon from '@material-ui/icons/Delete';
import { getTasks } from '../../redux/middleware/getData';
import Task from '../Task/Task';


//styled components
const Container = styled.div`
    padding: 0px;
    margin: 4px;
    min-width: 200px;
`;
const Title = styled.h3`
    display: flex;
    justify-content: space-evenly;
    padding: 0px;
    margin: 0px;
`;
const TaskList = styled.div`
    padding: 1px !important;
`;
const ListButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: auto;
`;

//styles
const styles = {
    card: {
        minWidth: 275,
        width: 300,
        backgroundColor: "#ccc",
        marginRight: ".5em",
    },
    taskButton: {
        margin: "6rem",
    }
}

export class List extends Component {

  // componentDidMount() {
  //   this.props.getTasks();
  // }


  render() {
    // let sortedTasks = Object.assign([], this.state.tasks);
    // let taskIdOrder = this.props.list.taskIds;
    // sortedTasks.sort((a, b) => {
    //     return taskIdOrder.indexOf(a._id) - taskIdOrder.indexOf(b._id);
    // });
    const tasks = this.props.tasks
    return (
        <Grid>
        <Card style={styles.card}>
            <CardContent>
                <Title>{this.props.list.title}
                </Title>
                {/* <Title>{this.state.isUpdating ? <this.editDelete /> : <this.moreButton />}
                </Title> */}
                  <TaskList>
                      {Object.keys(tasks).map((key, index) => <Task key={key} task={tasks[key]} index={index}  />)}
                  </TaskList>
            </CardContent>
        </Card>
        </Grid>
    )
  }
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks
  };
}
export default connect(
  mapStateToProps,
  { getTasks }
)(List);