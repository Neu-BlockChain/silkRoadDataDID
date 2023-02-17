import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export type DataSource = { 'Soil' : null } |
  { 'Vegetation' : null };
export type DataSource__1 = { 'Soil' : null } |
  { 'Vegetation' : null };
export type Error = { 'AlreadyHaveThisReserve' : null } |
  { 'TimeError' : null } |
  { 'SomeThingWrong' : null } |
  { 'ReserveNotExist' : null };
export interface FieldReserve {
  'soc_stock_amount' : string,
  'std_amount' : string,
  'soc_density_amount' : string,
  'fieldName' : string,
}
export interface FieldReserve__1 {
  'soc_stock_amount' : string,
  'std_amount' : string,
  'soc_density_amount' : string,
  'fieldName' : string,
}
export interface RESERVES {
  'id' : bigint,
  'year_end' : bigint,
  'upload_count' : bigint,
  'name' : string,
  'soc_stock_amount' : string,
  'std_amount' : string,
  'regionLevel' : RegionLevel,
  'year_start' : bigint,
  'soc_density_amount' : string,
}
export interface RESERVESContainField {
  'id' : bigint,
  'year_end' : bigint,
  'upload_count' : bigint,
  'fieldReserves' : Array<FieldReserve>,
  'name' : string,
  'regionLevel' : RegionLevel,
  'year_start' : bigint,
}
export type RegionLevel = { 'City' : null } |
  { 'Country_and_Region' : null } |
  { 'Province' : null };
export type RegionLevel__1 = { 'City' : null } |
  { 'Country_and_Region' : null } |
  { 'Province' : null };
export type Result = { 'ok' : boolean } |
  { 'err' : Error };
export interface SumRESERVES {
  'id' : bigint,
  'year_end' : bigint,
  'upload_count' : bigint,
  'name' : string,
  'regionLevel' : RegionLevel,
  'sumSoc' : string,
  'year_start' : bigint,
}
export interface SumRESERVESContainField {
  'id' : bigint,
  'year_end' : bigint,
  'upload_count' : bigint,
  'fieldReserves' : Array<[string, string]>,
  'name' : string,
  'regionLevel' : RegionLevel,
  'year_start' : bigint,
}
export interface UploadFieldArgs {
  'id' : bigint,
  'year_end' : bigint,
  'dataSource' : DataSource,
  'upload_count' : bigint,
  'fieldReserves' : Array<FieldReserve>,
  'name' : string,
  'regionLevel' : RegionLevel,
  'year_start' : bigint,
}
export interface data {
  'getAllAverageFieldData' : ActorMethod<
    [DataSource__1],
    Array<RESERVESContainField>,
  >,
  'getAllAverageSumFieldData' : ActorMethod<[], Array<SumRESERVESContainField>>,
  'getAllFieldData' : ActorMethod<[DataSource__1], Array<RESERVESContainField>>,
  'getAllSumFieldData' : ActorMethod<[], Array<SumRESERVESContainField>>,
  'getAllSumSoc' : ActorMethod<[], Array<SumRESERVES>>,
  'getAverageFieldData' : ActorMethod<
    [DataSource__1, bigint, bigint],
    [] | [RESERVESContainField],
  >,
  'getCertainFieldAverageData' : ActorMethod<
    [DataSource__1, bigint, bigint, string],
    [] | [FieldReserve__1],
  >,
  'getCertainFieldData' : ActorMethod<
    [DataSource__1, bigint, bigint, string],
    [] | [FieldReserve__1],
  >,
  'getCertain_Id_Time_Data' : ActorMethod<
    [DataSource__1, bigint, bigint],
    [] | [RESERVES],
  >,
  'getCertain_Id_Time_Field_sumAvergaeData' : ActorMethod<
    [bigint, bigint, string],
    [] | [string],
  >,
  'getCertain_Id_Time_Field_sumData' : ActorMethod<
    [bigint, bigint, string],
    [] | [string],
  >,
  'getCertain_Id_Time_SumSoc' : ActorMethod<
    [bigint, bigint],
    [] | [SumRESERVES],
  >,
  'getCertain_Id_Time_sumAverageFieldData' : ActorMethod<
    [bigint, bigint],
    [] | [SumRESERVESContainField],
  >,
  'getCertain_Id_Time_sumFieldData' : ActorMethod<
    [bigint, bigint],
    [] | [SumRESERVESContainField],
  >,
  'getCertain_RegionLevel_AverageFieldData' : ActorMethod<
    [DataSource__1, RegionLevel__1],
    Array<RESERVESContainField>,
  >,
  'getCertain_RegionLevel_FieldData' : ActorMethod<
    [DataSource__1, RegionLevel__1],
    Array<RESERVESContainField>,
  >,
  'getCertain_RegionLevel_SumSoc' : ActorMethod<
    [RegionLevel__1],
    Array<SumRESERVES>,
  >,
  'getCertain_RegionLevel_Time_AverageFieldData' : ActorMethod<
    [DataSource__1, RegionLevel__1, bigint],
    Array<RESERVESContainField>,
  >,
  'getCertain_RegionLevel_Time_Data' : ActorMethod<
    [DataSource__1, RegionLevel__1, bigint],
    Array<RESERVES>,
  >,
  'getCertain_RegionLevel_Time_FieldData' : ActorMethod<
    [DataSource__1, RegionLevel__1, bigint],
    Array<RESERVESContainField>,
  >,
  'getCertain_RegionLevel_Time_SumSoc' : ActorMethod<
    [RegionLevel__1, bigint],
    Array<SumRESERVES>,
  >,
  'getCertain_RegionLevel_Time_sumAverageFieldData' : ActorMethod<
    [RegionLevel__1, bigint],
    Array<SumRESERVESContainField>,
  >,
  'getCertain_RegionLevel_Time_sumFieldData' : ActorMethod<
    [RegionLevel__1, bigint],
    Array<SumRESERVESContainField>,
  >,
  'getCertain_RegionLevel_sumAverageFiledData' : ActorMethod<
    [RegionLevel__1],
    Array<SumRESERVESContainField>,
  >,
  'getCertain_RegionLevel_sumFiledData' : ActorMethod<
    [RegionLevel__1],
    Array<SumRESERVESContainField>,
  >,
  'getCertain_Source_Data' : ActorMethod<[DataSource__1], Array<RESERVES>>,
  'getCertanin_RegionLevel_Data' : ActorMethod<
    [DataSource__1, RegionLevel__1],
    Array<RESERVES>,
  >,
  'getFieldData' : ActorMethod<
    [DataSource__1, bigint, bigint],
    [] | [RESERVESContainField],
  >,
  'getIdToNameMap' : ActorMethod<[], Array<[bigint, string]>>,
  'getNameToIdMap' : ActorMethod<[], Array<[string, bigint]>>,
  'idToName' : ActorMethod<[bigint], [] | [string]>,
  'nameToId' : ActorMethod<[string], [] | [bigint]>,
  'newNameId' : ActorMethod<[string], bigint>,
  'uploadAverageFieldData' : ActorMethod<[UploadFieldArgs], Result>,
  'uploadFieldData' : ActorMethod<[UploadFieldArgs], Result>,
  'uploadSoilData' : ActorMethod<[RESERVES], Result>,
  'uploadSumAvergaeFieldData' : ActorMethod<[SumRESERVESContainField], Result>,
  'uploadSumData' : ActorMethod<[SumRESERVES], Result>,
  'uploadSumFieldData' : ActorMethod<[SumRESERVESContainField], Result>,
  'uploadVegetationData' : ActorMethod<[RESERVES], Result>,
}
export interface _SERVICE extends data {}
