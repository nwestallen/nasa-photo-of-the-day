//Gallery goes here. Photos should be children of Gallery. Gallery should be child of App.
import React, { useState, useEffect} from 'react';
import axios from 'axios'
import styled from 'styled-components';
import Photo from "./Photo";

export default function Gallery(props) {
    const { data, chooseDate }= props

    const CalendarSection = styled.section`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    max-height: 1020px;
    width: 100%;
    overflow: auto;
    background-color: ${pr => pr.theme.darkerBlue};
    margin: auto;
    `;

    const WhiteSpace = styled.div`
    display: flex;
    flex-flow: column;
    width: 1400px;
    margin: auto;
    `;


    return (
    <WhiteSpace>
        <label htmlFor="datepicker">Choose End Date:    </label>
        <input id="datepicker" type="date" onChange={chooseDate} />
       <CalendarSection>
           {data.map(itm => <Photo url={itm.url} caption={itm.title} />)}
       </CalendarSection>
    </WhiteSpace>
    );
}