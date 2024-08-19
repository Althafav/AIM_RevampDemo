import React, { useState } from 'react'

export default function AboutComponent(props: any) {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };

    
    const limitedText = props.aboutParagraph.substring(0, 450);
    return (
        <section className='about-portfolio-section-wrapper'>
            <div className="container">
                <div className="row about-content">
                    <div className="col-12">
                        <h1 className='section-heading'>{props.aboutHeading}</h1>
                    </div>
                    <div className="col-12">
                        <p className={`paragraph ${isExpanded ? 'expanded' : 'faded'}`}>{isExpanded ? props.aboutParagraph : `${limitedText}...`}</p>
                    </div>
                    <div className="col-12 d-flex justify-content-center align-items-center mt-3" onClick={handleToggle}>
                        <button className='read-more-btn'>{isExpanded ? 'Read Less' : 'Read More'}</button>
                    </div>
                </div>
            </div>
        </section>
    )
}