import React, { useContext } from 'react'
import DataContext from '../DataProvider'

function Footer() {
  const {data} = useContext(DataContext)
  const {footer} = data;

  return (
    <footer className='h-28 flex'>

      <h5 className='text-2xl text-center m-auto w-full bg-[#EEEBFF] dark:bg-[#B7AAFF]'>{footer.firstRow}<br />{footer.secondRow}</h5>

    </footer>
  )
}

export default Footer