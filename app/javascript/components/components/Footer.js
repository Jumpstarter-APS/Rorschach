import React, { Component, Fragment } from 'react'


class Footer extends Component {
    render() {
        return (
            <Fragment>
                <footer className='mt-auto' id= 'footer'>
                    <div>
                        <a href='#top'>
                            Return Top
                        </a>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <p> Sami, Alejandro & Priscila | &#169; 2021</p>
                    </div>
                </footer>
            </Fragment>
        )
    }
}
export default Footer