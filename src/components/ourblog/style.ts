import { makeStyles, createStyles } from '@mui/styles';
import { Theme } from '@mui/material';
import LocalIcons from '../../utils/image';

export default makeStyles((theme: Theme) =>
  createStyles({
    mainContainer: {
      padding: '32px',
      [theme.breakpoints.down('md')]: {
        padding: '16px',
      },

      [theme.breakpoints.down('sm')]: {
        padding: '16px',
      },
    },
    headingContainer: {},
    headingStyles: {
      fontSize: '64px',
      marginLeft: '70px',
      marginTop: '20px',
      [theme.breakpoints.down('md')]: {
        fontSize: '56px',
      },

      [theme.breakpoints.down('sm')]: {
        fontSize: '48px',
      },
    },
    blueLineContainer: {
      height: '8px',
      width: '144px',
      marginLeft: '70px',
      marginTop: '20px',
      [theme.breakpoints.down('md')]: {
        width: '120px',
      },

      [theme.breakpoints.down('sm')]: {
        fontSize: '96px',
      },
      backgroundColor: '#2E90EA',
    },
    container: {
      width: '48%',
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '40px',
      marginLeft:"70px",
      [theme.breakpoints.down('md')]: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      },

      [theme.breakpoints.down('sm')]: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      },
    },
    healthContainer: {
      width: '100%',
      height: '585px',
      // backgroundImage: `url(${LocalIcons.OURBLOG1})`,

      [theme.breakpoints.down('md')]: {
        width: '80%',
      },

      [theme.breakpoints.down('sm')]: {
        width: '90%',
      },
    },
    rightContainer: {
      width: '100%',
      height: '599px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      // marginRight:"300px",
      marginLeft:"120px",
      marginTop:"0px",
      
      [theme.breakpoints.down('md')]: {
        marginTop: '40px',
        width: '80%',
      },

      [theme.breakpoints.down('sm')]: {
        width: '90%',
      },
    },

    beginnerContainer: {
      width: '100%',
      height: '300px',
      
     
      // backgroundImage: `url(${LocalIcons.OURBLOG2})`,
    },
    cardioContainer: {
      width: '100%',
      height: '300px',
      marginTop:"18px",
      
      // backgroundImage: `url(${LocalIcons.OURBLOG3})`,
    },
    headStyle: {
      fontSize: '40px',
      color: '#fff',
      marginTop: '450px',
      marginLeft: '30px',
      [theme.breakpoints.down('sm')]: {
        fontSize: '32px',
      },
    },
    headStyle1: {
      fontSize: '40px',
      color: '#fff',
      marginTop: '150px',
      marginLeft: '30px',
      [theme.breakpoints.down('sm')]: {
        fontSize: '32px',
      },
    },
    readBlog: {
      background: '#fff',
      color: '#2E90EA',
      borderRadius: '20px',
      width: '120px',
      padding: '8px',
      textAlign: 'center',
      marginLeft: '30px',
      marginTop: '15px',
      [theme.breakpoints.down('sm')]: {
        width: '100px',
        padding: '6px',
      },
    },
    readBlog1: {
      background: 'none',
      color: '#fff',
      borderColor: '#fff',
      border: '2px solid white',
      borderRadius: '20px',
      width: '120px',
      padding: '8px',
      textAlign: 'center',
      marginLeft: '30px',
      marginTop: '15px',
      [theme.breakpoints.down('sm')]: {
        width: '100px',
        padding: '6px',
      },
    },
    btn:{
      "&:hover": {
        background: '#fff',
      color: '#2E90EA',
      },
      borderRadius:"20px",
      color:'white',
      background:"none",
      width: '120px',
      padding: '8px',
      textAlign: 'center',
      marginLeft: '30px',
      marginTop: '15px',
      borderColor: '#fff',
      border: '2px solid white',
      cursor:"pointer",
      [theme.breakpoints.down('sm')]: {
        width: '100px',
        padding: '6px',
      },
   
    }
  })
);