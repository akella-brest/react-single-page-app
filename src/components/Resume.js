import React, { Component } from 'react';

class Resume extends Component {
    render() {
        if(this.props.data){
            var educations = this.props.data.education.map(function(education) {
                return <div className="row item">
                    <div className="twelve columns">
                        <h3>{education.school}</h3>
                        <p className="info">{education.degree} <span>&bull;</span> <em className="date">{education.graduated}</em></p>
                        <p>{education.description}</p>
                    </div>
                </div>
            });
            var works = this.props.data.work.map(function(work) {
                return <div className="row item">
                    <div className="twelve columns">
                        <h3>{work.company}</h3>
                        <p className="info">{work.title} <span>&bull;</span> <em className="date">{work.years}</em></p>
                        <p>{work.description}</p>
                    </div>
                </div>
            });
            var skills = this.props.data.skills.map(function(skill) {
                return <li key={skill.name}>
                    <span className="bar-expand" style={{width:skill.level}}></span>
                    <em>{skill.name}</em>
                </li>
            });
        }

        return (
            <section id="resume">
                <div className="row education">
                    <div className="three columns header-col">
                        <h1><span>Education</span></h1>
                    </div>
                    <div className="nine columns main-col">
                        {educations}
                    </div>
                </div>
                {/*<div className="row work">*/}
                    {/*<div className="three columns header-col">*/}
                        {/*<h1><span>Work</span></h1>*/}
                    {/*</div>*/}
                    {/*<div className="nine columns main-col">*/}
                        {/*{works}*/}
                    {/*</div>*/}
                {/*</div>*/}
                <div className="row skill">
                    <div className="three columns header-col">
                        <h1><span>Skills</span></h1>
                    </div>
                    <div className="nine columns main-col">
                        <p></p>
                        <div className="bars">
                            <ul className="skills">
                                {skills}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Resume;
