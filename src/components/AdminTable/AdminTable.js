// Imports
import React, { Component } from 'react';
import axios from 'axios'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteBtn from '../DeleteBtn/DeleteBtn'

// Table Styles
const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
});

// Create Table Component
class SimpleTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            feedback: []
        }
    }

// Request to server for feedback data and saves data in local state
    getFeedback = () => {
        axios.get('/api/feedback')
            .then((response) => {
                this.setState({
                    feedback: response.data.rows
                })
            }).catch((err) => {
            })
    }
// On Mount will make request to server for feedback data and save data in local state
    componentDidMount() {
        this.getFeedback()

    }
// Make request to server to delete feedback from admin table where id matches the id clicked for delete
// Request for new data after delete and updates local state
    deleteFeedback = (Id) => {
        axios.delete(`/api/feedback/${Id}`
        ).then((response) => {
            this.getFeedback()
            this.setState({
                show: true
            })
        }).catch((error) => {
        });
    }

    render() {
        const { classes } = this.props;

// Loop through local state to be able to put data inside table rows
        let feedbackArray = this.state.feedback.map((person, index) => {
            return (
                <TableRow key={person.id}>
                    <TableCell component="th" scope="row">
                        {person.id}
                    </TableCell>
                    <TableCell numeric>{person.feeling}</TableCell>
                    <TableCell numeric>{person.understanding}</TableCell>
                    <TableCell numeric>{person.support}</TableCell>
                    <TableCell numeric>{person.comments}</TableCell>
                    <TableCell><DeleteBtn deleteFeedback={this.deleteFeedback.bind(this, person.id)} /></TableCell>
                </TableRow>
            );
        });



        return (
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell numeric>Feeling</TableCell>
                            <TableCell numeric>Understanding</TableCell>
                            <TableCell numeric>Support</TableCell>
                            <TableCell>Comments</TableCell>
                            <TableCell>Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {feedbackArray}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

SimpleTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

// Export Table Component 
export default withStyles(styles)(SimpleTable);