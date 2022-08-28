import React from 'react';
import PlayerViews from './PlayerViews.js';

const exports = {...PlayerViews};

const sleep = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds));

exports.Wrapper = class extends React.Component {
  render() {
    const {content} = this.props;
    return (
      <div className="Deployer">
        <h2>Collins is the Deployer</h2>
        {content}
      </div>
    );
  }
}

exports.SetWager = class extends React.Component {
  render() {
    const {parent, defaultWager, standardUnit} = this.props;
    const wager = (this.state || {}).wager || defaultWager;
    return (
      <div>
        <input
          type='number'
          placeholder={defaultWager}
          onChange={(e) => this.setState({wager: e.currentTarget.value})}
        /> {standardUnit}
        <br />
        <button
          onClick={() => parent.setWager(wager)}
        >What is your wager?</button>
      </div>
    );
  }
}

exports.Deploy = class extends React.Component {
  render() {
    const {parent, wager, standardUnit} = this.props;
    return (
      <div>
        Wager to pay and deploy: <strong>{wager}</strong> {standardUnit}
        <br />
        <button
          onClick={() => parent.deploy()}
        >DO you want to Deploy?</button>
      </div>
    );
  }
}

exports.Deploying = class extends React.Component {
  render() {
    return (
      <div>Deploying... please wait</div>
    );
  }
}

exports.WaitingForAttacher = class extends React.Component {
  async copyToClipboard(button) {
    const {ctcInfoStr} = this.props;
    navigator.clipboard.writeText(ctcInfoStr);
    const origInnerHTML = button.innerHTML;
    button.innerHTML = 'Copied!';
    button.disabled = true;
    await sleep(1000);
    button.innerHTML = origInnerHTML;
  }

  render() {
    const {ctcInfoStr} = this.props;
    return (
      <div>
        Waiting for Attacher...
        <br /> Please give them this contract info:
        <pre className='contract_details'>
          {ctcInfoStr}
        </pre>
        <button
          onClick={(e) => this.copyToClipboard(e.currentTarget)}
        >Copy Contract and share to the Attacher</button>
      </div>
    )
  }
}

export default exports;