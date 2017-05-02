var React = require('react');
var {IndexLink, Link} = require('react-router');

// var About = React.createClass({
//   render: function() {
//     return (
//       <h3>
//         About Component
//       </h3>
//     );
//   }
// });

// var About = (props) => {
//   return <h3>About Component</h3>;
// }

var About = (props) => {
  return (
    <div>
        <h1 className="text-center">About</h1>
          <div className="callout primary">
            <h5>This is About Example</h5>
            <p>Some links:</p>
            <ul>
                <li><IndexLink to="/">Home Page</IndexLink></li>
                <li><a href="https://github.com/komputeros/ReactWeathe" target="_blank">GitHub Repo</a></li>
                <li><a href="http://vast-plains-83197.herokuapp.com" target="_blank">Heroku Weather App</a></li>
            </ul>
            <a href="#">It's dangerous to go alone, take this.</a>
          </div>
    </div>
);
}

module.exports = About;
