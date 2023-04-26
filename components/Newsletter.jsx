import React, { useRef, useEffect, useState } from 'react';
import { submitNewsLetter } from '../services';

const NewsLetter = () => {

  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const newsletteremailEl = useRef();


  useEffect(() => {
    newsletteremailEl.current.value = window.localStorage.getItem('email');
  }, [])


  const handleNewsLetterEmailSubmission = () => {
    setError(false);

    const { value: email } = newsletteremailEl.current;

    if (!email) {
      setError(true);
      return;
    }

    const newLetterObj = { email };
    // if (storeData) {
    //   window.localStorage.setItem('email', email);
    // } else {
    //   window.localStorage.removeItem('email', email);
    // }

    submitNewsLetter(newLetterObj)
      .then((res) => {
        setShowSuccessMessage(true);

        setTimeout(() => {  
          setShowSuccessMessage(false);
        }, 5000);
      })
  }

  return (
    <div className='capitalize mx-auto mt-5'>
          <form className='flex flex-col md:flex-row items-center'>
            <input type='email' ref={newsletteremailEl} placeholder='Enter your email' className='py-2 px-4 w-72 focus:outline-none mb-4 md:mb-0 md:mr-4 text-ligthblack-0 bg-darkwhite-0' />
            <button 
            type='button' 
            onClick={handleNewsLetterEmailSubmission}
            className="text-white bg-black border-none outline-none transition ease-in duration-500 px-10 py-2 cursor-pointer">
            Subscribe
            </button>
          </form>
          {error && <p className="text-xs text-red-500 font-medium text-center mt-2">Please enter valid email</p>}
          {showSuccessMessage && <p className='text-base font-medium text-center mt-2'>you're Subscribed</p>}
    </div>
  )
}

export default NewsLetter