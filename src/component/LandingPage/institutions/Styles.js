import { colors } from '../../../assets/colors';
export const Style = (theme) => ({
  container: { backgroundColor: colors.light },
  titleMain: { color: colors.darkprimary, height: 64, lineHeight: 64 },
  div: {
    maxWidth: '24rem'
  },
  title: { color: colors.darkprimary },
  description: { colro: colors.middleprimary },
  name: { color: colors.darkprimary },
  designation: { color: colors.middleprimary },
  brandIcon: {
    '@media (max-width: 1000px)': {
      height: '12vh',
      width: '15vw',
      marginTop: 20
    }
  },
  mainDiv: {
    '@media (max-width: 1000px)': {
      margin: 4,
      marginTop: '-40'
    }
  }
});
