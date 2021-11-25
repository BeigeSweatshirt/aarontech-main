import React from "react";
import {makeStyles} from "@material-ui/core/styles"; 
import {useNavigate} from 'react-router-dom';
import './TicketTable.css';

const styles = makeStyles({
  table: {
    display:  "table",
    width: "auto",
    margin: "auto",
    background: "#eee"
  },
  row: {
    display: "table-row",
    width: "auto",
    maxWidth: "90%",
  },
  header:{
    fontWeight: "bold",
    fontSize: "20px",
    textDecoration: "underline",
    padding: "10px"
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "26px",
    background: "#242424",
    color: "white",
    margin: "auto",
    width: "auto",
    height: "auto",
    border: "1px solid var(--primary)",
    borderRadius: "4px",
    "&:hover": {
    background: "var(--primary)",
    border: "1px solid #242424",
    color: "#242424",
    transition: "all 0.3s ease-out"
  },
  }
})

function newTicket() {
  var table = document.getElementById("tTable");
  var row = table.insertRow(table.rows.length);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  
  var today = new Date();
  var dd = String(today.getDate() + 2).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  today = mm + '/' + dd + '/' + yyyy;

  cell1.innerHTML = Math.floor(Math.random() * (999999999 - 100000000) + 100000000); 
  cell2.innerHTML = today;
  cell3.innerHTML = sessionStorage.getItem('description');
}
function TicketTable() {
  const history = useNavigate();
  const classes = styles()
  return (
    <html >
    <table id="tTable" className = {classes.table}>
    <tr id = "headers">
      <th className = {classes.header}>Ticket Number</th>
      <th className = {classes.header}>Estimated Date</th>
      <th className = {classes.header}>Description</th>  
    </tr>  
   </table> 
  <p></p>
</html>
 );
}
  
export default TicketTable;
