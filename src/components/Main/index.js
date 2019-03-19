import React, { Component } from 'react'
import { connect } from 'react-redux'

import { setOrigin, setDestination, getDistanceMatrix } from '../../store/actions'
import MainForm from './mainForm'
import DistanceData from './distanceData'

class Main extends Component {
  handleSubmit = async evt => {
    evt.preventDefault()
    const { origin, destination } = this.props.directions

    if (!origin || !destination) {
      return false
    }

    this.props.getDistanceMatrix(
      origin.formatted_address || null, 
      destination.formatted_address || null)
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
        {this.props.directions.distance 
          ? <DistanceData 
              distance={this.props.directions.distance.distance.text} 
              duration={this.props.directions.distance.duration.text} 
            />
          : null}
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