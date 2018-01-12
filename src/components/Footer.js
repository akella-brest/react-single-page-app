import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="row">
                    <div className="twelve columns">
                        <ul className="social-links">
                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fa fa-vk"></i></a></li>
                            <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                            <li><a href="#"><i className="fa fa-github"></i></a></li>
                        </ul>
                        <ul className="copyright">
                            <li>&copy; Copyright 2017 Artsiom Pas</li>
                        </ul>
                    </div>
                    <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
                </div>
            </footer>
        );
    }
}

export default Footer;
