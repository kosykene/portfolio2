import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";

export default ({ selected }) => {
    return (

        <header className="app-header bg-blue" style={{
            zIndex: 999, textAlign: 'center'
        }}>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Allison Kosy 🦁| {selected}</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className="container middle flex">
                <div className="fixed  primary">
                    <a target="blank" href="https://twitter.com/kosisoali" className="social-link">
                        <i className="fab fa-twitter"></i>
                    </a>

                    <a target="blank" href="https://instagram.com/allisonkosy" className="social-link">
                        <i className="fab fa-instagram"></i>
                    </a>

                    <a target="blank" href="https://github.com/kosiken" className="social-link">
                        <i className="fab fa-github"></i>
                    </a>

                    <a className="social-link">
                        <i className="fab fa-message"></i>
                    </a>
                </div>
                <div className="logo-div" style={{
                    flex: 1
                }}>
                    <span id="logo">AKR</span>
                </div>

                <nav className="nav" style={{
                    flex: 2
                }}>
                    <ul className="unstyled">
                        <li className="inline">
                            <Link className={'link ' + (selected === 'home' ? 'active' : '')} to="/">Home</Link>
                        </li>
                        <li className="inline">
                            <Link className={'link ' + (selected === 'about' ? 'active' : '')} to="/about_me">About Me</Link>
                        </li>

                    </ul>
                </nav>

            </div>
        </header>
    )
}
