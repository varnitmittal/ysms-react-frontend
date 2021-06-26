import { colors } from '../../../assets/colors';
export const Style = (theme) => ({
  container: {
    backgroundColor: colors.primary
  },
  navFooter: {
    height: 80,
    color: 'rgba(255, 255, 255, 1)'
  },
  mainTitle: {
    flex: '1 1 0%',
    fontWeight: 800,
    fontSize: ' 2.25rem',
    lineHeight: '2.5rem',
    '@media (max-width: 1000px)': {
      fontSize: 20
    }
  },
  social: {
    height: '1.5rem',
    width: '1.5rem',
    backgroundColor: colors.primaryFooter,
    color: colors.completeLight,
    marginLeft: '1.5rem',
    '@media (max-width: 1000px)': {
      height: '2vh',
      width: '2vw',
      marginLeft: '0.5rem'
    }
  },
  text: {
    fontWeight: 500,
    marginLeft: '2.5rem',
    '@media (max-width: 1000px)': {
      fontSize: 6,
      fontWeight: 400,
      marginLeft: '1.5rem'
    }
  },
  aboutText: {
    fontWeight: 500,
    '@media (max-width: 1000px)': {
      fontSize: 6,
      fontWeight: 400
    }
  }
});
