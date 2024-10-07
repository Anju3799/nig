import React from 'react'

const Wrapper = ({sectionId, children}) => {
  return (
    <section id={sectionId} className="mt-8">{children}</section>
  )
}

export default Wrapper