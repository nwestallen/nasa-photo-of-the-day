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
    const displayDates = [...monthDates].map(monthDate => monthDate.toDateString());
    for(let i =0; i < firstDay.getDay(); i ++) {
        displayDates.unshift('');
    }

    const CalendarArea = styled.div`
        display: flex;
        flex-flow: row wrap;
    `;

    const CalendarSquare = styled.div`
        position: relative;
        width: 14%;
        margin: 2px 0;
       :before {
           content: '';
           display: block;
           padding-top: 100%;
       }
    `;

    const WeekSquare = styled.div`
        position: relative;
        width: 14%;
        margin: 2px 0;
        :before {
            content: '';
            display: block;
            padding-top: 20%;
        }
    `;

    const SquareContent = styled.div`
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          background: #333;
          color: #fff;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
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
            <WeekSquare>
                <SquareContent>
                    {weekDay}
                </SquareContent>
            </WeekSquare>
                )}
            {displayDates.map(monthDate => 
            <CalendarSquare>
                <SquareContent>
                    {monthDate}
                </SquareContent>
            </CalendarSquare>)}
        </CalendarArea>
    )
}

export default Calendar;