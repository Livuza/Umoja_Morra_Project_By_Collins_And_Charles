import React from 'react';

const exports = {};

exports.Wrapper = class extends React.Component {
  render() {
    const {content} = this.props;
    return (
      <div className="App">
        <header className="App-header" id="root">
          <h1>Welcome to Morra developed by Collins and Charles... </h1>
          {content}
        </header>
      </div>
    );
  }
}

exports.ConnectAccount = class extends React.Component {
  render() {
    return (
      <div>
        Please be patient
        <br/> we are connecting to your account....
        <br/> Will take a few seconds
      </div>
    )
  }
}

exports.FundAccount = class extends React.Component {
  render() {
    const {bal, standardUnit, defaultFundAmt, parent} = this.props;
    const amt = (this.state || {}).amt || defaultFundAmt;
    return (
      <div>
        <h2>Fund your account</h2>
        <br />
        Balance: {bal} {standardUnit}
        <hr />
        Do you like to fund your account with additional {standardUnit}?
        <br />
        (This only works on certain devnets)
        <br />
        <input
          type='number'
          placeholder={defaultFundAmt}
          onChange={(e) => this.setState({amt: e.currentTarget.value})}
        />
        <button onClick={() => parent.fundAccount(amt)}>Fund Account</button>
        <button onClick={() => parent.skipFundAccount()}>Skip</button>
      </div>
    );
  }
}

exports.DeployerOrAttacher = class extends React.Component {
  render() {
    const {parent} = this.props;
    return (
      <div>
        Who are you playing as?
        <br />
        <div className='who-group'>
          <p>
            <button 
              className='choice-button'
              onClick={() => parent.selectDeployer()}
            >Deployer</button>
          </p>
          <p>
            <button
              className='choice-button'
              onClick={() => parent.selectAttacher()}
            >Attacher</button>
          </p>
        </div>
      </div>
    );
  }
}

export default exports;