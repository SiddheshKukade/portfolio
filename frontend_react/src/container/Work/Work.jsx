// shows what work you have done in your carrer
import React, { useState, useEffect } from 'react'
import { AiFillEye, AiFillGithub } from 'react-icons/ai'
import { motion } from 'framer-motion'
import { urlFor, client } from '../../client'
import { AppWrap } from '../../wrapper'
import './Work.scss'
const Work = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 })
  const [work, setWork] = useState([])
  const [filterWork, setFilterWork] = useState([])
  useEffect(() => {
    const query = "*[_type == 'works']";
    client.fetch(query).then((data) => {
      console.log(data)
      setWork(data);
      setFilterWork(data)
    })
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
          {filterWork.map((work, index) => (
            <div className="app__work-item app__flex" key={index}>
              <div
                className="app__work-img app__flex"
              >

                <img src={urlFor(work.imgUrl)} alt={work.name} />

                <motion.div
                  whileHover={{ opacity: [0, 1] }}
                  transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                  className="app__work-hover app__flex"
                >
                  <a href={work.projectLink} target="_blank" rel="noreferrer">
                    {/* project live link */}
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.90] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillEye />
                    </motion.div>
                  </a>
                  {/* code link  */}
                  <a href={work.codeLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.90] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillGithub />
                    </motion.div>
                  </a>
                </motion.div>
              </div>
              {/* name and desc */}
              <div className="app__work-content app__flex">
                <h4 className="bold-text">{work.title}</h4>
                <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>

                <div className="app__work-tag app__flex">
                  <p className="p-text">
                    {/* {work.tags[0]} */}
                    sample tag
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div >
    </>
  )
}

export default AppWrap(Work, 'work')