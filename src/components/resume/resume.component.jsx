import React from 'react';
import './resume.styles.scss';

class Resume extends React.Component {
    render() {
        return (
            <div>
                <h1>Anthony dela Calzada</h1>
                <div>Senior Web Developer, Growth Team Engineer</div>
                <div>San Francisco, California, United States</div>
                <div>...</div>
                <div>Demo: <a href='https://ghost-view-demo.herokuapp.com/'>https://ghost-view-demo.herokuapp.com/</a></div>
                <div>
                    <div>
                        <h2>About</h2>

Creative Senior Web Developer with 7+ years of experience in the e-commerce space, providing for 2000 online retailers and over 10 million shoppers. Rapidly designed and deployed 5 A/B tests per month as part of a five member Growth Team to increase user activation and improve user experience. Delivers UI functionality and custom page components with JavaScript, HTML and CSS within the agile dev landscape. Currently fulfilling personal ventures in finance, investing and game development.

Career Pivot ? VG Roblox
</div>
                    <div>
                        <h2>Experience</h2>


                        <h3 className='m-bottom-0'>Projects in Finance, Investing and Game Development</h3>
                        <span className='fsb'>Self-employed</span><br />
Nov 2018 – Present<br />
San Francisco Bay Area<br />

                        <h3>Rakuten</h3>

                        <h4 className='m-bottom-0'>Senior Web Developer</h4>
                        <span className='fsb'>Full-time</span><br />
Sep 2017 – Oct 2018<br />
San Francisco Bay Area<br />

• Decreased dev overhead time of recurring promotions by 100% after producing content management tools for Marketing Ops and SEO teams<br />
• Generated A/B tests for a successful site rebrand of “Ebates” to “Rakuten”<br />
• Delivered UI functionality and custom page components with JavaScript, HTML and CSS in an agile dev environment<br />
• Introduced the growth experimentation process for developers including ideation, variation implementation and data analytics<br />
• Improved acquisition KPI’s in collaboration with the Business Intelligence, Marketing and User Experience teams<br />

                        <h4 className='m-bottom-0'>Web Developer</h4>
                        <span className='fw-sb'>Full-time</span><br />
Sep 2014 – Sep 2017<br />
San Francisco Bay Area<br />

• Optimized web performance improving page speeds at least 25%<br />
• Contributed to search, filtering and checkout features for the launch of Travel &amp; Vacations, a new service extending rewards to hotel, airline and travel partners<br />

                        <h3 className='m-bottom-0'>Web Developer</h3>
                        <span className='fw-sb'>Ebates - Full-time</span><br />
Apr 2011 – Sep 2014<br />
San Francisco, California, United States<br />

• Streamlined front end development on mobile web including compatibility across devices and the mobile app<br />
• Added reusable custom jQuery components to Holiday and Seasonal Promotions which averaged 30% year-over-year growth in revenue<br /><br />
• Achieved the release of In-Store Cash Back, extending core rewards functionality for our user base in brick-and-mortar retail locations
</div>
                    <div>
                        <h2>Education</h2>
San Francisco State University<br />
Bachelor of Science, Computer Science<br />
                    </div>
                    <div>
                        <h2>Skills</h2>
	JavaScript, es6, HTML, CSS, React, jQuery, SASS, PHP, JSON, Bootstrap, Java, XML, SQL, Git, WordPress.org, IntelliJ IDEA, Visual Studio
    </div>

                </div>
            </div>
        );
    }
};
export default Resume;