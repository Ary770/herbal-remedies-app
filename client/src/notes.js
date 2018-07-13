//Previous Navbar:
<nav className="page-header">
  <ul className="nav nav-pills">
    <li role="presentation" className="active"><NavLink to="/herbs">Herbal Remedies</NavLink></li>
    <li role="presentation"><NavLink to="/medicinal-uses">Medicinal Uses</NavLink></li>
    <li role="presentation"><NavLink to="/properties">Herbal Properties</NavLink></li>
    <p className="navbar-text navbar-right">Data From: <a href="https://www.anniesremedy.com" className="navbar-link">anniesremedy.com</a></p>
  </ul>
</nav>

//In navbar, links to medicinal uses and properties components:
<NavLink className="nav-font-style" to="/medicinal-uses">Medicinal Uses</NavLink>
<NavLink className="nav-font-style" to="/properties">Herbal Properties</NavLink>


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

// Likes feature without persistance to the database:
// counterHandler = (event) => {
//   const herbId = event.target.dataset.id;
//   const matchingHerb = this.props.herbs.filter(herb => herb.id.toString() === herbId).pop();
//
//   if (matchingHerb.likes) {
//     ++matchingHerb.likes;
//   } else {
//     matchingHerb.likes = 1;
//   }
//
//   const newState = [...this.state.likes];
//
//   newState.push(matchingHerb)
//
//   this.setState({
//     likes: newState
//   })
// }

// Previous HerbsPage.js

// const HerbsPage = (props) => {
//   state = {
//     liked: []
//   }
//
//   const {match, herbs} = props;
//
  // const handleSearch = (event) => {
  //   const input = event.target.value
  //   props.actions.searchHerb(input)
  //
  //   if (input === "") {
  //     props.history.replace('/herbs')
  //   }
  // };
  //
  // const likesHandler = (event) => {
  //   const herbId = event.target.dataset.id;
  //   if (true) {
  //
  //   }
  //   props.actions.postLike(herbId);
  // }
//
//   return (
    // <div className='row'>
    //   <div className="col-lg-6">
    //     <h3>Herbal Remedies</h3>
    //     <input
    //       type="text"
    //       onChange={e => handleSearch(e)}
    //       className="form-control"
    //       placeholder="Search by Medicinal Uses, Herbal Properties or Herb Name..."
    //     />
    //   {console.log('In HerbsPage: ', herbs)}
    //     <br/>
    //     { herbs.length === 0 ? null : <Herbs likesHandler={likesHandler} url={match.url} herbs={herbs}/> }
    //     { props.error ? <Alert error={props.error}/> :
    //       <Route path={`${match.url}/:herbId`} component={HerbShow}/> }
    //   </div>
    // </div>
//   )
// }

//Statefull component Herbs.js
// class Herbs extends React.Component {
//   render() {
//     let herbs = null;
//     if (this.props.herbs) {
//       herbs = this.props.herbs.map(herb =>
//         <h4 key={herb.id}>
//           <li role='presentation'>
//             <Link to={`${this.props.url}/${herb.id}`}>{herb.name}</Link>
//             <span>  </span>
//             <button
//               className='btn-like'
//               type='button'
//               data-id={herb.id}
//               onClick={ event => this.props.likesHandler(event) }
//               >
//               <span data-id={herb.id} className="glyphicon glyphicon-thumbs-up"></span> {herb.likes}
//             </button>
//           </li>
//         </h4>
//       );
//     }
//
//     return (
//       <div className="col-sm-5">
//         <ul className="nav nav-pills nav-stacked">
//           {herbs}
//         </ul>
//       </div>
//     )
//   }
// }


// previous handleSearch method in properties.js
// handleSearch = (event) => {
//   const text = event.target.value
//
//   if (text !== "") {
//     const property = text.split(' ').map(
//       w => w.charAt(0).toUpperCase() + w.substr(1)
//     ).join(' ');
//
//     const matchingHerbs = this.props.herbs.filter(herb =>
//       herb.properties && herb.properties.includes(property.trim())
//     );
//
//     if (matchingHerbs) {
//       this.setState({
//         showHerbs: matchingHerbs
//       })
//     }
//   } else {
//     this.setState({ showHerbs: null });
//     this.props.history.replace('/properties')
//   }
// }
