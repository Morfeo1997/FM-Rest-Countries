import React from 'react'


const Footer = () => {

return (
        <>
            <footer className='flex justify-between items-center px-8 bg-white dark:bg-Blue-Elements shadow-md py-4 border-t-4 border-Grey-Background dark:border-Blue-Background transition-colors duration-300'>
                <div className='text-left text-Grey-Text dark:text-Grey-Background'>
                    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" className='font-bold text-Blue-Elements dark:text-yellow-200 hover:text-blue-950 dark:hover:text-yellow-300 transition-colors duration-300'>Frontend Mentor</a>.
                </div>

                <div className='text-right text-Grey-Text dark:text-Grey-Background'>
                    Coded by <a href="https://gaston-gomez1997.netlify.app/" target='_blank' className=' font-bold text-Blue-Elements dark:text-yellow-200 hover:text-blue-950 dark:hover:text-yellow-300 transition-colors duration-300'> Gastón Gómez</a>
                </div>
            </footer>
        </>
    );
};

export default Footer
