import { colors } from '../../../assets/colors';
export const Style = (theme) => ({
  container: {
    marginLeft: ' 3.5rem',
    marginRight: ' 3.5rem',
    marginTop: '6rem'
  },
  mainDiv: {
    marginTop: '6rem',
    marginBottom: '1rem'
  },
  divStart: {
    color: colors.darkprimary,
    maxWidth: '42rem',
    height: 64,
    fontWeight: 800
    // lineHeight: 64
  },
  img: {
    marginTop: '2rem'
  },
  cardTitle: {
    color: colors.darkprimary,
    fontWeight: 700
  },
  productSvg: {
    marginTop: '2rem'
  },
  svg: {
    backgroundColor: 'rgba(49, 88, 196, 1)'
  },
  getProductTitle: {
    fontWeight: 600,
    color: 'rgba(255, 255, 255, 1)'
  },
  svgButton: {
    width: 11,
    color: 'rgba(255, 255, 255, 1)',
    height: '1rem'
  }
});
