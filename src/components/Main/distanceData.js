import React from 'react'

const distanceData = props => {
  const { distance, duration } = props
  return (
    <div>
      <div>Distance: {distance}</div>
      <div>Estimated duration: {duration}</div>
    </div>
  )
}

export default distanceData