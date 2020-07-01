import React, { Component } from "react";
import { connect } from "react-redux";
import * as contactAction from "./redux/actions/contactAction";
import Contact from "./components/organisms/_contact-form/_contact-form";
import ContactList from "./components/organisms/_contact-list/_contact-list";
import ContactFormPage from "./pages/_contact-form-page/_contact-form.-page";
import { Typography, Input } from "@material-ui/core";
const App = (props) => {
  return (
    <div className="container">
     
        
        <ContactFormPage props={props}> </ContactFormPage>
      
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    contacts: state.contacts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createContact: (contact) => dispatch(contactAction.createContact(contact)),
    deleteContact: (index) => dispatch(contactAction.deleteContact(index)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
