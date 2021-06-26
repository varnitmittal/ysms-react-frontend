import { colors } from '../../../assets/colors';
export const Style = (theme) => ({
  img: {
    height: 54,
    width: 300,
    color: colors.lightprimary,
    '@media (max-width: 1000px)': {
      height: '40vh',
      width: '40vw'
    }
  },
  text1: {
    color: colors.middleprimary,
    lineHeight: '2rem',
    maxWidth: '32rem',
    fontSize: '1.125rem',
    lineHeight: '1.75rem',
    '@media (max-width: 1000px)': {
      fontSize: 8,
      width: '45vw',
      padding: 5
    }
  },
  text2: {
    fontWeight: 800,
    fontSize: ' 2.25rem',
    lineHeight: '2.5rem',
    '@media (max-width: 1000px)': {
      fontSize: 12
    }
  },
  text3: {
    color: colors.middleprimary,
    fontSize: '1.25rem',
    lineHeight: '1.75rem',
    '@media (max-width: 1000px)': {
      fontSize: 12
    }
  },
  input: {
    color: colors.darkprimary,
    backgroundColor: colors.light
  },
  loader: {
    backgroundColor: colors.primary
  },
  svg: {
    width: 11
  }
});
