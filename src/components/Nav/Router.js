import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Login from '../User/Login'
import CreateUser from '../User/CreateUser';
import App from '../App';
import Appbar from './Nav';
import MyDrawer from './Drawer';
import Home from '../Home/Home'
import styled from 'styled-components';
import Board from '../Board/Board';

const Top = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-end;
`;

class MyRouter extends Component {
  render() {
    return (
      < BrowserRouter>
      <div>
        <Appbar/>
        <Top>
            <MyDrawer />
        </Top>
        <Route path="/" exact component={Home} />
        <Route path="/Login/" component={Login} />
        <Route path="/Register/" component={CreateUser} />
        <Route path="/Board/:id" component={Board} />
        
      </div>
    </BrowserRouter>
    )
  }
}

export default MyRouter
