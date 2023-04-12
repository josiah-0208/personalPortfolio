import React from 'react'
import Tab from '../components/Tab'

type Props = {}

export default function Top({ }: Props) {

    // 상단 탭 이름 배열을 미리 정의해둠.
    const categories: string[] = ["Introduce", "Protfolio", "Learning", "Etc"]

    return (
        <ul className='flex bg-gray-400 justify-around'>
            {/* 탭 이름 배열을 map으로 나열 */}
            {categories.map((categorie, index) => {
                return <Tab key={""+categorie+index} categorie={categorie}/>
            })}
        </ul>
    )
}   