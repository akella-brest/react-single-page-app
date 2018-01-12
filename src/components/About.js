import React, { Component } from 'react';

class About extends Component {
    render() {
        if (this.props.data) {
            var description = this.props.data.description;
            var image = this.props.data.image;
            var name = this.props.data.name;
            var street = this.props.data.address.street;
            var city = this.props.data.address.city;
            var country = this.props.data.address.country;
            var phone = this.props.data.phone;
            var email = this.props.data.email;
            var resumeDownload = this.props.data.resumeDownload;
        }

        return (
            <section id="about">
                <div className="row">
                    <div className="three columns">
                        <img className="profile-pic"  src={image} alt="" />
                    </div>
                    <div className="nine columns main-col">
                        <h2>About Me</h2>
                        <p>{description}</p>
                        <div className="row">
                            <div className="columns contact-details">
                                <h2>Contact Details</h2>
                                <p className="address">
                                    <span>{name}</span><br/>
                                    <span>{street}<br/>
                                        {city}, {country}
                           </span><br/>
                                    <span>{phone}</span><br/>
                                    <span>{email}</span>
                                </p>
                            </div>
                            <div className="columns download">
                                <p>
                                    <a href={resumeDownload} className="button" target="_blank">
                                        <i className="fa fa-download"></i>
                                        Download Resume
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;
