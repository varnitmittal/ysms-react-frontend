import { colors } from '../../../assets/colors';
export const Style = (theme) => ({
  section: {
    backgroundColor: 'rgba(248, 248, 248, 1)'
  },
  mainDiv: {
    width: '90vw'
  },
  chatDiv: {
    top: '8rem',
    right: '-7rem',
    '@media (max-width: 1000px)': {
      top: 30,
      right: -5
    }
  },
  chatIcon: {
    '@media (max-width: 1000px)': {
      height: '3vh',
      width: '5vw'
    }
  },
  chatOverPlatform: {
    color: colors.darkprimary,
    fontWeight: 500,
    fontSize: 20,
    '@media (max-width: 1000px)': {
      fontWeight: 300,
      fontSize: 3
    }
  },
  voiceCallDiv: {
    top: 220,
    '@media (max-width: 1000px)': {
      top: 60,
      right: -20
    }
  },
  voiceCall: {
    color: colors.darkprimary,
    fontWeight: 500,
    fontSize: 20,
    '@media (max-width: 1000px)': {
      fontWeight: 300,
      fontSize: 3
    }
  },
  createGroupsDiv: {
    top: 320,
    right: '-9rem',
    '@media (max-width: 1000px)': {
      top: 100,
      right: '-2rem'
    }
  },
  createGroup: {
    color: colors.darkprimary,
    fontWeight: 500,
    fontSize: 20,
    '@media (max-width: 1000px)': {
      fontWeight: 300,
      fontSize: 3
    }
  },
  rightContainer: {
    maxWidth: '28rem',
    '@media (max-width: 1000px)': {
      marginLeft: 40
    }
  },
  yourImage: {
    '@media (max-width: 1000px)': {
      height: '4vh',
      width: '8vw',
      marginTop: 10
    }
  },
  yourData: {
    color: colors.darkprimary,
    fontSize: '2.25rem',
    lineHeight: '2.5rem',
    marginTop: 10,
    marginBottom: 10,
    '@media (max-width: 1000px)': {
      fontSize: 12,
      lineHeight: '1rem'
    }
  },
  weCare: {
    color: colors.middleprimary,
    lineHeight: '1.75rem',
    marginTop: 10,
    marginBottom: 10,
    fontSize: 24,
    '@media (max-width: 1000px)': {
      fontSize: 10,
      lineHeight: '0.75rem'
    }
  },
  chatInfo: {
    color: colors.middleprimary,
    lineHeight: '1.75rem'
  }
});
