import React from 'react'
import Link from 'next/link'

type Props = {
  categorie: string,
}

const Tab = (props: Props) => {
  return (
    <li className='shadow-lg bg-sky-500 hover:text-sky-500 transition duration-300'>
      <Link href="/">
        {props.categorie}
      </Link>
    </li>
  )
}

export default Tab