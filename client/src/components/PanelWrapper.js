import React from 'react';
import { Panel } from 'react-bootstrap';
import Aux from '../HOC/Aux'

const PanelWrapper = ({herb, hidePanel}) => {
  let medicinal_uses = null;
  let properties = null;

  if (herb.medicinal_uses !== "") {
    medicinal_uses = <Aux>
                        <h3>Medicinal Uses</h3>
                        <p>{herb.medicinal_uses}</p>
                     </Aux>
  }

  if (herb.properties !== "") {
    properties = <Aux>
                        <h3>Medicinal Uses</h3>
                        <p>{herb.properties}</p>
                     </Aux>
  }

  return (
    <Panel bsStyle="success">
      <Panel.Heading>
        <Panel.Title componentClass="h1">
          <b>{herb.name}</b>
          <button onClick={hidePanel} type="button" className="close" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </Panel.Title>
      </Panel.Heading>
      <Panel.Body>

        {medicinal_uses}

        {properties}

        <h3>Preparation & Dosage</h3>
        <p>{herb.preparation}</p>

      </Panel.Body>
    </Panel>
  )
}


export default PanelWrapper
