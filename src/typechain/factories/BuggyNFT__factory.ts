/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { BuggyNFT, BuggyNFTInterface } from "../BuggyNFT";

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
        name: "sponsor",
        type: "address",
      },
      {
        internalType: "string",
        name: "signature",
        type: "string",
      },
    ],
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
  "0x60e0604052602e60808181529062001d7960a03980516200002991600891602090910190620000ed565b503480156200003757600080fd5b5060405162001da738038062001da78339810160408190526200005a9162000260565b818162000067336200009d565b81516200007c906001906020850190620000ed565b50805162000092906002906020840190620000ed565b505050505062000307565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b828054620000fb90620002ca565b90600052602060002090601f0160209004810192826200011f57600085556200016a565b82601f106200013a57805160ff19168380011785556200016a565b828001600101855582156200016a579182015b828111156200016a5782518255916020019190600101906200014d565b50620001789291506200017c565b5090565b5b808211156200017857600081556001016200017d565b634e487b7160e01b600052604160045260246000fd5b600082601f830112620001bb57600080fd5b81516001600160401b0380821115620001d857620001d862000193565b604051601f8301601f19908116603f0116810190828211818310171562000203576200020362000193565b816040528381526020925086838588010111156200022057600080fd5b600091505b8382101562000244578582018301518183018401529082019062000225565b83821115620002565760008385830101525b9695505050505050565b600080604083850312156200027457600080fd5b82516001600160401b03808211156200028c57600080fd5b6200029a86838701620001a9565b93506020850151915080821115620002b157600080fd5b50620002c085828601620001a9565b9150509250929050565b600181811c90821680620002df57607f821691505b602082108114156200030157634e487b7160e01b600052602260045260246000fd5b50919050565b611a6280620003176000396000f3fe608060405234801561001057600080fd5b50600436106101585760003560e01c806370a08231116100c3578063c87b56dd1161007c578063c87b56dd146102d0578063c980c626146102e3578063cbeb74e1146102f6578063e985e9c5146102ff578063f2fde38b1461033b578063fca3b5aa1461034e57600080fd5b806370a0823114610276578063715018a6146102895780638da5cb5b1461029157806395d89b41146102a2578063a22cb465146102aa578063b88d4fde146102bd57600080fd5b806323b872dd1161011557806323b872dd146102045780632607aafa146102175780633d02d0c91461022a57806342842e0e1461023d5780635c6caf76146102505780636352211e1461026357600080fd5b806301ffc9a71461015d57806306fdde0314610185578063075461721461019a578063081812fc146101c5578063095ea7b3146101d857806317d70f7c146101ed575b600080fd5b61017061016b3660046114c0565b610361565b60405190151581526020015b60405180910390f35b61018d6103b3565b60405161017c9190611535565b6009546101ad906001600160a01b031681565b6040516001600160a01b03909116815260200161017c565b6101ad6101d3366004611548565b610445565b6101eb6101e636600461157d565b61046c565b005b6101f6600a5481565b60405190815260200161017c565b6101eb6102123660046115a7565b610587565b61018d610225366004611548565b6105b8565b6101eb61023836600461168f565b6105c3565b6101eb61024b3660046115a7565b6106f6565b61018d61025e366004611548565b610711565b6101ad610271366004611548565b6107ab565b6101f66102843660046116dd565b61080b565b6101eb610891565b6000546001600160a01b03166101ad565b61018d6108a5565b6101eb6102b83660046116f8565b6108b4565b6101eb6102cb366004611734565b6108bf565b61018d6102de366004611548565b6108f7565b6101eb6102f13660046117b0565b610a08565b6101f6600b5481565b61017061030d3660046117e1565b6001600160a01b03918216600090815260066020908152604080832093909416825291909152205460ff1690565b6101eb6103493660046116dd565b610a33565b6101eb61035c3660046116dd565b610aac565b60006001600160e01b031982166380ac58cd60e01b148061039257506001600160e01b03198216635b5e139f60e01b145b806103ad57506301ffc9a760e01b6001600160e01b03198316145b92915050565b6060600180546103c290611814565b80601f01602080910402602001604051908101604052809291908181526020018280546103ee90611814565b801561043b5780601f106104105761010080835404028352916020019161043b565b820191906000526020600020905b81548152906001019060200180831161041e57829003601f168201915b5050505050905090565b600061045082610ad6565b506000908152600560205260409020546001600160a01b031690565b6000610477826107ab565b9050806001600160a01b0316836001600160a01b031614156104ea5760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b60648201526084015b60405180910390fd5b336001600160a01b03821614806105065750610506813361030d565b6105785760405162461bcd60e51b815260206004820152603e60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c000060648201526084016104e1565b6105828383610b35565b505050565b6105913382610ba3565b6105ad5760405162461bcd60e51b81526004016104e19061184f565b610582838383610c21565b60606103ad826108f7565b6009546001600160a01b0316331461061d5760405162461bcd60e51b815260206004820152601860248201527f4f6e6c79206d696e7465722063616e206d696e74204e4654000000000000000060448201526064016104e1565b600a5461062b9060016118b3565b600a8190556000908152600c60209081526040909120825161064f92840190611411565b5061065c82600a54610dbd565b6106f2600a546008805461066f90611814565b80601f016020809104026020016040519081016040528092919081815260200182805461069b90611814565b80156106e85780601f106106bd576101008083540402835291602001916106e8565b820191906000526020600020905b8154815290600101906020018083116106cb57829003601f168201915b5050505050610dd7565b5050565b610582838383604051806020016040528060008152506108bf565b600c602052600090815260409020805461072a90611814565b80601f016020809104026020016040519081016040528092919081815260200182805461075690611814565b80156107a35780601f10610778576101008083540402835291602001916107a3565b820191906000526020600020905b81548152906001019060200180831161078657829003601f168201915b505050505081565b6000818152600360205260408120546001600160a01b0316806103ad5760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b60448201526064016104e1565b60006001600160a01b0382166108755760405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f7420612076616044820152683634b21037bbb732b960b91b60648201526084016104e1565b506001600160a01b031660009081526004602052604090205490565b610899610e71565b6108a36000610ecb565b565b6060600280546103c290611814565b6106f2338383610f1b565b6108c93383610ba3565b6108e55760405162461bcd60e51b81526004016104e19061184f565b6108f184848484610fea565b50505050565b606061090282610ad6565b6000828152600760205260408120805461091b90611814565b80601f016020809104026020016040519081016040528092919081815260200182805461094790611814565b80156109945780601f1061096957610100808354040283529160200191610994565b820191906000526020600020905b81548152906001019060200180831161097757829003601f168201915b5050505050905060006109b260408051602081019091526000815290565b90508051600014156109c5575092915050565b8151156109f75780826040516020016109df9291906118cb565b60405160208183030381529060405292505050919050565b610a008461101d565b949350505050565b610a10610e71565b610a1a8282610dd7565b600b8054906000610a2a836118fa565b91905055505050565b610a3b610e71565b6001600160a01b038116610aa05760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016104e1565b610aa981610ecb565b50565b610ab4610e71565b600980546001600160a01b0319166001600160a01b0392909216919091179055565b6000818152600360205260409020546001600160a01b0316610aa95760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b60448201526064016104e1565b600081815260056020526040902080546001600160a01b0319166001600160a01b0384169081179091558190610b6a826107ab565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080610baf836107ab565b9050806001600160a01b0316846001600160a01b03161480610bf657506001600160a01b0380821660009081526006602090815260408083209388168352929052205460ff165b80610a005750836001600160a01b0316610c0f84610445565b6001600160a01b031614949350505050565b826001600160a01b0316610c34826107ab565b6001600160a01b031614610c985760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201526437bbb732b960d91b60648201526084016104e1565b6001600160a01b038216610cfa5760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b60648201526084016104e1565b610d05600082610b35565b6001600160a01b0383166000908152600460205260408120805460019290610d2e908490611915565b90915550506001600160a01b0382166000908152600460205260408120805460019290610d5c9084906118b3565b909155505060008181526003602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b6106f2828260405180602001604052806000815250611091565b6000828152600360205260409020546001600160a01b0316610e525760405162461bcd60e51b815260206004820152602e60248201527f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60448201526d32bc34b9ba32b73a103a37b5b2b760911b60648201526084016104e1565b6000828152600760209081526040909120825161058292840190611411565b6000546001600160a01b031633146108a35760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016104e1565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b816001600160a01b0316836001600160a01b03161415610f7d5760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c65720000000000000060448201526064016104e1565b6001600160a01b03838116600081815260066020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b610ff5848484610c21565b611001848484846110c4565b6108f15760405162461bcd60e51b81526004016104e19061192c565b606061102882610ad6565b600061103f60408051602081019091526000815290565b9050600081511161105f576040518060200160405280600081525061108a565b80611069846111d1565b60405160200161107a9291906118cb565b6040516020818303038152906040525b9392505050565b61109b83836112cf565b6110a860008484846110c4565b6105825760405162461bcd60e51b81526004016104e19061192c565b60006001600160a01b0384163b156111c657604051630a85bd0160e11b81526001600160a01b0385169063150b7a029061110890339089908890889060040161197e565b602060405180830381600087803b15801561112257600080fd5b505af1925050508015611152575060408051601f3d908101601f1916820190925261114f918101906119bb565b60015b6111ac573d808015611180576040519150601f19603f3d011682016040523d82523d6000602084013e611185565b606091505b5080516111a45760405162461bcd60e51b81526004016104e19061192c565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610a00565b506001949350505050565b6060816111f55750506040805180820190915260018152600360fc1b602082015290565b8160005b811561121f5780611209816118fa565b91506112189050600a836119ee565b91506111f9565b60008167ffffffffffffffff81111561123a5761123a6115e3565b6040519080825280601f01601f191660200182016040528015611264576020820181803683370190505b5090505b8415610a0057611279600183611915565b9150611286600a86611a02565b6112919060306118b3565b60f81b8183815181106112a6576112a6611a16565b60200101906001600160f81b031916908160001a9053506112c8600a866119ee565b9450611268565b6001600160a01b0382166113255760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f206164647265737360448201526064016104e1565b6000818152600360205260409020546001600160a01b03161561138a5760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000060448201526064016104e1565b6001600160a01b03821660009081526004602052604081208054600192906113b39084906118b3565b909155505060008181526003602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b82805461141d90611814565b90600052602060002090601f01602090048101928261143f5760008555611485565b82601f1061145857805160ff1916838001178555611485565b82800160010185558215611485579182015b8281111561148557825182559160200191906001019061146a565b50611491929150611495565b5090565b5b808211156114915760008155600101611496565b6001600160e01b031981168114610aa957600080fd5b6000602082840312156114d257600080fd5b813561108a816114aa565b60005b838110156114f85781810151838201526020016114e0565b838111156108f15750506000910152565b600081518084526115218160208601602086016114dd565b601f01601f19169290920160200192915050565b60208152600061108a6020830184611509565b60006020828403121561155a57600080fd5b5035919050565b80356001600160a01b038116811461157857600080fd5b919050565b6000806040838503121561159057600080fd5b61159983611561565b946020939093013593505050565b6000806000606084860312156115bc57600080fd5b6115c584611561565b92506115d360208501611561565b9150604084013590509250925092565b634e487b7160e01b600052604160045260246000fd5b600067ffffffffffffffff80841115611614576116146115e3565b604051601f8501601f19908116603f0116810190828211818310171561163c5761163c6115e3565b8160405280935085815286868601111561165557600080fd5b858560208301376000602087830101525050509392505050565b600082601f83011261168057600080fd5b61108a838335602085016115f9565b600080604083850312156116a257600080fd5b6116ab83611561565b9150602083013567ffffffffffffffff8111156116c757600080fd5b6116d38582860161166f565b9150509250929050565b6000602082840312156116ef57600080fd5b61108a82611561565b6000806040838503121561170b57600080fd5b61171483611561565b91506020830135801515811461172957600080fd5b809150509250929050565b6000806000806080858703121561174a57600080fd5b61175385611561565b935061176160208601611561565b925060408501359150606085013567ffffffffffffffff81111561178457600080fd5b8501601f8101871361179557600080fd5b6117a4878235602084016115f9565b91505092959194509250565b600080604083850312156117c357600080fd5b82359150602083013567ffffffffffffffff8111156116c757600080fd5b600080604083850312156117f457600080fd5b6117fd83611561565b915061180b60208401611561565b90509250929050565b600181811c9082168061182857607f821691505b6020821081141561184957634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252602e908201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560408201526d1c881b9bdc88185c1c1c9bdd995960921b606082015260800190565b634e487b7160e01b600052601160045260246000fd5b600082198211156118c6576118c661189d565b500190565b600083516118dd8184602088016114dd565b8351908301906118f18183602088016114dd565b01949350505050565b600060001982141561190e5761190e61189d565b5060010190565b6000828210156119275761192761189d565b500390565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b6001600160a01b03858116825284166020820152604081018390526080606082018190526000906119b190830184611509565b9695505050505050565b6000602082840312156119cd57600080fd5b815161108a816114aa565b634e487b7160e01b600052601260045260246000fd5b6000826119fd576119fd6119d8565b500490565b600082611a1157611a116119d8565b500690565b634e487b7160e01b600052603260045260246000fdfea2646970667358221220d0adcd41ed46ea5eb29a2885bb3eccb8f8c95b0d60a58c79d2d730d31f57963464736f6c63430008090033516d63453459534d6359636772724768556b62316654354a7a46653170393756385163336273524d714b6661396a";

type BuggyNFTConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BuggyNFTConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BuggyNFT__factory extends ContractFactory {
  constructor(...args: BuggyNFTConstructorParams) {
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
  ): Promise<BuggyNFT> {
    return super.deploy(name, symbol, overrides || {}) as Promise<BuggyNFT>;
  }
  override getDeployTransaction(
    name: PromiseOrValue<string>,
    symbol: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name, symbol, overrides || {});
  }
  override attach(address: string): BuggyNFT {
    return super.attach(address) as BuggyNFT;
  }
  override connect(signer: Signer): BuggyNFT__factory {
    return super.connect(signer) as BuggyNFT__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BuggyNFTInterface {
    return new utils.Interface(_abi) as BuggyNFTInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BuggyNFT {
    return new Contract(address, _abi, signerOrProvider) as BuggyNFT;
  }
}