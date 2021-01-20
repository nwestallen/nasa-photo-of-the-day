import React, { useState, useEffect} from 'react'

export default function Photo(props) {
    const { url } = props;
    const [photoData, setPhotoData] = useState([]);

    return (
        <img src={props.url} alt='Danny' />
    )
}