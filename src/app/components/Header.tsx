import React, { useEffect } from 'react'
import ModeSwitch from './ModeSwitch'


type Props = {}

function Header({}: Props) {
    // use client를 써서
    // home about experience flags 다크모드 영어
    useEffect(() => {
        //렌더링 되면, url에서 가져오기
    }, [])
    if () {
        return (
            <header className="h-16 ">
                <ModeSwitch></ModeSwitch>
            </header>
          )
    } else if () {
        return (
            <div>
                
            </div>
        )
    }
  
}

export default Header