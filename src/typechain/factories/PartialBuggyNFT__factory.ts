/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  PartialBuggyNFT,
  PartialBuggyNFTInterface,
} from "../PartialBuggyNFT";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "addPartialUser",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "createdNFT",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "getImage",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "mintToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "minter",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "ownershipRecord",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_nftURI",
        type: "string",
      },
    ],
    name: "setImage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_minter",
        type: "address",
      },
    ],
    name: "setMinter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60e0604052602e60808181529062001e6260a03980516200002991600991602090910190620000ed565b503480156200003757600080fd5b5060405162001e9038038062001e908339810160408190526200005a9162000260565b818162000067336200009d565b81516200007c906001906020850190620000ed565b50805162000092906002906020840190620000ed565b505050505062000307565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b828054620000fb90620002ca565b90600052602060002090601f0160209004810192826200011f57600085556200016a565b82601f106200013a57805160ff19168380011785556200016a565b828001600101855582156200016a579182015b828111156200016a5782518255916020019190600101906200014d565b50620001789291506200017c565b5090565b5b808211156200017857600081556001016200017d565b634e487b7160e01b600052604160045260246000fd5b600082601f830112620001bb57600080fd5b81516001600160401b0380821115620001d857620001d862000193565b604051601f8301601f19908116603f0116810190828211818310171562000203576200020362000193565b816040528381526020925086838588010111156200022057600080fd5b600091505b8382101562000244578582018301518183018401529082019062000225565b83821115620002565760008385830101525b9695505050505050565b600080604083850312156200027457600080fd5b82516001600160401b03808211156200028c57600080fd5b6200029a86838701620001a9565b93506020850151915080821115620002b157600080fd5b50620002c085828601620001a9565b9150509250929050565b600181811c90821680620002df57607f821691505b602082108114156200030157634e487b7160e01b600052602260045260246000fd5b50919050565b611b4b80620003176000396000f3fe608060405234801561001057600080fd5b50600436106101735760003560e01c806370a08231116100de578063c87b56dd11610097578063dee3745411610071578063dee374541461030f578063e985e9c514610322578063f2fde38b1461035e578063fca3b5aa1461037157600080fd5b8063c87b56dd146102e0578063c980c626146102f3578063cbeb74e11461030657600080fd5b806370a0823114610286578063715018a6146102995780638da5cb5b146102a157806395d89b41146102b2578063a22cb465146102ba578063b88d4fde146102cd57600080fd5b80632004ffd9116101305780632004ffd91461021f57806323b872dd146102275780632607aafa1461023a57806342842e0e1461024d578063551f3c19146102605780636352211e1461027357600080fd5b806301ffc9a71461017857806306fdde03146101a057806307546172146101b5578063081812fc146101e0578063095ea7b3146101f357806317d70f7c14610208575b600080fd5b61018b610186366004611567565b610384565b60405190151581526020015b60405180910390f35b6101a86103d6565b60405161019791906115dc565b6008546101c8906001600160a01b031681565b6040516001600160a01b039091168152602001610197565b6101c86101ee3660046115ef565b610468565b610206610201366004611624565b61048f565b005b610211600a5481565b604051908152602001610197565b6102066105aa565b61020661023536600461164e565b6106ca565b6101a86102483660046115ef565b6106fb565b61020661025b36600461164e565b610706565b6101a861026e36600461168a565b610721565b6101c86102813660046115ef565b6107c6565b6102116102943660046116b6565b610826565b6102066108ac565b6000546001600160a01b03166101c8565b6101a86108be565b6102066102c83660046116d1565b6108cd565b6102066102db366004611799565b6108dc565b6101a86102ee3660046115ef565b610914565b610206610301366004611835565b610a25565b610211600b5481565b61020661031d36600461187c565b610a50565b61018b6103303660046118d3565b6001600160a01b03918216600090815260066020908152604080832093909416825291909152205460ff1690565b61020661036c3660046116b6565b610ada565b61020661037f3660046116b6565b610b53565b60006001600160e01b031982166380ac58cd60e01b14806103b557506001600160e01b03198216635b5e139f60e01b145b806103d057506301ffc9a760e01b6001600160e01b03198316145b92915050565b6060600180546103e5906118fd565b80601f0160208091040260200160405190810160405280929190818152602001828054610411906118fd565b801561045e5780601f106104335761010080835404028352916020019161045e565b820191906000526020600020905b81548152906001019060200180831161044157829003601f168201915b5050505050905090565b600061047382610b7d565b506000908152600560205260409020546001600160a01b031690565b600061049a826107c6565b9050806001600160a01b0316836001600160a01b0316141561050d5760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b60648201526084015b60405180910390fd5b336001600160a01b038216148061052957506105298133610330565b61059b5760405162461bcd60e51b815260206004820152603e60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c00006064820152608401610504565b6105a58383610bdc565b505050565b6008546001600160a01b031633146106045760405162461bcd60e51b815260206004820152601860248201527f4f6e6c79206d696e7465722063616e206d696e74204e465400000000000000006044820152606401610504565b600a5461061290600161194e565b600a5561063261062a6000546001600160a01b031690565b600a54610c4a565b6106c8600a5460098054610645906118fd565b80601f0160208091040260200160405190810160405280929190818152602001828054610671906118fd565b80156106be5780601f10610693576101008083540402835291602001916106be565b820191906000526020600020905b8154815290600101906020018083116106a157829003601f168201915b5050505050610c64565b565b6106d43382610cfe565b6106f05760405162461bcd60e51b815260040161050490611966565b6105a5838383610d7c565b60606103d082610914565b6105a5838383604051806020016040528060008152506108dc565b600c60209081526000928352604080842090915290825290208054610745906118fd565b80601f0160208091040260200160405190810160405280929190818152602001828054610771906118fd565b80156107be5780601f10610793576101008083540402835291602001916107be565b820191906000526020600020905b8154815290600101906020018083116107a157829003601f168201915b505050505081565b6000818152600360205260408120546001600160a01b0316806103d05760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b6044820152606401610504565b60006001600160a01b0382166108905760405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f7420612076616044820152683634b21037bbb732b960b91b6064820152608401610504565b506001600160a01b031660009081526004602052604090205490565b6108b4610f18565b6106c86000610f72565b6060600280546103e5906118fd565b6108d8338383610fc2565b5050565b6108e63383610cfe565b6109025760405162461bcd60e51b815260040161050490611966565b61090e84848484611091565b50505050565b606061091f82610b7d565b60008281526007602052604081208054610938906118fd565b80601f0160208091040260200160405190810160405280929190818152602001828054610964906118fd565b80156109b15780601f10610986576101008083540402835291602001916109b1565b820191906000526020600020905b81548152906001019060200180831161099457829003601f168201915b5050505050905060006109cf60408051602081019091526000815290565b90508051600014156109e2575092915050565b815115610a145780826040516020016109fc9291906119b4565b60405160208183030381529060405292505050919050565b610a1d846110c4565b949350505050565b610a2d610f18565b610a378282610c64565b600b8054906000610a47836119e3565b91905055505050565b6008546001600160a01b03163314610aaa5760405162461bcd60e51b815260206004820152601960248201527f4f6e6c79206d696e7465722063616e20616464207573657273000000000000006044820152606401610504565b6000838152600c602090815260408083206001600160a01b03851684528252909120835161090e928501906114b8565b610ae2610f18565b6001600160a01b038116610b475760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610504565b610b5081610f72565b50565b610b5b610f18565b600880546001600160a01b0319166001600160a01b0392909216919091179055565b6000818152600360205260409020546001600160a01b0316610b505760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b6044820152606401610504565b600081815260056020526040902080546001600160a01b0319166001600160a01b0384169081179091558190610c11826107c6565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6108d8828260405180602001604052806000815250611138565b6000828152600360205260409020546001600160a01b0316610cdf5760405162461bcd60e51b815260206004820152602e60248201527f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60448201526d32bc34b9ba32b73a103a37b5b2b760911b6064820152608401610504565b600082815260076020908152604090912082516105a5928401906114b8565b600080610d0a836107c6565b9050806001600160a01b0316846001600160a01b03161480610d5157506001600160a01b0380821660009081526006602090815260408083209388168352929052205460ff165b80610a1d5750836001600160a01b0316610d6a84610468565b6001600160a01b031614949350505050565b826001600160a01b0316610d8f826107c6565b6001600160a01b031614610df35760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201526437bbb732b960d91b6064820152608401610504565b6001600160a01b038216610e555760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b6064820152608401610504565b610e60600082610bdc565b6001600160a01b0383166000908152600460205260408120805460019290610e899084906119fe565b90915550506001600160a01b0382166000908152600460205260408120805460019290610eb790849061194e565b909155505060008181526003602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b6000546001600160a01b031633146106c85760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610504565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b816001600160a01b0316836001600160a01b031614156110245760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c6572000000000000006044820152606401610504565b6001600160a01b03838116600081815260066020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b61109c848484610d7c565b6110a88484848461116b565b61090e5760405162461bcd60e51b815260040161050490611a15565b60606110cf82610b7d565b60006110e660408051602081019091526000815290565b905060008151116111065760405180602001604052806000815250611131565b8061111084611278565b6040516020016111219291906119b4565b6040516020818303038152906040525b9392505050565b6111428383611376565b61114f600084848461116b565b6105a55760405162461bcd60e51b815260040161050490611a15565b60006001600160a01b0384163b1561126d57604051630a85bd0160e11b81526001600160a01b0385169063150b7a02906111af903390899088908890600401611a67565b602060405180830381600087803b1580156111c957600080fd5b505af19250505080156111f9575060408051601f3d908101601f191682019092526111f691810190611aa4565b60015b611253573d808015611227576040519150601f19603f3d011682016040523d82523d6000602084013e61122c565b606091505b50805161124b5760405162461bcd60e51b815260040161050490611a15565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610a1d565b506001949350505050565b60608161129c5750506040805180820190915260018152600360fc1b602082015290565b8160005b81156112c657806112b0816119e3565b91506112bf9050600a83611ad7565b91506112a0565b60008167ffffffffffffffff8111156112e1576112e161170d565b6040519080825280601f01601f19166020018201604052801561130b576020820181803683370190505b5090505b8415610a1d576113206001836119fe565b915061132d600a86611aeb565b61133890603061194e565b60f81b81838151811061134d5761134d611aff565b60200101906001600160f81b031916908160001a90535061136f600a86611ad7565b945061130f565b6001600160a01b0382166113cc5760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f20616464726573736044820152606401610504565b6000818152600360205260409020546001600160a01b0316156114315760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006044820152606401610504565b6001600160a01b038216600090815260046020526040812080546001929061145a90849061194e565b909155505060008181526003602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b8280546114c4906118fd565b90600052602060002090601f0160209004810192826114e6576000855561152c565b82601f106114ff57805160ff191683800117855561152c565b8280016001018555821561152c579182015b8281111561152c578251825591602001919060010190611511565b5061153892915061153c565b5090565b5b80821115611538576000815560010161153d565b6001600160e01b031981168114610b5057600080fd5b60006020828403121561157957600080fd5b813561113181611551565b60005b8381101561159f578181015183820152602001611587565b8381111561090e5750506000910152565b600081518084526115c8816020860160208601611584565b601f01601f19169290920160200192915050565b60208152600061113160208301846115b0565b60006020828403121561160157600080fd5b5035919050565b80356001600160a01b038116811461161f57600080fd5b919050565b6000806040838503121561163757600080fd5b61164083611608565b946020939093013593505050565b60008060006060848603121561166357600080fd5b61166c84611608565b925061167a60208501611608565b9150604084013590509250925092565b6000806040838503121561169d57600080fd5b823591506116ad60208401611608565b90509250929050565b6000602082840312156116c857600080fd5b61113182611608565b600080604083850312156116e457600080fd5b6116ed83611608565b91506020830135801515811461170257600080fd5b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b600067ffffffffffffffff8084111561173e5761173e61170d565b604051601f8501601f19908116603f011681019082821181831017156117665761176661170d565b8160405280935085815286868601111561177f57600080fd5b858560208301376000602087830101525050509392505050565b600080600080608085870312156117af57600080fd5b6117b885611608565b93506117c660208601611608565b925060408501359150606085013567ffffffffffffffff8111156117e957600080fd5b8501601f810187136117fa57600080fd5b61180987823560208401611723565b91505092959194509250565b600082601f83011261182657600080fd5b61113183833560208501611723565b6000806040838503121561184857600080fd5b82359150602083013567ffffffffffffffff81111561186657600080fd5b61187285828601611815565b9150509250929050565b60008060006060848603121561189157600080fd5b83359250602084013567ffffffffffffffff8111156118af57600080fd5b6118bb86828701611815565b9250506118ca60408501611608565b90509250925092565b600080604083850312156118e657600080fd5b6118ef83611608565b91506116ad60208401611608565b600181811c9082168061191157607f821691505b6020821081141561193257634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b6000821982111561196157611961611938565b500190565b6020808252602e908201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560408201526d1c881b9bdc88185c1c1c9bdd995960921b606082015260800190565b600083516119c6818460208801611584565b8351908301906119da818360208801611584565b01949350505050565b60006000198214156119f7576119f7611938565b5060010190565b600082821015611a1057611a10611938565b500390565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b6001600160a01b0385811682528416602082015260408101839052608060608201819052600090611a9a908301846115b0565b9695505050505050565b600060208284031215611ab657600080fd5b815161113181611551565b634e487b7160e01b600052601260045260246000fd5b600082611ae657611ae6611ac1565b500490565b600082611afa57611afa611ac1565b500690565b634e487b7160e01b600052603260045260246000fdfea264697066735822122036dae53595e5f14a9d9397470d9e85ae3457d0400be6aeb2e82167b713dff19364736f6c63430008090033516d63453459534d6359636772724768556b62316654354a7a46653170393756385163336273524d714b6661396a";

type PartialBuggyNFTConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PartialBuggyNFTConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PartialBuggyNFT__factory extends ContractFactory {
  constructor(...args: PartialBuggyNFTConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    name: PromiseOrValue<string>,
    symbol: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<PartialBuggyNFT> {
    return super.deploy(
      name,
      symbol,
      overrides || {}
    ) as Promise<PartialBuggyNFT>;
  }
  override getDeployTransaction(
    name: PromiseOrValue<string>,
    symbol: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name, symbol, overrides || {});
  }
  override attach(address: string): PartialBuggyNFT {
    return super.attach(address) as PartialBuggyNFT;
  }
  override connect(signer: Signer): PartialBuggyNFT__factory {
    return super.connect(signer) as PartialBuggyNFT__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PartialBuggyNFTInterface {
    return new utils.Interface(_abi) as PartialBuggyNFTInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PartialBuggyNFT {
    return new Contract(address, _abi, signerOrProvider) as PartialBuggyNFT;
  }
}
