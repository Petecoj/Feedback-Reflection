//Imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import ProgressBar from '../ProgressBar/ProgressBar'
import NextPageButton from '../NextPageButton/NextPageButton';

// Create component
class LeaveCommentsPage extends Component {
    constructor() {
        super()
        this.state = {
            comments: ''
        }
    }

// Handle change for radio bar
    handleChangeForComments = (event) => {
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

// Export component
export default connect()(LeaveCommentsPage);