import React from 'react'
import { BsTwitter, BsInstagram, BsGithub } from 'react-icons/bs'
import {SiKaggle, SiGmail} from 'react-icons/si'
import { FaFacebookF } from 'react-icons/fa'
const SocialMedia = () => {
    return (
        <div className='app__social'>
            <div><a target="_blank" href='https://github.com/SiddheshKukade'><BsGithub /></a></div>
            <div ><a target="_blank" href='https://instagram.com/SiddheshKukade'><BsInstagram /></a></div>
            <div ><SiGmail /></div>
        </div>
    )
}

export default SocialMedia
