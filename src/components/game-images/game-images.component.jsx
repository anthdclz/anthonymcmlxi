import React from 'react';
import MeshImage1Gif from '../../assets/images/game/mesh1.gif';
import MeshImage2Gif from '../../assets/images/game/mesh1.gif';
import ShadingImageGif from '../../assets/images/game/shading2.gif';
import UnityImage1Gif from '../../assets/images/game/unity1.gif';
import UnityImage2Gif from '../../assets/images/game/unity2.gif';
import UnityImage3Gif from '../../assets/images/game/unity3.gif';
import UnityImage4Gif from '../../assets/images/game/unity4.gif';
import './game-images.styles.scss'

export const MeshImage1 = () => (
    <img src={MeshImage1Gif} alt='mesh-front'/>
);

export const MeshImage2 = () => (
    <img src={MeshImage2Gif} alt='mesh-side'/>
);

export const ShadingImage = () => (
    <img src={ShadingImageGif} alt='uv-shading'/>
);

export const UnityImage1 = () => (
    <img src={UnityImage1Gif} alt='animation-1' />
);

export const UnityImage2 = () => (
    <img src={UnityImage2Gif} alt='animation-2' />
);

export const UnityImage3 = () => (
    <img src={UnityImage3Gif} alt='animation-3' />
);

export const UnityImage4 = () => (
    <img src={UnityImage4Gif} alt='animation-4' />
);



