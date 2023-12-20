import styled from "styled-components";

export const App_container = styled.div`
	display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   background-color: gray;
   height: 100vh;
   margin-inline: auto;
   
`;


export const Date_container = styled.div`
	display: flex;
   justify-content: center;
   align-content: center;
   padding: 20px;
  
   
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



export const Calendar__header__arrow__left = styled.div`  
width: 5px;
height: 10px;
cursor: pointer;
background-image: var(--images-arrow);`

export const Calendar__header__arrow__right = styled.div`
   width: 5px;
height: 10px;
cursor: pointer;
background-image: var(--images - arrow);
transform: rotate(-180deg);` 