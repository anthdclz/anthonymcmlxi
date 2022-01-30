import React from 'react';

class SubSkills extends React.Component {
    constructor() {
        super();
        this.state = {
            skills: []
        }
    }
    componentDidMount() {
        this.setState({
            skills: ['JavaScript', 'ES6+', 'HTML', 'CSS', 'React', 'Redux', 'jQuery', 'Sass', 'PHP', 'JSON', 'Responsive Web', 'Web Performance', 'Git', 'Bootstrap', 'Java', 'XML', 'SQL']
        });
    }
    render() {
        const { skills } = this.state;
        return (
            <div className='resume-section r-skill-wrapper m-top-10'>
                <h2 className='print-hidden'> </h2>
                {skills.map((skill, key) => (
                    <span key={key}>
                        <span className='r-skill'>{skill}</span>
                        {
                            key === 9 ? <br /> : key === skills.length -1 ? null : <span className='fw-sb'>•</span>
                        }
                    </span>
                ))}
            </div>
        );
    }
};
export default SubSkills;