import React, {Component} from 'react';
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
import SweetAlert from 'sweetalert-react'
import 'sweetalert/dist/sweetalert.css'

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

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

const data = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];




class SimpleTable extends Component {
    constructor(props){
        super(props)
        this.state = {
            feedback: []
        }
    }

    getFeedback = ()=>{
        axios.get('/api/feedback')
        .then((response) => {
            console.log(response.data);
            this.setState({
                feedback: response.data.rows
            })
        }).catch((err) => {
            console.log(err);
        })

    }

    componentDidMount() {
      this.getFeedback()
            
    }
    deleteFeedback = (Id) => {
        console.log(Id);
        axios.delete(`/api/feedback/${Id}`
        ).then((response) => {
            console.log(response);  
            this.getFeedback()
            this.setState({
                show: true
            })
        }).catch((error) => {
         
        });
  
    }

render(){
    const { classes } = this.props;


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
              <TableCell><DeleteBtn deleteFeedback={this.deleteFeedback.bind(this, person.id)}/></TableCell>
              <SweetAlert
                        show={this.state.show}
                        title="Demo"
                        text="SweetAlert in React"
                        onConfirm={() => this.setState({ show: false })}
      />
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

export default withStyles(styles)(SimpleTable);