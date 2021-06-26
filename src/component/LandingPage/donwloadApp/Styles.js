import { colors } from '../../../assets/colors';
export const Style = (theme) => ({
  section: {
    backgroundColor: colors.light
  },
  img: {
    marginLeft: '-1.25rem',
    '@media (max-width: 1000px)': {
      width: '35vw'
    }
  },
  downloadDiv: {
    color: colors.darkprimary,
    fontSize: '3.6em',
    fontWeight: 800,
    height: 64,
    marginTop: '4rem',
    lineHeight: 64,
    '@media (max-width: 1000px)': {
      fontSize: 10,
      width: '30vw',
      height: '10vh'
    }
  },
  downloadInfoDiv: {
    color: colors.middleprimary,
    fontWeight: 400,
    fontSize: '1.125rem',
    lineHeight: '1.75rem',
    maxWidth: '32rem',
    marginTop: '1.25rem',
    '@media (max-width: 1000px)': {
      fontSize: 8
    }
  },
  appStore: {
    display: 'flex',
    '@media (max-width: 1000px)': {
      width: '30vw',
      display: 'flex',
      flexDirection: 'column',
      height: '10vh',
      justifyContent: 'center'
    }
  },
  googplePlayIcon: {
    '@media (max-width: 1000px)': {
      height: '2vh',
      width: '20vw'
    }
  },
  appStoreIcon: {
    marginLeft: '3rem',
    '@media (max-width: 1000px)': {
      height: '2vh',
      width: '20vw',
      marginLeft: '0rem',
      marginTop: 10
    }
  }
});
