import React, { Component } from 'react';

class Testimonials extends Component {
    render() {
        if (this.props.data){
            var textUsers = this.props.data.testimonials.map(function(textUser) {
                return <li>
                    <blockquote>
                        <p>{textUser.text}</p>
                        <cite>{textUser.user}</cite>
                    </blockquote>
                </li>
            });

        }

        return (
            <section id="testimonials">
                <div className="text-container">
                    <div className="row">
                        <div className="two columns header-col">
                            <h1><span>Client Testimonials</span></h1>
                        </div>
                        <div className="ten columns flex-container">
                            <div className="flexslider">
                                <ul className="slides">
                                    <li>{textUsers}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Testimonials;
