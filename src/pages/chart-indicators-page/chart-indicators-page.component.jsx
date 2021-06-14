import React from 'react';
import { ChartIcon } from '../../components/coffee-icon/coffee-icon.component';

import './chart-indicators-page.styles.scss';

class ChartIndicatorsPage extends React.Component {
    render(){
        return (
    <div className='page-content'>
        <div className='page-wrapper'>
            <div className='m-top-60'>
                <h2>Chart Indicators</h2>
            </div>
            <div className='page-divider'></div>
            <div className='page-flex'>
                <div className='page-column'>
                    <div><ChartIcon />Creative Senior Web Developer with 7+ years of professional experience in the e-commerce space, providing for 2000 online retailers and over 10 million shoppers.</div>
                    <div className='m-top-20'>Rapidly designed and deployed 5 A/B tests per month as part of a five member Growth Team to increase user activation and improve user experience.</div>
                    <div className='m-top-20'>Delivers UI functionality and extensible page components with JavaScript, HTML and CSS within the agile dev landscape. Currently fulfilling personal ventures in finance, investing and game development.</div>
                    <div className='m-top-20'>
                        Web Demo<br />
                        Résumé
                    </div>
                </div>
                <div className='page-column home-exp'>
                    <div>Nov 2018 – Present</div>
                    <h4>Projects in Finance and Game Development</h4>
                </div>
            </div>
        </div>
    </div>
        );
    };
};

export default ChartIndicatorsPage;