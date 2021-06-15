import React from 'react';
import Header from '../../components/header/header.component';

import { GamepadIcon } from '../../components/coffee-icon/coffee-icon.component';
import { MeshImage1, MeshImage2, ShadingImage, UnityImage1, UnityImage2, UnityImage3, UnityImage4 } from '../../components/game-images/game-images.component';
import './video-game-design-page.styles.scss';






class VideoGameDesignPage extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render(){
        return (
<div>
    <Header />
    <div className='page-content'>
        <div className='page-wrapper'>
            <div className='page-header m-top-60'>
                <h2>Video Game Design</h2>
            </div>
            <div className='page-divider'></div>
            <div className='page-flex'>
                <div className='page-column'>
                    <div><GamepadIcon />I've been into video games for a long time and finally took the plunge to see what it takes to design a more fleshed-out game. The following are some pieces of my journey.</div>
                    <div className='m-top-20'>Here's a character mesh I created after "graduating" past the cube phase. I used <span className='fw-sb'>Rigify</span> to help rig the model up for animation. These were done in <span className='fw-sb'>Blender</span>.</div>
                </div>
                <div className='page-column'>
                    <div className='page-flex'>
                        <div className='page-column'>
                            <MeshImage1 />
                        </div>
                        <div className='page-column'>
                            <MeshImage2 />
                        </div>
                    </div>
                </div>
            </div>
            <div className='page-flex m-top-60'>
                <div className='page-column'>
                    <div>The same model UV mapped and shaded.</div>
                </div>
                <div className='page-column'>
                    <ShadingImage />
                </div>
            </div>
            <div className='page-flex m-top-60'>
                <div className='page-column'>
                    <div>After I was happy with the animation in Blender, I imported the model into my game. Here are some keyframes shown in <span className='fw-sb'>Unity</span>.</div>
                </div>
                <div className='page-column'>
                <div className='page-flex'>
                        <div className='page-column'>
                            <UnityImage1 />
                        </div>
                        <div className='page-column'>
                            <UnityImage2 />
                        </div>
                    </div>
                </div>
            </div>
            <div className='page-flex m-top-20'>
                <div className='page-column'>
                    <UnityImage3 />
                </div>
                <div className='page-column'>
                    <UnityImage4 />
                </div>
            </div>
            <div className='page-divider'></div>
        </div>
    </div>
</div>
        )
    }
}

export default VideoGameDesignPage;