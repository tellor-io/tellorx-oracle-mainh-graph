// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class NewReport extends ethereum.Event {
  get params(): NewReport__Params {
    return new NewReport__Params(this);
  }
}

export class NewReport__Params {
  _event: NewReport;

  constructor(event: NewReport) {
    this._event = event;
  }

  get _queryId(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get _time(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get _value(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }

  get _reward(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get _nonce(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get _queryData(): Bytes {
    return this._event.parameters[5].value.toBytes();
  }

  get _reporter(): Address {
    return this._event.parameters[6].value.toAddress();
  }
}

export class ReportingLockChanged extends ethereum.Event {
  get params(): ReportingLockChanged__Params {
    return new ReportingLockChanged__Params(this);
  }
}

export class ReportingLockChanged__Params {
  _event: ReportingLockChanged;

  constructor(event: ReportingLockChanged) {
    this._event = event;
  }

  get _newReportingLock(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class TimeBasedRewardsChanged extends ethereum.Event {
  get params(): TimeBasedRewardsChanged__Params {
    return new TimeBasedRewardsChanged__Params(this);
  }
}

export class TimeBasedRewardsChanged__Params {
  _event: TimeBasedRewardsChanged;

  constructor(event: TimeBasedRewardsChanged) {
    this._event = event;
  }

  get _newTimeBasedReward(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class TipAdded extends ethereum.Event {
  get params(): TipAdded__Params {
    return new TipAdded__Params(this);
  }
}

export class TipAdded__Params {
  _event: TipAdded;

  constructor(event: TipAdded) {
    this._event = event;
  }

  get _user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _queryId(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get _tip(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get _totalTip(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get _queryData(): Bytes {
    return this._event.parameters[4].value.toBytes();
  }
}

export class Contract__getCurrentRewardResult {
  value0: BigInt;
  value1: BigInt;

  constructor(value0: BigInt, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }
}

export class Contract extends ethereum.SmartContract {
  static bind(address: Address): Contract {
    return new Contract("Contract", address);
  }

  getBlockNumberByTimestamp(_queryId: Bytes, _timestamp: BigInt): BigInt {
    let result = super.call(
      "getBlockNumberByTimestamp",
      "getBlockNumberByTimestamp(bytes32,uint256):(uint256)",
      [
        ethereum.Value.fromFixedBytes(_queryId),
        ethereum.Value.fromUnsignedBigInt(_timestamp)
      ]
    );

    return result[0].toBigInt();
  }

  try_getBlockNumberByTimestamp(
    _queryId: Bytes,
    _timestamp: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getBlockNumberByTimestamp",
      "getBlockNumberByTimestamp(bytes32,uint256):(uint256)",
      [
        ethereum.Value.fromFixedBytes(_queryId),
        ethereum.Value.fromUnsignedBigInt(_timestamp)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getCurrentReward(_queryId: Bytes): Contract__getCurrentRewardResult {
    let result = super.call(
      "getCurrentReward",
      "getCurrentReward(bytes32):(uint256,uint256)",
      [ethereum.Value.fromFixedBytes(_queryId)]
    );

    return new Contract__getCurrentRewardResult(
      result[0].toBigInt(),
      result[1].toBigInt()
    );
  }

  try_getCurrentReward(
    _queryId: Bytes
  ): ethereum.CallResult<Contract__getCurrentRewardResult> {
    let result = super.tryCall(
      "getCurrentReward",
      "getCurrentReward(bytes32):(uint256,uint256)",
      [ethereum.Value.fromFixedBytes(_queryId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Contract__getCurrentRewardResult(
        value[0].toBigInt(),
        value[1].toBigInt()
      )
    );
  }

  getCurrentValue(_queryId: Bytes): Bytes {
    let result = super.call(
      "getCurrentValue",
      "getCurrentValue(bytes32):(bytes)",
      [ethereum.Value.fromFixedBytes(_queryId)]
    );

    return result[0].toBytes();
  }

  try_getCurrentValue(_queryId: Bytes): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "getCurrentValue",
      "getCurrentValue(bytes32):(bytes)",
      [ethereum.Value.fromFixedBytes(_queryId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  getReportTimestampByIndex(_queryId: Bytes, _index: BigInt): BigInt {
    let result = super.call(
      "getReportTimestampByIndex",
      "getReportTimestampByIndex(bytes32,uint256):(uint256)",
      [
        ethereum.Value.fromFixedBytes(_queryId),
        ethereum.Value.fromUnsignedBigInt(_index)
      ]
    );

    return result[0].toBigInt();
  }

  try_getReportTimestampByIndex(
    _queryId: Bytes,
    _index: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getReportTimestampByIndex",
      "getReportTimestampByIndex(bytes32,uint256):(uint256)",
      [
        ethereum.Value.fromFixedBytes(_queryId),
        ethereum.Value.fromUnsignedBigInt(_index)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getReporterByTimestamp(_queryId: Bytes, _timestamp: BigInt): Address {
    let result = super.call(
      "getReporterByTimestamp",
      "getReporterByTimestamp(bytes32,uint256):(address)",
      [
        ethereum.Value.fromFixedBytes(_queryId),
        ethereum.Value.fromUnsignedBigInt(_timestamp)
      ]
    );

    return result[0].toAddress();
  }

  try_getReporterByTimestamp(
    _queryId: Bytes,
    _timestamp: BigInt
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getReporterByTimestamp",
      "getReporterByTimestamp(bytes32,uint256):(address)",
      [
        ethereum.Value.fromFixedBytes(_queryId),
        ethereum.Value.fromUnsignedBigInt(_timestamp)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getReporterLastTimestamp(_reporter: Address): BigInt {
    let result = super.call(
      "getReporterLastTimestamp",
      "getReporterLastTimestamp(address):(uint256)",
      [ethereum.Value.fromAddress(_reporter)]
    );

    return result[0].toBigInt();
  }

  try_getReporterLastTimestamp(
    _reporter: Address
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getReporterLastTimestamp",
      "getReporterLastTimestamp(address):(uint256)",
      [ethereum.Value.fromAddress(_reporter)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getReportingLock(): BigInt {
    let result = super.call(
      "getReportingLock",
      "getReportingLock():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_getReportingLock(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getReportingLock",
      "getReportingLock():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getReportsSubmittedByAddress(_reporter: Address): BigInt {
    let result = super.call(
      "getReportsSubmittedByAddress",
      "getReportsSubmittedByAddress(address):(uint256)",
      [ethereum.Value.fromAddress(_reporter)]
    );

    return result[0].toBigInt();
  }

  try_getReportsSubmittedByAddress(
    _reporter: Address
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getReportsSubmittedByAddress",
      "getReportsSubmittedByAddress(address):(uint256)",
      [ethereum.Value.fromAddress(_reporter)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getTimeBasedReward(): BigInt {
    let result = super.call(
      "getTimeBasedReward",
      "getTimeBasedReward():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_getTimeBasedReward(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getTimeBasedReward",
      "getTimeBasedReward():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getTimeOfLastNewValue(): BigInt {
    let result = super.call(
      "getTimeOfLastNewValue",
      "getTimeOfLastNewValue():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_getTimeOfLastNewValue(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getTimeOfLastNewValue",
      "getTimeOfLastNewValue():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getTimestampCountById(_queryId: Bytes): BigInt {
    let result = super.call(
      "getTimestampCountById",
      "getTimestampCountById(bytes32):(uint256)",
      [ethereum.Value.fromFixedBytes(_queryId)]
    );

    return result[0].toBigInt();
  }

  try_getTimestampCountById(_queryId: Bytes): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getTimestampCountById",
      "getTimestampCountById(bytes32):(uint256)",
      [ethereum.Value.fromFixedBytes(_queryId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getTimestampIndexByTimestamp(_queryId: Bytes, _timestamp: BigInt): BigInt {
    let result = super.call(
      "getTimestampIndexByTimestamp",
      "getTimestampIndexByTimestamp(bytes32,uint256):(uint256)",
      [
        ethereum.Value.fromFixedBytes(_queryId),
        ethereum.Value.fromUnsignedBigInt(_timestamp)
      ]
    );

    return result[0].toBigInt();
  }

  try_getTimestampIndexByTimestamp(
    _queryId: Bytes,
    _timestamp: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getTimestampIndexByTimestamp",
      "getTimestampIndexByTimestamp(bytes32,uint256):(uint256)",
      [
        ethereum.Value.fromFixedBytes(_queryId),
        ethereum.Value.fromUnsignedBigInt(_timestamp)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getTipsById(_queryId: Bytes): BigInt {
    let result = super.call("getTipsById", "getTipsById(bytes32):(uint256)", [
      ethereum.Value.fromFixedBytes(_queryId)
    ]);

    return result[0].toBigInt();
  }

  try_getTipsById(_queryId: Bytes): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getTipsById",
      "getTipsById(bytes32):(uint256)",
      [ethereum.Value.fromFixedBytes(_queryId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getTipsByUser(_user: Address): BigInt {
    let result = super.call(
      "getTipsByUser",
      "getTipsByUser(address):(uint256)",
      [ethereum.Value.fromAddress(_user)]
    );

    return result[0].toBigInt();
  }

  try_getTipsByUser(_user: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getTipsByUser",
      "getTipsByUser(address):(uint256)",
      [ethereum.Value.fromAddress(_user)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getValueByTimestamp(_queryId: Bytes, _timestamp: BigInt): Bytes {
    let result = super.call(
      "getValueByTimestamp",
      "getValueByTimestamp(bytes32,uint256):(bytes)",
      [
        ethereum.Value.fromFixedBytes(_queryId),
        ethereum.Value.fromUnsignedBigInt(_timestamp)
      ]
    );

    return result[0].toBytes();
  }

  try_getValueByTimestamp(
    _queryId: Bytes,
    _timestamp: BigInt
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "getValueByTimestamp",
      "getValueByTimestamp(bytes32,uint256):(bytes)",
      [
        ethereum.Value.fromFixedBytes(_queryId),
        ethereum.Value.fromUnsignedBigInt(_timestamp)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  reportingLock(): BigInt {
    let result = super.call("reportingLock", "reportingLock():(uint256)", []);

    return result[0].toBigInt();
  }

  try_reportingLock(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "reportingLock",
      "reportingLock():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  timeBasedReward(): BigInt {
    let result = super.call(
      "timeBasedReward",
      "timeBasedReward():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_timeBasedReward(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "timeBasedReward",
      "timeBasedReward():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  timeOfLastNewValue(): BigInt {
    let result = super.call(
      "timeOfLastNewValue",
      "timeOfLastNewValue():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_timeOfLastNewValue(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "timeOfLastNewValue",
      "timeOfLastNewValue():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  tips(param0: Bytes): BigInt {
    let result = super.call("tips", "tips(bytes32):(uint256)", [
      ethereum.Value.fromFixedBytes(param0)
    ]);

    return result[0].toBigInt();
  }

  try_tips(param0: Bytes): ethereum.CallResult<BigInt> {
    let result = super.tryCall("tips", "tips(bytes32):(uint256)", [
      ethereum.Value.fromFixedBytes(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  tipsInContract(): BigInt {
    let result = super.call("tipsInContract", "tipsInContract():(uint256)", []);

    return result[0].toBigInt();
  }

  try_tipsInContract(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "tipsInContract",
      "tipsInContract():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  verify(): BigInt {
    let result = super.call("verify", "verify():(uint256)", []);

    return result[0].toBigInt();
  }

  try_verify(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("verify", "verify():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ChangeReportingLockCall extends ethereum.Call {
  get inputs(): ChangeReportingLockCall__Inputs {
    return new ChangeReportingLockCall__Inputs(this);
  }

  get outputs(): ChangeReportingLockCall__Outputs {
    return new ChangeReportingLockCall__Outputs(this);
  }
}

export class ChangeReportingLockCall__Inputs {
  _call: ChangeReportingLockCall;

  constructor(call: ChangeReportingLockCall) {
    this._call = call;
  }

  get _newReportingLock(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ChangeReportingLockCall__Outputs {
  _call: ChangeReportingLockCall;

  constructor(call: ChangeReportingLockCall) {
    this._call = call;
  }
}

export class ChangeTimeBasedRewardCall extends ethereum.Call {
  get inputs(): ChangeTimeBasedRewardCall__Inputs {
    return new ChangeTimeBasedRewardCall__Inputs(this);
  }

  get outputs(): ChangeTimeBasedRewardCall__Outputs {
    return new ChangeTimeBasedRewardCall__Outputs(this);
  }
}

export class ChangeTimeBasedRewardCall__Inputs {
  _call: ChangeTimeBasedRewardCall;

  constructor(call: ChangeTimeBasedRewardCall) {
    this._call = call;
  }

  get _newTimeBasedReward(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ChangeTimeBasedRewardCall__Outputs {
  _call: ChangeTimeBasedRewardCall;

  constructor(call: ChangeTimeBasedRewardCall) {
    this._call = call;
  }
}

export class RemoveValueCall extends ethereum.Call {
  get inputs(): RemoveValueCall__Inputs {
    return new RemoveValueCall__Inputs(this);
  }

  get outputs(): RemoveValueCall__Outputs {
    return new RemoveValueCall__Outputs(this);
  }
}

export class RemoveValueCall__Inputs {
  _call: RemoveValueCall;

  constructor(call: RemoveValueCall) {
    this._call = call;
  }

  get _queryId(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get _timestamp(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class RemoveValueCall__Outputs {
  _call: RemoveValueCall;

  constructor(call: RemoveValueCall) {
    this._call = call;
  }
}

export class SubmitValueCall extends ethereum.Call {
  get inputs(): SubmitValueCall__Inputs {
    return new SubmitValueCall__Inputs(this);
  }

  get outputs(): SubmitValueCall__Outputs {
    return new SubmitValueCall__Outputs(this);
  }
}

export class SubmitValueCall__Inputs {
  _call: SubmitValueCall;

  constructor(call: SubmitValueCall) {
    this._call = call;
  }

  get _queryId(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get _value(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get _nonce(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _queryData(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class SubmitValueCall__Outputs {
  _call: SubmitValueCall;

  constructor(call: SubmitValueCall) {
    this._call = call;
  }
}

export class TipQueryCall extends ethereum.Call {
  get inputs(): TipQueryCall__Inputs {
    return new TipQueryCall__Inputs(this);
  }

  get outputs(): TipQueryCall__Outputs {
    return new TipQueryCall__Outputs(this);
  }
}

export class TipQueryCall__Inputs {
  _call: TipQueryCall;

  constructor(call: TipQueryCall) {
    this._call = call;
  }

  get _queryId(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get _tip(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _queryData(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class TipQueryCall__Outputs {
  _call: TipQueryCall;

  constructor(call: TipQueryCall) {
    this._call = call;
  }
}
