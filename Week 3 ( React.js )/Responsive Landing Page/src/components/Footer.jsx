import React from 'react'
import { communityLinks, platformLinks, resourcesLinks } from '../constants'

const Footer = () => {
  return (
    <div className='mt-16 border-t py-10 border-neutral-700'>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 ">
            <div className='mb-4'>
                <h3 className='text-md font-semibold mb-4'>Resource</h3>
                <ul className='space-y-4'>
                    {resourcesLinks.map((link, index) => {
                        return (
                            <li key={index} className='text-neutral-300 hover:text-white'>
                                <a href={link.href}>{link.text}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className='mb-4'>
                <h3 className='text-md font-semibold mb-4'>Platform</h3>
                <ul className='space-y-4'>
                    {platformLinks.map((link, index) => {
                        return (
                            <li key={index} className='text-neutral-300 hover:text-white'>
                                <a href={link.href}>{link.text}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className='mb-4'>
                <h3 className='text-md font-semibold mb-4'>Community</h3>
                <ul className='space-y-4'>
                    {communityLinks.map((link, index) => {
                        return (
                            <li key={index} className='text-neutral-300 hover:text-white'>
                                <a href={link.href}>{link.text}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer
