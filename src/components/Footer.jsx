import React, { useContext } from 'react'
import DataContext from '../DataProvider'

function Footer() {
  const {data} = useContext(DataContext)
  const {footer} = data;

  return (
    <footer>
      <h5 className='my-10 text-2xl text-center bg-[#EEEBFF]'>{footer.firstRow}<br />{footer.secondRow}</h5>
    </footer>
  )
}

export default Footer