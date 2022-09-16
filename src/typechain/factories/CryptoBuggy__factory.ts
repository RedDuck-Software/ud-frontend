/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { CryptoBuggy, CryptoBuggyInterface } from "../CryptoBuggy";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_nft",
        type: "address",
      },
      {
        internalType: "address",
        name: "_partialNft",
        type: "address",
      },
      {
        internalType: "address",
        name: "_donateNft",
        type: "address",
      },
      {
        internalType: "address",
        name: "_buggyToken",
        type: "address",
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
    inputs: [
      {
        internalType: "string",
        name: "_signature",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "count",
        type: "uint256",
      },
    ],
    name: "addFund",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_signature",
        type: "string",
      },
    ],
    name: "addFundPartially",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "boughtBuggy",
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
    name: "buggyNFT",
    outputs: [
      {
        internalType: "contract BuggyNFT",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "buggyToken",
    outputs: [
      {
        internalType: "contract BuggyToken",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "donateNFT",
    outputs: [
      {
        internalType: "contract DonateNFT",
        name: "",
        type: "address",
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
    inputs: [],
    name: "partialBuggyNFT",
    outputs: [
      {
        internalType: "contract PartialBuggyNFT",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "partialUsers",
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
    name: "price",
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
    name: "raised",
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
        internalType: "uint256",
        name: "newBuggyPrice",
        type: "uint256",
      },
    ],
    name: "setNewBuggyPrice",
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
  {
    inputs: [],
    name: "uniqUsers",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "users",
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
        internalType: "address",
        name: "_beneficiary",
        type: "address",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051610e1f380380610e1f83398101604081905261002f916100f9565b6100383361008d565b600194909455600680546001600160a01b03199081166001600160a01b039586161790915560078054821695851695909517909455600980548516918416919091179055600880549093169116179055610157565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80516001600160a01b03811681146100f457600080fd5b919050565b600080600080600060a0868803121561011157600080fd5b85519450610121602087016100dd565b935061012f604087016100dd565b925061013d606087016100dd565b915061014b608087016100dd565b90509295509295909350565b610cb9806101666000396000f3fe6080604052600436106100fd5760003560e01c80638da5cb5b11610095578063bd574bb211610064578063bd574bb214610291578063f0ea4bfc146102b1578063f2094a1e146102c7578063f2fde38b146102e7578063fe5a7a111461030757600080fd5b80638da5cb5b1461021d578063925b7cb61461023b578063a035b1fe1461024e578063a87430ba1461026457600080fd5b80634fe3ce6a116100d15780634fe3ce6a1461019957806351cff8d9146101b95780636e94fd2c146101db578063715018a61461020857600080fd5b806279305a1461010257806305a9aeca1461012b5780630b29f7fd1461016357806344761aa914610179575b600080fd5b34801561010e57600080fd5b5061011860055481565b6040519081526020015b60405180910390f35b34801561013757600080fd5b5060065461014b906001600160a01b031681565b6040516001600160a01b039091168152602001610122565b34801561016f57600080fd5b5061011860045481565b34801561018557600080fd5b5060075461014b906001600160a01b031681565b3480156101a557600080fd5b5060085461014b906001600160a01b031681565b3480156101c557600080fd5b506101d96101d43660046109f2565b61031a565b005b3480156101e757600080fd5b506101186101f63660046109f2565b60036020526000908152604090205481565b34801561021457600080fd5b506101d961035b565b34801561022957600080fd5b506000546001600160a01b031661014b565b6101d9610249366004610ac5565b61036f565b34801561025a57600080fd5b5061011860015481565b34801561027057600080fd5b5061011861027f3660046109f2565b60026020526000908152604090205481565b34801561029d57600080fd5b5060095461014b906001600160a01b031681565b3480156102bd57600080fd5b50610118600a5481565b3480156102d357600080fd5b506101d96102e2366004610b0a565b6105a4565b3480156102f357600080fd5b506101d96103023660046109f2565b6105b1565b6101d9610315366004610b23565b61062a565b610322610948565b6040516001600160a01b038216904780156108fc02916000818181858888f19350505050158015610357573d6000803e3d6000fd5b5050565b610363610948565b61036d60006109a2565b565b60008160015461037f9190610b76565b90508034146103e05760405162461bcd60e51b815260206004820152602260248201527f4e6f7420656e6f7567682066756e647320746f2063726561746520746865204e604482015261119560f21b60648201526084015b60405180910390fd5b816001141561045257600654604051633d02d0c960e01b81526001600160a01b0390911690633d02d0c99061041b9033908790600401610be2565b600060405180830381600087803b15801561043557600080fd5b505af1158015610449573d6000803e3d6000fd5b505050506104d6565b60005b828110156104d457600654604051633d02d0c960e01b81526001600160a01b0390911690633d02d0c99061048f9033908890600401610be2565b600060405180830381600087803b1580156104a957600080fd5b505af11580156104bd573d6000803e3d6000fd5b5050505080806104cc90610c06565b915050610455565b505b81600560008282546104e89190610c21565b909155505033600090815260026020526040902054610517576004805490600061051183610c06565b91905055505b3360009081526002602052604081208054849290610536908490610c21565b9091555050600754604051630f38ca0d60e31b8152336004820152602481018390526001600160a01b03909116906379c6506890604401600060405180830381600087803b15801561058757600080fd5b505af115801561059b573d6000803e3d6000fd5b50505050505050565b6105ac610948565b600155565b6105b9610948565b6001600160a01b03811661061e5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016103d7565b610627816109a2565b50565b600854604080516305f5c3df60e21b815290516000926001600160a01b0316916317d70f7c916004808301926020929190829003018186803b15801561066f57600080fd5b505afa158015610683573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106a79190610c39565b6106b2906001610c21565b6008546040516337b8dd1560e21b81529192506001600160a01b03169063dee37454906106e790849086903390600401610c52565b600060405180830381600087803b15801561070157600080fd5b505af1158015610715573d6000803e3d6000fd5b5050505034600a600082825461072b9190610c21565b9091555050600154600a54106107a957600860009054906101000a90046001600160a01b03166001600160a01b0316632004ffd96040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561078b57600080fd5b505af115801561079f573d6000803e3d6000fd5b50506000600a5550505b3360009081526003602052604090205461085557600954604051630f38ca0d60e31b81523360048201523460248201526001600160a01b03909116906379c6506890604401602060405180830381600087803b15801561080857600080fd5b505af115801561081c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108409190610c39565b336000908152600360205260409020556108cc565b6009543360009081526003602052604090819020549051631a8fd74d60e31b815260048101919091523460248201526001600160a01b039091169063d47eba6890604401600060405180830381600087803b1580156108b357600080fd5b505af11580156108c7573d6000803e3d6000fd5b505050505b600480549060006108dc83610c06565b9091555050600754604051630f38ca0d60e31b81523360048201523460248201526001600160a01b03909116906379c6506890604401600060405180830381600087803b15801561092c57600080fd5b505af1158015610940573d6000803e3d6000fd5b505050505050565b6000546001600160a01b0316331461036d5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016103d7565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600060208284031215610a0457600080fd5b81356001600160a01b0381168114610a1b57600080fd5b9392505050565b634e487b7160e01b600052604160045260246000fd5b600082601f830112610a4957600080fd5b813567ffffffffffffffff80821115610a6457610a64610a22565b604051601f8301601f19908116603f01168101908282118183101715610a8c57610a8c610a22565b81604052838152866020858801011115610aa557600080fd5b836020870160208301376000602085830101528094505050505092915050565b60008060408385031215610ad857600080fd5b823567ffffffffffffffff811115610aef57600080fd5b610afb85828601610a38565b95602094909401359450505050565b600060208284031215610b1c57600080fd5b5035919050565b600060208284031215610b3557600080fd5b813567ffffffffffffffff811115610b4c57600080fd5b610b5884828501610a38565b949350505050565b634e487b7160e01b600052601160045260246000fd5b6000816000190483118215151615610b9057610b90610b60565b500290565b6000815180845260005b81811015610bbb57602081850181015186830182015201610b9f565b81811115610bcd576000602083870101525b50601f01601f19169290920160200192915050565b6001600160a01b0383168152604060208201819052600090610b5890830184610b95565b6000600019821415610c1a57610c1a610b60565b5060010190565b60008219821115610c3457610c34610b60565b500190565b600060208284031215610c4b57600080fd5b5051919050565b838152606060208201526000610c6b6060830185610b95565b905060018060a01b038316604083015294935050505056fea26469706673582212206258eecda429599a0e99e39e902998b0c6b40d47b70b5a14feafdaefc07f834f64736f6c63430008090033";

type CryptoBuggyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CryptoBuggyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CryptoBuggy__factory extends ContractFactory {
  constructor(...args: CryptoBuggyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _price: PromiseOrValue<BigNumberish>,
    _nft: PromiseOrValue<string>,
    _partialNft: PromiseOrValue<string>,
    _donateNft: PromiseOrValue<string>,
    _buggyToken: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<CryptoBuggy> {
    return super.deploy(
      _price,
      _nft,
      _partialNft,
      _donateNft,
      _buggyToken,
      overrides || {}
    ) as Promise<CryptoBuggy>;
  }
  override getDeployTransaction(
    _price: PromiseOrValue<BigNumberish>,
    _nft: PromiseOrValue<string>,
    _partialNft: PromiseOrValue<string>,
    _donateNft: PromiseOrValue<string>,
    _buggyToken: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _price,
      _nft,
      _partialNft,
      _donateNft,
      _buggyToken,
      overrides || {}
    );
  }
  override attach(address: string): CryptoBuggy {
    return super.attach(address) as CryptoBuggy;
  }
  override connect(signer: Signer): CryptoBuggy__factory {
    return super.connect(signer) as CryptoBuggy__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CryptoBuggyInterface {
    return new utils.Interface(_abi) as CryptoBuggyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CryptoBuggy {
    return new Contract(address, _abi, signerOrProvider) as CryptoBuggy;
  }
}
