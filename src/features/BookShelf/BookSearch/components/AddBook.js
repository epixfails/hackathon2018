import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { bookStatus } from '../../../../common/constants';
import { SuggestionItem } from './SuggestionItem';
import { BookSelected } from './BookSelected';

const Wrapper = styled.div`
  position: relative;
`;

const SearchInput = styled.input`
  font-size: 18px;
  border: none;
  width: 880px;
  height: 50px;
  border-radius: 10px;
  padding: 0 20px;
  outline: none;
`;

const SuggestionsWrapper = styled.ul`
  padding: 10px 0 0 0;
  background: #fff;
  list-style-type: none;
  position: absolute;
  height: 200px;
  overflow: auto;
  width: 100%;
  top: 115px;
  border-radius: 0 0 10px 10px;
`;

const StyledLink = styled(Link)`
  display: block;
  width: 255px;
  font-size: 20px;
  margin-bottom: 40px;
  position: relative;
  padding: 13px 23px 13px 50px;
  color: #fff;
  background-color: #5f6979;
  text-decoration: none;
  border-radius: 25px;

  &:before {
    content: '<';
    display: block;
    position: absolute;
    left: 20px;
    width: 20px;
    height: 20px;
    background-image: none;
  }
`;

export class AddBook extends Component {
  state = {
    query: '',
    isBookSelected: false,
    book: {},
    category: bookStatus.free,
  };

  handleInput = ({ target: { value } }) => {
    if (value.trim().length > 3) {
      this.props.setBookSearch(value.trim());
    }
    this.setState({ query: value.trim(), isBookSelected: false });
  };

  handleSelectBook = book => {
    this.setState({
      isBookSelected: true,
      query: book.title,
      book,
    });
  };

  handleSaveSeleсted = book => {
    this.props.setSelectedBook({
      bookId: book.id,
      categoryId: this.state.category,
    });
  };

  handleSelectCategory = category =>
    this.setState({
      category,
    });

  render() {
    const {
      search: { suggestions },
    } = this.props;

    const { isBookSelected, query } = this.state;
    const isSuggestedBooks =
      suggestions && suggestions.books.length > 0 && query.length >= 3;

    return (
      <Wrapper>
        <StyledLink to="/books">Вернуться назад</StyledLink>
        <SearchInput
          placeholder="Впишите название книги"
          onChange={this.handleInput}
          value={query}
        />
        {isSuggestedBooks && !isBookSelected && (
          <PerfectScrollbar>
            <SuggestionsWrapper>
              {suggestions.books.map(book => (
                <SuggestionItem
                  book={book}
                  key={book.id}
                  handleSelectBook={this.handleSelectBook}
                />
              ))}
            </SuggestionsWrapper>
          </PerfectScrollbar>
        )}
        {isBookSelected && (
          <BookSelected
            book={this.state.book}
            selected={this.state.category}
            handleSelectCategory={this.handleSelectCategory}
            handleSaveSeleсted={this.handleSaveSeleсted}
          />
        )}
      </Wrapper>
    );
  }
}
