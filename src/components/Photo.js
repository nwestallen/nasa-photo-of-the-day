import React, { useState, useEffect} from 'react';
import styled from 'styled-components';

export default function Photo(props) {
    const { url, caption } = props;
    const [photoData, setPhotoData] = useState([]);

    if(!props.url) {
        return(
            <h2>Loading. . . </h2>
        )
    };

    const Picture = styled.img`
    height: 200px;
    width: 200px;
    `;

    const PhotoFrame = styled.div`
    background-color: gray;
    margin: 1rem 0.25rem;
    padding: 1rem;
    `;

    const PhotoCaption = styled.p`
    word-wrap: normal;
    max-width: 200px;
    `;

    return (
        <PhotoFrame>
            <Picture src={props.url} alt='Danny' />
            <PhotoCaption className='caption'>{props.caption}</PhotoCaption>
        </PhotoFrame>
    )
}