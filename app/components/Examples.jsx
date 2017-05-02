var React = require('react');
var {Link} = require('react-router');

// var Examples = React.createClass({
//   render: function() {
//     return (
//       <h3>Examples component</h3>
//     );
//   }
// });

var Examples = (props) => {
return (
  <div>
    <h1 className="text-center">Examples!</h1>
    <p>Here are few exampels location to try out:</p>
    <ol>
      <li>
        <Link to='/?location=Warszawa'>Warszawa</Link>
      </li>
      <li>
        <Link to='/?location=Bialystok'>Białystok</Link>
      </li>
    </ol>
  </div>
);
}
module.exports = Examples;
