//Calendar component goes here
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Calendar = (props) => {

    const { targetDate } = props;
    const goodDate = new Date(targetDate);
    const month = goodDate.getMonth();
    const year = goodDate.getFullYear();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const monthDates = []
    for (let i = 1; i <= lastDay.getDate(); i++) {
        monthDates.push(new Date(year, month, i));
    }
    for(let i =0; i < firstDay.getDay(); i ++) {
        monthDates.unshift(goodDate);
    }

    const CalendarArea = styled.div`
        display: flex;
        flex-flow: row wrap;
        position: relative;
    `;

    const CalendarSquare = styled.div`
        width: 14%;
        margin: 2px 0px;
       :before {
           content: '';
           display: block;
           padding-top: 100%;
       }
    `;

    const SquareContent = styled.div`
          background: #333;
          color: #fff;
          /*   display: flex;
          align-items: center; */
          height: 100%;
          line-height: 100%;
          display: flex;
          flex-flow: column nowrap;
          justify-content: center;
          border: 2px solid black;
    `;


    return (
        <CalendarArea>
            {['Sun','Mon','Tue','Wed','Thur','Fri','Sat'].map(weekDay =>
                <CalendarSquare>
                    <SquareContent>
                        {weekDay}
                    </SquareContent>
                </CalendarSquare>)}
            {monthDates.map(monthDate => 
            <CalendarSquare>
                <SquareContent>
                    {monthDate.toDateString()}
                </SquareContent>
            </CalendarSquare>)}
        </CalendarArea>
    )
}

export default Calendar;