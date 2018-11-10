import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const AddBookLink = styled(Link)`
  color: #fff;
`;

const List = styled.div``;

export class BooksList extends Component {
  componentDidMount() {
    this.props.fetchUserBooksList();
  }

  render() {
    const { list } = this.props;

    return (
      <div>
        <AddBookLink to="/books/add">Добавить книгу</AddBookLink>
        <List>
          <h2>Личные</h2>
          <ul>
            {list.personal.map(book => (
              <li>{book.title}</li>
            ))}
          </ul>
          <h2>Свободны</h2>
          <ul>
            {list.free.map(book => (
              <li>{book.title}</li>
            ))}
          </ul>
          <h2>Читаю</h2>
          <ul>
            {list.read.map(book => (
              <li>{book.title}</li>
            ))}
          </ul>
        </List>
      </div>
    );
  }
}
