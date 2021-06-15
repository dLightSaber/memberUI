import React from "react";
import { withRouter } from "react-router-dom";
import AccountCircle from "@material-ui/icons/AccountCircle";
import IconButton from "@material-ui/core/IconButton";
import { useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
/*
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
*/
const UserProfile = (props) => {
  const user = useSelector((state) => state.user);
  const { history } = props;

  const handleLoginClick = (pageURL) => {
    history.push(pageURL);
  };
  return (
    <>
      {user ? (
        <>
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          {user.lastName}
        </>
      ) : (
        <Button variant="contained" onClick={() => handleLoginClick("/login")}>
          LOGIN
        </Button>
      )}
    </>
  );
};

export default withRouter(UserProfile);
