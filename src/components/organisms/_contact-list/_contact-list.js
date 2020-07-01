import React ,{useState,useEffect} from "react";
import { connect } from 'react-redux';
import * as contactAction from '../../../redux/actions/contactAction';
import { makeStyles } from "@material-ui/core/styles";
import{
  Typography,
  FormControl,
   Button,
   Input
} from "@material-ui/core";
import Contact from "../../molecules/_contact/_contact";
import { useDispatch } from "react-redux";

import { myTheme } from "../../../theme";
const useStyles = makeStyles((theme) => ({
  styleContactMainContent: {
    height: "92.5vh",

    backgroundImage:
      "URL(https://www.xmple.com/wallpaper/gradient-cyan-purple-linear-2736x1824-c2-0bfce2-ee82ee-a-105-f-14.svg)",

    backgroundRepeat: "noRepeat",
    backgroundSize: "cover",
  },
  forms: {
   
    height: "300PX",
    width: "250px",
    backgroundColor: myTheme.palette.secondary.main,

    color: "black",

    margin: "auto",
    paddingTop: "30px",
    marginTop: "30px",
    paddingLeft: "50px",
  },
  input: {
      paddingBottom: "10px",
  },
  heading: {
    paddingTop: "50px",
  },
  error: {
    color:myTheme.palette.myColor.redColor ,
    
  },
}));

const ContactMainContent = ({props}) => {
  const classes = useStyles();
  const [name, setName] = useState("");

 const nameList=props.contacts.map((contact, i) => {console.log("contact name",Object.values(contact));return(<div> <Contact value="Delete" contactName={contact.name} contactEmail={contact.email}id={i}></Contact></div>)});;
 
 const dispatch = useDispatch();
 useEffect(() => {
    
    console.log("contactssssss-------------------------------",props.contacts);
     
     console.log("nameList",nameList);
  });
  

  
  return (   

      <div>
{nameList}
    </div>
  );
};


  export default ContactMainContent;