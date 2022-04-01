import React, { useState, useEffect } from 'react';
import '../Weather/Weather.css';

function Weather(props) {
     // 배경이미지 선택자 변수로 지정
    const backImage = document.querySelector('.WeatherArea');
    const currentTemp = props.temperature;  // 현재 날씨 받아오기
    
    //console.log(currentTemp);
    //console.log(backImage);
    // 온도별 계절 기준 정하기
    const winter = currentTemp <= 4;
    const earlyWinter = currentTemp > 4 && currentTemp < 9;
    const earlySpring = currentTemp >= 9 && currentTemp < 12;
    const spring = currentTemp >= 12 && currentTemp < 17;
    const earlyFall = currentTemp >= 17 && currentTemp < 20;
    const fall = currentTemp >= 20 && currentTemp < 23;
    const earlySummer = currentTemp >= 23 && currentTemp < 28;
    const summer = currentTemp >= 28;
   

    // 계절에 맞는 배경이미지 함수
    const weatherBg = () => {
        if (winter) {
            backImage.style.backgroundImage = "url(../images/winter.jpeg)"; 
        } else if(earlyWinter) {
            backImage.style.backgroundImage = "url(../images/earlyWinter.jpeg)"; 
        } else if (earlySpring) {
            backImage.style.backgroundImage = "url(../images/earlySpring.jpeg)"; 
        } else if (spring) {
            backImage.style.backgroundImage = "url(/static/media/spring.jpeg)"; 
        } else if (earlyFall) {
            backImage.style.backgroundImage = "url(../images/earlyFall.jpeg)"; 
        } else if (fall) {
            backImage.style.backgroundImage = "url(../images/fall.jpeg)"; 
        } else if (earlySummer) {
            backImage.style.backgroundImage = "url(../images/earlySummer.jpeg)"; 
        } else {
            backImage.style.background = "url(../images/summer.jpeg)"; 
        }
    }
    
    return (
        <div className='WeatherArea' >
            
            <div className='TempInfo'>
                <div className='text'><span>{props.place}</span></div>
                <div className='Temp'> {Math.round(props.temperature*10)/10} ℃ </div>
                <div className='Desc'> <span>{props.weatherDesc}</span></div>
            </div>
            <div className='WeatherInfo'>
                <div> 체감 기온은 {Math.round(props.feelTemp*10)/10} ℃ </div>
                <div> 최저 기온은 {Math.round(props.minTemp*10)/10} ℃ </div>
                <div> 최고 기온은 {Math.round(props.maxTemp*10)/10} ℃ </div>
            </div>
        </div>
    )
}

export default Weather
