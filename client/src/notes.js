<nav className="page-header">
  <ul className="nav nav-pills">
    <li role="presentation" className="active"><NavLink to="/herbs">Herbal Remedies</NavLink></li>
    <li role="presentation"><NavLink to="/medicinal-uses">Medicinal Uses</NavLink></li>
    <li role="presentation"><NavLink to="/properties">Herbal Properties</NavLink></li>
    <p className="navbar-text navbar-right">Data From: <a href="https://www.anniesremedy.com" className="navbar-link">anniesremedy.com</a></p>
  </ul>
</nav>


// Atl NavBar:
<nav className="navbar navbar-default">
  <div className="container-fluid">
    <div className="navbar-header">
      <NavLink className="navbar-brand" id='logo-link' to="/herbs"><img alt='logo' src={leafLogo} style={style}/></NavLink>
    </div>
    <div className="collapse navbar-collapse" id="navbar">
      <ul className="nav navbar-nav">
        <li><NavLink className="btn btn-default navbar-btn" to="/medicinal-uses">Medicinal Uses</NavLink></li>
        <li><NavLink to="/properties">Herbal Properties</NavLink></li>
      </ul>
      <ul className="nav navbar-nav navbar-right">
        <li><a href="https://www.anniesremedy.com" className="navbar-link">Data from: anniesremedy.com</a></li>
      </ul>
    </div>
  </div>
</nav>

//Old functional component Herbs.js

// const Herbs = (props) => {
//   let herbs = null;
//
//   if (props.herbs) {
//     herbs = props.herbs.map(herb =>
//       <h4 key={herb.id}>
//         <li role='presentation'>
//           <Link to={`${props.url}/${herb.id}`}>{herb.name}</Link>
//           <button type='button' onClick={increaseCount}></button>
//         </li>
//       </h4>
//     )
//   }
//
//   return (
//     <div className="col-sm-3">
//       <ul className="nav nav-pills nav-stacked">
//         {herbs}
//       </ul>
//     </div>
//   )
// }
 
counterHandler = (event) => {
  const herbId = event.target.dataset.id;
  const matchingHerb = this.props.herbs.filter(herb => herb.id.toString() === herbId).pop();

  if (matchingHerb.likes) {
    ++matchingHerb.likes;
  } else {
    matchingHerb.likes = 1;
  }

  const newState = [...this.state.likes];

  newState.push(matchingHerb)

  this.setState({
    likes: newState
  })
}
