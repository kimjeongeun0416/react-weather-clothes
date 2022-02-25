import React from 'react'

import '../Clothes/Clothes.css';

function Clothes(props) {
    const currentTemp = props.currentTemp;  // 현재 날씨 받아오기
    
    // 온도별 계절 기준 정하기
    const winter = currentTemp <= 4;
    const earlyWinter = currentTemp > 4 && currentTemp < 9;
    const earlySpring = currentTemp >= 9 && currentTemp < 12;
    const spring = currentTemp >= 12 && currentTemp < 17;
    const earlyFall = currentTemp >= 17 && currentTemp < 20;
    const fall = currentTemp >= 20 && currentTemp < 23;
    const earlySummer = currentTemp >= 23 && currentTemp < 28;
    const summer = currentTemp >= 28;

    // 계절에 맞는 옷차림 함수
    const weatherClothes = () => {
        if (winter) {
            return "패딩, 두꺼운 코트, 목도리, 기모제품" 
        } else if(earlyWinter) {
            return "코트, 가죽자켓, 히트텍, 니트, 레깅스"
        } else if (earlySpring) {
            return "자켓, 트렌치 코트, 야상, 니트, 청바지, 스타킹"
        } else if (spring) {
            return "자켓, 가디건, 야상, 스타킹, 청바지, 면바지"
        } else if (earlyFall) {
            return "얇은 니트, 맨투맨, 가디건, 청바지"
        } else if (fall) {
            return "얇은 가디건, 긴팔, 면바지, 청바지"
        } else if (earlySummer) {
            return "반팔, 얇은 셔츠, 반바지, 면바지"
        } else {
            return "민소매, 반바지, 원피스"
        }
    }


    return (
        <div className='ClothesArea'>
            <div className='ClotheBox'>
                <div className='Text'>지금 날씨엔 </div>
                <div className='ClothesInfo'>{weatherClothes()}</div>
                <div className='Text'> 을(를) 추천해요</div>
            </div>
        </div>
    )
}

export default Clothes
