import React from "react";
import Contact from "../../components/organisms/_contact-form/_contact-form";
import ContactList from "../../components/organisms/_contact-list/_contact-list";
import { Typography, Input } from "@material-ui/core";
const ContactForm = ({ props }) => {
  return (
    <>
    <div>
          <Typography variant="h5"> Contacts Application</Typography>
      <Typography variant="h6">Add Contact Form</Typography>
      </div>
      
      <Contact props={props} />
      <ContactList props={props} />
    </>
  );
};

export default ContactForm;
