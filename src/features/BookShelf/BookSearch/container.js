import { connect } from 'react-redux';
import { BookSearch } from './BookSearch';
import { setBookSearch, setSelectedBook } from './ducks';

const mapStateToProps = state => ({
  search: state.books.add,
});

const mapDispatchToProps = {
  setBookSearch,
  setSelectedBook,
};

export const BookSearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BookSearch);
