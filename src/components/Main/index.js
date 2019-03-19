import React, { Component } from 'react'
import { connect } from 'react-redux'

import { setOrigin, setDestination, getDistanceMatrix } from '../../store/actions'
import MainForm from '../Main/mainForm'

class Main extends Component {
  handleSubmit = async evt => {
    evt.preventDefault()
    const { directions } = this.props

    this.props.getDistanceMatrix(directions.origin.formatted_address, directions.destination.formatted_address)
  }

  handleOriginChange = place => {
    this.props.setOrigin(place)
  }

  handleDestinationChange = place => {
    this.props.setDestination(place)
  }

  render = () => {
    return (
      <div className='container'>
        <div className='card-panel'>
          <h2>Liftit</h2>
          <div>
            Fill the fields with origin and destination to get the estimated distance and time.
          </div>
        </div>
        <div className='row'>
          <MainForm 
            handleSubmit={this.handleSubmit} 
            handleOriginChange={this.handleOriginChange}
            handleDestinationChange={this.handleDestinationChange}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    directions: state.directions
  }
}

export default connect(mapStateToProps, {
  setOrigin, setDestination, getDistanceMatrix
})(Main)