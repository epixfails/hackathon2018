import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 150px;
  overflow: hidden;
  margin: 10px;
`;

const BookImage = styled.div`
  width: 100%;
  height: 200px;
  ${({ image }) => `background-image: url(${image})`};
  background-size: cover;
  background-repeat: no-repeat;
`;

const Title = styled.p`
  margin: 10px 0;
  font-size: 16px;
  color: #ffffff;
  word-wrap: break-word;
  text-overflow: ellipsis;
`;

const Author = styled.p`
  font-size: 14px;
  color: #92979f;
  word-wrap: break-word;
  text-overflow: ellipsis;
`;

export const ListItem = ({ book }) => (
  <Wrapper>
    <BookImage image={book.imageLinks.thumbnail} alt="" />
    <Title>{book.title}</Title>
    {book.authors && book.authors.map(author => <Author>{author}</Author>)}
  </Wrapper>
);
