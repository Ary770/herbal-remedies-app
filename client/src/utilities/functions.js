// export const likesHandler = (event) => {
//   const herbId = event.target.dataset.id;
//   debugger;
//   if (this.props.liked.includes(herbId)) {
//     return null
//   } else {
//     debugger
//     this.props.actions.likedHerb(herbId);
//     this.props.history.replace('/herbs');
//     this.props.actions.postLike(herbId);
//   }
// };
export const updatePath = (props) => {
  switch (props.match.path) {
    case '/herbs/:herbId':
      return props.history.replace('/herbs')
    case '/favorite_herbs/:herbId':
      return props.history.replace('/favorite_herbs')
    case '/medicinal_uses/herbs/:herbId':
      return props.history.replace('/medicinal_uses')
    default:
      return null
  }
}
