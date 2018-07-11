import React from 'react';
import {
  Text,
  View,
  asset,
  Pano
} from 'react-vr';

import VideoPlayerLayout from './layouts/VideoPlayerLayout.js';

//Scene
class VideoPlayer extends React.Component {
  constructor() {
    super();
    this.state = { streamURL: "http://localhost:8000/video_streamer/54" }
  }

  componentWillMount() {
    this.setState({ streamURL: 'http://playertwitch.tv/?channel=' + this.props.streamID })
  
  }

  render() {
    return (
      <View>
        <Pano source={asset(this.props.env)}/>
        <VideoPlayerLayout
          streamURL={this.state.streamURL}
          showButton={this.props.showButton}
          text={this.props.text}
          changeScenes={this.props.changeScenes}
          scene={this.props.scene}
        />
      </View>
    )
  }
}

module.exports = VideoPlayer;
