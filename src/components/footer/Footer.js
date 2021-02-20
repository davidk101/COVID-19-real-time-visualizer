import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
    return(
        <div className = {styles.container}>
            <a  target="_blank" href = "https://github.com/CSSEGISandData/COVID-19">
                <div>
                    <i className = "fa fa-info-circle"></i>
                    Data extracted from the John Hopkins University CSSE COVID-19 Data Repository
                </div>
                <div>
                    <i className="fas fa-clock"></i>
                    Updated daily between 04:45 and 05:15 GMT
                </div>
            </a>

            <a target = "_blank" href = "https://www.linkedin.com/in/davidkumar101/">
                <div>
                    <i className="fas fa-user"></i>
                    Developed by David Kumar
                </div>
            </a>

        </div>
    )
}

export default Footer;