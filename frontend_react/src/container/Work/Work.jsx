// shows what work you have done in your carrer
import React, { useState, useEffect } from 'react'
import { AiFillEye, AiFillGithub } from 'react-icons/ai'
import { motion } from 'framer-motion'
import { urlFor, client } from '../../client'
import AppWrap from '../../wrapper'
import './Work.scss'
const Work = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 })
  const [works, setWorks] = useState([])
  const [filterWork, setFilterWork] = useState([])
  useEffect(() => {
    const query = "*[_type == 'works']";
    client.fetch(query).then((data) => { setWork(data), setFilterWork(data) })
  }, [])

  const handleWorkfilter = (item) => {

  }
  return (
    <>
      <h2 className='head-text'>My Creative <span>Portfolio</span> Section</h2>
      <div className='app__work-filter'>
        {
          ['UI/UX', 'Web App', 'Mobile App', 'React JS', 'All'].map((item, index) => (

            <div key={index}
              onClick={() => handleWorkfilter(item)}
              className={`app__work-filter-item app__flext p-text ${activeFilter === item ? 'item-active' : ''}`}
            >
              {item}
            </div>
          ))
        }
        < motion.div
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="app__work-portfolio"
        >
          {/* loop over portfolio items */}
          filterWork.map((work , index)=>(
          <div className='app__work -item app__flex' key={index}>
            <div className="app__work-img app__flex">
              <img src={urlFor(work.img)} alt={work.name} />
            </div>

          </div>
          ))
        </motion.div>
      </div>
    </>
  )
}

export default Work