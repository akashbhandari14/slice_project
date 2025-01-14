import React from 'react';
import { MdLocationPin } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoTimeSharp } from "react-icons/io5";



const page = () => {
  return (
    <>
      <div className="contact_us bg-bgColor">
        <div className="contact_us_heading_box w-full h-[280px] max-sm:h-[180px] flex flex-col gap-1 justify-center items-center bg-yellow-50 mb-16">
          <h1 className='text-4xl font-medium'>Contact Us</h1>
          <p className='text-sm text-zinc-600 text-center'>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        </div>
        <div className="contact_us_inner_container grid grid-cols-[6fr_3fr] max-lg:grid-cols-1 gap-20 w-[90%] mx-auto py-12">
          <div className='flex flex-col justify-start items-start gap-4'>
            <h3 className='text-3xl font-semibold'>Send us a Message</h3>
            <p className='text-sm text-zinc-600'>Use the form below to get in touch with out team </p>
            <form action="" className='w-full flex flex-col justify-start items-start gap-4'>
              <div className="name_and_email_section w-full">
                <label htmlFor="name" className='font-semibold'>Your Name*</label>
                <input type="text" placeholder='Your Name*' id='name' className=' w-full p-2.5 bg-transparent outline-none border-b-2 border-zinc-600' />
              </div>
              <div className="name_and_email_section w-full">
                <label htmlFor="name" className='font-semibold'>Email Address*</label>
                <input type="text" placeholder='Your Address*' id='name' className=' w-full p-2.5 bg-transparent outline-none border-b-2 border-zinc-600' />
              </div>
              <div className="name_and_email_section w-full">
                <label htmlFor="name" className='font-semibold'>Subject*</label>
                <input type="text" placeholder='Enter your subject for contacting' id='name' className=' w-full p-2.5 bg-transparent outline-none border-b-2 border-zinc-600' />
              </div>
              <div className="name_and_email_section w-full">
                <label htmlFor="mssg" className='font-semibold'>Message*</label>
                <textarea name="" id="mssg" rows={5} className=' w-full p-2.5 bg-transparent outline-none border-b-2 border-zinc-600' placeholder='Your Message*'></textarea>
              </div>

              <button type='submit' className='bg-[#dc2626] hover:bg-black p-3 rounded-md text-white'>Send Message</button>
            </form>
          </div>
          <div className='flex flex-col justify-start items-start gap-10'>
            <div className='address_and_contact_info flex flex-col justify-start items-start gap-6'>
              <h3 className='text-2xl font-semibold'>Get in Touch</h3>
              <div className='w-full flex flex-col justify-start items-start text-zinc-600'>
                <p className=' font-semibold flex justify-start items-center gap-2 text-[#dc2626]'> <MdLocationPin className='text-xl ' />Our Location :</p>
                <p className='text-sm'>123 Spice Street, Flavor District Seasoning City, SC 12345</p>
              </div>
              <div className='w-full flex flex-col justify-start items-start text-zinc-600'>
                <p className=' font-semibold flex justify-start items-center gap-3 text-[#dc2626]'> <FaPhone className='text-lg' /> Phone :</p>
                <p className='text-sm'>+1 (555) 123-4567</p>
              </div>
              <div className='w-full flex flex-col justify-start items-start text-zinc-600'>
                <p className=' font-semibold flex justify-start items-center gap-3 text-[#dc2626]'> <MdEmail className='text-lg ' />Email :</p>
                <p className='text-sm'>info@spicewebsite.com</p>
              </div>
            </div>


            <div className='opening_time flex flex-col justify-start items-start gap-4'>
              <h3 className='text-2xl font-semibold'>Open Hours</h3>
              <div className='w-full flex flex-col justify-start items-start text-zinc-600'>
                <p className=' font-semibold flex justify-start items-center gap-3 text-[#dc2626]'> <IoTimeSharp className='text-lg ' />Business Hours :</p>
                <p className='text-sm'>Monday - Friday: 9:00 AM - 6:00 PM </p>
                <p className='text-sm'>Saturday: 10:00 AM - 4:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default page
