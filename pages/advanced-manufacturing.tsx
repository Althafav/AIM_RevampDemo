import React from 'react'
import { motion } from "framer-motion";
import PortfolioBanner from '@/components/Portfolio/PortfolioBanner';
import AboutComponent from '@/components/Portfolio/AboutComponent';
import AccordionComponent from '@/components/UI/AccordinComponent';
import CardGrid from '@/components/UI/CardGrid';

const AdvancedManufacturing = () => {
    const text = `Advanced manufacturing integrates physical and digital technologies to enhance factory operations and supply chain management. The primary goals are to boost performance and adapt swiftly to market changes. Advanced factories leverage interconnected systems and real-time data to optimize production and pre-emptively maintain equipment. Unlike traditional factories that use robotics and automation, advanced factories feature fully integrated systems that merge physical and digital processes.  `;
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <PortfolioBanner Heading={"Advanced Manufacturing"} subHeading="Leveraging Industry & Bringing Advanced Factories to Life" portfolioColorName={"advancedManufacturing"} />
            <AboutComponent aboutHeading="Navigating the Future of Advanced Manufacturing" aboutParagraph={text} />
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

export default AdvancedManufacturing 