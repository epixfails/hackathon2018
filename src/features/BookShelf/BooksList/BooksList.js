import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { List } from './components/List';

const AddBookLink = styled(Link)`
  display: flex;
  width: 220px;
  height: 50px;
  justify-content: flex-start;
  align-items: center;
  text-align: right;
  font-size: 20px;
  padding: 0 20px;
  margin-bottom: 20px;
  color: #fff;
  background-color: #4a76a8;
  text-decoration: none;
  border-radius: 25px;
`;

const SectionTitle = styled.h2`
  font-size: 20px;
  color: #fff;
  font-weight: 400;
`;

const Icon = styled.img`
  position: relative;
  top: 5px;
  margin-right: 10px;
`;

export class BooksList extends Component {
  componentDidMount() {
    this.props.fetchUserBooksList();
  }

  render() {
    const { list } = this.props;

    return (
      <div>
        <AddBookLink to="/books/add">
          <Icon src="img/plus.svg" alt="" />
          Добавить книгу
        </AddBookLink>
        <SectionTitle>Личные</SectionTitle>
        <List books={list.personal} />
        <SectionTitle>Свободны</SectionTitle>
        <List books={list.free} />
        <SectionTitle>Читаю</SectionTitle>
        <List books={list.read} />
      </div>
    );
  }
}
