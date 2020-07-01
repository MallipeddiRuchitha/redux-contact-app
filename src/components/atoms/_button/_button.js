import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography } from "@material-ui/core";
import { useDispatch } from "react-redux";
const useStyles = makeStyles((theme) => ({}));

const CustomButton = ({ value, action, onClick }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <div className={classes.button} data-testid="button">
      <Button onClick={onClick} variant="contained">
        <Typography variant="button"> {value}</Typography>
      </Button>
    </div>
  );
};

export default CustomButton;
