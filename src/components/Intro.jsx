import React from 'react';

function Intro() {
    return (
        <div className="flex items-center
        justify-center flex-col text-center pt-20
        pb-6">
            <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">Jonathan Roos</h1>
            <p className="text-base dark:text-teal-900 md:text-xl mb-3 font-medium">Software Developer & Student</p>
            <p className="text-sm max-w-xl mb-6 font-semibold">Hi! My name is Jonathan Roos and I am a student at Griffith University, currently studying for my Bachelor of Business, and Bachelor of Information Technology majoring in Software Development. I am aiming to graduate by October 2023 and aspire to further my career in the IT industry as a full stack software developer.</p>
        </div>
    )
}

export default Intro;