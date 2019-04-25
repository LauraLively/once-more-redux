import React, { Component } from 'react'
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Grid, Card, CardContent, Button, CardActionArea } from '@material-ui/core';
import styled from 'styled-components';
// import { getLists } from '../../redux/middleware/getData';
import List from '../List/List'

const Container = styled.div`
  display: flex;

  margin: 2rem;
`;

const styles = {
  linkStyle: {
    color: '#000000',
    textDecoration: 'none',
  }
}


class Board extends Component {

  // componentDidMount() {
  //   this.props.getLists();
  // }

  render() {
    const lists = this.props.boards.listIds;
    console.log("state", this.props)
    return (
      <>
      <h1>This is where Lists go!</h1>
      <Container>
        {Object.keys(lists).map((key, index) => <List key={key} list={lists[key]} index={index} />)} 
            {/* <AddList refresh={this.getLists} /> */}
      </Container>
      </>
    )
  }
}

function mapStateToProps(state) {
  return {
    lists: state.lists
  };
}
export default connect(
  mapStateToProps,
  // { getLists }
)(Board);