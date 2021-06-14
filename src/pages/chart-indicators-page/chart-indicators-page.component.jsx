import React from 'react';
import Header from '../../components/header/header.component';

import { ChartIcon } from '../../components/coffee-icon/coffee-icon.component';
import { LbrRsiImage, SmaChartImage, SmaIndImage } from '../../components/chart-images/chart-images.component';
import './chart-indicators-page.styles.scss';

class ChartIndicatorsPage extends React.Component {
    render(){
        return (
<div>
    <Header />
    <div className='page-content'>
        <div className='page-wrapper'>
            <div className='m-top-60'>
                <h2>Chart Indicators</h2>
            </div>
            <div className='page-divider'></div>
            <div className='page-flex'>
                <div className='page-column'>
                    <div><ChartIcon />My interest in Finance and Investing brought me down many rabbit holes. The competitive nature of the equity markets drove me to create my own Market Indicators providing more tools to aid in technical analysis. Coded in <span className='fw-sb'>PineScript</span> for the <span className='fw-sb'>TradingView</span> platform.</div>
                </div>
                <div className='page-column home-exp'>
                    <SmaChartImage />
                </div>
            </div>
            <div className='page-flex m-top-60'>
                <div className='page-column'>
                    <div>SMA Histogrom Indicator - Assists in visualiziing the start of a larger trend. Extremely helpful in determining whether or not a new trend has a high probability of continuing.</div>
                </div>
                <div className='page-column home-exp'>
                    <SmaIndImage />
                </div>
            </div>
            <div className='page-flex m-top-60'>
                <div className='page-column'>
                    <div>Momentum Pinball - This uses the three-period RSI of a one-period rate of change by trader Linda Raschke. The pivot points help decide if tomorrow will be a buy or sell day. </div>
                </div>
                <div className='page-column home-exp'>
                    <LbrRsiImage />
                </div>
            </div>
            <div className='page-divider'></div>
        </div>
    </div>
</div>
        );
    };
};

export default ChartIndicatorsPage;