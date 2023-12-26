import styled from "styled-components";


export const CalendarBox = styled.div`
 width: 800px;
   border-radius: 5px;
   text-transform: capitalize;
   background-color: var(--background-color-calendar);
   margin: 0 auto;`

export const App_container = styled.div`
	display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   background-color: gray;
   height: 100vh;
   margin-inline: auto;
   gap: 20px;
`;


export const Date_container = styled.div`
	display: flex;
   justify-content: center;
   align-content: center;
   padding: 20px;
   gap: 20px;
   
`;



export const Calendar__header = styled.div`
  position: relative;
   border-radius: 5px 5px 0 0;
   background-color: white;
   color: black;
   padding: 10px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   box-shadow: 0px 2px 10px -1px rgba(0, 0, 0, 0.2);`



export const Calendar__body = styled.div` 
border-radius: 0 0 5px 5px;
padding: 5px;
`


export const Calendar__week__names = styled.div`
  height: 20px;
   font-weight: 600;
   font-size: 8px;
   color: var(--color-additional);
   text-align: center;
   align-items: center;
   display: grid;
   grid-template-columns: repeat(7, 1fr);
   gap: 1px 1px;`

export const Calendar__days = styled.div`
  font-size: 10px;
   font-weight: 400;
   color: var(--color-text);
   text-align: center;
   display: grid;
   text-align: center;
   align-items: center;
   grid-template-columns: repeat(7, 1fr);
   grid-template-rows: 1fr;
   gap: 10px 10px;`

export const Calendar__day = styled.div`
    border-radius: 5px;
   padding: 5.5px 0px;
   cursor: pointer;
   
&:hover {
  background : grey;
}`



export const Calendar__additional__day = styled.div`
   padding: 5.5px;
   font-weight: 300;
   cursor: pointer;
   color: var(--color-placeholder);`


export const Calendar__pick__item = styled.div`
 padding: 9px 0px;
   display: flex;
   justify-content: center;
   align-items: center;
   cursor: pointer;
   border-radius: 5px;
    
&:hover {
  background : grey;
}
   `


export const Calendar__today__item = styled.div` 
   background-color: var(--background - color - calendar - header);`


export const Calendar__selected__item = styled.div`  
color: var(--color - text);
background-color: var(--color - additional);
 
 &:hover {
   background-color: var(--color - additional)}`



export const Calendar__pick__items__container = styled.div`
 font-weight: 400;
   color: var(--color-text);
   text-align: center;
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   grid-template-rows: repeat(4, 1fr);
   gap: 1px 1px;
   font-size: 12px;`

export const Calendar__unchoosable__year = styled.div`
   font-weight: 300;
   padding: 9px 16px;
   color: var(--color-placeholder);`


