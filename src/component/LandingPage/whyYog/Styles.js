import { colors } from '../../../assets/colors';
export const Style = (theme) => ({
  container: { backgroundColor: colors.light },
  iphoneMock: {
    marginLeft: '22%',
    '@media (max-width: 1000px)': {
      width: '10vh',
      height: '25vh'
    }
  },
  text1: {
    color: colors.darkprimary,
    lineHeight: 60,
    maxWidth: '32rem',
    fontWeight: 800,
    marginTop: 10
  },
  map: { gap: '2.5rem' },
  div1: {
    backgroundColor: '#fff7f7',
    '@media (max-width: 1000px)': {
      width: '30vw'
    }
  },
  title: {
    color: colors.darkprimary,
    '@media (max-width: 1000px)': {
      fontSize: 8
    }
  },
  descriptionText: {
    '@media (max-width: 1000px)': {
      fontSize: 5
    }
  },
  icon: {
    '@media (max-width: 1000px)': {
      width: '8vw',
      height: '2.5vh'
    }
  }
});
