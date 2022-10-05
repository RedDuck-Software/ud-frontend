/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { DonateNFT, DonateNFTInterface } from "../DonateNFT";

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
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "addValue",
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
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "mintToken",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
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
    ],
    name: "ownershipRecord",
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
  "0x60e0604052602e60808181529062001c5460a03980516200002991600991602090910190620000ed565b503480156200003757600080fd5b5060405162001c8238038062001c828339810160408190526200005a9162000260565b818162000067336200009d565b81516200007c906001906020850190620000ed565b50805162000092906002906020840190620000ed565b505050505062000307565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b828054620000fb90620002ca565b90600052602060002090601f0160209004810192826200011f57600085556200016a565b82601f106200013a57805160ff19168380011785556200016a565b828001600101855582156200016a579182015b828111156200016a5782518255916020019190600101906200014d565b50620001789291506200017c565b5090565b5b808211156200017857600081556001016200017d565b634e487b7160e01b600052604160045260246000fd5b600082601f830112620001bb57600080fd5b81516001600160401b0380821115620001d857620001d862000193565b604051601f8301601f19908116603f0116810190828211818310171562000203576200020362000193565b816040528381526020925086838588010111156200022057600080fd5b600091505b8382101562000244578582018301518183018401529082019062000225565b83821115620002565760008385830101525b9695505050505050565b600080604083850312156200027457600080fd5b82516001600160401b03808211156200028c57600080fd5b6200029a86838701620001a9565b93506020850151915080821115620002b157600080fd5b50620002c085828601620001a9565b9150509250929050565b600181811c90821680620002df57607f821691505b602082108114156200030157634e487b7160e01b600052602260045260246000fd5b50919050565b61193d80620003176000396000f3fe608060405234801561001057600080fd5b50600436106101585760003560e01c8063715018a6116100c3578063c87b56dd1161007c578063c87b56dd146102dd578063cbeb74e1146102f0578063d47eba68146102f9578063e985e9c51461030c578063f2fde38b14610348578063fca3b5aa1461035b57600080fd5b8063715018a61461028357806379c650681461028b5780638da5cb5b1461029e57806395d89b41146102af578063a22cb465146102b7578063b88d4fde146102ca57600080fd5b806323b872dd1161011557806323b872dd146102045780632607aafa1461021757806342842e0e1461022a5780635c6caf761461023d5780636352211e1461025d57806370a082311461027057600080fd5b806301ffc9a71461015d57806306fdde0314610185578063075461721461019a578063081812fc146101c5578063095ea7b3146101d857806317d70f7c146101ed575b600080fd5b61017061016b36600461142e565b61036e565b60405190151581526020015b60405180910390f35b61018d6103c0565b60405161017c91906114a3565b6008546101ad906001600160a01b031681565b6040516001600160a01b03909116815260200161017c565b6101ad6101d33660046114b6565b610452565b6101eb6101e63660046114eb565b610479565b005b6101f6600a5481565b60405190815260200161017c565b6101eb610212366004611515565b610594565b61018d6102253660046114b6565b6105c5565b6101eb610238366004611515565b6105d0565b6101f661024b3660046114b6565b600c6020526000908152604090205481565b6101ad61026b3660046114b6565b6105eb565b6101f661027e366004611551565b61064b565b6101eb6106d1565b6101f66102993660046114eb565b6106e5565b6000546001600160a01b03166101ad565b61018d610813565b6101eb6102c536600461156c565b610822565b6101eb6102d83660046115be565b610831565b61018d6102eb3660046114b6565b610869565b6101f6600b5481565b6101eb61030736600461169a565b61097a565b61017061031a3660046116bc565b6001600160a01b03918216600090815260066020908152604080832093909416825291909152205460ff1690565b6101eb610356366004611551565b6109a1565b6101eb610369366004611551565b610a1a565b60006001600160e01b031982166380ac58cd60e01b148061039f57506001600160e01b03198216635b5e139f60e01b145b806103ba57506301ffc9a760e01b6001600160e01b03198316145b92915050565b6060600180546103cf906116ef565b80601f01602080910402602001604051908101604052809291908181526020018280546103fb906116ef565b80156104485780601f1061041d57610100808354040283529160200191610448565b820191906000526020600020905b81548152906001019060200180831161042b57829003601f168201915b5050505050905090565b600061045d82610a44565b506000908152600560205260409020546001600160a01b031690565b6000610484826105eb565b9050806001600160a01b0316836001600160a01b031614156104f75760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b60648201526084015b60405180910390fd5b336001600160a01b03821614806105135750610513813361031a565b6105855760405162461bcd60e51b815260206004820152603e60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c000060648201526084016104ee565b61058f8383610aa3565b505050565b61059e3382610b11565b6105ba5760405162461bcd60e51b81526004016104ee9061172a565b61058f838383610b8f565b60606103ba82610869565b61058f83838360405180602001604052806000815250610831565b6000818152600360205260408120546001600160a01b0316806103ba5760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b60448201526064016104ee565b60006001600160a01b0382166106b55760405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f7420612076616044820152683634b21037bbb732b960b91b60648201526084016104ee565b506001600160a01b031660009081526004602052604090205490565b6106d9610d2b565b6106e36000610d85565b565b6008546000906001600160a01b031633146107425760405162461bcd60e51b815260206004820152601860248201527f4f6e6c79206d696e7465722063616e206d696e74204e4654000000000000000060448201526064016104ee565b600a5461075090600161178e565b600a819055610760908490610dd5565b6107f6600a5460098054610773906116ef565b80601f016020809104026020016040519081016040528092919081815260200182805461079f906116ef565b80156107ec5780601f106107c1576101008083540402835291602001916107ec565b820191906000526020600020905b8154815290600101906020018083116107cf57829003601f168201915b5050505050610def565b50600a80546000908152600c602052604090208290555492915050565b6060600280546103cf906116ef565b61082d338383610e89565b5050565b61083b3383610b11565b6108575760405162461bcd60e51b81526004016104ee9061172a565b61086384848484610f58565b50505050565b606061087482610a44565b6000828152600760205260408120805461088d906116ef565b80601f01602080910402602001604051908101604052809291908181526020018280546108b9906116ef565b80156109065780601f106108db57610100808354040283529160200191610906565b820191906000526020600020905b8154815290600101906020018083116108e957829003601f168201915b50505050509050600061092460408051602081019091526000815290565b9050805160001415610937575092915050565b8151156109695780826040516020016109519291906117a6565b60405160208183030381529060405292505050919050565b61097284610f8b565b949350505050565b6000828152600c60205260408120805483929061099890849061178e565b90915550505050565b6109a9610d2b565b6001600160a01b038116610a0e5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016104ee565b610a1781610d85565b50565b610a22610d2b565b600880546001600160a01b0319166001600160a01b0392909216919091179055565b6000818152600360205260409020546001600160a01b0316610a175760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b60448201526064016104ee565b600081815260056020526040902080546001600160a01b0319166001600160a01b0384169081179091558190610ad8826105eb565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080610b1d836105eb565b9050806001600160a01b0316846001600160a01b03161480610b6457506001600160a01b0380821660009081526006602090815260408083209388168352929052205460ff165b806109725750836001600160a01b0316610b7d84610452565b6001600160a01b031614949350505050565b826001600160a01b0316610ba2826105eb565b6001600160a01b031614610c065760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201526437bbb732b960d91b60648201526084016104ee565b6001600160a01b038216610c685760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b60648201526084016104ee565b610c73600082610aa3565b6001600160a01b0383166000908152600460205260408120805460019290610c9c9084906117d5565b90915550506001600160a01b0382166000908152600460205260408120805460019290610cca90849061178e565b909155505060008181526003602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b6000546001600160a01b031633146106e35760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016104ee565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b61082d828260405180602001604052806000815250610fff565b6000828152600360205260409020546001600160a01b0316610e6a5760405162461bcd60e51b815260206004820152602e60248201527f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60448201526d32bc34b9ba32b73a103a37b5b2b760911b60648201526084016104ee565b6000828152600760209081526040909120825161058f9284019061137f565b816001600160a01b0316836001600160a01b03161415610eeb5760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c65720000000000000060448201526064016104ee565b6001600160a01b03838116600081815260066020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b610f63848484610b8f565b610f6f84848484611032565b6108635760405162461bcd60e51b81526004016104ee906117ec565b6060610f9682610a44565b6000610fad60408051602081019091526000815290565b90506000815111610fcd5760405180602001604052806000815250610ff8565b80610fd78461113f565b604051602001610fe89291906117a6565b6040516020818303038152906040525b9392505050565b611009838361123d565b6110166000848484611032565b61058f5760405162461bcd60e51b81526004016104ee906117ec565b60006001600160a01b0384163b1561113457604051630a85bd0160e11b81526001600160a01b0385169063150b7a029061107690339089908890889060040161183e565b602060405180830381600087803b15801561109057600080fd5b505af19250505080156110c0575060408051601f3d908101601f191682019092526110bd9181019061187b565b60015b61111a573d8080156110ee576040519150601f19603f3d011682016040523d82523d6000602084013e6110f3565b606091505b5080516111125760405162461bcd60e51b81526004016104ee906117ec565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610972565b506001949350505050565b6060816111635750506040805180820190915260018152600360fc1b602082015290565b8160005b811561118d578061117781611898565b91506111869050600a836118c9565b9150611167565b60008167ffffffffffffffff8111156111a8576111a86115a8565b6040519080825280601f01601f1916602001820160405280156111d2576020820181803683370190505b5090505b8415610972576111e76001836117d5565b91506111f4600a866118dd565b6111ff90603061178e565b60f81b818381518110611214576112146118f1565b60200101906001600160f81b031916908160001a905350611236600a866118c9565b94506111d6565b6001600160a01b0382166112935760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f206164647265737360448201526064016104ee565b6000818152600360205260409020546001600160a01b0316156112f85760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000060448201526064016104ee565b6001600160a01b038216600090815260046020526040812080546001929061132190849061178e565b909155505060008181526003602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b82805461138b906116ef565b90600052602060002090601f0160209004810192826113ad57600085556113f3565b82601f106113c657805160ff19168380011785556113f3565b828001600101855582156113f3579182015b828111156113f35782518255916020019190600101906113d8565b506113ff929150611403565b5090565b5b808211156113ff5760008155600101611404565b6001600160e01b031981168114610a1757600080fd5b60006020828403121561144057600080fd5b8135610ff881611418565b60005b8381101561146657818101518382015260200161144e565b838111156108635750506000910152565b6000815180845261148f81602086016020860161144b565b601f01601f19169290920160200192915050565b602081526000610ff86020830184611477565b6000602082840312156114c857600080fd5b5035919050565b80356001600160a01b03811681146114e657600080fd5b919050565b600080604083850312156114fe57600080fd5b611507836114cf565b946020939093013593505050565b60008060006060848603121561152a57600080fd5b611533846114cf565b9250611541602085016114cf565b9150604084013590509250925092565b60006020828403121561156357600080fd5b610ff8826114cf565b6000806040838503121561157f57600080fd5b611588836114cf565b91506020830135801515811461159d57600080fd5b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b600080600080608085870312156115d457600080fd5b6115dd856114cf565b93506115eb602086016114cf565b925060408501359150606085013567ffffffffffffffff8082111561160f57600080fd5b818701915087601f83011261162357600080fd5b813581811115611635576116356115a8565b604051601f8201601f19908116603f0116810190838211818310171561165d5761165d6115a8565b816040528281528a602084870101111561167657600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b600080604083850312156116ad57600080fd5b50508035926020909101359150565b600080604083850312156116cf57600080fd5b6116d8836114cf565b91506116e6602084016114cf565b90509250929050565b600181811c9082168061170357607f821691505b6020821081141561172457634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252602e908201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560408201526d1c881b9bdc88185c1c1c9bdd995960921b606082015260800190565b634e487b7160e01b600052601160045260246000fd5b600082198211156117a1576117a1611778565b500190565b600083516117b881846020880161144b565b8351908301906117cc81836020880161144b565b01949350505050565b6000828210156117e7576117e7611778565b500390565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b6001600160a01b038581168252841660208201526040810183905260806060820181905260009061187190830184611477565b9695505050505050565b60006020828403121561188d57600080fd5b8151610ff881611418565b60006000198214156118ac576118ac611778565b5060010190565b634e487b7160e01b600052601260045260246000fd5b6000826118d8576118d86118b3565b500490565b6000826118ec576118ec6118b3565b500690565b634e487b7160e01b600052603260045260246000fdfea2646970667358221220b29c0d0b0ad204d96f6fec978b84662a9fe6afa54b48243a6a75796c2acb3de564736f6c63430008090033516d63453459534d6359636772724768556b62316654354a7a46653170393756385163336273524d714b6661396a";

type DonateNFTConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DonateNFTConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DonateNFT__factory extends ContractFactory {
  constructor(...args: DonateNFTConstructorParams) {
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
  ): Promise<DonateNFT> {
    return super.deploy(name, symbol, overrides || {}) as Promise<DonateNFT>;
  }
  override getDeployTransaction(
    name: PromiseOrValue<string>,
    symbol: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name, symbol, overrides || {});
  }
  override attach(address: string): DonateNFT {
    return super.attach(address) as DonateNFT;
  }
  override connect(signer: Signer): DonateNFT__factory {
    return super.connect(signer) as DonateNFT__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DonateNFTInterface {
    return new utils.Interface(_abi) as DonateNFTInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DonateNFT {
    return new Contract(address, _abi, signerOrProvider) as DonateNFT;
  }
}