//Banner goes here. Should be child of App.js. Could have date picker as child, idk.
import React, { useState, useEffect} from 'react';
import styled from 'styled-components';

export default function Banner() {
    const logoURL = 'https://www.nasa.gov/sites/default/files/styles/side_image/public/thumbnails/image/nasa-logo-web-rgb.png?itok=uDhKSTb1';

    const StyledHeader = styled.header`
        background-color: ${pr => pr.theme.darkestBlue};
        display: flex;
        align-items: center;
        height: 100px;
    `;

    const StyledH1 = styled.h1`
        color: white;
    `;

    const Logo = styled.img`
    max-height: 98%;
    `

    return (
        <StyledHeader>
            <Logo src={logoURL} alt="NASA logo"/>
            <StyledH1>NASA Photos of the Day</StyledH1>
        </StyledHeader>
    );
}