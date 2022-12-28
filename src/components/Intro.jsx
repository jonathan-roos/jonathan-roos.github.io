import React from 'react';

function Intro() {
    return (
        <div className="flex items-center
        justify-center flex-col text-center pt-20
        pb-6">
            <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">Jonathan Roos</h1>
            <p className="text-base rounded-md dark:text-white dark:bg-teal-900 md:text-xl mb-3 font-medium px-2">Software Developer & Student</p>
            <p className="text-sm max-w-2xl mb-6 font-semibold">
                Hi! My name is Jonathan Roos and I am a student at Griffith University, currently studying for my Bachelor of Business, 
                and Bachelor of Information Technology majoring in Software Development. I am aiming to graduate by October 2023 and aspire 
                to further my career in the IT industry as a full stack software developer.
                Feel free to navigate this portfolio to gather an understanding of some of the projects I have worked on and my professional timeline.
            </p>
        </div>
    )
}

export default Intro;