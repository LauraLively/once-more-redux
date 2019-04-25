import React, { Component } from "react";
import { connect } from "react-redux";
import { getBoards } from "../redux/middleware/getData";

export class MyBoards extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.props.getBoards();
  }
  render() {
    
    console.log('boards', this.props.boards._id)

    return (
      <ul className="list-group list-group-flush">
        {this.props.boards.map(el => (
          <li className="list-group-item" key={el._id}>
            {el.title}
          </li>
        ))}
      </ul>
    );
  }
}
function mapStateToProps(state) {
  return {
    boards: state.boards

  };
}
export default connect(
  mapStateToProps,
  { getBoards }
)(MyBoards);