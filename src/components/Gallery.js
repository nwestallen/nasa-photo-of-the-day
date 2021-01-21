//Gallery goes here. Photos should be children of Gallery. Gallery should be child of App.
import React, { useState, useEffect} from 'react';
import styled from 'styled-components';
import Photo from "./Photo";

export default function Gallery(props) {
    const [data, setData] = useState([])

    const GallerySection = styled.section`
    display: flex;
    flex-flow: row-wrap;
    justify-content: space-evenly;
    max-height: 510px;
    overflow: auto;
    background-color: #242729;
    `;


    return (
       <GallerySection>
           <Photo url={props.data.url} caption={props.data.title} />
           <Photo url={props.data.url} caption={props.data.title} />
       </GallerySection>
    );
}