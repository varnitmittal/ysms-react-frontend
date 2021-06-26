import { colors } from '../../../assets/colors';
export const Style = (theme) => ({
  container: {
    height: 630,
    backgroundColor: colors.light
  },
  innderDiv: {
    flex: '1 1 0%'
  },
  text1: {
    color: colors.darkprimary,
    lineHeight: 60,
    fontWeight: 800,
    maxWidth: '32rem'
  },
  text2: {
    color: colors.middleprimary,
    maxWidth: '36rem'
  },
  text3: {
    maxWidth: '36rem'
  },
  freeTrialButton: {
    backgroundColor: colors.primary,
    color: colors.completeLight
  },
  svgDiv: {
    border: colors.primary
  },
  svgBox: {
    width: 11
  },
  buttonText: {
    color: colors.primary
  },
  img: {
    width: 800
  }
});
