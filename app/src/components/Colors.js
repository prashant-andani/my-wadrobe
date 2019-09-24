import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ColorThief from 'colorthief';

class Colors extends Component {
  state = {
    allColors: []
  };

  componentDidMount() {
    const data = document.querySelector('#image_data');
    data.onload = () => {
      var colorThief = new ColorThief();
      // var colors = colorThief.getPalette(data);
      var colors = colorThief.getColor(data);
      console.log(colorThief.getColor(data));
      console.log(colors);
      this.setState({ allColors: colors });
    };
  }
  render() {
    return (
      <div id="image">
        <div
          style={{
            height: '100px',
            width: '100px',
            backgroundColor: `rgb(${this.state.allColors.toString()})`
          }}
        ></div>
      </div>
    );
  }
}

Colors.propTypes = {};

Colors.defaultProps = {};

export default Colors;
