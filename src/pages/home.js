import React, { Component } from 'react';

import Header from '../layout/Header';
import CanvasEle from '../layout/Canvas';
import pic from '../lon.svg'
export default class Home extends Component {
    state = {

    }
    render() {
        return (
            <div className="content bg-blue">


                <Header selected="home" />
                <div className="grid-flex">
                    <div className="flex" id="bigger">
                        <p className="large-text primary">Hi, My name is <span className="bold white"> Allison Kosy</span>. I am a javascript developer and lowkey UI designer</p>


                    </div>
                    <div id="smaller" className="bg-white flex">
                        <img style={{
                            width: '80%'
                        }} src={pic} />
                    </div>
                </div>

                <div className="projects bg-blue">
                    <div className="container">
                        <div id="top">
                            <div className="project-info haf card">
                                <p className="primary large-text">
                                    10
     </p>
                                <p className="white">
                                    Web projects
     </p>
                            </div>
                            <div className="project-info haf card">
                                <p className="primary large-text">
                                    2
     </p>
                                <p className="white">
                                    Mobile projects
     </p>
                            </div>
                        </div>

                        <div id="bottom">
                            <div className="project-info haf">
                                <p className="primary large-text">
                                    2
     </p>
                                <p className="white">
                                    Native Desktop projects
     </p>
                            </div>
                            <div className="project-info haf">
                                <p className="primary large-text">
                                    1
     </p>
                                <p className="white">
                                    AI projects
     </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}