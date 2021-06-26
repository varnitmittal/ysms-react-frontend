import { colors } from '../../../assets/colors';

// const theme = createMuiTheme({
//   breakpoints: {
//     values: {
//       xs: 0,
//       sm: 600,
//       md: 960,
//       lg: 1280,
//       xl: 1920
//     }
//   }
// });

export const Style = (theme) => ({
  container: {
    color: colors.primary,
    textTranform: 'cap',
    height: 130,
    backgroundColor: '#fff',
    fontSize: '1.2em',
    overflow: 'auto',
    '@media (max-width: 1000px)': {
      height: 80
    }
  },
  img: {
    height: '8vh',
    width: '12vw',
    color: colors.lightprimary,
    '@media (max-width: 1000px)': {
      height: '2.5vh',
      width: '10vw',
      marginRight: 20
    }
  },
  a: {
    marginLeft: '4em',
    color: colors.borderColor,
    fontSize: ' 1.25rem',
    lineHeight: '1.75rem',
    '@media (max-width: 1000px)': {
      marginLeft: '1em',
      fontSize: ' 1rem',
      lineHeight: '1rem'
    }
  },
  nonAuthButton: {
    marginLeft: 25,
    color: 'rgba(255, 255, 255, 1)',
    backgroundColor: colors.primary,
    padding: 15,
    marginRight: 35,
    borderRadius: 10,
    width: '12vw',
    '@media (max-width: 1000px)': {
      marginRight: 5,
      width: '18vw',
      padding: 5,
      fontSize: 6
    }
  },
  authButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    margin: 10,
    height: 30,
    borderRadius: '50%',
    background: '#3158c4',
    color: '#fff'
  },
  signinButton: {
    padding: 10,
    borderColor: colors.primary,
    color: colors.primary,
    border: '2px solid blue',
    fontSize: 20,
    borderRadius: 10,
    marginRight: 40,
    width: '8vw',
    '@media (max-width: 1000px)': {
      marginRight: 5,
      width: '12vw',
      fontSize: 6,
      border: '2px solid blue',
      borderRadius: 5,
      padding: 3
    }
  }
});
