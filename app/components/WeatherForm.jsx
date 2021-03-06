var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault();
    var location = this.refs.location.value;

    if(location.length > 0){
      this.refs.location.value = "";
      this.props.onSearch(location);
    }
  },

  render: function() {
    return (
      <form onSubmit={this.onFormSubmit}>
          <input type="search" placeholder="Search weather by City" ref="location"></input>
          <button className="button expanded hollow" type="submit">Get Weather</button>
      </form>
    );
  }
});

module.exports = WeatherForm;
