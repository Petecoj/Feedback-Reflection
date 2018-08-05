import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import ProgressBar from '../ProgressBar/ProgressBar'
import NextPageButton from '../NextPageButton/NextPageButton';



class LeaveCommentsPage extends Component {
    constructor() {
        super()
        this.state = {
            comments: ''

        }
    }

    handleChangeForComments = (event) => {
        console.log(event.target.value);
        this.setState({ comments: event.target.value })
       
    }

  

    render() {
        return (
            <div>
                <Header />
                <ProgressBar step={3} />
                <NextPageButton nextPage={'final'}
                                payload={this.state.comments}
                                path={'COMMENTS'}

                />
                <textarea onChange={this.handleChangeForComments} rows="10" cols="80" />
            </div>
        );
    }
}



export default connect()(LeaveCommentsPage);