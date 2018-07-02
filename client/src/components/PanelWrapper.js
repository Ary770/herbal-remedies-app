import React from 'react';
import { Panel } from 'react-bootstrap';

const PanelWrapper = ({herb}) =>
  <Panel bsStyle="success">
    <Panel.Heading>
      <Panel.Title componentClass="h1"><b>{herb.name}</b></Panel.Title>
    </Panel.Heading>
    <Panel.Body>
      {herb.medicinal_uses ?
        <h3>Medicinal Uses</h3> :
        null
      }
      <p>{herb.medicinal_uses}</p>
      
      <h3>Properties:</h3>
      <p>{herb.properties}</p>

      <h3>Preparation & Dosage:</h3>
      <p>{herb.preparation}</p>
    </Panel.Body>
  </Panel>

export default PanelWrapper
