import React from 'react'

const Heading = ({ title, style }) => {
  return (
    <div className={`${style} underline underline-offset-2`}>
      {title}
    </div>
  )
}

export default Heading