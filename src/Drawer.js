import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import classNames from 'classnames';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import SpaceOccupier from './SpaceOccupier';
import {connect} from 'react-redux';
import { routingActions } from './_actions';
import { Divider } from '@material-ui/core';
import GroupIcon from '@material-ui/icons/Group';
import AppsIcon from '@material-ui/icons/Apps';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
    background: '#29A6A2',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function ResponsiveDrawer(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleDrawerToggle1 = () => {
    props.closeDetails();
    if(mobileOpen === true)
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className="maxW100">
      <div className={classNames(classes.toolbar, "borderBottom", "padding2", "maxH64", "textCenter", "logoDiv")}>
        <img src="images/selftunnel-darkbg@2x.png" alt="Self Tunnel" className="maxH60"/>
        <p className={classNames("margin0", "whiteText", "initialFont", "emailDisplay")}>vishnu@gmail.com</p>
      </div>
      <Divider/>
      <List>
          <div>
            <ListItem button key="Devices" className={classNames( "borderBottom", "colorSecondary")} onClick={handleDrawerToggle1}>
              <AppsIcon /> &nbsp; &nbsp;
              <ListItemText primary="Devices" />
            </ListItem>
          </div>
          <Divider/>
          <div>
            <ListItem button key="Accounts" className={classNames( "borderBottom", "colorSecondary")}>
              <GroupIcon /> &nbsp; &nbsp;
              <ListItemText primary="Accounts" />
            </ListItem>
          </div>
          <Divider/>
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
            <SpaceOccupier />
      </main>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container: PropTypes.instanceOf(typeof Element === 'undefined' ? Object : Element),
};

const mapStateToProps = (state) => {
  const { email  } = state.auth
  return {
      email,
  };
}

const mapDispatchToProps = (dispatch) => ({
  closeDetails: () => {
      dispatch(routingActions.setSpaceOccupier('deviceList', null)) 
  },
})

export default connect(null, mapDispatchToProps)(ResponsiveDrawer);