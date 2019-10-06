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
      },
      input:{
          color: 'white',
      },
      closeIcon: {
        position: 'absolute',
        top: '10px',
        right: '10px',
      }
});

const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: 'white',
      },
      '& label': {
        color: 'white',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'white',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'white',
        },
        '&:hover fieldset': {
          borderColor: 'white',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'white',
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
                <h4 className={classNames("margin0", headingClasses)}>
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
                        <TableCell><strong>Port</strong></TableCell>
                        <TableCell align="right"><strong>Status</strong></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => (
                        <TableRow key={row.name}>
                            <TableCell align="right">{row.port}</TableCell>
                            <TableCell align="right">{row.status}</TableCell>
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
    const { selectedDevice  } = state.routing
    return {
        selectedDevice,
    };
  }

  const mapDispatchToProps = (dispatch) => ({
    closeDetails: () => {
        dispatch(routingActions.setSpaceOccupier('deviceList', null)) 
    },
  })

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles, { withTheme: true })(DeviceDetails));