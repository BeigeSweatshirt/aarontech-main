import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core";
import './About.css';
import shiva from '../photos/Shiva_selfie.JPG';
import jacob from '../photos/jacob.jpg';
import matt from '../photos/matt.jpg'
import logo from '../photos/aarontech2.png';
const styles = makeStyles({
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center"
  },
  bigSpace: {
    marginTop: "5rem"
  },
  littleSpace: {
    marginTop: "2.5rem",
    color: 'White'
  },
  grid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
  picture: {
    padding: "10px",

    width: "16rem",
    height: "20rem",
    justifyContent: "center"
  }
})

function About() {
  const classes = styles();

  return (
    <div className="App">
      <NavBar />

      <div class="about-section">
        <h1>About Us Page</h1>

        <Typography variant="h5" className={classes.littleSpace} color="primary">
          We are a company that specializes in the repairs of Windows computers.
          You can contact us by creating a ticket or you can contact us by email or phone.
          <br />
          We are open from 8am-4pm Monday-Friday and closed during all major holidays.
          <br />
          You can submit a ticket 24/7 and we will reach out to you within 2 business days.
        </Typography>

      </div>

      <h2>Our Team</h2>
      <div class="row">
        <div class="column">
          <div class="card">
            <img className={classes.picture} src={shiva} alt="Shiva" />
            <div class="container">
              <h2>Shiva Shrestha</h2>
              <p class="title">CEO & Founder</p>
              <p>From Nepal. A software Engineer with 30 yrs work exprience in Fucking your Mom.</p>
              <p>shiva@shiva.shiva</p>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <img className={classes.picture} src={jacob} alt="Jacob" />
            <div class="container">
              <h2>Jacob Fisher</h2>
              <p class="title">Art Director</p>
              <p>Born and raised in Washington, Jacob has always been fond of the colors provided in color.
                Other than color, Jacob has also gathered a likeness for the temperature, he prefers the temperature of
                temperature. Jacob possesses a burning passion for melons and lemons alike.
              </p>
              <p>jacob.fisher@cwu.edu</p>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <img className={classes.picture} src={matt} alt="Matt" />
            <div class="container">
              <h2>Matt Holford</h2>
              <p class="title">Ultra Mega CEO</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>matt@ultramega.ceo</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />

    </div>
  );
}

export default About;

// Test from PC