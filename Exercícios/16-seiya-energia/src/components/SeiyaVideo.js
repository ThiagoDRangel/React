import React, { Component } from 'react';

class SeiyaVideo extends Component {
  render() {
    const video = 'https://www.youtube.com/watch?v=FBWf5PUnboY';
    const videoEmbed = video.replace('watch?v=', 'embed/');

    return (
      <iframe
        title="battle-video"
        data-testid="video"
        frameBorder="0"
        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        width="60%"
        height="315"
        src={videoEmbed}
      />
    );
  }
}

export default SeiyaVideo;
