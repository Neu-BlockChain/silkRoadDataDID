import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export type DataSource = { 'SumData' : null } |
  { 'Soil' : null } |
  { 'Vegetation' : null };
export type DataSource__1 = { 'SumData' : null } |
  { 'Soil' : null } |
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
export interface GetAllArgs {
  'dataSource' : DataSource,
  'regionLevel' : RegionLevel,
}
export interface GetCertainArgs {
  'id' : bigint,
  'dataSource' : DataSource,
  'time' : bigint,
  'regionLevel' : RegionLevel,
}
export interface GetCertainFieldArgs {
  'id' : bigint,
  'dataSource' : DataSource,
  'time' : bigint,
  'regionLevel' : RegionLevel,
  'fieldName' : string,
}
export interface GetFieldArgs {
  'id' : bigint,
  'dataSource' : DataSource,
  'time' : bigint,
  'regionLevel' : RegionLevel,
}
export interface GetSomeTypeRegionAllDataReturn {
  'id' : bigint,
  'year_end' : bigint,
  'name' : string,
  'soc_stock_amount' : string,
  'std_amount' : string,
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
export type Result = { 'ok' : boolean } |
  { 'err' : Error };
export interface UploadArgs {
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
  'geAllAverageFieldData' : ActorMethod<
    [DataSource__1],
    Array<RESERVESContainField>,
  >,
  'geAllFieldData' : ActorMethod<[DataSource__1], Array<RESERVESContainField>>,
  'getAverageFieldData' : ActorMethod<
    [GetFieldArgs],
    [] | [RESERVESContainField],
  >,
  'getCertainAverageFieldData' : ActorMethod<
    [GetCertainFieldArgs],
    [] | [FieldReserve__1],
  >,
  'getCertainFieldData' : ActorMethod<
    [GetCertainFieldArgs],
    [] | [FieldReserve__1],
  >,
  'getFieldData' : ActorMethod<[GetFieldArgs], [] | [RESERVESContainField]>,
  'getIdToNameMap' : ActorMethod<[], Array<[bigint, string]>>,
  'getNameToIdMap' : ActorMethod<[], Array<[string, bigint]>>,
  'getSomeTypeRegionAllData' : ActorMethod<
    [GetAllArgs],
    Array<GetSomeTypeRegionAllDataReturn>,
  >,
  'getSomeTypeSomeRegionSomeTimeCertainData' : ActorMethod<
    [GetCertainArgs],
    [] | [GetSomeTypeRegionAllDataReturn],
  >,
  'idToName' : ActorMethod<[bigint], [] | [string]>,
  'nameToId' : ActorMethod<[string], [] | [bigint]>,
  'uploadAverageFieldData' : ActorMethod<[UploadFieldArgs], Result>,
  'uploadFieldData' : ActorMethod<[UploadFieldArgs], Result>,
  'uploadSoilData' : ActorMethod<[UploadArgs], Result>,
  'uploadSumData' : ActorMethod<[UploadArgs], Result>,
  'uploadVegetationData' : ActorMethod<[UploadArgs], Result>,
}
export interface _SERVICE extends data {}
