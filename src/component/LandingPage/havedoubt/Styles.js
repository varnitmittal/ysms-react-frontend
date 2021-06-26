import { colors } from '../../../assets/colors.js';
export const Style = (theme) => ({
  text1: {
    color: colors.darkprimary,
    height: 64,
    fontSize: '2.25rem',
    lineHeight: '2.5rem',
    '@media (max-width: 1000px)': {
      fontSize: 15
    }
  },
  text2: {
    color: colors.middleprimary,
    lineHeight: '2rem',
    maxWidth: '32rem',
    fontSize: '1.125rem',
    lineHeight: '1.75rem',
    '@media (max-width: 1000px)': {
      fontSize: 12
    }
  },
  phone: {
    // color: colors.danger
    color: 'rgba(252, 92, 103, 1)'
  },
  text3: {
    color: colors.middleprimary
  },
  text4: {
    color: colors.middleprimary
  },
  phoneIcon: {
    '@media (max-width: 1000px)': {
      height: '5vh',
      width: '5vw'
    }
  },
  contact: {
    '@media (max-width: 1000px)': {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column'
    }
  }
});
