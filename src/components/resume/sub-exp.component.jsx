import React from 'react';
import SimpleLink from '../simple-link/simple-link.components';

class SubExp extends React.Component {
    render() {
        return (
            <div className='resume-section'>
                <h2>Experience</h2>
                <h3 className='m-bottom-0'>Projects in Finance and Game Development</h3>
                <div className='resume-horiz'>
                    <div><span className='fw-sb'>Self-employed</span><span className='r-date'>Nov 2018 – Present</span></div>
                    <div>San Francisco Bay Area</div>
                </div>
                <h3><SimpleLink className='rak' name='Rakuten (TYO: 4755)' url='https://www.rakuten.com/r/ANTHON?eeid=28187' /></h3>
                <h4 className='m-bottom-0'>Senior Web Developer</h4>
                <div className='resume-horiz'>
                    <div><span className='fw-sb'>Full-time</span><span className='r-date'>Sep 2017 – Oct 2018</span></div>
                    <div>San Francisco Bay Area</div>
                </div>
<span className='fw-sb'>•</span> Decreased dev overhead time of recurring promotions by 100% after producing content management tools for Marketing Ops and SEO teams<br />
<span className='fw-sb'>•</span> Generated A/B tests for a successful site rebrand of “Ebates” to “Rakuten” - Best Rebrand/Relaunch by The Drum Marketing Awards<br />
<span className='fw-sb'>•</span> Delivered UI functionality and extensible page components with JavaScript, HTML and CSS in an agile dev environment<br />
<span className='fw-sb'>•</span> Introduced a new growth experimentation process for developers including ideation, variation implementation and data analytics<br />
<span className='fw-sb'>•</span> Improved acquisition KPI’s in collaboration with the Business Intelligence, Marketing and User Experience teams<br />
                <h4 className='m-bottom-0'>Web Developer</h4>
                <div className='resume-horiz'>
                    <div><span className='fw-sb'>Full-time</span><span className='r-date'>Sep 2014 – Sep 2017</span></div>
                    <div>San Francisco Bay Area</div>
                </div>
<span className='fw-sb'>•</span> Optimized web performance, improving page speeds at least 25%<br />
<span className='fw-sb'>•</span> Contributed to search, filtering and checkout features for the launch of Travel &amp; Vacations, a new service extending rewards to hotel, airline and travel partners<br />
                <h3 className='m-bottom-0'>Web Developer</h3>
                <div className='resume-horiz'>
                    <div><span className='fw-sb'>Ebates - Full-time</span><span className='r-date'>Apr 2011 – Sep 2014</span></div>
                    <div>San Francisco, California</div>
                </div>
<span className='fw-sb'>•</span> Streamlined front end development on mobile web including compatibility across devices and the mobile app<br />
<span className='fw-sb'>•</span> Built reusable custom jQuery components to Holiday and Seasonal Promotions which averaged 30% year-over-year growth in revenue<br />
<span className='fw-sb'>•</span> Achieved the release of In-Store Cash Back, extending core rewards functionality for our user base in brick-and-mortar retail locations
            </div>
        );
    }
};
export default SubExp;