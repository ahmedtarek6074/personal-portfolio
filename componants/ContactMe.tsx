import React from 'react'
import {PhoneIcon , MapPinIcon , EnvelopeIcon} from"@heroicons/react/24/solid"
import { useForm, SubmitHandler } from "react-hook-form";


type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

function ContactMe({}: Props) {

  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href  = 'mailto:ahmed.elmashad1811@gmail.com?subject='+ formData.subject  + " &body=%E2%80%A2  Dear Mr Ahmed ,%0D  " +"%E2%80%9C 	%09 "+ formData.message +"  %E2%80%9D,%0D%0D"
    +"%E2%80%A2  Email :"
+ " ( "  + (formData.email) + " )"+"%0D%0D" + "%E2%80%A2  Regards, "+formData.name+".";
  }

  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center xl:top-[34rem]  '>
        <h3 className='absolute  mb-2 top-[5px] uppercase tracking-[20px] text-gray-500 text-2xl border rounded-full border-[rgb(29,161,242)]/40 pl-5 '>
      Contact
      </h3>
      <div className='flex flex-col space-y-10 pt-10 w-screen   '>
        <h4 className='text-4xl font-semibold text-center  '>
            I have got just what you need.
            <span className='underline decoration-[rgb(29,161,242)]/50 '>
                Lets Talk
            </span>
        </h4>

        <div className='space-y-8'>

          <div className='flex items-center space-x-5 justify-center'>
            <PhoneIcon className='text-[rgb(29,161,242)] h-7 w-7 animate-pulse'/>
            <p className='text-2xl'>
              +201000106074
            </p>
          </div>

          <div className='flex items-center space-x-5 justify-center'>
            <EnvelopeIcon className='text-[rgb(29,161,242)] h-7 w-7 animate-pulse'/>
            <p className='text-2xl'>
              ahmed.elmashad1811@gmail.com
            </p>
          </div>

          <div className='flex items-center space-x-5 justify-center'>
            <MapPinIcon className='text-[rgb(29,161,242)] h-7 w-7 animate-pulse'/>
            <p className='text-2xl'>
              New Damietta , Egypt
            </p>
          </div>

          

        </div>


        <form onSubmit={handleSubmit(onSubmit)}  className='flex flex-col space-y-2 w-fit mx-auto z-20'>
          <div className='flex space-x-2 '>
           <input {...register('name')} placeholder='Name' className='contactInput' type='text' /> 

           <input {...register('email')} placeholder='Email' className='contactInput' type='email' />
          </div>

          <input {...register('subject')} placeholder='Subject' className='contactInput' type='text' />

          <textarea {...register('message')} placeholder='Message' className='contactInput ' />

          <button type='submit' className='bg-[rgb(29,161,242)] py-5 px-10 rounded-md text-black font-bold text-lg  '>Submit</button>
         


        </form>
      </div>
    </div>
  )
}

export default ContactMe