import React from 'react';
import classNames from 'classnames';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles, createMuiTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import CloseIcon from '@material-ui/icons/Close';
import { routingActions } from './_actions';

const styles = theme => ({
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    button: {
        margin: theme.spacing(1),
        maxHeight: '50px',
        marginTop: '19px',
      },
      root: {
        border: '1px solid gray !important',
        position: 'relative',
        marginTop: '64px !important'
      },
      input:{
          color: '#546463',
      },
      closeIcon: {
        position: 'absolute',
        top: '10px',
        right: '10px',
        color: '#546463'
      }
});

const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: '#546463',
      },
      '& label': {
        color: '#546463',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: '#546463',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: '#546463',
        },
        '&:hover fieldset': {
          borderColor: '#546463',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#546463',
        },
      },
    },
  })(TextField);

function createData(port, status) {
    return {port, status};
  }
  
  const rows = [
    createData('8080', 'Good'),
    createData('5000', 'Bad'),
  ];


  const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#ffffff',
            main: '#ffffff',
            dark: '#ffffff',
            contrastText: '#ffffff',
          },
    },
  });

class DeviceDetails extends React.Component{

  getDeviceTunnels = (row) => { 
    return row.name === this.props.selectedDevice;
  }
    render(){
        var rootClasses = classNames({
            'padding10': true,
        });
        
        var headingClasses = classNames({
            'width100': true,
            'textCenter': true,
        });

        var inputClasses = classNames({
            'flexDisplay': true,
            'vAlignMiddle': true,
            'marginBottom16': true,
        });

        const {classes} = this.props;
        return(
            <div className={classNames(classes.root, rootClasses)}>
                <CloseIcon className={classes.closeIcon} onClick={this.props.closeDetails}/>
                <h4 className={classNames("margin0", headingClasses, "colorSecondary")}>
                    {this.props.selectedDevice}
                </h4>
                <div className={inputClasses}>

                        <CssTextField
                            id="deviceName"
                            label="Name"
                            className={classes.textField}
                            type="email"
                            name="deviceName"
                            margin="normal"
                            variant="outlined"
                            InputProps={{
                                className: classes.input
                              }}
                        />
                    <Button variant="contained" className={classes.button}>
                        Save
                    </Button>
                </div>
                <Table className={classes.table} border="2">
                    <TableHead>
                        <TableRow>
                        <TableCell><strong>Source Port</strong></TableCell>
                        <TableCell align="right"><strong>Destination Port</strong></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.devices.find(this.getDeviceTunnels).tunnels.map(row => (
                        <TableRow key={row.name}>
                            <TableCell align="right">{row.sourcePort}</TableCell>
                            <TableCell align="right">{row.destinationPort}</TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        );
    }
}

DeviceDetails.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
  };

  const mapStateToProps = (state) => {
    const { selectedDevice  } = state.routing;
    const { devices } = state.device;
    return {
        selectedDevice,
        devices
    };
  }

  const mapDispatchToProps = (dispatch) => ({
    closeDetails: () => {
        dispatch(routingActions.setSpaceOccupier('deviceList', null)) 
    },
  })

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles, { withTheme: true })(DeviceDetails));