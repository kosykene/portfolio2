import React, { Component } from 'react'
import Header from '../layout/Header';
import pic from './gill.svg'
export default class About extends Component {
    state = {

    }
    render() {
        return (
            <div className="content bg-blue">

                <Header selected="about" />
                <div className="container " style={{
                    margin: '10vh auto'
                }}>
                    <p className="about-me white">
                        About Me, okay here we go now this is the about mne page. What to write okay lemme  figure it out. Well I am a guy, a good guy, an amazing guy, a sexy guy, a funny guy, some say I'm perfect but I just tell them I'm working towards it.
                        Okay on a more serious note now I am a developer with about a year and a half of experience building web, mobile and desktop applications with javascript and a
                        litte bit of python.
                </p>
                    <p className="primary">
                        Please this site is still in development
                </p>
                    <div style={{
                        textAlign: 'center',
                        margin: '20vh 0'
                    }}>
                        <img src={pic} id="think" />
                    </div>
                    <div className="Outside white">
                        <p className="about-me lowkey-scrolled">
                            Hey congratulations, you've scrolled to the other end of the page, this must mean you're really intrested in knowing me or you didn't know when you did it, either way I'm proud of you

                    </p>
                        <p className="about-me money">
                            Hey now that you are here, look I know you may not really know who I am and I may not know who you are but if you are feeling like you want anything from me like a website, or a kidney or maybe the answer to life's pertinent questions feel free to <span className="tooltip">contact me </span>
                            <span className="primary">
                                PS if you are my seceret admirer you should call me lets know each other my number is +234808..
                        </span>
                        </p>

                    </div>
                </div>

            </div>
        )
    }
}