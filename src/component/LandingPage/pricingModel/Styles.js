import { colors } from '../../../assets/colors';
export const Style = (theme) => ({
  text1: {
    color: colors.darkprimary,
    fontWeight: 800,
    fontSize: '2.25rem',
    lineHeight: '2.5rem',
    '@media (max-width: 1000px)': {
      height: '4vh',
      width: '8vw'
    }
  },
  text2: {
    gap: '1rem'
  },
  pricing: {
    fontWeight: 400,
    color: colors.middleprimary
  },
  yearlyPricing: {
    '@media (max-width: 1000px)': {
      marginLeft: 20,
      marginTop: 40
    }
  },
  monthlyPricing: {
    '@media (max-width: 1000px)': {
      marginLeft: 20,
      marginTop: 40
    }
  },
  model: {
    fontWeight: 800,
    color: colors.darkprimary,
    width: '50%',
    marginRight: '0%'
  },
  text3: {
    color: colors.middleprimary,
    lineHeight: '2rem'
  },
  text4: {
    maxWidth: '32rem',
    fontSize: '1.125rem',
    lineHeight: '1.75rem',
    '@media (max-width: 1000px)': {
      fontSize: 8
    }
  },
  text5: {
    borderColor: colors.primary,
    color: colors.primary
  },
  schoolPays1: {
    color: colors.primary,
    maxWidth: '32rem'
  },
  schoolPays2: {
    color: colors.primary,
    maxWidth: '32rem'
  },
  srOnly: {
    position: 'absolute',
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: ' hidden',
    clip: 'rect(0, 0, 0, 0)',
    whiteSpace: 'nowrap',
    borderWidth: 0
  },
  srOnly1: {
    // transform: 'translateX(0%)',
    backgroundColor: ' rgba(37, 204, 247, 1)',
    width: '3.5rem',
    height: '2rem'
    // left: '0.25rem'
  },
  srOnly0: {
    transform: 'translateX(100%)',
    backgroundColor: '#ffffff',
    left: '-1.25rem',
    top: '0.25rem',
    width: '1.5rem',
    height: '1.5rem'
  },
  srOnly2: {
    transform: 'translateX(100%)',
    backgroundColor: '#ffffff',
    left: '0.25rem',
    top: '0.25rem',
    width: '1.5rem',
    height: '1.5rem'
  },
  studentPays1: {
    color: colors.primary,
    maxWidth: '32rem',
    fontSize: 16,
    '@media (max-width: 1000px)': {
      fontSize: 8
    }
  },
  studentPays2: {
    color: colors.primary,
    maxWidth: '32rem',
    fontSize: 16,
    '@media (max-width: 1000px)': {
      fontSize: 8
    }
  },
  rechargeModelText: {
    marginRight: '0%',
    width: '50%',
    '@media (max-width: 1000px)': {
      fontSize: 8
    }
  }
});
