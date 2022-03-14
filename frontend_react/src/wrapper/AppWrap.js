import { NavigationDots, SocialMedia } from '../components'
import React from 'react'

const AppWrap = (Component, idName, className) => function HOC() {
    return (
        // id={idName} helps to make word of those dots
        <div id={idName} className={`app__container ${className}`}>
            <SocialMedia />
            {/* TAKING THE ENITRE SECTION AND COMBINING IT  BY GIVING IT AN ID TO IDENTIFY IT AND SCROLL THROUGH UT WITH OUR NAVIGATION DOTS COMPONENT   */}
            <div className="app__wrapper app__flex">
                <Component />
                <div className="copyright">
                    <p className='p-text'> @2022 Siddhesh</p>
                    <p className='p-text'> All rights reserved.</p>
                </div>
            </div>

            <NavigationDots active={idName} />


        </div>
    )
}

export default AppWrap