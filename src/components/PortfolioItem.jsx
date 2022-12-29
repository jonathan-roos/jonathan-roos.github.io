import React, {useState} from 'react';

function PortfolioItem({title, imgUrl, stack, link, description}) {
    const [isShown, setIsShown] = useState(false);

    return (
        <a 
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden hover:scale-105 transition-all"
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
        >
            <div className="w-full">
                {!isShown && (
                    <img
                        src={imgUrl}
                        alt="portfolio"
                        className="w-full h-36 md:h-48 object-cover cursor-pointer"
                    />
                )}
                {/* Will show this when mouse is on the portfolio item */}
                {isShown && (
                    <div className="w-full h-36 md:h-48 object-cover cursor-pointer py-3 px-3 text-justify bg-stone-900 text-white dark:bg-white dark:text-stone-900 overflow-scroll font-semibold">
                        {description}   
                    </div>     
                )}
            </div>
            <div className="w-full p-4">
                <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold dark:text-white">{title}</h3>
                <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white">
                    {stack.map(item => (
                        <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md">
                            {item}
                        </span>
                    ))}
                </p>
            </div> 
        </a>
    );   
}

export default PortfolioItem;