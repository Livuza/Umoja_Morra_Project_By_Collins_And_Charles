import React from 'react';

const exports = {};

exports.GetFingers = class extends React.Component {
  render() {
    const {parent, playable, fingers} = this.props;
    return (
      <div>
        {fingers ? 'It was a draw, play again! Throw some fingers:' : 'How many fingers do you want to throw?'}
        <br />
        {!playable ? 'Please wait...' : ''}
        <br />
        <button
            className='choice-button'
            disabled={!playable}
            onClick={() => parent.playFingers('ZERO')}
        >0</button>
        <button
            className='choice-button'
            disabled={!playable}
            onClick={() => parent.playFingers('ONE')}
        >1</button>
        <button
            className='choice-button'
            disabled={!playable}
            onClick={() => parent.playFingers('TWO')}
        >2</button>
          <button
            className='choice-button'
            disabled={!playable}
            onClick={() => parent.playFingers('THREE')}
        >3</button>
          <button
            className='choice-button'
            disabled={!playable}
            onClick={() => parent.playFingers('FOUR')}
        >4</button>
          <button
            className='choice-button'
            disabled={!playable}
            onClick={() => parent.playFingers('FIVE')}
        >5</button>
      </div>
    );
  }
}

exports.GetGuess = class extends React.Component {
  render() {
    const {parent, playable, guess} = this.props;
    return (
      <div>
        How many fingers do you think there will be in total?
        <br />
        {!playable ? 'Please wait...' : ''}
        <br />
        <button
            className='choice-button'
            disabled={!playable}
            onClick={() => parent.playGuess('ZERO')}
        >0</button>
        <button
            className='choice-button'
            disabled={!playable}
            onClick={() => parent.playGuess('ONE')}
        >1</button>
        <button
            className='choice-button'
            disabled={!playable}
            onClick={() => parent.playGuess('TWO')}
        >2</button>
          <button
            className='choice-button'
            disabled={!playable}
            onClick={() => parent.playGuess('THREE')}
        >3</button>
          <button
            className='choice-button'
            disabled={!playable}
            onClick={() => parent.playGuess('FOUR')}
        >4</button>
          <button
            className='choice-button'
            disabled={!playable}
            onClick={() => parent.playGuess('FIVE')}
        >5</button>
          <button
            className='choice-button'
            disabled={!playable}
            onClick={() => parent.playGuess('SIX')}
        >6</button>
          <button
            className='choice-button'
            disabled={!playable}
            onClick={() => parent.playGuess('SEVEN')}
        >7</button>
          <button
            className='choice-button'
            disabled={!playable}
            onClick={() => parent.playGuess('EIGHT')}
        >8</button>
          <button
            className='choice-button'
            disabled={!playable}
            onClick={() => parent.playGuess('NINE')}
        >9</button>
          <button
            className='choice-button'
            disabled={!playable}
            onClick={() => parent.playGuess('TEN')}
        >10</button>
      </div>
    );
  }
}

exports.WaitingForResults = class extends React.Component {
  render() {
    return (
      <div>
        Waiting for results...
      </div>
    );
  }
}

exports.Done = class extends React.Component {
  render() {
    const {outcome} = this.props;
    return (
      <div>
        Thank you for playing!
        <br /><b>Game result: {outcome || 'Unknown'}</b>
      </div>
    );
  }
}

exports.Timeout = class extends React.Component {
  render() {
    return (
      <div>
        Timeout (Someone took too long)
      </div>
    );
  }
}

export default exports;