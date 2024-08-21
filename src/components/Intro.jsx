import React from 'react';

function Intro() {
    return (
        <div className="flex items-center
        justify-center flex-col text-center pt-20
        pb-6">
            <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">Jonathan Roos</h1>
            <p className="text-base rounded-md dark:text-white dark:bg-teal-900 md:text-xl mb-3 font-medium px-2">Software Developer & Student</p>
            <p className="text-sm max-w-2xl mb-6 font-semibold">
            Hi! My name is Jonathan Roos, and I graduated from Griffith University at the end of 2023 with a double degree in Business and Information Technology, majoring in Software Development. 
            I have practical experience in IT fields such as machine learning, automation, system administration, data analysis, and web and app development. 
            I'm passionate about advancing my career in the IT industry, particularly in roles related to full stack software development and data analysis. 
            Feel free to explore this portfolio to gain insight into the projects I've worked on and my professional journey.
            </p>
        </div>
    )
}

export default Intro;