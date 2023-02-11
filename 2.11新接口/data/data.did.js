export const idlFactory = ({ IDL }) => {
  const DataSource__1 = IDL.Variant({
    'SumData' : IDL.Null,
    'Soil' : IDL.Null,
    'Vegetation' : IDL.Null,
  });
  const FieldReserve = IDL.Record({
    'soc_stock_amount' : IDL.Text,
    'std_amount' : IDL.Text,
    'soc_density_amount' : IDL.Text,
    'fieldName' : IDL.Text,
  });
  const RegionLevel = IDL.Variant({
    'City' : IDL.Null,
    'Country_and_Region' : IDL.Null,
    'Province' : IDL.Null,
  });
  const RESERVESContainField = IDL.Record({
    'id' : IDL.Nat,
    'year_end' : IDL.Nat,
    'upload_count' : IDL.Nat,
    'fieldReserves' : IDL.Vec(FieldReserve),
    'name' : IDL.Text,
    'regionLevel' : RegionLevel,
    'year_start' : IDL.Nat,
  });
  const DataSource = IDL.Variant({
    'SumData' : IDL.Null,
    'Soil' : IDL.Null,
    'Vegetation' : IDL.Null,
  });
  const GetFieldArgs = IDL.Record({
    'id' : IDL.Nat,
    'dataSource' : DataSource,
    'time' : IDL.Nat,
    'regionLevel' : RegionLevel,
  });
  const GetCertainFieldArgs = IDL.Record({
    'id' : IDL.Nat,
    'dataSource' : DataSource,
    'time' : IDL.Nat,
    'regionLevel' : RegionLevel,
    'fieldName' : IDL.Text,
  });
  const FieldReserve__1 = IDL.Record({
    'soc_stock_amount' : IDL.Text,
    'std_amount' : IDL.Text,
    'soc_density_amount' : IDL.Text,
    'fieldName' : IDL.Text,
  });
  const GetAllArgs = IDL.Record({
    'dataSource' : DataSource,
    'regionLevel' : RegionLevel,
  });
  const GetSomeTypeRegionAllDataReturn = IDL.Record({
    'id' : IDL.Nat,
    'year_end' : IDL.Nat,
    'name' : IDL.Text,
    'soc_stock_amount' : IDL.Text,
    'std_amount' : IDL.Text,
    'year_start' : IDL.Nat,
    'soc_density_amount' : IDL.Text,
  });
  const GetCertainArgs = IDL.Record({
    'id' : IDL.Nat,
    'dataSource' : DataSource,
    'time' : IDL.Nat,
    'regionLevel' : RegionLevel,
  });
  const UploadFieldArgs = IDL.Record({
    'id' : IDL.Nat,
    'year_end' : IDL.Nat,
    'dataSource' : DataSource,
    'upload_count' : IDL.Nat,
    'fieldReserves' : IDL.Vec(FieldReserve),
    'name' : IDL.Text,
    'regionLevel' : RegionLevel,
    'year_start' : IDL.Nat,
  });
  const Error = IDL.Variant({
    'AlreadyHaveThisReserve' : IDL.Null,
    'TimeError' : IDL.Null,
    'SomeThingWrong' : IDL.Null,
    'ReserveNotExist' : IDL.Null,
  });
  const Result = IDL.Variant({ 'ok' : IDL.Bool, 'err' : Error });
  const UploadArgs = IDL.Record({
    'id' : IDL.Nat,
    'year_end' : IDL.Nat,
    'upload_count' : IDL.Nat,
    'name' : IDL.Text,
    'soc_stock_amount' : IDL.Text,
    'std_amount' : IDL.Text,
    'regionLevel' : RegionLevel,
    'year_start' : IDL.Nat,
    'soc_density_amount' : IDL.Text,
  });
  const data = IDL.Service({
    'geAllAverageFieldData' : IDL.Func(
        [DataSource__1],
        [IDL.Vec(RESERVESContainField)],
        ['query'],
      ),
    'geAllFieldData' : IDL.Func(
        [DataSource__1],
        [IDL.Vec(RESERVESContainField)],
        ['query'],
      ),
    'getAverageFieldData' : IDL.Func(
        [GetFieldArgs],
        [IDL.Opt(RESERVESContainField)],
        ['query'],
      ),
    'getCertainAverageFieldData' : IDL.Func(
        [GetCertainFieldArgs],
        [IDL.Opt(FieldReserve__1)],
        ['query'],
      ),
    'getCertainFieldData' : IDL.Func(
        [GetCertainFieldArgs],
        [IDL.Opt(FieldReserve__1)],
        ['query'],
      ),
    'getFieldData' : IDL.Func(
        [GetFieldArgs],
        [IDL.Opt(RESERVESContainField)],
        ['query'],
      ),
    'getIdToNameMap' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(IDL.Nat, IDL.Text))],
        ['query'],
      ),
    'getNameToIdMap' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(IDL.Text, IDL.Nat))],
        ['query'],
      ),
    'getSomeTypeRegionAllData' : IDL.Func(
        [GetAllArgs],
        [IDL.Vec(GetSomeTypeRegionAllDataReturn)],
        ['query'],
      ),
    'getSomeTypeSomeRegionSomeTimeCertainData' : IDL.Func(
        [GetCertainArgs],
        [IDL.Opt(GetSomeTypeRegionAllDataReturn)],
        ['query'],
      ),
    'idToName' : IDL.Func([IDL.Nat], [IDL.Opt(IDL.Text)], ['query']),
    'nameToId' : IDL.Func([IDL.Text], [IDL.Opt(IDL.Nat)], ['query']),
    'uploadAverageFieldData' : IDL.Func([UploadFieldArgs], [Result], []),
    'uploadFieldData' : IDL.Func([UploadFieldArgs], [Result], []),
    'uploadSoilData' : IDL.Func([UploadArgs], [Result], []),
    'uploadSumData' : IDL.Func([UploadArgs], [Result], []),
    'uploadVegetationData' : IDL.Func([UploadArgs], [Result], []),
  });
  return data;
};
export const init = ({ IDL }) => { return []; };
