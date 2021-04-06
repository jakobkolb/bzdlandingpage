import { container, title } from 'src/assets/jss/nextjs-material-kit.js'

import imagesStyle from 'src/assets/jss/nextjs-material-kit/imagesStyles.js'

const profilePageStyle = {
  container: {
    ...container,
    padding: '40px',
    paddingLeft: '20px',
    paddingRight: '20px',
    justifyContent: 'center',
    width: '100%',
    display: 'flex',
    flexDirection: 'row'
  },
  profile: {
    textAlign: 'center',
    '& img': {
      maxWidth: '160px',
      width: '100%',
      margin: '0 auto',
      transform: 'translate3d(0, -50%, 0)'
    }
  },
  description: {
    color: 'var(--text-color)',
    fontSize: 'var(--text-size)',
    maxWidth: "300px"
  },
  name: {
    marginTop: '-80px'
  },
  ...imagesStyle,
  centered: {
    alignContent: 'center'
  },
  main: {
    background: '#FFFFFF',
    position: 'relative',
    zIndex: '3'
  },
  mainRaised: {
    margin: '-60px 30px 0px',
    borderRadius: '6px',
    boxShadow:
      '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)'
  },
  title: {
    ...title,
    width: '100%',
    display: 'inline-block',
    position: 'relative',
    marginTop: '10px',
    minHeight: '32px',
    textDecoration: 'none',
    textAlign: 'center'
  },
  socials: {
    marginTop: '0',
    width: '100%',
    transform: 'none',
    left: '0',
    top: '0',
    height: '100%',
    lineHeight: '41px',
    fontSize: '20px',
    color: '#999'
  },
  navWrapper: {
    margin: '20px auto 50px auto',
    textAlign: 'center'
  }
}

export default profilePageStyle
