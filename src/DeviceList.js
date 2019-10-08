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
import { deviceActions } from './_actions';

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

  componentDidMount(){
    this.props.getDevices();
  }

  editDevice = (name) => {
    console.log(name);
    this.props.setOccupier('deviceDetails', name)
  };

  render() {
    const {classes} = this.props;
    return (
      <Paper className={classes.root}>
        {this.props.receivedDevices ? 
        <Table className={classes.table} border="2">
          <TableHead>
            <TableRow>
              <TableCell><strong>Name</strong></TableCell>
              <TableCell align="right"><strong>Device ID</strong></TableCell>
              <TableCell align="right"><strong>Tunnels</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.devices.map(row => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row" className="vAlignMiddle">
                  {row.name} &nbsp;
                  <EditIcon className="deviceEditIconContainer" onClick={() => this.editDevice(row.name)}/>
                </TableCell>
                <TableCell align="right">{row.deviceID}</TableCell>
                <TableCell align="right">{row.tunnels.length}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        : null }
      </Paper>
    );
  }
}

DeviceList.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  const { accessToken } = state.auth;
  const { devices, receivedDevices } = state.device;
  return {
    accessToken,
    devices,
    receivedDevices,
  };
}

const mapDispatchToProps = (dispatch) => ({
  setOccupier: (occupier, name) => {
      dispatch(routingActions.setSpaceOccupier(occupier, name)) 
  },
  getDevices: (accessToken) => {
    dispatch(deviceActions.getDevices(accessToken))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles, { withTheme: true })(DeviceList));