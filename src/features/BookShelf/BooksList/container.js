import { connect } from 'react-redux';
import { booksListSelector } from '../../../common/selectors/books';
import { fetchUserBooksList } from './ducks';
import { BooksList } from './BooksList';

const mapStateToProps = state => ({
  list: booksListSelector(state),
});

const mapDispatchToProps = {
  fetchUserBooksList,
};

export const BooksListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BooksList);
