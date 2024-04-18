import React from 'react'

const footer = {firstRow: "Let's work together on", secondRow: "your next product."}

function Footer() {
  return (
    <footer>
      <h5 className='my-10 text-2xl text-center bg-[#EEEBFF]'>{footer.firstRow}<br />{footer.secondRow}</h5>
    </footer>
  )
}

export default Footer