import { colors } from '../../../assets/colors';
export const Style = (theme) => ({
  text1: {
    maxWidth: '42rem',
    height: 64,
    color: colors.darkprimary,
    lineHeight: 64,
    marginTop: 30
  },
  text2: {
    color: colors.middleprimary
  },
  text4: {
    color: colors.darkprimary,
    lineHeight: 33,
    marginBottom: 15,
    marginRight: 0
  },
  text5: {
    maxWidth: 350,
    border: '1px solid',
    height: '22.5em'
  },
  title: {
    color: colors.darkprimary,
    '@media (max-width: 1000px)': {
      fontSize: 6
    }
  },
  text6: {
    color: colors.darkprimary,
    lineHeight: 33,
    fontSize: 20,
    lineHeight: '3.2em',
    '@media (max-width: 1000px)': {
      fontSize: 8
    }
  },
  descriptionDiv: {
    maxWidth: 350,
    height: 450,
    '@media (max-width: 1000px)': {
      maxWidth: 150,
      height: 350
    },
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  descriptioninnerDiv: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20
  },
  teacherImage: {
    height: '25vh',
    '@media (max-width: 1000px)': {
      height: '10vh'
    }
  },
  descriptionIcon: {
    marginRight: 20,
    '@media (max-width: 1000px)': {
      height: '2vh'
    }
  },
  descriptionText: {
    width: '40vw',
    '@media (max-width: 1000px)': {
      width: '10vw'
    }
  },
  description: {
    '@media (max-width: 1000px)': {
      fontSize: 6
    }
  }
});
