import React from 'react'

import {
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaTwitter,
    FaTwitch,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full mt-24 bg-slate-900 text-gray-300 py-y px-2'>
        <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8'>
            <div>
                <h6 className='font-bold uppercase pt-2'>Solutions</h6>
                <ul>
                    <li className='py-1 cursor-pointer hover:text-gray-700'>Marketing</li>
                    <li className='py-1 cursor-pointer hover:text-gray-700'>Analytics</li>
                    <li className='py-1 cursor-pointer hover:text-gray-700'>Commerce</li>
                    <li className='py-1 cursor-pointer hover:text-gray-700'>Data</li>
                    <li className='py-1 cursor-pointer hover:text-gray-700'>Cloud</li>
                </ul>
            </div>
            <div>
                <h6 className='font-bold uppercase pt-2'>Support</h6>
                <ul>
                    <li className='py-1 cursor-pointer hover:text-gray-700'>Pricing</li>
                    <li className='py-1 cursor-pointer hover:text-gray-700'>Documentation</li>
                    <li className='py-1 cursor-pointer hover:text-gray-700'>Guides</li>
                    <li className='py-1 cursor-pointer hover:text-gray-700'>API Status</li>
                </ul>
            </div>
            <div>
                <h6 className='font-bold uppercase pt-2'>Company</h6>
                <ul>
                    <li className='py-1 cursor-pointer hover:text-gray-700'>About</li>
                    <li className='py-1 cursor-pointer hover:text-gray-700'>Blog</li>
                    <li className='py-1 cursor-pointer hover:text-gray-700'>Jobs</li>
                    <li className='py-1 cursor-pointer hover:text-gray-700'>Press</li>
                    <li className='py-1 cursor-pointer hover:text-gray-700'>Partners</li>
                </ul>
            </div>
            <div>
                <h6 className='font-bold uppercase pt-2'>Legal</h6>
                <ul>
                    <li className='py-1 cursor-pointer hover:text-gray-700'>Claims</li>
                    <li className='py-1 cursor-pointer hover:text-gray-700'>Privacy</li>
                    <li className='py-1 cursor-pointer hover:text-gray-700'>Terms</li>
                    <li className='py-1 cursor-pointer hover:text-gray-700'>Policies</li>
                    <li className='py-1 cursor-pointer hover:text-gray-700'>Conditions</li>
                </ul>
            </div>
            <div className='col-span-2 pt-8 md:pt-2'>
                <p className='font-bold uppercase'>Subscribe to our newsletter</p>
                <p className='py-4'>The latest news, articles, and resources, sent to your inbox weekly.</p>
                <form className='flex flex-col sm:flex-row'>
                    <input className='w-full p-2 mr-4 rounded-md mb-4 cursor-pointer' type="email" placeholder='Enter email..'/>
                    <button className='p-2 mb-4 cursor-pointer'>Subscribe</button>
                </form>
            </div>
        </div>

        <div className='flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
        <p className='py-4'>2022 Workflow, LLC. All rights reserved</p>
        <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
            <FaFacebook className='cursor-pointer hover:bg-gray-600 active:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300' />
            <FaInstagram className='cursor-pointer  hover:bg-gray-600 active:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300' />
            <FaTwitter className='cursor-pointer  hover:bg-gray-600 active:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300' />
            <FaTwitch className='cursor-pointer  hover:bg-gray-600 active:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300' />
            <FaGithub className='cursor-pointer  hover:bg-gray-600 active:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300' />
        </div>
        </div>
    </div>
  )
}

export default Footer