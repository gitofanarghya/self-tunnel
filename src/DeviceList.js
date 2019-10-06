import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import EditIcon from '@material-ui/icons/Edit';
import { connect } from 'react-redux';
import { routingActions } from './_actions';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
    background: 'rgba(0,0,0,0)'
  },
  table: {
  },
});

function createData(name, calories, fat) {
  return { name, calories, fat};
}

const rows = [
  createData('Device1', 'AHCBDJ1238','167.237.233.876'),
  createData('Device2', 'DSHBFS2389','167.237.233.890'),
];

class DeviceList extends React.Component {

  editDevice = (name) => {
    console.log(name);
    this.props.setOccupier('deviceDetails', name)
  };

  render() {
    const {classes} = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table} border="2">
          <TableHead>
            <TableRow>
              <TableCell><strong>Name</strong></TableCell>
              <TableCell align="right"><strong>Mac ID</strong></TableCell>
              <TableCell align="right"><strong>IP</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row" className="vAlignMiddle">
                  {row.name} &nbsp;
                  <EditIcon className="deviceEditIconContainer" onClick={() => this.editDevice(row.name)}/>
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

DeviceList.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};


const mapDispatchToProps = (dispatch) => ({
  setOccupier: (occupier, name) => {
      dispatch(routingActions.setSpaceOccupier(occupier, name)) 
  },
})

export default  connect(null, mapDispatchToProps)(withStyles(styles, { withTheme: true })(DeviceList));