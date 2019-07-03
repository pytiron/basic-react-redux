import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from "redux";

import { selectBook } from '../actions/index';

class BookList extends Component{
    render() {
        const bookList = this.props.books.map( book => {
            return (
                <li key={book.title}
                    onClick={() => this.props.selectBook(book)}
                    className="list-group card">
                    {book.title}
                </li>
            )
        });
        return(
            <div className="col-md-5">
                <ul className="col-md-12 list-unstyled">
                    {bookList}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        books : state.books
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({selectBook: selectBook}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);