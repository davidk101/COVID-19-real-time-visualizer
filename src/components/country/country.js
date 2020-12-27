import React, {useState, useEffect} from 'react'
import {NativeSelect, FormControl} from "@material-ui/core"
import styles from './country.module.css'

const country = () => {
    return (
        <FormControl className = {styles.formControl}>
            <NativeSelect>
                <option value = "global"> Global</option>
            </NativeSelect>
        </FormControl>
    )
}

export default country