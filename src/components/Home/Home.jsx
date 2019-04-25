import React, { Component } from 'react';
// import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Grid, Card, CardContent, Button, CardActionArea } from '@material-ui/core';
import styled from 'styled-components';
import { getBoards } from '../../redux/middleware/getData';

const Container = styled.div`
  margin: 2rem;
`;

const styles = {
  linkStyle: {
    color: '#000000',
    textDecoration: 'none',
  }
}

class Home extends Component {

  componentDidMount() {
    this.props.getBoards();
  }
  // static propTypes = {
  //   boards: PropTypes.arrayOf(
  //     PropTypes.shape({
  //       _id: PropTypes.string.isRequired,
  //       color: PropTypes.string.isRequired,
  //       title: PropTypes.string.isRequired
  //     }).isRequired
  //   ).isRequired,
  //   listsById: PropTypes.object.isRequired,
  //   history: PropTypes.object.isRequired
  // };
  render() {
    // const { boards, listsById, history } = this.props;
    console.log("home", this.props)
    return (
      <Container>
        <h1>This is where Boards go!</h1>
        <Grid container spacing={24}>
          <Grid item xs={3}>

            <CardActionArea style={styles.linkStyle} component={Link} to={`/Board/${this.props.boards._id}`}>
              <Card>
                {this.props.boards.map(el => (
                  <CardContent key={el._id}>
                    <h3>{el.title}</h3>
                  </CardContent>
                ))}
              </Card>
            </CardActionArea>

          </Grid>
          <Grid item xs={3}>
            <Card>
              <CardContent>
                <h3>This is going to be one board</h3>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card>
              <CardContent>
                <h3>This will be add a board</h3>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    boards: state.boards

  };
}

export default connect(
  mapStateToProps,
  { getBoards }
)(Home);
