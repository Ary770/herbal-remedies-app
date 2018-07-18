import React from 'react';
import { Panel } from 'react-bootstrap';

const PanelWrapper = ({herb, hidePanel}) => {
  let medicinal_uses = null;
  let properties = null;

  if (herb.medicinal_uses) {
    medicinal_uses = herb.medicinal_uses.map((name, index, array) =>
      array[index] !== array[array.length - 1] ? name + (', ') : name
    )
  }

  if (herb.properties) {
    properties = herb.properties.map((name, index, array) =>
      array[index] !== array[array.length - 1] ? name + (', ') : name
    )
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
        { herb.medicinal_uses ?
          <h3>Medicinal Uses</h3> :
          null
        }
        <p>{medicinal_uses}</p>

        <h3>Properties</h3>
        <p>{properties}</p>

        <h3>Preparation & Dosage</h3>
        <p>{herb.preparation}</p>
      </Panel.Body>
    </Panel>
  )

  }


export default PanelWrapper
