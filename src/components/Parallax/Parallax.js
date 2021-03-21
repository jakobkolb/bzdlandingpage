import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// nodejs library to set properties for components
import PropTypes from 'prop-types'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import Image from 'next/image'

// core components
import styles from 'src/assets/jss/nextjs-material-kit/components/parallaxStyle.js'

const useStyles = makeStyles(styles)

export default function Parallax(props) {
  let windowScrollTop
  const [transform, setTransform] = React.useState('translate3d(0,0px,0)')
  React.useEffect(() => {
    if (window.innerWidth >= 768) {
      window.addEventListener('scroll', resetTransform)
    }
    return function cleanup() {
      if (window.innerWidth >= 768) {
        window.removeEventListener('scroll', resetTransform)
      }
    }
  })
  const resetTransform = () => {
    var windowScrollTop = window.pageYOffset / 3
    setTransform('translate3d(0,' + windowScrollTop + 'px,0)')
  }
  const { filter, className, children, style, image, small, responsive } = props
  const classes = useStyles()
  const parallaxClasses = classNames({
    [classes.parallax]: true,
    [classes.filter]: filter,
    [classes.small]: small,
    [classes.parallaxResponsive]: responsive,
    [className]: className !== undefined
  })
  return (
    <div
      className={parallaxClasses}
      style={{
        ...style,
        transform: transform
      }}
    >
      <Image src={image} layout='fill' objectFit={'cover'} alt={'Bicycle in front of shop'} quality={100}/>
      {children}
    </div>
  )
}

Parallax.propTypes = {
  className: PropTypes.string,
  filter: PropTypes.bool,
  children: PropTypes.node,
  style: PropTypes.string,
  image: PropTypes.string,
  small: PropTypes.bool,
  // this will add a min-height of 660px on small screens
  responsive: PropTypes.bool
}
