import React from 'react';
import portfolio from '../data/portfolio';
import PortfolioItem from './PortfolioItem';

function Portfolio() {
    return (
        <div className="flex-initial flex-col md:flex-row items-center justify-center px-20">
            <div className="grid grid-cols-1  mx-auto md:grid-cols-2 lg:grid-cols-3 gap-4 md:px-15">
                {portfolio.map(project => (
                    <PortfolioItem
                        imgUrl={project.imgUrl}
                        title={project.title}
                        stack={project.stack}
                        link={project.link}
                        description={project.description}
                    />
                ))}
            </div>
        </div>
    )
}

export default Portfolio;