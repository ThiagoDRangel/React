import React, { Component } from 'react'
import '../style/remove.css';

class Remove extends Component {
  state = {
    file: null,
  }

handleChange = (e) => {
    this.setState({
        file: URL.createObjectURL(e.target.files[0])
    })
}

  render() {
    return(
      <main>
        <h2>Escolha o arquivo...</h2>
        <input
          type="file"
          onChange={this.handleChange}
        />
        <img style="mix-blend-mode:multiply;"
          src={this.state.file}
          alt="teste"
        />
      </main>
    );
  }
}
export default Remove;

