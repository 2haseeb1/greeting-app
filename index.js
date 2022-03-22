import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// let fname =" John";
// let lname =" Mil";
let currDate = new Date();
    currDate =currDate.getHours();
let greeting ='';
const cssStyle={
  color:'green'
};
if(currDate>=1 && currDate<=12){
  greeting="Good Morning";
  cssStyle.color='red'
}else if(currDate>=12 && currDate <=19){
  greeting ="Good Afternoon";
  cssStyle.color='seagreen'
}else {
  greeting ="Good Night";
  cssStyle.color='hotpink'
}
ReactDOM.render(
 <>

 
 <h1 contentEditable="true" className='headingFormat'>Hello Sir<span style={cssStyle}>{greeting}</span> </h1>

  </>,
   document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

