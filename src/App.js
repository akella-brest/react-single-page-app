import React, { Component } from 'react';
import './App.css';

import About from './components/About';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Testimonials from './components/Testimonials';

import $ from 'jquery';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            myData: {}
        }
    }

    componentDidMount(){
        this.getMyData();
    }

    getMyData(){
        $.ajax({
            url: "http://localhost:3000/data.json",
            dataType: "json",
            cache: false,
            success: function(data) {
                this.setState({myData: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.log(err);
                alert(err);
            }
        });
    }

    render() {
        console.log(this.state.myData);
        return (
            <div className="App">
                <Header data={this.state.myData.main} />
                <About data={this.state.myData.main} />
                <Resume data={this.state.myData.resume} />
                <Portfolio data={this.state.myData.portfolio} />
                {/*<Testimonials data={this.state.myData.testimonials}/>*/}
                <Contacts />
                <Footer data={this.state.myData.main} />
            </div>
      );
    }
}

export default App;
