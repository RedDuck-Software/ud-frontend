/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface CryptoBuggyInterface extends utils.Interface {
  functions: {
    "addFund(string,uint256)": FunctionFragment;
    "addFundPartially(string)": FunctionFragment;
    "boughtBuggy()": FunctionFragment;
    "buggyNFT()": FunctionFragment;
    "buggyToken()": FunctionFragment;
    "donateNFT()": FunctionFragment;
    "owner()": FunctionFragment;
    "partialBuggyNFT()": FunctionFragment;
    "partialUsers(address)": FunctionFragment;
    "price()": FunctionFragment;
    "raised()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setNewBuggyPrice(uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "uniqUsers()": FunctionFragment;
    "users(address)": FunctionFragment;
    "withdraw(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addFund"
      | "addFundPartially"
      | "boughtBuggy"
      | "buggyNFT"
      | "buggyToken"
      | "donateNFT"
      | "owner"
      | "partialBuggyNFT"
      | "partialUsers"
      | "price"
      | "raised"
      | "renounceOwnership"
      | "setNewBuggyPrice"
      | "transferOwnership"
      | "uniqUsers"
      | "users"
      | "withdraw"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addFund",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "addFundPartially",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "boughtBuggy",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "buggyNFT", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "buggyToken",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "donateNFT", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "partialBuggyNFT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "partialUsers",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "price", values?: undefined): string;
  encodeFunctionData(functionFragment: "raised", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setNewBuggyPrice",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "uniqUsers", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "users",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: "addFund", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addFundPartially",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "boughtBuggy",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "buggyNFT", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "buggyToken", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "donateNFT", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "partialBuggyNFT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "partialUsers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "price", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "raised", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setNewBuggyPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "uniqUsers", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "users", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface CryptoBuggy extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: CryptoBuggyInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    addFund(
      _signature: PromiseOrValue<string>,
      count: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    addFundPartially(
      _signature: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    boughtBuggy(overrides?: CallOverrides): Promise<[BigNumber]>;

    buggyNFT(overrides?: CallOverrides): Promise<[string]>;

    buggyToken(overrides?: CallOverrides): Promise<[string]>;

    donateNFT(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    partialBuggyNFT(overrides?: CallOverrides): Promise<[string]>;

    partialUsers(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    price(overrides?: CallOverrides): Promise<[BigNumber]>;

    raised(overrides?: CallOverrides): Promise<[BigNumber]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setNewBuggyPrice(
      newBuggyPrice: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    uniqUsers(overrides?: CallOverrides): Promise<[BigNumber]>;

    users(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    withdraw(
      _beneficiary: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  addFund(
    _signature: PromiseOrValue<string>,
    count: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  addFundPartially(
    _signature: PromiseOrValue<string>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  boughtBuggy(overrides?: CallOverrides): Promise<BigNumber>;

  buggyNFT(overrides?: CallOverrides): Promise<string>;

  buggyToken(overrides?: CallOverrides): Promise<string>;

  donateNFT(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  partialBuggyNFT(overrides?: CallOverrides): Promise<string>;

  partialUsers(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  price(overrides?: CallOverrides): Promise<BigNumber>;

  raised(overrides?: CallOverrides): Promise<BigNumber>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setNewBuggyPrice(
    newBuggyPrice: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  uniqUsers(overrides?: CallOverrides): Promise<BigNumber>;

  users(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  withdraw(
    _beneficiary: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addFund(
      _signature: PromiseOrValue<string>,
      count: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    addFundPartially(
      _signature: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    boughtBuggy(overrides?: CallOverrides): Promise<BigNumber>;

    buggyNFT(overrides?: CallOverrides): Promise<string>;

    buggyToken(overrides?: CallOverrides): Promise<string>;

    donateNFT(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    partialBuggyNFT(overrides?: CallOverrides): Promise<string>;

    partialUsers(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    price(overrides?: CallOverrides): Promise<BigNumber>;

    raised(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setNewBuggyPrice(
      newBuggyPrice: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    uniqUsers(overrides?: CallOverrides): Promise<BigNumber>;

    users(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdraw(
      _beneficiary: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    addFund(
      _signature: PromiseOrValue<string>,
      count: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    addFundPartially(
      _signature: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    boughtBuggy(overrides?: CallOverrides): Promise<BigNumber>;

    buggyNFT(overrides?: CallOverrides): Promise<BigNumber>;

    buggyToken(overrides?: CallOverrides): Promise<BigNumber>;

    donateNFT(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    partialBuggyNFT(overrides?: CallOverrides): Promise<BigNumber>;

    partialUsers(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    price(overrides?: CallOverrides): Promise<BigNumber>;

    raised(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setNewBuggyPrice(
      newBuggyPrice: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    uniqUsers(overrides?: CallOverrides): Promise<BigNumber>;

    users(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdraw(
      _beneficiary: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addFund(
      _signature: PromiseOrValue<string>,
      count: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    addFundPartially(
      _signature: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    boughtBuggy(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    buggyNFT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    buggyToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    donateNFT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    partialBuggyNFT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    partialUsers(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    price(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    raised(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setNewBuggyPrice(
      newBuggyPrice: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    uniqUsers(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    users(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    withdraw(
      _beneficiary: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
