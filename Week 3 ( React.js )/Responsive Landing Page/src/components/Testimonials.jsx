import React from 'react'
import { testimonials } from '../constants'

const Testimonials = () => {
  return (
    <div className='mt-16 tracking-wide'>
        <h2 className='mt-6 text-3xl sm:text-5xl lg:text-6xl tracking-wide text-center my-10 lg:my-16'>What people are saying</h2>
        <div className="flex flex-wrap justify-center">
            {testimonials.map((testimonials, index) => {
                return (
                    <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
                        <div className="bg-neutral-900 rounded-md p-6 text-md border border-neutral-800 text-thin">
                            <p className='text-neutral-400'>{testimonials.text}</p>
                            <div className="flex mt-8 items-start">
                                <img src={testimonials.image} alt={testimonials.user} className='w-12 h-12 mr-8 rounded-full border border-neutral-400'/>
                                <div>
                                    <h6 className='text-neutral-400'>{testimonials.user}</h6>
                                    <span className='text-sn font-normal italic text-neutral-600'>{testimonials.company}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Testimonials
