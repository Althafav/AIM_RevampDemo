import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import PortfolioBanner from '@/components/Portfolio/PortfolioBanner';
import AboutComponent from '@/components/Portfolio/AboutComponent';
import AccordionComponent from '@/components/UI/AccordinComponent';
import CardGrid from '@/components/UI/CardGrid';
import { fdiFAQ } from '@/contants/data';
import { Portfoliopage } from '@/models/portfoliopage';
import Globals from '@/modules/Globals';
import SpinnerComponent from '@/components/UI/SpinnerComponent';
import { startupFeaturesAndActivities } from '@/contants/startupData';
const StartUp = () => {
    const [pageData, setPageData] = useState<Portfoliopage | null>(null);

    useEffect(() => {
        Globals.KontentClient.item("startup_portfolio")
            .toObservable()
            .subscribe((response: any) => {
                console.log('API Response:', response);
                setPageData(response.item);
            });
    }, []);



    if (!pageData) {
        return <SpinnerComponent />;
    }

    const descriptionFeaturesActivities = "AIM Startup, a pivotal aspect of AIM Congress, offers essential tools and funding to empower digital entrepreneurs and overcome resource limitations. With UAE's ambition to be a global tech hub by 2025, startups have emerged as key players, with investments surpassing $2.9 billion last year. These ventures are at the forefront of innovations in AI, blockchain, and renewable energy, driving industry transformation and drawing considerable investment. They also accelerate digital adoption."

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <PortfolioBanner bannerImageSrc={pageData.bannerimage.value[0].url} Heading={pageData.bannerheading.value} subHeading={pageData.bannersubheading.value} portfolioColorName="startup" />
            {/* <div className='portfolio-sticky-nav-menu'>
                <p>Nav</p>
            </div> */}
            <AboutComponent aboutHeading={pageData.aboutheading.value} aboutParagraph={pageData.aboutparagraph.value} />

            <section className='features-activities-wrapper'>
                <div className="section-container">
                    <div className='row g-0'>
                        <div className="col-12">
                            <h2 className='section-heading'>Features & Activities</h2>
                            <p className='text-lg-center'>Dynamic features and activities fueling startup evolution and success.</p>
                        </div>

                    </div>

                    <div className="row mt-4">
                        <div className="col-lg-6 ">
                            <div className="row g-3">
                                {startupFeaturesAndActivities.map((item: any, index: number) => {
                                    return (
                                        <div className="col-lg-4 " key={`features-${index}`}

                                        >
                                            <div className="startup-feature-activities-card">
                                                <p className='item-name'>{item.name}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-12 ">
                                    <div className='youtube-section'>
                                        <p>You tube video will be here</p>
                                    </div>
                                </div>
                                <div className="col-12 mt-4">
                                    <div className='details-features-activities'>
                                        <h3 className='section-heading'>Conferences</h3>
                                        <p>{descriptionFeaturesActivities}</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section className='pitch-section-wrapper'>
                <div className="section-container ">
                    <div className="row">
                        <div className="col-12">
                            <h1 className='pitch-heading'>Pitch Your <br />
                                Next Big Thing</h1>
                            <h2 className='mt-3 '>AIM Startup & Unicorn Dynamic Activity-Pitch Competition</h2>
                        </div>

                        <div className="col-12 mt-3">
                            <button className='pitch-cta-btn'>Participate</button>
                        </div>
                    </div>
                </div>
            </section>




            <section className='frequently-asked-questions-wrapper'>
                <div className="container">


                    <AccordionComponent pageData={pageData} />
                </div>
            </section>
        </motion.div>
    )
}

export default StartUp;
