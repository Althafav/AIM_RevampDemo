import Banner from '@/components/FDI/Banner'
import AccordionComponent from '@/components/UI/AccordinComponent';
import CardGrid from '@/components/UI/CardGrid';
import React, { useState } from 'react'
import { motion } from "framer-motion"
export default function ForiegnDirectInvestment() {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };

    const text = `Foreign Direct Investment (FDI) is set to reshape the global economic landscape as we approach 2025, with its influence extending far beyond mere capital flows. FDI acts as a bridge between nations, fostering economic interdependence, enhancing global trade, and encouraging the transfer of technology and expertise. As the world becomes more interconnected, FDIs role in stimulating economic growth, driving innovation, and fostering international collaboration becomes increasingly significant.   Foreign Direct Investment (FDI) is set to reshape the global economic landscape as we approach 2025, with its influence extending far beyond mere capital flows. FDI acts as a bridge between nations, fostering economic interdependence, enhancing global trade, and encouraging the transfer of technology and expertise. As the world becomes more interconnected, FDIs role in stimulating economic growth, driving innovation, and fostering international collaboration becomes increasingly significant.`;
    const limitedText = text.substring(0, 450);
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Banner />
            <section className='about-portfolio-section-wrapper'>
                <div className="container">
                    <div className="row about-content">
                        <div className="col-12">
                            <h1 className='section-heading'>Mapping the Future of</h1>
                        </div>
                        <div className="col-12">
                            <p className={`paragraph ${isExpanded ? 'expanded' : 'faded'}`}>{isExpanded ? text : `${limitedText}...`}</p>
                        </div>
                        <div className="col-12 d-flex justify-content-center align-items-center mt-3" onClick={handleToggle}>
                            <button className='read-more-btn'>{isExpanded ? 'Read Less' : 'Read More'}</button>
                        </div>
                    </div>
                </div>
            </section>


            <CardGrid />


            <section className='frequently-asked-questions-wrapper'>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className='main-heaiding'>frequently asked questions (FAQ)</h1>
                        </div>
                    </div>

                    <AccordionComponent />
                </div>
            </section>
        </motion.div>
    )
}