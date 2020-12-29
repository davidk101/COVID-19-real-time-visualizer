import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
    return(
        <div className = {styles.container}>
            <a  href = " https://coronavirus.jhu.edu/map.html">
                <div>
                    <i className = "fa fa-info-circle"></i> Data extracted from John Hopkins Coronavirus Resource Center
                </div>
            </a>
        </div>
    )
}

export default Footer;