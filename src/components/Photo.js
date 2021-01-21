import React, { useState, useEffect} from 'react'

export default function Photo(props) {
    const { url } = props;
    const [photoData, setPhotoData] = useState([]);

    if(!props.url) {
        return(
            <h2>Loading. . . </h2>
        )
    };

    return (
        <div className='photoFrame'>
            <img src={props.url} alt='Danny' />
            <p className='caption'>Danny Boy</p>
        </div>
    )
}