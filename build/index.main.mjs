// Automatically generated with Reach 0.1.9 (d3fd55fe)
/* eslint-disable */
export const _version = '0.1.9';
export const _versionHash = '0.1.9 (d3fd55fe)';
export const _backendVersion = 11;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1],
      2: [ctc0, ctc1, ctc1, ctc0, ctc1],
      3: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Erin(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Erin expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Erin expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Address;
  
  
  const v103 = stdlib.protect(ctc0, interact.wager, 'for Erin\'s interact field wager');
  
  const v106 = stdlib.protect(ctc0, await interact.getFingers(), {
    at: './index.rsh:25:59:application',
    fs: ['at ./index.rsh:23:14:application call to [unknown function] (defined at: ./index.rsh:23:18:function exp)'],
    msg: 'getFingers',
    who: 'Erin'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v103, v106],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:27:10:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v103, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v108, v109], secs: v111, time: v110, didSend: v31, from: v107 } = txn1;
      
      sim_r.txns.push({
        amt: v108,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v108, v109], secs: v111, time: v110, didSend: v31, from: v107 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v118], secs: v120, time: v119, didSend: v42, from: v117 } = txn2;
  ;
  const v125 = stdlib.protect(ctc0, await interact.getGuess(), {
    at: './index.rsh:40:55:application',
    fs: ['at ./index.rsh:39:14:application call to [unknown function] (defined at: ./index.rsh:39:18:function exp)'],
    msg: 'getGuess',
    who: 'Erin'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v107, v108, v109, v117, v118, v125],
    evt_cnt: 1,
    funcNum: 2,
    lct: v119,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:42:10:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v127], secs: v129, time: v128, didSend: v52, from: v126 } = txn3;
      
      ;
      const v130 = stdlib.addressEq(v107, v126);
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc0, ctc0, ctc2, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v127], secs: v129, time: v128, didSend: v52, from: v126 } = txn3;
  ;
  const v130 = stdlib.addressEq(v107, v126);
  stdlib.assert(v130, {
    at: './index.rsh:42:10:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Erin'
    });
  const txn4 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 3,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v135], secs: v137, time: v136, didSend: v62, from: v134 } = txn4;
  ;
  const v138 = stdlib.addressEq(v117, v134);
  stdlib.assert(v138, {
    at: './index.rsh:48:10:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Erin'
    });
  const v139 = stdlib.add(v109, v118);
  const v140 = stdlib.eq(v127, v139);
  const v141 = stdlib.eq(v135, v139);
  const v142 = v141 ? stdlib.checkedBigNumberify('./index.rsh:52:49:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:53:49:decimal', stdlib.UInt_max, 2);
  const v143 = v140 ? stdlib.checkedBigNumberify('./index.rsh:51:49:decimal', stdlib.UInt_max, 0) : v142;
  const v144 = stdlib.eq(v143, stdlib.checkedBigNumberify('./index.rsh:55:18:decimal', stdlib.UInt_max, 0));
  const v145 = stdlib.eq(v143, stdlib.checkedBigNumberify('./index.rsh:56:18:decimal', stdlib.UInt_max, 1));
  const v146 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2)];
  const v147 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1)];
  const v148 = v145 ? v146 : v147;
  const v149 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
  const v150 = v144 ? v149 : v148;
  const v151 = v150[stdlib.checkedBigNumberify('./index.rsh:54:22:array', stdlib.UInt_max, 0)];
  const v152 = v150[stdlib.checkedBigNumberify('./index.rsh:54:22:array', stdlib.UInt_max, 1)];
  const v153 = stdlib.mul(v151, v108);
  ;
  const v158 = stdlib.mul(v152, v108);
  ;
  stdlib.protect(ctc1, await interact.seeResult(v143), {
    at: './index.rsh:68:27:application',
    fs: ['at ./index.rsh:67:9:application call to [unknown function] (defined at: ./index.rsh:67:27:function exp)'],
    msg: 'seeResult',
    who: 'Erin'
    });
  
  return;
  
  
  
  
  
  
  
  
  };
