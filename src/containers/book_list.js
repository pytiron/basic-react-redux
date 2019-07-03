import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component{
    render() {
        const bookList = this.props.books.map( book => {
            return (
                <li className="list-group card">
                    {book.title}
                </li>
            )
        });
        return(
            <div className="col-5">
                <ul className="col-12 list-unstyled">
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

export default connect(mapStateToProps)(BookList);