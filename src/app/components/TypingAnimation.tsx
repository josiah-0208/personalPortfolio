'use client'
import React, { useEffect, useState } from 'react'

type Props = {
    txt: string,
}

const TypingAnimation = (props: Props) => {
    const [txt, setTxt] = useState(props.txt)

    useEffect(() => {

    }, [])

    return (
        <div>
            {txt}
        </div>
    )
}

export default TypingAnimation