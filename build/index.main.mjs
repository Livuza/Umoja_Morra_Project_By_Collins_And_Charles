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
  
  return {
    infos: {
      },
    views: {
      1: [ctc0],
      2: [ctc0, ctc0],
      3: [ctc0]
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
  
  
  const v80 = stdlib.protect(ctc0, await interact.getFingers(), {
    at: './index.rsh:23:59:application',
    fs: ['at ./index.rsh:22:14:application call to [unknown function] (defined at: ./index.rsh:22:18:function exp)'],
    msg: 'getFingers',
    who: 'Erin'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v80],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:25:10:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:25:10:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v82], secs: v84, time: v83, didSend: v27, from: v81 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v82], secs: v84, time: v83, didSend: v27, from: v81 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v89], secs: v91, time: v90, didSend: v36, from: v88 } = txn2;
  ;
  const v94 = stdlib.protect(ctc0, await interact.getGuess(), {
    at: './index.rsh:35:55:application',
    fs: ['at ./index.rsh:34:14:application call to [unknown function] (defined at: ./index.rsh:34:18:function exp)'],
    msg: 'getGuess',
    who: 'Erin'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v81, v88, v94],
    evt_cnt: 1,
    funcNum: 2,
    lct: v90,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:37:10:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v96], secs: v98, time: v97, didSend: v46, from: v95 } = txn3;
      
      ;
      const v99 = stdlib.addressEq(v81, v95);
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc2, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v96], secs: v98, time: v97, didSend: v46, from: v95 } = txn3;
  ;
  const v99 = stdlib.addressEq(v81, v95);
  stdlib.assert(v99, {
    at: './index.rsh:37:10:dot',
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
  const {data: [v104], secs: v106, time: v105, didSend: v56, from: v103 } = txn4;
  ;
  const v107 = stdlib.addressEq(v88, v103);
  stdlib.assert(v107, {
    at: './index.rsh:43:10:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Erin'
    });
  const v108 = stdlib.add(v82, v89);
  const v109 = stdlib.eq(v96, v108);
  const v110 = stdlib.eq(v104, v108);
  const v111 = v110 ? stdlib.checkedBigNumberify('./index.rsh:47:50:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:48:50:decimal', stdlib.UInt_max, 2);
  const v112 = v109 ? stdlib.checkedBigNumberify('./index.rsh:46:49:decimal', stdlib.UInt_max, 0) : v111;
  stdlib.protect(ctc1, await interact.seeResult(v112), {
    at: './index.rsh:56:27:application',
    fs: ['at ./index.rsh:55:9:application call to [unknown function] (defined at: ./index.rsh:55:27:function exp)'],
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
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v82], secs: v84, time: v83, didSend: v27, from: v81 } = txn1;
  ;
  const v87 = stdlib.protect(ctc0, await interact.getFingers(), {
    at: './index.rsh:29:59:application',
    fs: ['at ./index.rsh:28:14:application call to [unknown function] (defined at: ./index.rsh:28:18:function exp)'],
    msg: 'getFingers',
    who: 'Lola'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v81, v87],
    evt_cnt: 1,
    funcNum: 1,
    lct: v83,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:31:10:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v89], secs: v91, time: v90, didSend: v36, from: v88 } = txn2;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v89], secs: v91, time: v90, didSend: v36, from: v88 } = txn2;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v96], secs: v98, time: v97, didSend: v46, from: v95 } = txn3;
  ;
  const v99 = stdlib.addressEq(v81, v95);
  stdlib.assert(v99, {
    at: './index.rsh:37:10:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Lola'
    });
  const v102 = stdlib.protect(ctc0, await interact.getGuess(), {
    at: './index.rsh:41:55:application',
    fs: ['at ./index.rsh:40:14:application call to [unknown function] (defined at: ./index.rsh:40:18:function exp)'],
    msg: 'getGuess',
    who: 'Lola'
    });
  
  const txn4 = await (ctc.sendrecv({
    args: [v88, v102],
    evt_cnt: 1,
    funcNum: 3,
    lct: v97,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:43:10:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn4) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v104], secs: v106, time: v105, didSend: v56, from: v103 } = txn4;
      
      ;
      const v107 = stdlib.addressEq(v88, v103);
      ;
      const v108 = stdlib.add(v82, v89);
      const v109 = stdlib.eq(v96, v108);
      const v110 = stdlib.eq(v104, v108);
      const v111 = v110 ? stdlib.checkedBigNumberify('./index.rsh:47:50:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:48:50:decimal', stdlib.UInt_max, 2);
      const v112 = v109 ? stdlib.checkedBigNumberify('./index.rsh:46:49:decimal', stdlib.UInt_max, 0) : v111;
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v104], secs: v106, time: v105, didSend: v56, from: v103 } = txn4;
  ;
  const v107 = stdlib.addressEq(v88, v103);
  stdlib.assert(v107, {
    at: './index.rsh:43:10:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Lola'
    });
  const v108 = stdlib.add(v82, v89);
  const v109 = stdlib.eq(v96, v108);
  const v110 = stdlib.eq(v104, v108);
  const v111 = v110 ? stdlib.checkedBigNumberify('./index.rsh:47:50:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:48:50:decimal', stdlib.UInt_max, 2);
  const v112 = v109 ? stdlib.checkedBigNumberify('./index.rsh:46:49:decimal', stdlib.UInt_max, 0) : v111;
  stdlib.protect(ctc1, await interact.seeResult(v112), {
    at: './index.rsh:56:27:application',
    fs: ['at ./index.rsh:55:9:application call to [unknown function] (defined at: ./index.rsh:55:27:function exp)'],
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
  appApproval: `BiAEAAEDAiYCAQAAIjUAMRhBAYEpZEkiWzUBgQhbNQI2GgAXSUEAByI1BCM1BgA2GgIXNQQ2GgM2GgEXSSUMQACASSQMQAAxJBJEJDQBEkQ0BEkiEkw0AhIRRChkNQNJNQUXNf+ABNQMbNY0/xZQsDQDMQASREIAzEglNAESRDQESSISTDQCEhFEKGRJNQNXICA1/0k1BRc1/oAEl073FzT+FlCwNANXACAxABJENP8oSwFXACBnSCQ1ATIGNQJCAJ9JIwxAAEBIIzQBEkQ0BEkiEkw0AhIRRChkSTUDNf9JNQUXNf6ABNUVGRQ0/hZQsDT/MQBQKEsBVwBAZ0glNQEyBjUCQgBZSCI0ARJENARJIhJMNAISEURJNQUXNf+ABILEYf40/xZQsIGgjQaIAG0xAChLAVcAIGdIIzUBMgY1AkIAHDEZgQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCk0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjUBIjUCQv/DNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 64,
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
                "name": "v82",
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
                "name": "v82",
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
                "name": "v89",
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
                "name": "v96",
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
                "name": "v104",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
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
                "name": "v89",
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
                "name": "v96",
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
                "name": "v104",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T10",
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
  Bytecode: `0x6080604052604051610b3a380380610b3a83398101604081905261002291610184565b6000805543600355604080518251815260208084015151908201527fd2fa1fac07e66d08cb46271d2f3a2585d9761d2d591a51cc30a2056942bc38db910160405180910390a1610074341560076100c2565b60408051602080820183523380835260016000819055439055835191820152909101604051602081830303815290604052600290805190602001906100ba9291906100eb565b50505061025d565b816100e75760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546100f790610222565b90600052602060002090601f016020900481019282610119576000855561015f565b82601f1061013257805160ff191683800117855561015f565b8280016001018555821561015f579182015b8281111561015f578251825591602001919060010190610144565b5061016b92915061016f565b5090565b5b8082111561016b5760008155600101610170565b600081830360408082121561019857600080fd5b80518082016001600160401b0380821183831017156101c757634e487b7160e01b600052604160045260246000fd5b818452865183526020601f19860112156101e057600080fd5b83519450602085019150848210818311171561020c57634e487b7160e01b600052604160045260246000fd5b5090915260209384015182529283015250919050565b600181811c9082168061023657607f821691505b6020821081141561025757634e487b7160e01b600052602260045260246000fd5b50919050565b6108ce8061026c6000396000f3fe6080604052600436106100565760003560e01c80631e93b0f11461005f57806345f70396146100835780638323075714610096578063873779a1146100ab578063ab53f2c6146100be578063f4cedab0146100e157005b3661005d57005b005b34801561006b57600080fd5b506003545b6040519081526020015b60405180910390f35b61005d6100913660046106e8565b6100f4565b3480156100a257600080fd5b50600154610070565b61005d6100b93660046106e8565b610282565b3480156100ca57600080fd5b506100d36103ed565b60405161007a92919061070b565b61005d6100ef3660046106e8565b61048a565b610104600260005414600d6105d5565b61011e8135158061011757506001548235145b600e6105d5565b60008080556002805461013090610768565b80601f016020809104026020016040519081016040528092919081815260200182805461015c90610768565b80156101a95780601f1061017e576101008083540402835291602001916101a9565b820191906000526020600020905b81548152906001019060200180831161018c57829003601f168201915b50505050508060200190518101906101c191906107b9565b6040805184358152602080860135908201529192507fa8de7fa57e96b1b344028051973cc20a5275cd64ccacf1c4ebc1e38bc2945cb6910160405180910390a161020d3415600b6105d5565b8051610225906001600160a01b03163314600c6105d5565b60408051602080820183526000808352848201516001600160a01b03168084526003909155436001558351918201529091015b6040516020818303038152906040526002908051906020019061027c9291906105fa565b50505050565b61029260016000541460096105d5565b6102ac813515806102a557506001548235145b600a6105d5565b6000808055600280546102be90610768565b80601f01602080910402602001604051908101604052809291908181526020018280546102ea90610768565b80156103375780601f1061030c57610100808354040283529160200191610337565b820191906000526020600020905b81548152906001019060200180831161031a57829003601f168201915b505050505080602001905181019061034f919061087c565b6040805184358152602080860135908201529192507f7df13b968ce0c210e3dcbfe64599eb5a3348cfa173e4eb2d8ee13c767a060b02910160405180910390a161039b341560086105d5565b604080518082019091526000808252602082015281516001600160a01b039081168083523360208085019182526002600055436001556040805191820193909352905190921690820152606001610258565b60006060600054600280805461040290610768565b80601f016020809104026020016040519081016040528092919081815260200182805461042e90610768565b801561047b5780601f106104505761010080835404028352916020019161047b565b820191906000526020600020905b81548152906001019060200180831161045e57829003601f168201915b50505050509050915091509091565b61049a60036000541460116105d5565b6104b4813515806104ad57506001548235145b60126105d5565b6000808055600280546104c690610768565b80601f01602080910402602001604051908101604052809291908181526020018280546104f290610768565b801561053f5780601f106105145761010080835404028352916020019161053f565b820191906000526020600020905b81548152906001019060200180831161052257829003601f168201915b5050505050806020019051810190610557919061087c565b6040805184358152602080860135908201529192507fb586755d90ded52ac0645858b09d27f42fbe59c32320b3b1d760dd0397cb5714910160405180910390a16105a33415600f6105d5565b80516105bb906001600160a01b0316331460106105d5565b600080805560018190556105d19060029061067e565b5050565b816105d15760405163100960cb60e01b81526004810182905260240160405180910390fd5b82805461060690610768565b90600052602060002090601f016020900481019282610628576000855561066e565b82601f1061064157805160ff191683800117855561066e565b8280016001018555821561066e579182015b8281111561066e578251825591602001919060010190610653565b5061067a9291506106bb565b5090565b50805461068a90610768565b6000825580601f1061069a575050565b601f0160209004906000526020600020908101906106b891906106bb565b50565b5b8082111561067a57600081556001016106bc565b6000604082840312156106e257600080fd5b50919050565b6000604082840312156106fa57600080fd5b61070483836106d0565b9392505050565b82815260006020604081840152835180604085015260005b8181101561073f57858101830151858201606001528201610723565b81811115610751576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061077c57607f821691505b602082108114156106e257634e487b7160e01b600052602260045260246000fd5b80516001600160a01b03811681146107b457600080fd5b919050565b6000604082840312156107cb57600080fd5b6040516040810181811067ffffffffffffffff821117156107fc57634e487b7160e01b600052604160045260246000fd5b6040526108088361079d565b81526108166020840161079d565b60208201529392505050565b60006020828403121561083457600080fd5b6040516020810181811067ffffffffffffffff8211171561086557634e487b7160e01b600052604160045260246000fd5b6040529050806108748361079d565b905292915050565b60006020828403121561088e57600080fd5b610704838361082256fea2646970667358221220341b8cd29563c6ff1f84c6801d5be5cdfb38c07496fc73c4711bb62f6bd8fa9664736f6c634300080c0033`,
  BytecodeLen: 2874,
  Which: `oD`,
  version: 6,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:26:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:32:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:38:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:49:13:after expr stmt semicolon',
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
