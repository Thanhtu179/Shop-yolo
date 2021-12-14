import React from 'react'
import Helmet from '../components/Helmet'
import HeroSlider from '../components/HeroSlider'
import heroSliderData from '../assets/fake-data/hero-slider'
import Section, { SectionTitle, SectionBody } from "../components/Section"
import policy from "../assets/fake-data/policy"
import PolicyCard from '../components/PolicyCard'
import Grid from '../components/Grid'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <Helmet title="Trang chủ">
            {/* hero slider */}
            <HeroSlider
                data={heroSliderData}
                control={true}
                auto={false}
                timeOut={5000}
            />
            {/* End hero slider */}
            {/* Policy section */}
            <Section>
                <SectionBody>
                    <Grid
                        col={4}
                        mlCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {
                            policy.map((item, index) => <Link to="/">
                                <PolicyCard
                                key={index}
                                name={item.name}
                                description={item.description}
                                icon={item.icon}
                                />
                            </Link>)
                        }
                    </Grid>
                </SectionBody>
            </Section>
            {/* End Policy section */}

        </Helmet>
    )
}

export default Home
