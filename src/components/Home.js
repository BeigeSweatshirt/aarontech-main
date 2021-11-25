import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import {Card, Typography} from '@material-ui/core'; 
import NavBar from './NavBar'

import Footer from './Footer'
import App from '../App';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

import HeroSection from './HeroSection';
import Cards from './Cards';
const theme = createMuiTheme({
    palette: {
      primary: {
        main:"#2e1667",
      },
      secondary: {
        main:"#c7d8ed",
      },
    },
    typography: {
      fontFamily: [
        'Roboto'
      ],
      h4: {
        fontWeight: 600,
        fontSize: 28,
        lineHeight: '2rem',
        },
      h5: {
        fontWeight: 100,
        lineHeight: '2rem',
      },
    },
  });

  const styles = makeStyles({
    wrapper: {
      width: "65%",
      margin: "auto",
      textAlign: "center"
    },
    littleSpace:{
      marginTop: "2.5rem",
    },
    grid:{
      display: "flex", 
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap", 
    },
  })
  
function Home() {
    const classes = styles(); 
    

    return (  
        <div className="App">
        <ThemeProvider theme={theme}>
        <NavBar/>
        <HeroSection/>
        <Cards/>

        
          <Footer/>
      </ThemeProvider>
      </div>
    );
}

export default Home;