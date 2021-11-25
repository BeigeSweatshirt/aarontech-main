import Footer from "./Footer";
import NavBar from "./NavBar";
import { withStyles, makeStyles } from "@material-ui/core";
import { useNavigate } from "react-router";
import { Button } from "@material-ui/core";

const StyledButton = withStyles({
    root: { 
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        alignItems: "center",
        justifyContent: "center",
        padding: '20px',
        borderRadius:'20px',
        width: '250px',
        variant: 'h6',
        fontSize: '20px',
        boxSizing: "border-box",
        fontFamily:'Roboto',
        cursor: "pointer", 
        flexGrow: 1,
        "&:hover": {
            color:  "#4f25c8"
        },
        background: "#232e3a", 
        color: "#fff",
        transform: "none",
        boxShadow: "6px 6px 0 0 #c7d8ed",
        transition: "background .3s,border-color .3s,color .3s",
    },
    label: {
      textTransform: 'capitalize',
    },
  })(Button);
  
const styles = makeStyles({
textfield:{
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width:'300px',
    padding:'20px',
    borderRadius:'20px',
    boxShadow:"0 0 15px 4px rgba(0,0,0,0.06)"
},

})
function Ticket() {
    const classes = styles();
    const history = useNavigate();
    function handleSumbmit() {
        const USER = document.getElementById('user').value;
       // alert(name);
        sessionStorage.setItem("USER",USER);
       // console.log(sessionStorage.getItem("NAME"));
        history("/account");
        
      }
    return (
        <div className="App" >
            <NavBar/>
            <h1 id = "ticketHeader" className = {classes.wrapper}>
                My Tickets
            </h1>
            <input  className = {classes.textfield}  type="text" id="user" placeholder = 'Username'></input>
            <br/>
            <input className = {classes.textfield}  type="text" id="email" placeholder = 'Email'></input>
            <br/>
            <input className = {classes.textfield}  type="password" id="pass" placeholder = 'Password'></input>
            <br/>
            <input className = {classes.textfield}  type="password" id="pass_confirm" placeholder = 'Confirm Password'></input>
            <br/>
            <textarea className = {classes.textfield} id="description" cols="30" rows="4" placeholder="Write about your problem"></textarea>
            <br/>
            

             <StyledButton onClick = { handleSumbmit}
            >Generate Ticket </StyledButton> 
             <br/>
            <Footer/>
        </div>
      );
}

export default Ticket;
