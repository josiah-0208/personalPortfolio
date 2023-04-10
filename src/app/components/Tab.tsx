import React from 'react'

type Props = {
    categorie: string,
}

const Tab = (props: Props) => {
  return (
    <li className='text-sky-500/25 hover:text-sky-500 transition duration-300'>
        {props.categorie}
    </li>
  ) 
}

export default Tab