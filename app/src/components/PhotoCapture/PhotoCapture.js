import React, { Component } from 'react';
import Camera from 'react-camera';

export default class PhotoCapture extends Component {
  constructor(props) {
    super(props);
    this.takePicture = this.takePicture.bind(this);
  }

  takePicture() {
    this.camera
      .capture()
      .then(blob => this.props.onTakePicture(URL.createObjectURL(blob)));
  }

  render() {
    return (
      <div style={style.container}>
        <Camera
          style={style.preview}
          ref={cam => {
            this.camera = cam;
          }}
          xw
        >
          <div style={style.captureContainer} onClick={this.takePicture}>
            <div style={style.captureButton} />
          </div>
        </Camera>
      </div>
    );
  }
}

const style = {
  preview: {
    position: 'relative'
  },
  captureContainer: {
    display: 'flex',
    position: 'absolute',
    justifyContent: 'center',
    zIndex: 1,
    bottom: 0,
    width: '100%'
  },
  captureButton: {
    backgroundColor: '#fff',
    borderRadius: '50%',
    height: 56,
    width: 56,
    color: '#000',
    margin: 20
  },
  captureImage: {
    width: '100%'
  }
};