export async function Lola(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Lola expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Lola expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v108, v109], secs: v111, time: v110, didSend: v31, from: v107 } = txn1;
  ;
  stdlib.protect(ctc1, await interact.acceptWager(v108), {
    at: './index.rsh:32:29:application',
    fs: ['at ./index.rsh:31:14:application call to [unknown function] (defined at: ./index.rsh:31:18:function exp)'],
    msg: 'acceptWager',
    who: 'Lola'
    });
  const v116 = stdlib.protect(ctc0, await interact.getFingers(), {
    at: './index.rsh:33:59:application',
    fs: ['at ./index.rsh:31:14:application call to [unknown function] (defined at: ./index.rsh:31:18:function exp)'],
    msg: 'getFingers',
    who: 'Lola'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v107, v108, v109, v116],
    evt_cnt: 1,
    funcNum: 1,
    lct: v110,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [v108, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v118], secs: v120, time: v119, didSend: v42, from: v117 } = txn2;
      
      sim_r.txns.push({
        amt: v108,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v118], secs: v120, time: v119, didSend: v42, from: v117 } = txn2;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v127], secs: v129, time: v128, didSend: v52, from: v126 } = txn3;
  ;
  const v130 = stdlib.addressEq(v107, v126);
  stdlib.assert(v130, {
    at: './index.rsh:42:10:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Lola'
    });
  const v133 = stdlib.protect(ctc0, await interact.getGuess(), {
    at: './index.rsh:46:55:application',
    fs: ['at ./index.rsh:45:14:application call to [unknown function] (defined at: ./index.rsh:45:18:function exp)'],
    msg: 'getGuess',
    who: 'Lola'
    });
  
  const txn4 = await (ctc.sendrecv({
    args: [v107, v108, v109, v117, v118, v127, v133],
    evt_cnt: 1,
    funcNum: 3,
    lct: v128,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:48:10:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn4) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v135], secs: v137, time: v136, didSend: v62, from: v134 } = txn4;
      
      ;
      const v138 = stdlib.addressEq(v117, v134);
      ;
      const v139 = stdlib.add(v109, v118);
      const v140 = stdlib.eq(v127, v139);
      const v141 = stdlib.eq(v135, v139);
      const v142 = v141 ? stdlib.checkedBigNumberify('./index.rsh:52:49:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:53:49:decimal', stdlib.UInt_max, 2);
      const v143 = v140 ? stdlib.checkedBigNumberify('./index.rsh:51:49:decimal', stdlib.UInt_max, 0) : v142;
      const v144 = stdlib.eq(v143, stdlib.checkedBigNumberify('./index.rsh:55:18:decimal', stdlib.UInt_max, 0));
      const v145 = stdlib.eq(v143, stdlib.checkedBigNumberify('./index.rsh:56:18:decimal', stdlib.UInt_max, 1));
      const v146 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2)];
      const v147 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1)];
      const v148 = v145 ? v146 : v147;
      const v149 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
      const v150 = v144 ? v149 : v148;
      const v151 = v150[stdlib.checkedBigNumberify('./index.rsh:54:22:array', stdlib.UInt_max, 0)];
      const v152 = v150[stdlib.checkedBigNumberify('./index.rsh:54:22:array', stdlib.UInt_max, 1)];
      const v153 = stdlib.mul(v151, v108);
      sim_r.txns.push({
        amt: v153,
        kind: 'from',
        to: v107,
        tok: undefined /* Nothing */
        });
      const v158 = stdlib.mul(v152, v108);
      sim_r.txns.push({
        amt: v158,
        kind: 'from',
        to: v117,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc0, ctc0, ctc2, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v135], secs: v137, time: v136, didSend: v62, from: v134 } = txn4;
  ;
  const v138 = stdlib.addressEq(v117, v134);
  stdlib.assert(v138, {
    at: './index.rsh:48:10:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Lola'
    });
  const v139 = stdlib.add(v109, v118);
  const v140 = stdlib.eq(v127, v139);
  const v141 = stdlib.eq(v135, v139);
  const v142 = v141 ? stdlib.checkedBigNumberify('./index.rsh:52:49:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:53:49:decimal', stdlib.UInt_max, 2);
  const v143 = v140 ? stdlib.checkedBigNumberify('./index.rsh:51:49:decimal', stdlib.UInt_max, 0) : v142;
  const v144 = stdlib.eq(v143, stdlib.checkedBigNumberify('./index.rsh:55:18:decimal', stdlib.UInt_max, 0));
  const v145 = stdlib.eq(v143, stdlib.checkedBigNumberify('./index.rsh:56:18:decimal', stdlib.UInt_max, 1));
  const v146 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2)];
  const v147 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1)];
  const v148 = v145 ? v146 : v147;
  const v149 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
  const v150 = v144 ? v149 : v148;
  const v151 = v150[stdlib.checkedBigNumberify('./index.rsh:54:22:array', stdlib.UInt_max, 0)];
  const v152 = v150[stdlib.checkedBigNumberify('./index.rsh:54:22:array', stdlib.UInt_max, 1)];
  const v153 = stdlib.mul(v151, v108);
  ;
  const v158 = stdlib.mul(v152, v108);
  ;
  stdlib.protect(ctc1, await interact.seeResult(v143), {
    at: './index.rsh:68:27:application',
    fs: ['at ./index.rsh:67:9:application call to [unknown function] (defined at: ./index.rsh:67:27:function exp)'],
    msg: 'seeResult',
    who: 'Lola'
    });
  
  return;
  
  
  
  
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAIAAECAwggKFAmAgEAACI1ADEYQQJ9KWRJIls1ASEEWzUCNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0kkDEABREklDEAAziUSRCU0ARJENARJIhJMNAISEUQoZEk1A0khBVs1/1cwIDX+STUFFzX9gATUDGzWNP0WULA0/jEAEkQ0AyEGWzQDIQdbCDX8JCM0/TT8Ek0iNAOBWFs0/BJNNfuAEAAAAAAAAAABAAAAAAAAAAGAEAAAAAAAAAAAAAAAAAAAAAI0+yMSTYAQAAAAAAAAAAIAAAAAAAAAADT7IhJNNfqxIrIBNPoiWzT/C7III7IQNANXACCyB7OxIrIBNPohBFs0/wuyCCOyEDT+sgezQgErSCQ0ARJENARJIhJMNAISEUQoZEk1A0lKSVcAIDX/IQVbNf4hBls1/VcwIDX8IQdbNftJNQUXNfqABJdO9xc0+hZQsDT/MQASRDT/NP4WUDT9FlA0/FA0+xZQNPoWUChLAVcAYGdIJTUBMgY1AkIA10kjDEAAYEgjNAESRDQESSISTDQCEhFEKGRJNQNJSVcAIDX/IQVbNf4hBls1/Uk1BRc1/IAE1RUZFDT8FlCwNP6IANE0/zT+FlA0/RZQMQBQNPwWUChLAVcAWGdIJDUBMgY1AkIAcUgiNAESRDQESSISTDQCEhFESTUFSSJbNf8hBFs1/oAErNEfwzT/FlA0/hZQsIGgjQaIAHo0/4gAdTEANP8WUDT+FlAoSwFXADBnSCM1ATIGNQJCABwxGYEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yI1ASI1AkL/wzQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 96,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v108",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v109",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v108",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v109",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v118",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v127",
                "type": "uint256"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v135",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v118",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v127",
                "type": "uint256"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v135",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162000fc338038062000fc383398101604081905262000026916200022c565b6000805543600355604080518251815260208084015180518284015201518183015290517f80c0078efe412e5091172e0df54decefb16131f320816d23b64aede2bf8e9e4b9181900360600190a160208101515162000089903414600762000125565b620000b7604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b338082526020838101805151828501908152905182015160408086019182526001600081905543905580518085019590955291518483015251606080850191909152815180850390910181526080909301905281516200011c9260029201906200014f565b505050620002c9565b816200014b5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200015d906200028c565b90600052602060002090601f016020900481019282620001815760008555620001cc565b82601f106200019c57805160ff1916838001178555620001cc565b82800160010185558215620001cc579182015b82811115620001cc578251825591602001919060010190620001af565b50620001da929150620001de565b5090565b5b80821115620001da5760008155600101620001df565b604080519081016001600160401b03811182821017156200022657634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156200024057600080fd5b6200024a620001f5565b835181526040601f19830112156200026157600080fd5b6200026b620001f5565b60208581015182526040909501518582015293810193909352509092915050565b600181811c90821680620002a157607f821691505b60208210811415620002c357634e487b7160e01b600052602260045260246000fd5b50919050565b610cea80620002d96000396000f3fe6080604052600436106100565760003560e01c80631e93b0f11461005f57806345f70396146100835780638323075714610096578063873779a1146100ab578063ab53f2c6146100be578063f4cedab0146100e157005b3661005d57005b005b34801561006b57600080fd5b506003545b6040519081526020015b60405180910390f35b61005d610091366004610a09565b6100f4565b3480156100a257600080fd5b50600154610070565b61005d6100b9366004610a09565b61032b565b3480156100ca57600080fd5b506100d3610511565b60405161007a929190610a2c565b61005d6100ef366004610a09565b6105ae565b610104600260005414600d610851565b61011e8135158061011757506001548235145b600e610851565b60008080556002805461013090610a89565b80601f016020809104026020016040519081016040528092919081815260200182805461015c90610a89565b80156101a95780601f1061017e576101008083540402835291602001916101a9565b820191906000526020600020905b81548152906001019060200180831161018c57829003601f168201915b50505050508060200190518101906101c19190610ada565b6040805184358152602080860135908201529192507fa8de7fa57e96b1b344028051973cc20a5275cd64ccacf1c4ebc1e38bc2945cb6910160405180910390a161020d3415600b610851565b8051610225906001600160a01b03163314600c610851565b6102706040518060c0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b81516001600160a01b0390811680835260208085015181850190815260408087015181870190815260608089015187168189019081526080808b0151818b019081528c88013560a0808d019182526003600055436001558751998a019a909a529651958801959095529251918601919091525190951694830194909452925191810191909152905160c082015260e0015b6040516020818303038152906040526002908051906020019061032592919061087a565b50505050565b61033b6001600054146009610851565b6103558135158061034e57506001548235145b600a610851565b60008080556002805461036790610a89565b80601f016020809104026020016040519081016040528092919081815260200182805461039390610a89565b80156103e05780601f106103b5576101008083540402835291602001916103e0565b820191906000526020600020905b8154815290600101906020018083116103c357829003601f168201915b50505050508060200190518101906103f89190610b64565b6040805184358152602080860135908201529192507f7df13b968ce0c210e3dcbfe64599eb5a3348cfa173e4eb2d8ee13c767a060b02910160405180910390a1610449816020015134146008610851565b61048d6040518060a0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001600081525090565b81516001600160a01b031681526020808301518183015260408084015181840152336060840152848201356080840152600260005543600155516103019183910181516001600160a01b0390811682526020808401519083015260408084015190830152606080840151909116908201526080918201519181019190915260a00190565b60006060600054600280805461052690610a89565b80601f016020809104026020016040519081016040528092919081815260200182805461055290610a89565b801561059f5780601f106105745761010080835404028352916020019161059f565b820191906000526020600020905b81548152906001019060200180831161058257829003601f168201915b50505050509050915091509091565b6105be6003600054146011610851565b6105d8813515806105d157506001548235145b6012610851565b6000808055600280546105ea90610a89565b80601f016020809104026020016040519081016040528092919081815260200182805461061690610a89565b80156106635780601f1061063857610100808354040283529160200191610663565b820191906000526020600020905b81548152906001019060200180831161064657829003601f168201915b505050505080602001905181019061067b9190610bd3565b90506106856108fe565b6040805184358152602080860135908201527fb586755d90ded52ac0645858b09d27f42fbe59c32320b3b1d760dd0397cb5714910160405180910390a16106ce3415600f610851565b60608201516106e9906001600160a01b031633146010610851565b816080015182604001516106fd9190610c7d565b80825260a08301511461072457805160208401351461071d576002610727565b6001610727565b60005b6020808301918252604083018051600090819052905160029083018190526060850180516001908190529051840152608085018051919091525190910152511561078b576001816020015114610781578060600151610791565b8060400151610791565b80608001515b60a082018190528251602084015191516001600160a01b03909116916108fc916107bb9190610c95565b6040518115909202916000818181858888f193505050501580156107e3573d6000803e3d6000fd5b5081606001516001600160a01b03166108fc83602001518360a001516020015161080d9190610c95565b6040518115909202916000818181858888f19350505050158015610835573d6000803e3d6000fd5b506000808055600181905561084c9060029061099f565b505050565b816108765760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b82805461088690610a89565b90600052602060002090601f0160209004810192826108a857600085556108ee565b82601f106108c157805160ff19168380011785556108ee565b828001600101855582156108ee579182015b828111156108ee5782518255916020019190600101906108d3565b506108fa9291506109dc565b5090565b6040518060c001604052806000815260200160008152602001610934604051806040016040528060008152602001600081525090565b8152602001610956604051806040016040528060008152602001600081525090565b8152602001610978604051806040016040528060008152602001600081525090565b815260200161099a604051806040016040528060008152602001600081525090565b905290565b5080546109ab90610a89565b6000825580601f106109bb575050565b601f0160209004906000526020600020908101906109d991906109dc565b50565b5b808211156108fa57600081556001016109dd565b600060408284031215610a0357600080fd5b50919050565b600060408284031215610a1b57600080fd5b610a2583836109f1565b9392505050565b82815260006020604081840152835180604085015260005b81811015610a6057858101830151858201606001528201610a44565b81811115610a72576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c90821680610a9d57607f821691505b60208210811415610a0357634e487b7160e01b600052602260045260246000fd5b80516001600160a01b0381168114610ad557600080fd5b919050565b600060a08284031215610aec57600080fd5b60405160a0810181811067ffffffffffffffff82111715610b1d57634e487b7160e01b600052604160045260246000fd5b604052610b2983610abe565b81526020830151602082015260408301516040820152610b4b60608401610abe565b6060820152608083015160808201528091505092915050565b600060608284031215610b7657600080fd5b6040516060810181811067ffffffffffffffff82111715610ba757634e487b7160e01b600052604160045260246000fd5b604052610bb383610abe565b815260208301516020820152604083015160408201528091505092915050565b600060c08284031215610be557600080fd5b60405160c0810181811067ffffffffffffffff82111715610c1657634e487b7160e01b600052604160045260246000fd5b604052610c2283610abe565b81526020830151602082015260408301516040820152610c4460608401610abe565b60608201526080830151608082015260a083015160a08201528091505092915050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610c9057610c90610c67565b500190565b6000816000190483118215151615610caf57610caf610c67565b50029056fea26469706673582212208647f1652d1a10b67198573b6d4e3b2eb63ff0a2225408033f776d738c5f08ed64736f6c634300080c0033`,
  BytecodeLen: 4035,
  Which: `oD`,
  version: 6,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:29:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:37:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:43:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:60:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Erin": Erin,
  "Lola": Lola
  };
export const _APIs = {
  };
