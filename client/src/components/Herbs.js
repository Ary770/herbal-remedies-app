import React from 'react';
import { Link } from 'react-router-dom';

class Herbs extends React.Component {
  render() {
    let herbs = null;
    if (this.props.herbs) {
      herbs = this.props.herbs.map(herb =>
        <h4 key={herb.id}>
          <li role='presentation'>
            <Link to={`${this.props.url}/${herb.id}`}>{herb.name}</Link>
            <span>  </span>
            <button
              className='btn-like'
              type='button'
              data-id={herb.id}
              onClick={ event => this.props.likesHandler(event) }
              >
              <span data-id={herb.id} className="glyphicon glyphicon-thumbs-up"></span> {herb.likes}
            </button>
          </li>
        </h4>
      );
    }

    return (
      <div className="col-sm-5">
        <ul className="nav nav-pills nav-stacked">
          {herbs}
        </ul>
      </div>
    )
  }
}

export default Herbs;
