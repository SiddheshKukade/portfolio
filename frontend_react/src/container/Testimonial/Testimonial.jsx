import React from 'react'
import { AppWrap, MotionWrap } from '../../wrapper';
import './Testimonial.scss';
const Testimonial = () => {
  return (
    <div>Testimonial</div>
  )
}

export default Testimonial
AppWrap(
  MotionWrap(Testimonial, "app__testimonial"), 'testimonial', 'app__whitebg')