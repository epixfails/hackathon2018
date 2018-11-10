import React, { Fragment } from 'react';
import styled from 'styled-components';
import { CategorySelect } from './CategorySelect';

const Wrapper = styled.div`
  display: flex;
  padding: 40px 0;
`;

const BookImage = styled.div`
  width: 160px;
`;

const BookDescription = styled.div`
  padding: 0 20px;
`;

const DescriptionText = styled.p`
  margin: 0;
  color: #fff;
  font-size: 20px;
`;

const DescriptionComment = styled.p`
  font-size: 14px;
  color: #92979f;
`;

const Controls = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const BookTitle = styled.p`
  font-size: 16px;
  color: #fff;
  margin: 10px 0;
`;

const BookAuthors = styled.p`
  font-size: 14px;
  color: #92979f;
  margin: 0;
`;

const ButtonAddBook = styled.button`
  width: 260px;
  height: 50px;
  background: #4a76a8;
  border-radius: 25px;
  font-size: 20px;
  color: #fff;
`;

export const BookSelected = ({
  book,
  selected,
  handleSaveSeleсted,
  handleSelectCategory,
}) => (
  <Fragment>
    <Wrapper>
      <BookImage>
        <img src={book.imageLinks && book.imageLinks.thumbnail} alt="" />
        <BookTitle>{book.title}</BookTitle>
        {book.authors &&
          book.authors.map(author => <BookAuthors>{author}</BookAuthors>)}
      </BookImage>
      {book.description && (
        <BookDescription>
          <DescriptionText>{book.description}</DescriptionText>
          <DescriptionComment>Описание с Google Books</DescriptionComment>
        </BookDescription>
      )}
    </Wrapper>
    <Controls>
      <CategorySelect handleSelect={handleSelectCategory} selected={selected} />
      <ButtonAddBook onClick={() => handleSaveSeleсted(book)}>
        <img src="img/plus.svg" alt="" />
        Добавить книгу
      </ButtonAddBook>
    </Controls>
  </Fragment>
);
