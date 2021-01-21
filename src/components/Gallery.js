//Gallery goes here. Photos should be children of Gallery. Gallery should be child of App.
import React, { useState, useEffect} from 'react';
import axios from 'axios'
import styled from 'styled-components';
import Photo from "./Photo";

export default function Gallery(props) {
    const { data }= props

    const GallerySection = styled.section`
    display: flex;
    flex-flow: row-wrap;
    justify-content: space-evenly;
    max-height: 510px;
    width: 90%;
    overflow: auto;
    background-color: #242729;
    margin: auto;
    `;


    return (
       <GallerySection>
           {[1,2,3].map(itm => <Photo url={data.url} caption={data.title} />)}
       </GallerySection>
    );
}