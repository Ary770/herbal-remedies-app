import React from 'react';
import { connect } from 'react-redux';
import { Panel } from 'react-bootstrap';
import '../App.css';

const HerbShow = ({ herb }) => {
  const panel = <Panel>
                  <Panel.Heading>
                    <Panel.Title componentClass="h1"><b>{herb.name}</b></Panel.Title>
                  </Panel.Heading>
                  <Panel.Body>
                    <h3>Medicinal Uses:</h3>
                    <p>{herb.medicinal_uses}</p>

                    <h3>Properties:</h3>
                    <p>{herb.properties}</p>

                    <h3>Preparation:</h3>
                    <p>{herb.preparation}</p>
                  </Panel.Body>
                </Panel>

  return (
    <div className='col-md-8'>
      <div className='Static'>
        {panel}
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const herb = state.herbs.herbs.find(herb =>
    herb.id.toString() === ownProps.match.params.herbId
  )

  if (herb) {
    return { herb }
  } else {
    return { herb: {} }
  }
}

export default connect(mapStateToProps)(HerbShow);
