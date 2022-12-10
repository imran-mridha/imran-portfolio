import React from 'react';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

// import contact data
import { contact } from '../../data';
import { toast } from 'react-toastify';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kmbcb99', 'template_3gloyra', form.current, 'uMFHLpo7dSDwuJ1Ta')
      .then((result) => {
        toast.success('Email sent successfully to Dipta Pal')
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
    <section className='section' id='contact'>
      <div className='container mx-auto'>
      <div className="flex flex-col text-center">
        <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 ">
        Contact Me
        </h2>
        <p className="mb-4 text-accent capitalize">Let's Connect</p>
        <hr className="mb-8 opacity-5 w-1/2 mx-auto" />
      </div>
        <div className='flex flex-col lg:gap-x-8 lg:flex-row'>
          <div className='flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2'>
            {contact.map((item, index) => {
              const { icon, title, subtitle, description } = item;
              return (
                <div className='flex flex-col lg:flex-row gap-x-4' key={index}>
                  <div className='text-accent rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl'>
                    {icon}
                  </div>
                  <div>
                    <h4 className='font-body text-xl mb-1'>{title}</h4>
                    <p className='mb-1 text-paragraph'>{subtitle}</p>
                    <p className='text-accent font-normal '>{description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <form className='space-y-8 w-full max-w-[780px]' ref={form} onSubmit={sendEmail}>
            <div className='flex gap-8'>
              <input className='input bg-black border border-accent' type='text' placeholder='Your name' name='name'/>
              <input className='input bg-black border border-accent' type='email' placeholder='Your email' name='email'/>
            </div>
            <input className='input bg-black border border-accent' type='text' placeholder='Subject' name='subject'/>
            <textarea
              className='textarea bg-black border border-accent h-32'
              placeholder='Your message'
              name='message'
            ></textarea>
            <button className='btn btn-lg bg-black hover:bg-secondary-hover'>
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;