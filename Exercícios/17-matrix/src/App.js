import React, { Component } from 'react';
import { connect } from 'react-redux';
import Matrix from './components/Matrix';
import Gif from './components/Gif';

class App extends Component {
  render() {
    const { pill } = this.props;

    return (
      <main
        className="matrix-background">
          {pill ? <Gif /> : <Matrix />}
        </main>
    );
  }
}

const mapStateToProps = (state) => ({
  pill: state.id,
});

export default connect (mapStateToProps) (App);
