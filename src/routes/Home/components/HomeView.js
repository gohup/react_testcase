import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import classes from './HomeView.scss'

export const HomeView = () => (
  <div>
    <h4>This is not a duck!</h4>
    <img
      alt='This is not a duck!'
      className={classes.duck}
      src={DuckImage} />
  </div>
)

export default HomeView
