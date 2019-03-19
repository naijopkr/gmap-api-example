import React from 'react'

const distanceData = props => {
  const { distance, duration } = props
  return (
    <div>
      <div>Distance: {distance || 'N/A'}</div>
      <div>Estimated duration: {duration || 'N/A'}</div>
    </div>
  )
}

export default distanceData