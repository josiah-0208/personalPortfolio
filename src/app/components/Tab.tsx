import React from 'react'

type Props = {
    categorie: string,
}

const Tab = (props: Props) => {
  return (
    <li className='shadow-lg bg-sky-500 hover:text-sky-500 transition duration-300'>
        {props.categorie}
    </li>
  ) 
}

export default Tab