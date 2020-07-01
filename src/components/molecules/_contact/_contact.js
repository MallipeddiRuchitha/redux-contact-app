import React from "react";
import { Typography, Input } from "@material-ui/core";
import Button from "../../atoms/_button/_button";
import { makeStyles } from "@material-ui/core/styles";
import * as contactAction from "../../../redux/actions/contactAction";
import { useDispatch } from "react-redux";
const useStyles = makeStyles((theme) => ({
  styleContactMainContent: {
    display: "flex",
    justifyContent: "flexStart",

    marginTop: "30px",
  },
  input: {
    marginLeft: "20px",
  },
  button: {
    marginLeft: "40px",
  },
}));
const Contact = ({ value, contactName, contactEmail, id }) => {
  console.log("email", contactEmail);
  console.log("name", contactName);
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleClick=(event)=>{
   
    event.preventDefault();
    const action=contactAction.deleteContact(id);
    console.log("action+++",action);
    dispatch(action);
    
  };
  return (
    <div data-testid="input" className={classes.styleContactMainContent}>
      *<Typography className={classes.input}>{contactName}</Typography>
      <Typography className={classes.input}>{contactEmail}</Typography>
      <div className={classes.button}>
        <Button
          value={value}
         onClick={handleClick}
        ></Button>
      </div>{" "}
    </div>
  );
};

export default Contact;
