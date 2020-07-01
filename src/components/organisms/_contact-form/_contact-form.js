import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as contactAction from "../../../redux/actions/contactAction";
import { makeStyles } from "@material-ui/core/styles";

import { Typography, FormControl, Divider } from "@material-ui/core";

import Button from "../../atoms/_button/_button";
import { myTheme } from "../../../theme";
import Input from "../../atoms/_input/_input";
import { useDispatch } from "react-redux";
const useStyles = makeStyles((theme) => ({
  styleContactMainContent: {},
  forms: {
    backgroundColor: myTheme.palette.secondary.main,

    color: "black",

    margin: "auto",
    paddingTop: "20px",
    marginTop: "20px",
  },
  input: {
    paddingBottom: "10px",
  },
  heading: {
    paddingTop: "50px",
  },
  error: {
    color: myTheme.palette.myColor.redColor,
  },
}));

const ContactMainContent = ({ props }) => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();
  console.log("list", props.contacts);

  const handleContactChange = (event) => {
    event.preventDefault();
    const name = event.target.value;
    setName(name);
  };
  const handleEmailChange = (event) => {
    event.preventDefault();
    const email = event.target.value;
    setEmail(email);
  };
  const handleClick = (event) => {
    event.preventDefault();
    const action = contactAction.createContact(name, email);
    console.log("action******", action);
    dispatch(action);
    setName("");
    setEmail("");
  };

  return (
    <div className={classes.styleContactMainContent} data-testid="contact">
      <div className={classes.forms}>
        <form>
          <div className={classes.input}>
            <Typography variant="h6">Contact Name</Typography>

            <Input onChange={handleContactChange} value={name}></Input>
            <Typography variant="h6">Email</Typography>
            <Input onChange={handleEmailChange} value={email}></Input>
            <Button value="Save" onClick={handleClick}>
              {" "}
            </Button>
          </div>
          <Divider></Divider>
        </form>
      </div>
    </div>
  );
};

export default ContactMainContent;
