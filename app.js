// const title = React.createElement(
//   'h1',
//   { id: 'main-title', title: 'This is a title.' },
//   'My First React Element!'
// );
//
// const desc = React.createElement(
//   'p',
//   null,
//   'I just learned how to create a React node and render it into the DOM.'
// // );
// const header = React.createElement(
//   'header',
//   null,
//   title,
//   desc
// );
//
// const header = (
//   <header>
//     <h1>My First React Element!</h1>
//     <p>I just learned how to create a React node and render it into the DOM</p>
//   </header>
//
// );


const desc = 'I just learned how to create a React node and render it into the DOM'
const myTitleID = 'main-title'
const name = 'Els';

const header = (
  <header>
    <h1 id = { myTitleID }>{ name }' First React Element!</h1>
    <p>{ desc }</p>
  </header>
);



ReactDOM.render(
  header,
  document.getElementById('root')
);
