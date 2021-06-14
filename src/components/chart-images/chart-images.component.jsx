import React from 'react';
import LbrRsiImageGif from '../../assets/images/chart/lbr-rsi-momentum-pinball.gif';
import SmaChartImageGif from '../../assets/images/chart/sma-histogram-chart.gif';
import SmaIndImageGif from '../../assets/images/chart/sma-histogram-indicator.gif';
import './chart-images.styles.scss'

export const LbrRsiImage = () => (
    <img src={LbrRsiImageGif} alt='lbr-rsi-momentum-pinball'/>
);

export const SmaChartImage = () => (
    <img src={SmaChartImageGif} alt='sma-histogram-chart'/>
);

export const SmaIndImage = () => (
    <img src={SmaIndImageGif} alt='sma-histogram-indicator'/>
);
