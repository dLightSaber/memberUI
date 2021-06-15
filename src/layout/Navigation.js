import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Menu,
  MenuItem,
  BottomNavigation,
  BottomNavigationAction,
} from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import routes from "../router";
import { withRouter } from "react-router-dom";
import "../App.css";
const useStyles = makeStyles({
  rootAction: {
    fontSize: "1rem",
    "&$selected": {
      fontSize: "1.2rem",
    },

    justifyContent: "left",
    width: "auto",
    minWidth: "0px",
    maxWidth: "none",
    flex: "none",
  },
  root: {
    justifyContent: "left",
    width: "auto",
  },
  label: {
    fontSize: "1rem",
  },
});
const Navigation = (props) => {
  const { history, location } = props;
  console.log(location.pathname);
  const classes = useStyles();
  //const [anchorEl, setAnchorEl] = React.useState(null);
  const selectedRoute = routes.filter(
    (route) => route.path === location.pathname
  );
  console.log("selected >> " + selectedRoute.index);
  let selectedIndex = -1;
  if (selectedRoute && selectedRoute.length > 0) {
    selectedIndex = selectedRoute[0].index;
  }
  const [selected, setSelected] = React.useState(selectedIndex);
  const open = Boolean(props.anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleMenuClick = (pageURL) => {
    history.push(pageURL);
    props.onMenuChange(null);
  };

  return (
    <>
      {isMobile ? (
        <Menu
          className={!isMobile && "horiz-menu"}
          id="menu-appbar"
          anchorEl={props.anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={open}
          onClose={() => props.onMenuChange(null)}
        >
          {routes.map((menuItem) => {
            const { title, path } = menuItem;
            return (
              <MenuItem onClick={() => handleMenuClick(path)}>{title}</MenuItem>
            );
          })}
        </Menu>
      ) : (
        <div>
          <BottomNavigation
            value={selected}
            onChange={(event, newValue) => {
              setSelected(newValue);
            }}
            showLabels
            classes={{ root: classes.root, label: classes.label }}
          >
            {routes.map((menuItem) => {
              const { title, path } = menuItem;
              return (
                <BottomNavigationAction
                  label={title}
                  onClick={() => handleMenuClick(path)}
                  classes={{ root: classes.rootAction, label: classes.label }}
                />
              );
              //return <Link onClick={() => handleMenuClick(path)}>{title}</Link>;
            })}
          </BottomNavigation>
        </div>
      )}
    </>
  );
};

export default withRouter(Navigation);
