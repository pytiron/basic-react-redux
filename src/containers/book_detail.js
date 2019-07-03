import React , {Component} from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component{
    render() {
        if(!this.props.activeBook){
            return (
                <div className="col-md-7">
                    <div className="col-12 card">
                        <h4 className="card-title">Book this is for:</h4>
                        <h5>준비중...</h5>
                    </div>
                </div>
            );
        }
        return(
            <div className="col-md-7">
                <div className="col-md-12 card">
                    <h4 className="card-title">Book this is for:</h4>
                    <h5 className="card-title"><small>{this.props.activeBook.title}</small></h5>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        activeBook : state.activeBook
    };
}

export default connect(mapStateToProps)(BookDetail);