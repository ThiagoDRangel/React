import React, { Component } from 'react';
import { connect } from 'react-redux';
import HelpSeiya from './components/HelpSeiya';
import { getCosmo } from './redux/actions';
import SeiyaVideo from './components/SeiyaVideo';

class App extends Component {
  render() {
    const { dispatch, cosmo } = this.props;
    const showProgress = `${cosmo}%` || '0 %';
    const fullPower = 100;

    if (cosmo === fullPower) {
      return (
        <div className="seiya-background">
          <SeiyaVideo />
        </div>
      );
    }
    return (
      <main className="seiya-background">
        <HelpSeiya />
        <p className="important">
          Seiya precisa da sua ajuda para conseguir derrogar sage.
        </p>
        <section>
          <span>{showProgress}</span>
          <button
            type="button"
            onClick={() => dispatch (getCosmo())}
          >
            Empreste seu cosmo!
          </button>
        </section>
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  cosmo: state.cosmo,
});

export default connect (mapStateToProps) (App);
