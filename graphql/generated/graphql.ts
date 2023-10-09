import { GraphQLClient } from "graphql-request";
// import { RequestInit } from "graphql-request/dist/types.dom";
import {
  useMutation,
  useQuery,
  UseMutationOptions,
  UseQueryOptions,
} from "@tanstack/react-query";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };

function fetcher<TData, TVariables extends { [key: string]: any }>(
  client: GraphQLClient,
  query: string,
  variables?: TVariables,
  requestHeaders?: RequestInit["headers"]
) {
  return async (): Promise<TData> =>
    client.request({
      // @ts-ignore
      query,
      variables,
      requestHeaders,
    });
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  ConnectionCursor: { input: any; output: any };
  DateTime: { input: any; output: any };
};

export type Appointment = {
  __typename?: "Appointment";
  appointmentType?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  departmentId?: Maybe<Scalars["Float"]["output"]>;
  departments: Department;
  doctor: Doctor;
  doctorId?: Maybe<Scalars["Float"]["output"]>;
  healthProvider: HealthProvider;
  healthProviderId?: Maybe<Scalars["Float"]["output"]>;
  id: Scalars["ID"]["output"];
  isActive?: Maybe<Scalars["Boolean"]["output"]>;
  patient: Patient;
  patientId?: Maybe<Scalars["Float"]["output"]>;
  price?: Maybe<Scalars["Float"]["output"]>;
  scheduleTime?: Maybe<Scalars["DateTime"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type AppointmentAggregateFilter = {
  and?: InputMaybe<Array<AppointmentAggregateFilter>>;
  appointmentType?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  departmentId?: InputMaybe<NumberFieldComparison>;
  doctorId?: InputMaybe<NumberFieldComparison>;
  healthProviderId?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  isActive?: InputMaybe<BooleanFieldComparison>;
  or?: InputMaybe<Array<AppointmentAggregateFilter>>;
  patientId?: InputMaybe<NumberFieldComparison>;
  price?: InputMaybe<NumberFieldComparison>;
  scheduleTime?: InputMaybe<DateFieldComparison>;
  status?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type AppointmentAggregateGroupBy = {
  __typename?: "AppointmentAggregateGroupBy";
  appointmentType?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  departmentId?: Maybe<Scalars["Float"]["output"]>;
  doctorId?: Maybe<Scalars["Float"]["output"]>;
  healthProviderId?: Maybe<Scalars["Float"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  isActive?: Maybe<Scalars["Boolean"]["output"]>;
  patientId?: Maybe<Scalars["Float"]["output"]>;
  price?: Maybe<Scalars["Float"]["output"]>;
  scheduleTime?: Maybe<Scalars["DateTime"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type AppointmentAggregateGroupByCreatedAtArgs = {
  by?: GroupBy;
};

export type AppointmentAggregateGroupByDeletedAtArgs = {
  by?: GroupBy;
};

export type AppointmentAggregateGroupByScheduleTimeArgs = {
  by?: GroupBy;
};

export type AppointmentAggregateGroupByUpdatedAtArgs = {
  by?: GroupBy;
};

export type AppointmentAggregateResponse = {
  __typename?: "AppointmentAggregateResponse";
  avg?: Maybe<AppointmentAvgAggregate>;
  count?: Maybe<AppointmentCountAggregate>;
  groupBy?: Maybe<AppointmentAggregateGroupBy>;
  max?: Maybe<AppointmentMaxAggregate>;
  min?: Maybe<AppointmentMinAggregate>;
  sum?: Maybe<AppointmentSumAggregate>;
};

export type AppointmentAvgAggregate = {
  __typename?: "AppointmentAvgAggregate";
  departmentId?: Maybe<Scalars["Float"]["output"]>;
  doctorId?: Maybe<Scalars["Float"]["output"]>;
  healthProviderId?: Maybe<Scalars["Float"]["output"]>;
  id?: Maybe<Scalars["Float"]["output"]>;
  patientId?: Maybe<Scalars["Float"]["output"]>;
  price?: Maybe<Scalars["Float"]["output"]>;
};

export type AppointmentConnection = {
  __typename?: "AppointmentConnection";
  /** Array of edges. */
  edges: Array<AppointmentEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars["Int"]["output"];
};

export type AppointmentCountAggregate = {
  __typename?: "AppointmentCountAggregate";
  appointmentType?: Maybe<Scalars["Int"]["output"]>;
  createdAt?: Maybe<Scalars["Int"]["output"]>;
  deletedAt?: Maybe<Scalars["Int"]["output"]>;
  departmentId?: Maybe<Scalars["Int"]["output"]>;
  doctorId?: Maybe<Scalars["Int"]["output"]>;
  healthProviderId?: Maybe<Scalars["Int"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  isActive?: Maybe<Scalars["Int"]["output"]>;
  patientId?: Maybe<Scalars["Int"]["output"]>;
  price?: Maybe<Scalars["Int"]["output"]>;
  scheduleTime?: Maybe<Scalars["Int"]["output"]>;
  status?: Maybe<Scalars["Int"]["output"]>;
  updatedAt?: Maybe<Scalars["Int"]["output"]>;
};

export type AppointmentEdge = {
  __typename?: "AppointmentEdge";
  /** Cursor for this node. */
  cursor: Scalars["ConnectionCursor"]["output"];
  /** The node containing the Appointment */
  node: Appointment;
};

export type AppointmentFilter = {
  and?: InputMaybe<Array<AppointmentFilter>>;
  appointmentType?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  departmentId?: InputMaybe<NumberFieldComparison>;
  departments?: InputMaybe<AppointmentFilterDepartmentFilter>;
  doctor?: InputMaybe<AppointmentFilterDoctorFilter>;
  doctorId?: InputMaybe<NumberFieldComparison>;
  healthProvider?: InputMaybe<AppointmentFilterHealthProviderFilter>;
  healthProviderId?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  isActive?: InputMaybe<BooleanFieldComparison>;
  or?: InputMaybe<Array<AppointmentFilter>>;
  patient?: InputMaybe<AppointmentFilterPatientFilter>;
  patientId?: InputMaybe<NumberFieldComparison>;
  price?: InputMaybe<NumberFieldComparison>;
  scheduleTime?: InputMaybe<DateFieldComparison>;
  status?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type AppointmentFilterDepartmentFilter = {
  and?: InputMaybe<Array<AppointmentFilterDepartmentFilter>>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<AppointmentFilterDepartmentFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type AppointmentFilterDoctorFilter = {
  and?: InputMaybe<Array<AppointmentFilterDoctorFilter>>;
  bio?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  doctorTypeCategoryId?: InputMaybe<NumberFieldComparison>;
  doctorTypeId?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  location?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<AppointmentFilterDoctorFilter>>;
  price?: InputMaybe<NumberFieldComparison>;
  ratings?: InputMaybe<NumberFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  uploadId?: InputMaybe<IntFieldComparison>;
  userProfileId?: InputMaybe<NumberFieldComparison>;
};

export type AppointmentFilterHealthProviderFilter = {
  and?: InputMaybe<Array<AppointmentFilterHealthProviderFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  district?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  isFastTrack?: InputMaybe<BooleanFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<AppointmentFilterHealthProviderFilter>>;
  region?: InputMaybe<StringFieldComparison>;
  type?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type AppointmentFilterPatientFilter = {
  and?: InputMaybe<Array<AppointmentFilterPatientFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<AppointmentFilterPatientFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  userProfileId?: InputMaybe<NumberFieldComparison>;
};

export type AppointmentMaxAggregate = {
  __typename?: "AppointmentMaxAggregate";
  appointmentType?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  departmentId?: Maybe<Scalars["Float"]["output"]>;
  doctorId?: Maybe<Scalars["Float"]["output"]>;
  healthProviderId?: Maybe<Scalars["Float"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  patientId?: Maybe<Scalars["Float"]["output"]>;
  price?: Maybe<Scalars["Float"]["output"]>;
  scheduleTime?: Maybe<Scalars["DateTime"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type AppointmentMinAggregate = {
  __typename?: "AppointmentMinAggregate";
  appointmentType?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  departmentId?: Maybe<Scalars["Float"]["output"]>;
  doctorId?: Maybe<Scalars["Float"]["output"]>;
  healthProviderId?: Maybe<Scalars["Float"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  patientId?: Maybe<Scalars["Float"]["output"]>;
  price?: Maybe<Scalars["Float"]["output"]>;
  scheduleTime?: Maybe<Scalars["DateTime"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type AppointmentSort = {
  direction: SortDirection;
  field: AppointmentSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum AppointmentSortFields {
  AppointmentType = "appointmentType",
  CreatedAt = "createdAt",
  DeletedAt = "deletedAt",
  DepartmentId = "departmentId",
  DoctorId = "doctorId",
  HealthProviderId = "healthProviderId",
  Id = "id",
  IsActive = "isActive",
  PatientId = "patientId",
  Price = "price",
  ScheduleTime = "scheduleTime",
  Status = "status",
  UpdatedAt = "updatedAt",
}

export type AppointmentSumAggregate = {
  __typename?: "AppointmentSumAggregate";
  departmentId?: Maybe<Scalars["Float"]["output"]>;
  doctorId?: Maybe<Scalars["Float"]["output"]>;
  healthProviderId?: Maybe<Scalars["Float"]["output"]>;
  id?: Maybe<Scalars["Float"]["output"]>;
  patientId?: Maybe<Scalars["Float"]["output"]>;
  price?: Maybe<Scalars["Float"]["output"]>;
};

export type AssignCategoryTypeDto = {
  docTypeCategories: Array<Scalars["Int"]["input"]>;
  docTypeId: Scalars["Int"]["input"];
};

export type BooleanFieldComparison = {
  is?: InputMaybe<Scalars["Boolean"]["input"]>;
  isNot?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type CompleteAccountRegistrationInput = {
  dateOfBirth?: InputMaybe<Scalars["DateTime"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  firstName?: InputMaybe<Scalars["String"]["input"]>;
  gender?: InputMaybe<Scalars["String"]["input"]>;
  lastName?: InputMaybe<Scalars["String"]["input"]>;
  middleName?: InputMaybe<Scalars["String"]["input"]>;
  password?: InputMaybe<Scalars["String"]["input"]>;
  username?: InputMaybe<Scalars["String"]["input"]>;
};

export type CreateDepartmentInput = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  types?: InputMaybe<Scalars["String"]["input"]>;
};

export type CreateDoctorTypeCategoryDto = {
  code?: InputMaybe<Scalars["String"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  doctorTypeCategoryId?: InputMaybe<Scalars["Float"]["input"]>;
  doctorTypeId?: InputMaybe<Scalars["Float"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type CreateDoctorTypeDto = {
  code?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type CreateHealthProviderDto = {
  description: Scalars["String"]["input"];
  name: Scalars["String"]["input"];
  type: Scalars["String"]["input"];
};

export type CreateManyDepartmentsInput = {
  /** Array of records to create */
  departments: Array<CreateDepartmentInput>;
};

export type CreateManyDoctorTypeCategoriesInput = {
  /** Array of records to create */
  doctorTypeCategories: Array<CreateDoctorTypeCategoryDto>;
};

export type CreateManyDoctorTypesInput = {
  /** Array of records to create */
  doctorTypes: Array<CreateDoctorTypeDto>;
};

export type CreateManyHealthProvidersInput = {
  /** Array of records to create */
  healthProviders: Array<CreateHealthProviderDto>;
};

export type CreateOneDepartmentInput = {
  /** The record to create */
  department: CreateDepartmentInput;
};

export type CreateOneDoctorTypeCategoryInput = {
  /** The record to create */
  doctorTypeCategory: CreateDoctorTypeCategoryDto;
};

export type CreateOneDoctorTypeInput = {
  /** The record to create */
  doctorType: CreateDoctorTypeDto;
};

export type CreateOneHealthProviderInput = {
  /** The record to create */
  healthProvider: CreateHealthProviderDto;
};

export type CursorPaging = {
  /** Paginate after opaque cursor */
  after?: InputMaybe<Scalars["ConnectionCursor"]["input"]>;
  /** Paginate before opaque cursor */
  before?: InputMaybe<Scalars["ConnectionCursor"]["input"]>;
  /** Paginate first */
  first?: InputMaybe<Scalars["Int"]["input"]>;
  /** Paginate last */
  last?: InputMaybe<Scalars["Int"]["input"]>;
};

export type DateFieldComparison = {
  between?: InputMaybe<DateFieldComparisonBetween>;
  eq?: InputMaybe<Scalars["DateTime"]["input"]>;
  gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  in?: InputMaybe<Array<Scalars["DateTime"]["input"]>>;
  is?: InputMaybe<Scalars["Boolean"]["input"]>;
  isNot?: InputMaybe<Scalars["Boolean"]["input"]>;
  lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  neq?: InputMaybe<Scalars["DateTime"]["input"]>;
  notBetween?: InputMaybe<DateFieldComparisonBetween>;
  notIn?: InputMaybe<Array<Scalars["DateTime"]["input"]>>;
};

export type DateFieldComparisonBetween = {
  lower: Scalars["DateTime"]["input"];
  upper: Scalars["DateTime"]["input"];
};

export enum DaysOfWeek {
  Friday = "FRIDAY",
  Monday = "MONDAY",
  Saturday = "SATURDAY",
  Sunday = "SUNDAY",
  Thursday = "THURSDAY",
  Tuesday = "TUESDAY",
  Wednsday = "WEDNSDAY",
}

export type DaysOfWeekFilterComparison = {
  eq?: InputMaybe<DaysOfWeek>;
  gt?: InputMaybe<DaysOfWeek>;
  gte?: InputMaybe<DaysOfWeek>;
  iLike?: InputMaybe<DaysOfWeek>;
  in?: InputMaybe<Array<DaysOfWeek>>;
  is?: InputMaybe<Scalars["Boolean"]["input"]>;
  isNot?: InputMaybe<Scalars["Boolean"]["input"]>;
  like?: InputMaybe<DaysOfWeek>;
  lt?: InputMaybe<DaysOfWeek>;
  lte?: InputMaybe<DaysOfWeek>;
  neq?: InputMaybe<DaysOfWeek>;
  notILike?: InputMaybe<DaysOfWeek>;
  notIn?: InputMaybe<Array<DaysOfWeek>>;
  notLike?: InputMaybe<DaysOfWeek>;
};

export type DeleteManyDepartmentsInput = {
  /** Filter to find records to delete */
  filter: DepartmentDeleteFilter;
};

export type DeleteManyDoctorTypeCategoriesInput = {
  /** Filter to find records to delete */
  filter: DoctorTypeCategoryDeleteFilter;
};

export type DeleteManyDoctorTypesInput = {
  /** Filter to find records to delete */
  filter: DoctorTypeDeleteFilter;
};

export type DeleteManyResponse = {
  __typename?: "DeleteManyResponse";
  /** The number of records deleted. */
  deletedCount: Scalars["Int"]["output"];
};

export type DeleteOneDepartmentInput = {
  /** The id of the record to delete. */
  id: Scalars["ID"]["input"];
};

export type DeleteOneDoctorTypeCategoryInput = {
  /** The id of the record to delete. */
  id: Scalars["ID"]["input"];
};

export type DeleteOneDoctorTypeInput = {
  /** The id of the record to delete. */
  id: Scalars["ID"]["input"];
};

export type Department = {
  __typename?: "Department";
  appointments: Appointment;
  code?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  doctors: DepartmentDoctorsConnection;
  doctorsAggregate: Array<DepartmentDoctorsAggregateResponse>;
  healthProviders: DepartmentHealthProvidersConnection;
  healthProvidersAggregate: Array<DepartmentHealthProvidersAggregateResponse>;
  id: Scalars["ID"]["output"];
  name?: Maybe<Scalars["String"]["output"]>;
  patients: DepartmentPatientsConnection;
  patientsAggregate: Array<DepartmentPatientsAggregateResponse>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type DepartmentDoctorsArgs = {
  filter?: DoctorFilter;
  paging?: OffsetPaging;
  sorting?: Array<DoctorSort>;
};

export type DepartmentDoctorsAggregateArgs = {
  filter?: InputMaybe<DoctorAggregateFilter>;
};

export type DepartmentHealthProvidersArgs = {
  filter?: HealthProviderFilter;
  paging?: OffsetPaging;
  sorting?: Array<HealthProviderSort>;
};

export type DepartmentHealthProvidersAggregateArgs = {
  filter?: InputMaybe<HealthProviderAggregateFilter>;
};

export type DepartmentPatientsArgs = {
  filter?: PatientFilter;
  paging?: OffsetPaging;
  sorting?: Array<PatientSort>;
};

export type DepartmentPatientsAggregateArgs = {
  filter?: InputMaybe<PatientAggregateFilter>;
};

export type DepartmentAggregateFilter = {
  and?: InputMaybe<Array<DepartmentAggregateFilter>>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<DepartmentAggregateFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type DepartmentAggregateGroupBy = {
  __typename?: "DepartmentAggregateGroupBy";
  code?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type DepartmentAggregateGroupByCreatedAtArgs = {
  by?: GroupBy;
};

export type DepartmentAggregateGroupByDeletedAtArgs = {
  by?: GroupBy;
};

export type DepartmentAggregateGroupByUpdatedAtArgs = {
  by?: GroupBy;
};

export type DepartmentAggregateResponse = {
  __typename?: "DepartmentAggregateResponse";
  avg?: Maybe<DepartmentAvgAggregate>;
  count?: Maybe<DepartmentCountAggregate>;
  groupBy?: Maybe<DepartmentAggregateGroupBy>;
  max?: Maybe<DepartmentMaxAggregate>;
  min?: Maybe<DepartmentMinAggregate>;
  sum?: Maybe<DepartmentSumAggregate>;
};

export type DepartmentAvgAggregate = {
  __typename?: "DepartmentAvgAggregate";
  id?: Maybe<Scalars["Float"]["output"]>;
};

export type DepartmentConnection = {
  __typename?: "DepartmentConnection";
  /** Array of edges. */
  edges: Array<DepartmentEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars["Int"]["output"];
};

export type DepartmentCountAggregate = {
  __typename?: "DepartmentCountAggregate";
  code?: Maybe<Scalars["Int"]["output"]>;
  createdAt?: Maybe<Scalars["Int"]["output"]>;
  deletedAt?: Maybe<Scalars["Int"]["output"]>;
  description?: Maybe<Scalars["Int"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  name?: Maybe<Scalars["Int"]["output"]>;
  updatedAt?: Maybe<Scalars["Int"]["output"]>;
};

export type DepartmentDeleteFilter = {
  and?: InputMaybe<Array<DepartmentDeleteFilter>>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<DepartmentDeleteFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type DepartmentDeleteResponse = {
  __typename?: "DepartmentDeleteResponse";
  code?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type DepartmentDoctorsAggregateGroupBy = {
  __typename?: "DepartmentDoctorsAggregateGroupBy";
  bio?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  doctorTypeCategoryId?: Maybe<Scalars["Float"]["output"]>;
  doctorTypeId?: Maybe<Scalars["Float"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  location?: Maybe<Scalars["String"]["output"]>;
  price?: Maybe<Scalars["Float"]["output"]>;
  ratings?: Maybe<Scalars["Float"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  uploadId?: Maybe<Scalars["Int"]["output"]>;
  userProfileId?: Maybe<Scalars["Float"]["output"]>;
};

export type DepartmentDoctorsAggregateResponse = {
  __typename?: "DepartmentDoctorsAggregateResponse";
  avg?: Maybe<DepartmentDoctorsAvgAggregate>;
  count?: Maybe<DepartmentDoctorsCountAggregate>;
  groupBy?: Maybe<DepartmentDoctorsAggregateGroupBy>;
  max?: Maybe<DepartmentDoctorsMaxAggregate>;
  min?: Maybe<DepartmentDoctorsMinAggregate>;
  sum?: Maybe<DepartmentDoctorsSumAggregate>;
};

export type DepartmentDoctorsAvgAggregate = {
  __typename?: "DepartmentDoctorsAvgAggregate";
  doctorTypeCategoryId?: Maybe<Scalars["Float"]["output"]>;
  doctorTypeId?: Maybe<Scalars["Float"]["output"]>;
  id?: Maybe<Scalars["Float"]["output"]>;
  price?: Maybe<Scalars["Float"]["output"]>;
  ratings?: Maybe<Scalars["Float"]["output"]>;
  uploadId?: Maybe<Scalars["Float"]["output"]>;
  userProfileId?: Maybe<Scalars["Float"]["output"]>;
};

export type DepartmentDoctorsConnection = {
  __typename?: "DepartmentDoctorsConnection";
  /** Array of nodes. */
  nodes: Array<Doctor>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars["Int"]["output"];
};

export type DepartmentDoctorsCountAggregate = {
  __typename?: "DepartmentDoctorsCountAggregate";
  bio?: Maybe<Scalars["Int"]["output"]>;
  createdAt?: Maybe<Scalars["Int"]["output"]>;
  deletedAt?: Maybe<Scalars["Int"]["output"]>;
  doctorTypeCategoryId?: Maybe<Scalars["Int"]["output"]>;
  doctorTypeId?: Maybe<Scalars["Int"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  location?: Maybe<Scalars["Int"]["output"]>;
  price?: Maybe<Scalars["Int"]["output"]>;
  ratings?: Maybe<Scalars["Int"]["output"]>;
  updatedAt?: Maybe<Scalars["Int"]["output"]>;
  uploadId?: Maybe<Scalars["Int"]["output"]>;
  userProfileId?: Maybe<Scalars["Int"]["output"]>;
};

export type DepartmentDoctorsMaxAggregate = {
  __typename?: "DepartmentDoctorsMaxAggregate";
  bio?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  doctorTypeCategoryId?: Maybe<Scalars["Float"]["output"]>;
  doctorTypeId?: Maybe<Scalars["Float"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  location?: Maybe<Scalars["String"]["output"]>;
  price?: Maybe<Scalars["Float"]["output"]>;
  ratings?: Maybe<Scalars["Float"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  uploadId?: Maybe<Scalars["Int"]["output"]>;
  userProfileId?: Maybe<Scalars["Float"]["output"]>;
};

export type DepartmentDoctorsMinAggregate = {
  __typename?: "DepartmentDoctorsMinAggregate";
  bio?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  doctorTypeCategoryId?: Maybe<Scalars["Float"]["output"]>;
  doctorTypeId?: Maybe<Scalars["Float"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  location?: Maybe<Scalars["String"]["output"]>;
  price?: Maybe<Scalars["Float"]["output"]>;
  ratings?: Maybe<Scalars["Float"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  uploadId?: Maybe<Scalars["Int"]["output"]>;
  userProfileId?: Maybe<Scalars["Float"]["output"]>;
};

export type DepartmentDoctorsSumAggregate = {
  __typename?: "DepartmentDoctorsSumAggregate";
  doctorTypeCategoryId?: Maybe<Scalars["Float"]["output"]>;
  doctorTypeId?: Maybe<Scalars["Float"]["output"]>;
  id?: Maybe<Scalars["Float"]["output"]>;
  price?: Maybe<Scalars["Float"]["output"]>;
  ratings?: Maybe<Scalars["Float"]["output"]>;
  uploadId?: Maybe<Scalars["Float"]["output"]>;
  userProfileId?: Maybe<Scalars["Float"]["output"]>;
};

export type DepartmentEdge = {
  __typename?: "DepartmentEdge";
  /** Cursor for this node. */
  cursor: Scalars["ConnectionCursor"]["output"];
  /** The node containing the Department */
  node: Department;
};

export type DepartmentFilter = {
  and?: InputMaybe<Array<DepartmentFilter>>;
  appointments?: InputMaybe<DepartmentFilterAppointmentFilter>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<DepartmentFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type DepartmentFilterAppointmentFilter = {
  and?: InputMaybe<Array<DepartmentFilterAppointmentFilter>>;
  appointmentType?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  departmentId?: InputMaybe<NumberFieldComparison>;
  doctorId?: InputMaybe<NumberFieldComparison>;
  healthProviderId?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  isActive?: InputMaybe<BooleanFieldComparison>;
  or?: InputMaybe<Array<DepartmentFilterAppointmentFilter>>;
  patientId?: InputMaybe<NumberFieldComparison>;
  price?: InputMaybe<NumberFieldComparison>;
  scheduleTime?: InputMaybe<DateFieldComparison>;
  status?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type DepartmentHealthProvidersAggregateGroupBy = {
  __typename?: "DepartmentHealthProvidersAggregateGroupBy";
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  district?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  isFastTrack?: Maybe<Scalars["Boolean"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  region?: Maybe<Scalars["String"]["output"]>;
  type?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type DepartmentHealthProvidersAggregateResponse = {
  __typename?: "DepartmentHealthProvidersAggregateResponse";
  avg?: Maybe<DepartmentHealthProvidersAvgAggregate>;
  count?: Maybe<DepartmentHealthProvidersCountAggregate>;
  groupBy?: Maybe<DepartmentHealthProvidersAggregateGroupBy>;
  max?: Maybe<DepartmentHealthProvidersMaxAggregate>;
  min?: Maybe<DepartmentHealthProvidersMinAggregate>;
  sum?: Maybe<DepartmentHealthProvidersSumAggregate>;
};

export type DepartmentHealthProvidersAvgAggregate = {
  __typename?: "DepartmentHealthProvidersAvgAggregate";
  id?: Maybe<Scalars["Float"]["output"]>;
};

export type DepartmentHealthProvidersConnection = {
  __typename?: "DepartmentHealthProvidersConnection";
  /** Array of nodes. */
  nodes: Array<HealthProvider>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars["Int"]["output"];
};

export type DepartmentHealthProvidersCountAggregate = {
  __typename?: "DepartmentHealthProvidersCountAggregate";
  createdAt?: Maybe<Scalars["Int"]["output"]>;
  deletedAt?: Maybe<Scalars["Int"]["output"]>;
  description?: Maybe<Scalars["Int"]["output"]>;
  district?: Maybe<Scalars["Int"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  isFastTrack?: Maybe<Scalars["Int"]["output"]>;
  name?: Maybe<Scalars["Int"]["output"]>;
  region?: Maybe<Scalars["Int"]["output"]>;
  type?: Maybe<Scalars["Int"]["output"]>;
  updatedAt?: Maybe<Scalars["Int"]["output"]>;
};

export type DepartmentHealthProvidersMaxAggregate = {
  __typename?: "DepartmentHealthProvidersMaxAggregate";
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  district?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  region?: Maybe<Scalars["String"]["output"]>;
  type?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type DepartmentHealthProvidersMinAggregate = {
  __typename?: "DepartmentHealthProvidersMinAggregate";
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  district?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  region?: Maybe<Scalars["String"]["output"]>;
  type?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type DepartmentHealthProvidersSumAggregate = {
  __typename?: "DepartmentHealthProvidersSumAggregate";
  id?: Maybe<Scalars["Float"]["output"]>;
};

export type DepartmentMaxAggregate = {
  __typename?: "DepartmentMaxAggregate";
  code?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type DepartmentMinAggregate = {
  __typename?: "DepartmentMinAggregate";
  code?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type DepartmentPatientsAggregateGroupBy = {
  __typename?: "DepartmentPatientsAggregateGroupBy";
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  userProfileId?: Maybe<Scalars["Float"]["output"]>;
};

export type DepartmentPatientsAggregateResponse = {
  __typename?: "DepartmentPatientsAggregateResponse";
  avg?: Maybe<DepartmentPatientsAvgAggregate>;
  count?: Maybe<DepartmentPatientsCountAggregate>;
  groupBy?: Maybe<DepartmentPatientsAggregateGroupBy>;
  max?: Maybe<DepartmentPatientsMaxAggregate>;
  min?: Maybe<DepartmentPatientsMinAggregate>;
  sum?: Maybe<DepartmentPatientsSumAggregate>;
};

export type DepartmentPatientsAvgAggregate = {
  __typename?: "DepartmentPatientsAvgAggregate";
  id?: Maybe<Scalars["Float"]["output"]>;
  userProfileId?: Maybe<Scalars["Float"]["output"]>;
};

export type DepartmentPatientsConnection = {
  __typename?: "DepartmentPatientsConnection";
  /** Array of nodes. */
  nodes: Array<Patient>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars["Int"]["output"];
};

export type DepartmentPatientsCountAggregate = {
  __typename?: "DepartmentPatientsCountAggregate";
  createdAt?: Maybe<Scalars["Int"]["output"]>;
  deletedAt?: Maybe<Scalars["Int"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  updatedAt?: Maybe<Scalars["Int"]["output"]>;
  userProfileId?: Maybe<Scalars["Int"]["output"]>;
};

export type DepartmentPatientsMaxAggregate = {
  __typename?: "DepartmentPatientsMaxAggregate";
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  userProfileId?: Maybe<Scalars["Float"]["output"]>;
};

export type DepartmentPatientsMinAggregate = {
  __typename?: "DepartmentPatientsMinAggregate";
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  userProfileId?: Maybe<Scalars["Float"]["output"]>;
};

export type DepartmentPatientsSumAggregate = {
  __typename?: "DepartmentPatientsSumAggregate";
  id?: Maybe<Scalars["Float"]["output"]>;
  userProfileId?: Maybe<Scalars["Float"]["output"]>;
};

export type DepartmentSort = {
  direction: SortDirection;
  field: DepartmentSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum DepartmentSortFields {
  Code = "code",
  CreatedAt = "createdAt",
  DeletedAt = "deletedAt",
  Description = "description",
  Id = "id",
  Name = "name",
  UpdatedAt = "updatedAt",
}

export type DepartmentSumAggregate = {
  __typename?: "DepartmentSumAggregate";
  id?: Maybe<Scalars["Float"]["output"]>;
};

export type DepartmentUpdateFilter = {
  and?: InputMaybe<Array<DepartmentUpdateFilter>>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<DepartmentUpdateFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type Doctor = {
  __typename?: "Doctor";
  availabilities: Array<Schedule>;
  bio?: Maybe<Scalars["String"]["output"]>;
  createdAt: Scalars["DateTime"]["output"];
  deletedAt: Scalars["DateTime"]["output"];
  departments: DoctorDepartmentsConnection;
  doctorType: DoctorType;
  doctorTypeCategoryId?: Maybe<Scalars["Float"]["output"]>;
  doctorTypeId?: Maybe<Scalars["Float"]["output"]>;
  healthProviders: DoctorHealthProvidersConnection;
  id: Scalars["ID"]["output"];
  location?: Maybe<Scalars["String"]["output"]>;
  patient: Patient;
  price?: Maybe<Scalars["Float"]["output"]>;
  ratings?: Maybe<Scalars["Float"]["output"]>;
  typeCategories: DoctorTypeCategory;
  updatedAt: Scalars["DateTime"]["output"];
  upload: Upload;
  uploadId: Scalars["Int"]["output"];
  userProfile: UserProfile;
  userProfileId?: Maybe<Scalars["Float"]["output"]>;
};

export type DoctorAvailabilitiesArgs = {
  filter?: ScheduleFilter;
  sorting?: Array<ScheduleSort>;
};

export type DoctorDepartmentsArgs = {
  filter?: DepartmentFilter;
  paging?: OffsetPaging;
  sorting?: Array<DepartmentSort>;
};

export type DoctorHealthProvidersArgs = {
  filter?: HealthProviderFilter;
  paging?: OffsetPaging;
  sorting?: Array<HealthProviderSort>;
};

export type DoctorAggregateFilter = {
  and?: InputMaybe<Array<DoctorAggregateFilter>>;
  bio?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  doctorTypeCategoryId?: InputMaybe<NumberFieldComparison>;
  doctorTypeId?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  location?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<DoctorAggregateFilter>>;
  price?: InputMaybe<NumberFieldComparison>;
  ratings?: InputMaybe<NumberFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  uploadId?: InputMaybe<IntFieldComparison>;
  userProfileId?: InputMaybe<NumberFieldComparison>;
};

export type DoctorDepartmentsConnection = {
  __typename?: "DoctorDepartmentsConnection";
  /** Array of nodes. */
  nodes: Array<Department>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
};

export type DoctorFilter = {
  and?: InputMaybe<Array<DoctorFilter>>;
  availabilities?: InputMaybe<DoctorFilterScheduleFilter>;
  bio?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  doctorType?: InputMaybe<DoctorFilterDoctorTypeFilter>;
  doctorTypeCategoryId?: InputMaybe<NumberFieldComparison>;
  doctorTypeId?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  location?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<DoctorFilter>>;
  patient?: InputMaybe<DoctorFilterPatientFilter>;
  price?: InputMaybe<NumberFieldComparison>;
  ratings?: InputMaybe<NumberFieldComparison>;
  typeCategories?: InputMaybe<DoctorFilterDoctorTypeCategoryFilter>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  upload?: InputMaybe<DoctorFilterUploadFilter>;
  uploadId?: InputMaybe<IntFieldComparison>;
  userProfile?: InputMaybe<DoctorFilterUserProfileFilter>;
  userProfileId?: InputMaybe<NumberFieldComparison>;
};

export type DoctorFilterDoctorTypeCategoryFilter = {
  and?: InputMaybe<Array<DoctorFilterDoctorTypeCategoryFilter>>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  doctorTypeId?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<DoctorFilterDoctorTypeCategoryFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type DoctorFilterDoctorTypeFilter = {
  and?: InputMaybe<Array<DoctorFilterDoctorTypeFilter>>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<DoctorFilterDoctorTypeFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type DoctorFilterPatientFilter = {
  and?: InputMaybe<Array<DoctorFilterPatientFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<DoctorFilterPatientFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  userProfileId?: InputMaybe<NumberFieldComparison>;
};

export type DoctorFilterScheduleFilter = {
  and?: InputMaybe<Array<DoctorFilterScheduleFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  dayOfWeek?: InputMaybe<DaysOfWeekFilterComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  doctorId?: InputMaybe<NumberFieldComparison>;
  endTime?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<DoctorFilterScheduleFilter>>;
  startTime?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type DoctorFilterUploadFilter = {
  and?: InputMaybe<Array<DoctorFilterUploadFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  fileName?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IntFieldComparison>;
  key?: InputMaybe<StringFieldComparison>;
  mimeType?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<DoctorFilterUploadFilter>>;
  size?: InputMaybe<NumberFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type DoctorFilterUserProfileFilter = {
  active?: InputMaybe<BooleanFieldComparison>;
  and?: InputMaybe<Array<DoctorFilterUserProfileFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  dateOfBirth?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  emailVerifiedAt?: InputMaybe<DateFieldComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  gender?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  middleName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<DoctorFilterUserProfileFilter>>;
  phoneNumber?: InputMaybe<StringFieldComparison>;
  phoneNumberVerifiedAt?: InputMaybe<DateFieldComparison>;
  role?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  username?: InputMaybe<StringFieldComparison>;
};

export type DoctorHealthProvidersConnection = {
  __typename?: "DoctorHealthProvidersConnection";
  /** Array of nodes. */
  nodes: Array<HealthProvider>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
};

export type DoctorScheduleDto = {
  dayOfWeek?: InputMaybe<Scalars["String"]["input"]>;
  doctorId?: InputMaybe<Scalars["Float"]["input"]>;
  endTime?: InputMaybe<Scalars["String"]["input"]>;
  startTime?: InputMaybe<Scalars["String"]["input"]>;
};

export type DoctorSort = {
  direction: SortDirection;
  field: DoctorSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum DoctorSortFields {
  Bio = "bio",
  CreatedAt = "createdAt",
  DeletedAt = "deletedAt",
  DoctorTypeCategoryId = "doctorTypeCategoryId",
  DoctorTypeId = "doctorTypeId",
  Id = "id",
  Location = "location",
  Price = "price",
  Ratings = "ratings",
  UpdatedAt = "updatedAt",
  UploadId = "uploadId",
  UserProfileId = "userProfileId",
}

export type DoctorType = {
  __typename?: "DoctorType";
  categories: DoctorTypeCategory;
  code?: Maybe<Scalars["String"]["output"]>;
  createdAt: Scalars["DateTime"]["output"];
  deletedAt: Scalars["DateTime"]["output"];
  doctor: Doctor;
  id: Scalars["ID"]["output"];
  name?: Maybe<Scalars["String"]["output"]>;
  updatedAt: Scalars["DateTime"]["output"];
};

export type DoctorTypeCategory = {
  __typename?: "DoctorTypeCategory";
  code?: Maybe<Scalars["String"]["output"]>;
  createdAt: Scalars["DateTime"]["output"];
  deletedAt: Scalars["DateTime"]["output"];
  description?: Maybe<Scalars["String"]["output"]>;
  doctorType: DoctorType;
  doctorTypeId?: Maybe<Scalars["Float"]["output"]>;
  doctors: Doctor;
  id: Scalars["ID"]["output"];
  name?: Maybe<Scalars["String"]["output"]>;
  updatedAt: Scalars["DateTime"]["output"];
};

export type DoctorTypeCategoryConnection = {
  __typename?: "DoctorTypeCategoryConnection";
  /** Array of edges. */
  edges: Array<DoctorTypeCategoryEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type DoctorTypeCategoryDeleteFilter = {
  and?: InputMaybe<Array<DoctorTypeCategoryDeleteFilter>>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  doctorTypeId?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<DoctorTypeCategoryDeleteFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type DoctorTypeCategoryDeleteResponse = {
  __typename?: "DoctorTypeCategoryDeleteResponse";
  code?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  doctorTypeId?: Maybe<Scalars["Float"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type DoctorTypeCategoryEdge = {
  __typename?: "DoctorTypeCategoryEdge";
  /** Cursor for this node. */
  cursor: Scalars["ConnectionCursor"]["output"];
  /** The node containing the DoctorTypeCategory */
  node: DoctorTypeCategory;
};

export type DoctorTypeCategoryFilter = {
  and?: InputMaybe<Array<DoctorTypeCategoryFilter>>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  doctorType?: InputMaybe<DoctorTypeCategoryFilterDoctorTypeFilter>;
  doctorTypeId?: InputMaybe<NumberFieldComparison>;
  doctors?: InputMaybe<DoctorTypeCategoryFilterDoctorFilter>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<DoctorTypeCategoryFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type DoctorTypeCategoryFilterDoctorFilter = {
  and?: InputMaybe<Array<DoctorTypeCategoryFilterDoctorFilter>>;
  bio?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  doctorTypeCategoryId?: InputMaybe<NumberFieldComparison>;
  doctorTypeId?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  location?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<DoctorTypeCategoryFilterDoctorFilter>>;
  price?: InputMaybe<NumberFieldComparison>;
  ratings?: InputMaybe<NumberFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  uploadId?: InputMaybe<IntFieldComparison>;
  userProfileId?: InputMaybe<NumberFieldComparison>;
};

export type DoctorTypeCategoryFilterDoctorTypeFilter = {
  and?: InputMaybe<Array<DoctorTypeCategoryFilterDoctorTypeFilter>>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<DoctorTypeCategoryFilterDoctorTypeFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type DoctorTypeCategorySort = {
  direction: SortDirection;
  field: DoctorTypeCategorySortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum DoctorTypeCategorySortFields {
  Code = "code",
  CreatedAt = "createdAt",
  DeletedAt = "deletedAt",
  Description = "description",
  DoctorTypeId = "doctorTypeId",
  Id = "id",
  Name = "name",
  UpdatedAt = "updatedAt",
}

export type DoctorTypeCategoryUpdateFilter = {
  and?: InputMaybe<Array<DoctorTypeCategoryUpdateFilter>>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  doctorTypeId?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<DoctorTypeCategoryUpdateFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type DoctorTypeConnection = {
  __typename?: "DoctorTypeConnection";
  /** Array of edges. */
  edges: Array<DoctorTypeEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type DoctorTypeDeleteFilter = {
  and?: InputMaybe<Array<DoctorTypeDeleteFilter>>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<DoctorTypeDeleteFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type DoctorTypeDeleteResponse = {
  __typename?: "DoctorTypeDeleteResponse";
  code?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type DoctorTypeEdge = {
  __typename?: "DoctorTypeEdge";
  /** Cursor for this node. */
  cursor: Scalars["ConnectionCursor"]["output"];
  /** The node containing the DoctorType */
  node: DoctorType;
};

export type DoctorTypeFilter = {
  and?: InputMaybe<Array<DoctorTypeFilter>>;
  categories?: InputMaybe<DoctorTypeFilterDoctorTypeCategoryFilter>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  doctor?: InputMaybe<DoctorTypeFilterDoctorFilter>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<DoctorTypeFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type DoctorTypeFilterDoctorFilter = {
  and?: InputMaybe<Array<DoctorTypeFilterDoctorFilter>>;
  bio?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  doctorTypeCategoryId?: InputMaybe<NumberFieldComparison>;
  doctorTypeId?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  location?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<DoctorTypeFilterDoctorFilter>>;
  price?: InputMaybe<NumberFieldComparison>;
  ratings?: InputMaybe<NumberFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  uploadId?: InputMaybe<IntFieldComparison>;
  userProfileId?: InputMaybe<NumberFieldComparison>;
};

export type DoctorTypeFilterDoctorTypeCategoryFilter = {
  and?: InputMaybe<Array<DoctorTypeFilterDoctorTypeCategoryFilter>>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  doctorTypeId?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<DoctorTypeFilterDoctorTypeCategoryFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type DoctorTypeSort = {
  direction: SortDirection;
  field: DoctorTypeSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum DoctorTypeSortFields {
  Code = "code",
  CreatedAt = "createdAt",
  DeletedAt = "deletedAt",
  Id = "id",
  Name = "name",
  UpdatedAt = "updatedAt",
}

export type DoctorTypeUpdateFilter = {
  and?: InputMaybe<Array<DoctorTypeUpdateFilter>>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<DoctorTypeUpdateFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ForgetPasswordRequest = {
  email?: InputMaybe<Scalars["String"]["input"]>;
  phoneNumber?: InputMaybe<Scalars["String"]["input"]>;
};

export type ForgetPasswordResponse = {
  __typename?: "ForgetPasswordResponse";
  expiresAt: Scalars["DateTime"]["output"];
  /** Nonce value to be used on verification request */
  verificationCodeNonce: Scalars["String"]["output"];
};

/** Group by */
export enum GroupBy {
  Day = "DAY",
  Month = "MONTH",
  Week = "WEEK",
  Year = "YEAR",
}

export type HealthProvider = {
  __typename?: "HealthProvider";
  appointments: Array<Appointment>;
  appointmentsAggregate: Array<HealthProviderAppointmentsAggregateResponse>;
  createdAt: Scalars["DateTime"]["output"];
  deletedAt: Scalars["DateTime"]["output"];
  departments: Array<Department>;
  departmentsAggregate: Array<HealthProviderDepartmentsAggregateResponse>;
  description?: Maybe<Scalars["String"]["output"]>;
  district?: Maybe<Scalars["String"]["output"]>;
  doctors: Array<Doctor>;
  doctorsAggregate: Array<HealthProviderDoctorsAggregateResponse>;
  id: Scalars["ID"]["output"];
  isFastTrack?: Maybe<Scalars["Boolean"]["output"]>;
  /** Location with longitude and latitude */
  location?: Maybe<Location>;
  name?: Maybe<Scalars["String"]["output"]>;
  patients: Array<Patient>;
  patientsAggregate: Array<HealthProviderPatientsAggregateResponse>;
  region?: Maybe<Scalars["String"]["output"]>;
  type?: Maybe<Scalars["String"]["output"]>;
  updatedAt: Scalars["DateTime"]["output"];
};

export type HealthProviderAppointmentsArgs = {
  filter?: AppointmentFilter;
  sorting?: Array<AppointmentSort>;
};

export type HealthProviderAppointmentsAggregateArgs = {
  filter?: InputMaybe<AppointmentAggregateFilter>;
};

export type HealthProviderDepartmentsArgs = {
  filter?: DepartmentFilter;
  sorting?: Array<DepartmentSort>;
};

export type HealthProviderDepartmentsAggregateArgs = {
  filter?: InputMaybe<DepartmentAggregateFilter>;
};

export type HealthProviderDoctorsArgs = {
  filter?: DoctorFilter;
  sorting?: Array<DoctorSort>;
};

export type HealthProviderDoctorsAggregateArgs = {
  filter?: InputMaybe<DoctorAggregateFilter>;
};

export type HealthProviderPatientsArgs = {
  filter?: PatientFilter;
  sorting?: Array<PatientSort>;
};

export type HealthProviderPatientsAggregateArgs = {
  filter?: InputMaybe<PatientAggregateFilter>;
};

export type HealthProviderAggregateFilter = {
  and?: InputMaybe<Array<HealthProviderAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  district?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  isFastTrack?: InputMaybe<BooleanFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<HealthProviderAggregateFilter>>;
  region?: InputMaybe<StringFieldComparison>;
  type?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type HealthProviderAggregateGroupBy = {
  __typename?: "HealthProviderAggregateGroupBy";
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  district?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  isFastTrack?: Maybe<Scalars["Boolean"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  region?: Maybe<Scalars["String"]["output"]>;
  type?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type HealthProviderAggregateGroupByCreatedAtArgs = {
  by?: GroupBy;
};

export type HealthProviderAggregateGroupByDeletedAtArgs = {
  by?: GroupBy;
};

export type HealthProviderAggregateGroupByUpdatedAtArgs = {
  by?: GroupBy;
};

export type HealthProviderAggregateResponse = {
  __typename?: "HealthProviderAggregateResponse";
  avg?: Maybe<HealthProviderAvgAggregate>;
  count?: Maybe<HealthProviderCountAggregate>;
  groupBy?: Maybe<HealthProviderAggregateGroupBy>;
  max?: Maybe<HealthProviderMaxAggregate>;
  min?: Maybe<HealthProviderMinAggregate>;
  sum?: Maybe<HealthProviderSumAggregate>;
};

export type HealthProviderAppointmentsAggregateGroupBy = {
  __typename?: "HealthProviderAppointmentsAggregateGroupBy";
  appointmentType?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  departmentId?: Maybe<Scalars["Float"]["output"]>;
  doctorId?: Maybe<Scalars["Float"]["output"]>;
  healthProviderId?: Maybe<Scalars["Float"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  isActive?: Maybe<Scalars["Boolean"]["output"]>;
  patientId?: Maybe<Scalars["Float"]["output"]>;
  price?: Maybe<Scalars["Float"]["output"]>;
  scheduleTime?: Maybe<Scalars["DateTime"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type HealthProviderAppointmentsAggregateResponse = {
  __typename?: "HealthProviderAppointmentsAggregateResponse";
  avg?: Maybe<HealthProviderAppointmentsAvgAggregate>;
  count?: Maybe<HealthProviderAppointmentsCountAggregate>;
  groupBy?: Maybe<HealthProviderAppointmentsAggregateGroupBy>;
  max?: Maybe<HealthProviderAppointmentsMaxAggregate>;
  min?: Maybe<HealthProviderAppointmentsMinAggregate>;
  sum?: Maybe<HealthProviderAppointmentsSumAggregate>;
};

export type HealthProviderAppointmentsAvgAggregate = {
  __typename?: "HealthProviderAppointmentsAvgAggregate";
  departmentId?: Maybe<Scalars["Float"]["output"]>;
  doctorId?: Maybe<Scalars["Float"]["output"]>;
  healthProviderId?: Maybe<Scalars["Float"]["output"]>;
  id?: Maybe<Scalars["Float"]["output"]>;
  patientId?: Maybe<Scalars["Float"]["output"]>;
  price?: Maybe<Scalars["Float"]["output"]>;
};

export type HealthProviderAppointmentsCountAggregate = {
  __typename?: "HealthProviderAppointmentsCountAggregate";
  appointmentType?: Maybe<Scalars["Int"]["output"]>;
  createdAt?: Maybe<Scalars["Int"]["output"]>;
  deletedAt?: Maybe<Scalars["Int"]["output"]>;
  departmentId?: Maybe<Scalars["Int"]["output"]>;
  doctorId?: Maybe<Scalars["Int"]["output"]>;
  healthProviderId?: Maybe<Scalars["Int"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  isActive?: Maybe<Scalars["Int"]["output"]>;
  patientId?: Maybe<Scalars["Int"]["output"]>;
  price?: Maybe<Scalars["Int"]["output"]>;
  scheduleTime?: Maybe<Scalars["Int"]["output"]>;
  status?: Maybe<Scalars["Int"]["output"]>;
  updatedAt?: Maybe<Scalars["Int"]["output"]>;
};

export type HealthProviderAppointmentsMaxAggregate = {
  __typename?: "HealthProviderAppointmentsMaxAggregate";
  appointmentType?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  departmentId?: Maybe<Scalars["Float"]["output"]>;
  doctorId?: Maybe<Scalars["Float"]["output"]>;
  healthProviderId?: Maybe<Scalars["Float"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  patientId?: Maybe<Scalars["Float"]["output"]>;
  price?: Maybe<Scalars["Float"]["output"]>;
  scheduleTime?: Maybe<Scalars["DateTime"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type HealthProviderAppointmentsMinAggregate = {
  __typename?: "HealthProviderAppointmentsMinAggregate";
  appointmentType?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  departmentId?: Maybe<Scalars["Float"]["output"]>;
  doctorId?: Maybe<Scalars["Float"]["output"]>;
  healthProviderId?: Maybe<Scalars["Float"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  patientId?: Maybe<Scalars["Float"]["output"]>;
  price?: Maybe<Scalars["Float"]["output"]>;
  scheduleTime?: Maybe<Scalars["DateTime"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type HealthProviderAppointmentsSumAggregate = {
  __typename?: "HealthProviderAppointmentsSumAggregate";
  departmentId?: Maybe<Scalars["Float"]["output"]>;
  doctorId?: Maybe<Scalars["Float"]["output"]>;
  healthProviderId?: Maybe<Scalars["Float"]["output"]>;
  id?: Maybe<Scalars["Float"]["output"]>;
  patientId?: Maybe<Scalars["Float"]["output"]>;
  price?: Maybe<Scalars["Float"]["output"]>;
};

export type HealthProviderAvgAggregate = {
  __typename?: "HealthProviderAvgAggregate";
  id?: Maybe<Scalars["Float"]["output"]>;
};

export type HealthProviderConnection = {
  __typename?: "HealthProviderConnection";
  /** Array of edges. */
  edges: Array<HealthProviderEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars["Int"]["output"];
};

export type HealthProviderCountAggregate = {
  __typename?: "HealthProviderCountAggregate";
  createdAt?: Maybe<Scalars["Int"]["output"]>;
  deletedAt?: Maybe<Scalars["Int"]["output"]>;
  description?: Maybe<Scalars["Int"]["output"]>;
  district?: Maybe<Scalars["Int"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  isFastTrack?: Maybe<Scalars["Int"]["output"]>;
  name?: Maybe<Scalars["Int"]["output"]>;
  region?: Maybe<Scalars["Int"]["output"]>;
  type?: Maybe<Scalars["Int"]["output"]>;
  updatedAt?: Maybe<Scalars["Int"]["output"]>;
};

export type HealthProviderDepartmentsAggregateGroupBy = {
  __typename?: "HealthProviderDepartmentsAggregateGroupBy";
  code?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type HealthProviderDepartmentsAggregateResponse = {
  __typename?: "HealthProviderDepartmentsAggregateResponse";
  avg?: Maybe<HealthProviderDepartmentsAvgAggregate>;
  count?: Maybe<HealthProviderDepartmentsCountAggregate>;
  groupBy?: Maybe<HealthProviderDepartmentsAggregateGroupBy>;
  max?: Maybe<HealthProviderDepartmentsMaxAggregate>;
  min?: Maybe<HealthProviderDepartmentsMinAggregate>;
  sum?: Maybe<HealthProviderDepartmentsSumAggregate>;
};

export type HealthProviderDepartmentsAvgAggregate = {
  __typename?: "HealthProviderDepartmentsAvgAggregate";
  id?: Maybe<Scalars["Float"]["output"]>;
};

export type HealthProviderDepartmentsCountAggregate = {
  __typename?: "HealthProviderDepartmentsCountAggregate";
  code?: Maybe<Scalars["Int"]["output"]>;
  createdAt?: Maybe<Scalars["Int"]["output"]>;
  deletedAt?: Maybe<Scalars["Int"]["output"]>;
  description?: Maybe<Scalars["Int"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  name?: Maybe<Scalars["Int"]["output"]>;
  updatedAt?: Maybe<Scalars["Int"]["output"]>;
};

export type HealthProviderDepartmentsMaxAggregate = {
  __typename?: "HealthProviderDepartmentsMaxAggregate";
  code?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type HealthProviderDepartmentsMinAggregate = {
  __typename?: "HealthProviderDepartmentsMinAggregate";
  code?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type HealthProviderDepartmentsSumAggregate = {
  __typename?: "HealthProviderDepartmentsSumAggregate";
  id?: Maybe<Scalars["Float"]["output"]>;
};

export type HealthProviderDoctorsAggregateGroupBy = {
  __typename?: "HealthProviderDoctorsAggregateGroupBy";
  bio?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  doctorTypeCategoryId?: Maybe<Scalars["Float"]["output"]>;
  doctorTypeId?: Maybe<Scalars["Float"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  location?: Maybe<Scalars["String"]["output"]>;
  price?: Maybe<Scalars["Float"]["output"]>;
  ratings?: Maybe<Scalars["Float"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  uploadId?: Maybe<Scalars["Int"]["output"]>;
  userProfileId?: Maybe<Scalars["Float"]["output"]>;
};

export type HealthProviderDoctorsAggregateResponse = {
  __typename?: "HealthProviderDoctorsAggregateResponse";
  avg?: Maybe<HealthProviderDoctorsAvgAggregate>;
  count?: Maybe<HealthProviderDoctorsCountAggregate>;
  groupBy?: Maybe<HealthProviderDoctorsAggregateGroupBy>;
  max?: Maybe<HealthProviderDoctorsMaxAggregate>;
  min?: Maybe<HealthProviderDoctorsMinAggregate>;
  sum?: Maybe<HealthProviderDoctorsSumAggregate>;
};

export type HealthProviderDoctorsAvgAggregate = {
  __typename?: "HealthProviderDoctorsAvgAggregate";
  doctorTypeCategoryId?: Maybe<Scalars["Float"]["output"]>;
  doctorTypeId?: Maybe<Scalars["Float"]["output"]>;
  id?: Maybe<Scalars["Float"]["output"]>;
  price?: Maybe<Scalars["Float"]["output"]>;
  ratings?: Maybe<Scalars["Float"]["output"]>;
  uploadId?: Maybe<Scalars["Float"]["output"]>;
  userProfileId?: Maybe<Scalars["Float"]["output"]>;
};

export type HealthProviderDoctorsCountAggregate = {
  __typename?: "HealthProviderDoctorsCountAggregate";
  bio?: Maybe<Scalars["Int"]["output"]>;
  createdAt?: Maybe<Scalars["Int"]["output"]>;
  deletedAt?: Maybe<Scalars["Int"]["output"]>;
  doctorTypeCategoryId?: Maybe<Scalars["Int"]["output"]>;
  doctorTypeId?: Maybe<Scalars["Int"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  location?: Maybe<Scalars["Int"]["output"]>;
  price?: Maybe<Scalars["Int"]["output"]>;
  ratings?: Maybe<Scalars["Int"]["output"]>;
  updatedAt?: Maybe<Scalars["Int"]["output"]>;
  uploadId?: Maybe<Scalars["Int"]["output"]>;
  userProfileId?: Maybe<Scalars["Int"]["output"]>;
};

export type HealthProviderDoctorsMaxAggregate = {
  __typename?: "HealthProviderDoctorsMaxAggregate";
  bio?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  doctorTypeCategoryId?: Maybe<Scalars["Float"]["output"]>;
  doctorTypeId?: Maybe<Scalars["Float"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  location?: Maybe<Scalars["String"]["output"]>;
  price?: Maybe<Scalars["Float"]["output"]>;
  ratings?: Maybe<Scalars["Float"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  uploadId?: Maybe<Scalars["Int"]["output"]>;
  userProfileId?: Maybe<Scalars["Float"]["output"]>;
};

export type HealthProviderDoctorsMinAggregate = {
  __typename?: "HealthProviderDoctorsMinAggregate";
  bio?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  doctorTypeCategoryId?: Maybe<Scalars["Float"]["output"]>;
  doctorTypeId?: Maybe<Scalars["Float"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  location?: Maybe<Scalars["String"]["output"]>;
  price?: Maybe<Scalars["Float"]["output"]>;
  ratings?: Maybe<Scalars["Float"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  uploadId?: Maybe<Scalars["Int"]["output"]>;
  userProfileId?: Maybe<Scalars["Float"]["output"]>;
};

export type HealthProviderDoctorsSumAggregate = {
  __typename?: "HealthProviderDoctorsSumAggregate";
  doctorTypeCategoryId?: Maybe<Scalars["Float"]["output"]>;
  doctorTypeId?: Maybe<Scalars["Float"]["output"]>;
  id?: Maybe<Scalars["Float"]["output"]>;
  price?: Maybe<Scalars["Float"]["output"]>;
  ratings?: Maybe<Scalars["Float"]["output"]>;
  uploadId?: Maybe<Scalars["Float"]["output"]>;
  userProfileId?: Maybe<Scalars["Float"]["output"]>;
};

export type HealthProviderEdge = {
  __typename?: "HealthProviderEdge";
  /** Cursor for this node. */
  cursor: Scalars["ConnectionCursor"]["output"];
  /** The node containing the HealthProvider */
  node: HealthProvider;
};

export type HealthProviderFilter = {
  and?: InputMaybe<Array<HealthProviderFilter>>;
  appointments?: InputMaybe<HealthProviderFilterAppointmentFilter>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  departments?: InputMaybe<HealthProviderFilterDepartmentFilter>;
  description?: InputMaybe<StringFieldComparison>;
  district?: InputMaybe<StringFieldComparison>;
  doctors?: InputMaybe<HealthProviderFilterDoctorFilter>;
  id?: InputMaybe<IdFilterComparison>;
  isFastTrack?: InputMaybe<BooleanFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<HealthProviderFilter>>;
  patients?: InputMaybe<HealthProviderFilterPatientFilter>;
  region?: InputMaybe<StringFieldComparison>;
  type?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type HealthProviderFilterAppointmentFilter = {
  and?: InputMaybe<Array<HealthProviderFilterAppointmentFilter>>;
  appointmentType?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  departmentId?: InputMaybe<NumberFieldComparison>;
  doctorId?: InputMaybe<NumberFieldComparison>;
  healthProviderId?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  isActive?: InputMaybe<BooleanFieldComparison>;
  or?: InputMaybe<Array<HealthProviderFilterAppointmentFilter>>;
  patientId?: InputMaybe<NumberFieldComparison>;
  price?: InputMaybe<NumberFieldComparison>;
  scheduleTime?: InputMaybe<DateFieldComparison>;
  status?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type HealthProviderFilterDepartmentFilter = {
  and?: InputMaybe<Array<HealthProviderFilterDepartmentFilter>>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<HealthProviderFilterDepartmentFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type HealthProviderFilterDoctorFilter = {
  and?: InputMaybe<Array<HealthProviderFilterDoctorFilter>>;
  bio?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  doctorTypeCategoryId?: InputMaybe<NumberFieldComparison>;
  doctorTypeId?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  location?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<HealthProviderFilterDoctorFilter>>;
  price?: InputMaybe<NumberFieldComparison>;
  ratings?: InputMaybe<NumberFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  uploadId?: InputMaybe<IntFieldComparison>;
  userProfileId?: InputMaybe<NumberFieldComparison>;
};

export type HealthProviderFilterPatientFilter = {
  and?: InputMaybe<Array<HealthProviderFilterPatientFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<HealthProviderFilterPatientFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  userProfileId?: InputMaybe<NumberFieldComparison>;
};

export type HealthProviderMaxAggregate = {
  __typename?: "HealthProviderMaxAggregate";
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  district?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  region?: Maybe<Scalars["String"]["output"]>;
  type?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type HealthProviderMinAggregate = {
  __typename?: "HealthProviderMinAggregate";
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  district?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  region?: Maybe<Scalars["String"]["output"]>;
  type?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type HealthProviderPatientsAggregateGroupBy = {
  __typename?: "HealthProviderPatientsAggregateGroupBy";
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  userProfileId?: Maybe<Scalars["Float"]["output"]>;
};

export type HealthProviderPatientsAggregateResponse = {
  __typename?: "HealthProviderPatientsAggregateResponse";
  avg?: Maybe<HealthProviderPatientsAvgAggregate>;
  count?: Maybe<HealthProviderPatientsCountAggregate>;
  groupBy?: Maybe<HealthProviderPatientsAggregateGroupBy>;
  max?: Maybe<HealthProviderPatientsMaxAggregate>;
  min?: Maybe<HealthProviderPatientsMinAggregate>;
  sum?: Maybe<HealthProviderPatientsSumAggregate>;
};

export type HealthProviderPatientsAvgAggregate = {
  __typename?: "HealthProviderPatientsAvgAggregate";
  id?: Maybe<Scalars["Float"]["output"]>;
  userProfileId?: Maybe<Scalars["Float"]["output"]>;
};

export type HealthProviderPatientsCountAggregate = {
  __typename?: "HealthProviderPatientsCountAggregate";
  createdAt?: Maybe<Scalars["Int"]["output"]>;
  deletedAt?: Maybe<Scalars["Int"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  updatedAt?: Maybe<Scalars["Int"]["output"]>;
  userProfileId?: Maybe<Scalars["Int"]["output"]>;
};

export type HealthProviderPatientsMaxAggregate = {
  __typename?: "HealthProviderPatientsMaxAggregate";
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  userProfileId?: Maybe<Scalars["Float"]["output"]>;
};

export type HealthProviderPatientsMinAggregate = {
  __typename?: "HealthProviderPatientsMinAggregate";
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  userProfileId?: Maybe<Scalars["Float"]["output"]>;
};

export type HealthProviderPatientsSumAggregate = {
  __typename?: "HealthProviderPatientsSumAggregate";
  id?: Maybe<Scalars["Float"]["output"]>;
  userProfileId?: Maybe<Scalars["Float"]["output"]>;
};

export type HealthProviderSort = {
  direction: SortDirection;
  field: HealthProviderSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum HealthProviderSortFields {
  CreatedAt = "createdAt",
  DeletedAt = "deletedAt",
  Description = "description",
  District = "district",
  Id = "id",
  IsFastTrack = "isFastTrack",
  Name = "name",
  Region = "region",
  Type = "type",
  UpdatedAt = "updatedAt",
}

export type HealthProviderSumAggregate = {
  __typename?: "HealthProviderSumAggregate";
  id?: Maybe<Scalars["Float"]["output"]>;
};

export type HealthProviderUpdateFilter = {
  and?: InputMaybe<Array<HealthProviderUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  district?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  isFastTrack?: InputMaybe<BooleanFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<HealthProviderUpdateFilter>>;
  region?: InputMaybe<StringFieldComparison>;
  type?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type IdFilterComparison = {
  eq?: InputMaybe<Scalars["ID"]["input"]>;
  gt?: InputMaybe<Scalars["ID"]["input"]>;
  gte?: InputMaybe<Scalars["ID"]["input"]>;
  iLike?: InputMaybe<Scalars["ID"]["input"]>;
  in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  is?: InputMaybe<Scalars["Boolean"]["input"]>;
  isNot?: InputMaybe<Scalars["Boolean"]["input"]>;
  like?: InputMaybe<Scalars["ID"]["input"]>;
  lt?: InputMaybe<Scalars["ID"]["input"]>;
  lte?: InputMaybe<Scalars["ID"]["input"]>;
  neq?: InputMaybe<Scalars["ID"]["input"]>;
  notILike?: InputMaybe<Scalars["ID"]["input"]>;
  notIn?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  notLike?: InputMaybe<Scalars["ID"]["input"]>;
};

export type IntFieldComparison = {
  between?: InputMaybe<IntFieldComparisonBetween>;
  eq?: InputMaybe<Scalars["Int"]["input"]>;
  gt?: InputMaybe<Scalars["Int"]["input"]>;
  gte?: InputMaybe<Scalars["Int"]["input"]>;
  in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  is?: InputMaybe<Scalars["Boolean"]["input"]>;
  isNot?: InputMaybe<Scalars["Boolean"]["input"]>;
  lt?: InputMaybe<Scalars["Int"]["input"]>;
  lte?: InputMaybe<Scalars["Int"]["input"]>;
  neq?: InputMaybe<Scalars["Int"]["input"]>;
  notBetween?: InputMaybe<IntFieldComparisonBetween>;
  notIn?: InputMaybe<Array<Scalars["Int"]["input"]>>;
};

export type IntFieldComparisonBetween = {
  lower: Scalars["Int"]["input"];
  upper: Scalars["Int"]["input"];
};

export type Location = {
  __typename?: "Location";
  latitude: Scalars["String"]["output"];
  longitude: Scalars["String"]["output"];
};

export type LocationInput = {
  latitude: Scalars["String"]["input"];
  longitude: Scalars["String"]["input"];
};

export type LoginResponseDto = {
  __typename?: "LoginResponseDto";
  accessToken: Scalars["String"]["output"];
  expiresIn: Scalars["Float"]["output"];
  passwordResetRequired: Scalars["Boolean"]["output"];
  tokenType: Scalars["String"]["output"];
};

export type Mutation = {
  __typename?: "Mutation";
  assignCategoriesToDoctorTypes: DoctorType;
  changePassword: Scalars["Boolean"]["output"];
  completeAccountRegistration: UserProfile;
  createManyDepartments: Array<Department>;
  createManyDoctorTypeCategories: Array<DoctorTypeCategory>;
  createManyDoctorTypes: Array<DoctorType>;
  createManyHealthProviders: Array<HealthProvider>;
  createOneDepartment: Department;
  createOneDoctorType: DoctorType;
  createOneDoctorTypeCategory: DoctorTypeCategory;
  createOneHealthProvider: HealthProvider;
  deleteManyDepartments: DeleteManyResponse;
  deleteManyDoctorTypeCategories: DeleteManyResponse;
  deleteManyDoctorTypes: DeleteManyResponse;
  deleteOneDepartment: DepartmentDeleteResponse;
  deleteOneDoctorType: DoctorTypeDeleteResponse;
  deleteOneDoctorTypeCategory: DoctorTypeCategoryDeleteResponse;
  forgetPassword: ForgetPasswordResponse;
  login: LoginResponseDto;
  logout: Scalars["Boolean"]["output"];
  rateDoctor: Scalars["Boolean"]["output"];
  /** Register with either email or phoneNumber */
  requestLoginOtp: OtpResponse;
  setDoctor: Scalars["Boolean"]["output"];
  setDoctorAvailability: Doctor;
  setDoctorProfile: Doctor;
  updateManyDepartments: UpdateManyResponse;
  updateManyDoctorTypeCategories: UpdateManyResponse;
  updateManyDoctorTypes: UpdateManyResponse;
  updateManyHealthProviders: UpdateManyResponse;
  updateOneDepartment: Department;
  updateOneDoctorType: DoctorType;
  updateOneDoctorTypeCategory: DoctorTypeCategory;
  updateOneHealthProvider: HealthProvider;
  verifyLoginOtp: ValidateOtpResponse;
};

export type MutationAssignCategoriesToDoctorTypesArgs = {
  input: AssignCategoryTypeDto;
};

export type MutationChangePasswordArgs = {
  currentPassword: Scalars["String"]["input"];
  newPassword: Scalars["String"]["input"];
  newPasswordConfirmation: Scalars["String"]["input"];
};

export type MutationCompleteAccountRegistrationArgs = {
  input: CompleteAccountRegistrationInput;
};

export type MutationCreateManyDepartmentsArgs = {
  input: CreateManyDepartmentsInput;
};

export type MutationCreateManyDoctorTypeCategoriesArgs = {
  input: CreateManyDoctorTypeCategoriesInput;
};

export type MutationCreateManyDoctorTypesArgs = {
  input: CreateManyDoctorTypesInput;
};

export type MutationCreateManyHealthProvidersArgs = {
  input: CreateManyHealthProvidersInput;
};

export type MutationCreateOneDepartmentArgs = {
  input: CreateOneDepartmentInput;
};

export type MutationCreateOneDoctorTypeArgs = {
  input: CreateOneDoctorTypeInput;
};

export type MutationCreateOneDoctorTypeCategoryArgs = {
  input: CreateOneDoctorTypeCategoryInput;
};

export type MutationCreateOneHealthProviderArgs = {
  input: CreateOneHealthProviderInput;
};

export type MutationDeleteManyDepartmentsArgs = {
  input: DeleteManyDepartmentsInput;
};

export type MutationDeleteManyDoctorTypeCategoriesArgs = {
  input: DeleteManyDoctorTypeCategoriesInput;
};

export type MutationDeleteManyDoctorTypesArgs = {
  input: DeleteManyDoctorTypesInput;
};

export type MutationDeleteOneDepartmentArgs = {
  input: DeleteOneDepartmentInput;
};

export type MutationDeleteOneDoctorTypeArgs = {
  input: DeleteOneDoctorTypeInput;
};

export type MutationDeleteOneDoctorTypeCategoryArgs = {
  input: DeleteOneDoctorTypeCategoryInput;
};

export type MutationForgetPasswordArgs = {
  input: ForgetPasswordRequest;
};

export type MutationLoginArgs = {
  identifier: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
};

export type MutationRateDoctorArgs = {
  input: RateDoctorDto;
};

export type MutationRequestLoginOtpArgs = {
  input: OtpRequest;
};

export type MutationSetDoctorArgs = {
  userProfileId: Scalars["Float"]["input"];
};

export type MutationSetDoctorAvailabilityArgs = {
  input: DoctorScheduleDto;
};

export type MutationSetDoctorProfileArgs = {
  input: SetDoctorTypeDto;
};

export type MutationUpdateManyDepartmentsArgs = {
  input: UpdateManyDepartmentsInput;
};

export type MutationUpdateManyDoctorTypeCategoriesArgs = {
  input: UpdateManyDoctorTypeCategoriesInput;
};

export type MutationUpdateManyDoctorTypesArgs = {
  input: UpdateManyDoctorTypesInput;
};

export type MutationUpdateManyHealthProvidersArgs = {
  input: UpdateManyHealthProvidersInput;
};

export type MutationUpdateOneDepartmentArgs = {
  input: UpdateOneDepartmentInput;
};

export type MutationUpdateOneDoctorTypeArgs = {
  input: UpdateOneDoctorTypeInput;
};

export type MutationUpdateOneDoctorTypeCategoryArgs = {
  input: UpdateOneDoctorTypeCategoryInput;
};

export type MutationUpdateOneHealthProviderArgs = {
  input: UpdateOneHealthProviderInput;
};

export type MutationVerifyLoginOtpArgs = {
  input: VerifyOtpInput;
};

export type NumberFieldComparison = {
  between?: InputMaybe<NumberFieldComparisonBetween>;
  eq?: InputMaybe<Scalars["Float"]["input"]>;
  gt?: InputMaybe<Scalars["Float"]["input"]>;
  gte?: InputMaybe<Scalars["Float"]["input"]>;
  in?: InputMaybe<Array<Scalars["Float"]["input"]>>;
  is?: InputMaybe<Scalars["Boolean"]["input"]>;
  isNot?: InputMaybe<Scalars["Boolean"]["input"]>;
  lt?: InputMaybe<Scalars["Float"]["input"]>;
  lte?: InputMaybe<Scalars["Float"]["input"]>;
  neq?: InputMaybe<Scalars["Float"]["input"]>;
  notBetween?: InputMaybe<NumberFieldComparisonBetween>;
  notIn?: InputMaybe<Array<Scalars["Float"]["input"]>>;
};

export type NumberFieldComparisonBetween = {
  lower: Scalars["Float"]["input"];
  upper: Scalars["Float"]["input"];
};

export type OffsetPageInfo = {
  __typename?: "OffsetPageInfo";
  /** true if paging forward and there are more records. */
  hasNextPage?: Maybe<Scalars["Boolean"]["output"]>;
  /** true if paging backwards and there are more records. */
  hasPreviousPage?: Maybe<Scalars["Boolean"]["output"]>;
};

export type OffsetPaging = {
  /** Limit the number of records returned */
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  /** Offset to start returning records from */
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type OtpRequest = {
  phoneNumber?: InputMaybe<Scalars["String"]["input"]>;
};

export type OtpResponse = {
  __typename?: "OtpResponse";
  expiresAt: Scalars["DateTime"]["output"];
  /** Nonce value to be used on verification request */
  verificationCodeNonce: Scalars["String"]["output"];
};

export type PageInfo = {
  __typename?: "PageInfo";
  /** The cursor of the last returned record. */
  endCursor?: Maybe<Scalars["ConnectionCursor"]["output"]>;
  /** true if paging forward and there are more records. */
  hasNextPage?: Maybe<Scalars["Boolean"]["output"]>;
  /** true if paging backwards and there are more records. */
  hasPreviousPage?: Maybe<Scalars["Boolean"]["output"]>;
  /** The cursor of the first returned record. */
  startCursor?: Maybe<Scalars["ConnectionCursor"]["output"]>;
};

export type Patient = {
  __typename?: "Patient";
  appointments: PatientAppointmentsConnection;
  appointmentsAggregate: Array<PatientAppointmentsAggregateResponse>;
  createdAt: Scalars["DateTime"]["output"];
  deletedAt: Scalars["DateTime"]["output"];
  departments: PatientDepartmentsConnection;
  departmentsAggregate: Array<PatientDepartmentsAggregateResponse>;
  doctors: PatientDoctorsConnection;
  doctorsAggregate: Array<PatientDoctorsAggregateResponse>;
  healthProviders: PatientHealthProvidersConnection;
  healthProvidersAggregate: Array<PatientHealthProvidersAggregateResponse>;
  id: Scalars["ID"]["output"];
  updatedAt: Scalars["DateTime"]["output"];
  userProfile: UserProfile;
  userProfileId?: Maybe<Scalars["Float"]["output"]>;
};

export type PatientAppointmentsArgs = {
  filter?: AppointmentFilter;
  paging?: OffsetPaging;
  sorting?: Array<AppointmentSort>;
};

export type PatientAppointmentsAggregateArgs = {
  filter?: InputMaybe<AppointmentAggregateFilter>;
};

export type PatientDepartmentsArgs = {
  filter?: DepartmentFilter;
  paging?: OffsetPaging;
  sorting?: Array<DepartmentSort>;
};

export type PatientDepartmentsAggregateArgs = {
  filter?: InputMaybe<DepartmentAggregateFilter>;
};

export type PatientDoctorsArgs = {
  filter?: DoctorFilter;
  paging?: OffsetPaging;
  sorting?: Array<DoctorSort>;
};

export type PatientDoctorsAggregateArgs = {
  filter?: InputMaybe<DoctorAggregateFilter>;
};

export type PatientHealthProvidersArgs = {
  filter?: HealthProviderFilter;
  paging?: OffsetPaging;
  sorting?: Array<HealthProviderSort>;
};

export type PatientHealthProvidersAggregateArgs = {
  filter?: InputMaybe<HealthProviderAggregateFilter>;
};

export type PatientAggregateFilter = {
  and?: InputMaybe<Array<PatientAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<PatientAggregateFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  userProfileId?: InputMaybe<NumberFieldComparison>;
};

export type PatientAggregateGroupBy = {
  __typename?: "PatientAggregateGroupBy";
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  userProfileId?: Maybe<Scalars["Float"]["output"]>;
};

export type PatientAggregateGroupByCreatedAtArgs = {
  by?: GroupBy;
};

export type PatientAggregateGroupByDeletedAtArgs = {
  by?: GroupBy;
};

export type PatientAggregateGroupByUpdatedAtArgs = {
  by?: GroupBy;
};

export type PatientAggregateResponse = {
  __typename?: "PatientAggregateResponse";
  avg?: Maybe<PatientAvgAggregate>;
  count?: Maybe<PatientCountAggregate>;
  groupBy?: Maybe<PatientAggregateGroupBy>;
  max?: Maybe<PatientMaxAggregate>;
  min?: Maybe<PatientMinAggregate>;
  sum?: Maybe<PatientSumAggregate>;
};

export type PatientAppointmentsAggregateGroupBy = {
  __typename?: "PatientAppointmentsAggregateGroupBy";
  appointmentType?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  departmentId?: Maybe<Scalars["Float"]["output"]>;
  doctorId?: Maybe<Scalars["Float"]["output"]>;
  healthProviderId?: Maybe<Scalars["Float"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  isActive?: Maybe<Scalars["Boolean"]["output"]>;
  patientId?: Maybe<Scalars["Float"]["output"]>;
  price?: Maybe<Scalars["Float"]["output"]>;
  scheduleTime?: Maybe<Scalars["DateTime"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type PatientAppointmentsAggregateResponse = {
  __typename?: "PatientAppointmentsAggregateResponse";
  avg?: Maybe<PatientAppointmentsAvgAggregate>;
  count?: Maybe<PatientAppointmentsCountAggregate>;
  groupBy?: Maybe<PatientAppointmentsAggregateGroupBy>;
  max?: Maybe<PatientAppointmentsMaxAggregate>;
  min?: Maybe<PatientAppointmentsMinAggregate>;
  sum?: Maybe<PatientAppointmentsSumAggregate>;
};

export type PatientAppointmentsAvgAggregate = {
  __typename?: "PatientAppointmentsAvgAggregate";
  departmentId?: Maybe<Scalars["Float"]["output"]>;
  doctorId?: Maybe<Scalars["Float"]["output"]>;
  healthProviderId?: Maybe<Scalars["Float"]["output"]>;
  id?: Maybe<Scalars["Float"]["output"]>;
  patientId?: Maybe<Scalars["Float"]["output"]>;
  price?: Maybe<Scalars["Float"]["output"]>;
};

export type PatientAppointmentsConnection = {
  __typename?: "PatientAppointmentsConnection";
  /** Array of nodes. */
  nodes: Array<Appointment>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars["Int"]["output"];
};

export type PatientAppointmentsCountAggregate = {
  __typename?: "PatientAppointmentsCountAggregate";
  appointmentType?: Maybe<Scalars["Int"]["output"]>;
  createdAt?: Maybe<Scalars["Int"]["output"]>;
  deletedAt?: Maybe<Scalars["Int"]["output"]>;
  departmentId?: Maybe<Scalars["Int"]["output"]>;
  doctorId?: Maybe<Scalars["Int"]["output"]>;
  healthProviderId?: Maybe<Scalars["Int"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  isActive?: Maybe<Scalars["Int"]["output"]>;
  patientId?: Maybe<Scalars["Int"]["output"]>;
  price?: Maybe<Scalars["Int"]["output"]>;
  scheduleTime?: Maybe<Scalars["Int"]["output"]>;
  status?: Maybe<Scalars["Int"]["output"]>;
  updatedAt?: Maybe<Scalars["Int"]["output"]>;
};

export type PatientAppointmentsMaxAggregate = {
  __typename?: "PatientAppointmentsMaxAggregate";
  appointmentType?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  departmentId?: Maybe<Scalars["Float"]["output"]>;
  doctorId?: Maybe<Scalars["Float"]["output"]>;
  healthProviderId?: Maybe<Scalars["Float"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  patientId?: Maybe<Scalars["Float"]["output"]>;
  price?: Maybe<Scalars["Float"]["output"]>;
  scheduleTime?: Maybe<Scalars["DateTime"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type PatientAppointmentsMinAggregate = {
  __typename?: "PatientAppointmentsMinAggregate";
  appointmentType?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  departmentId?: Maybe<Scalars["Float"]["output"]>;
  doctorId?: Maybe<Scalars["Float"]["output"]>;
  healthProviderId?: Maybe<Scalars["Float"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  patientId?: Maybe<Scalars["Float"]["output"]>;
  price?: Maybe<Scalars["Float"]["output"]>;
  scheduleTime?: Maybe<Scalars["DateTime"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type PatientAppointmentsSumAggregate = {
  __typename?: "PatientAppointmentsSumAggregate";
  departmentId?: Maybe<Scalars["Float"]["output"]>;
  doctorId?: Maybe<Scalars["Float"]["output"]>;
  healthProviderId?: Maybe<Scalars["Float"]["output"]>;
  id?: Maybe<Scalars["Float"]["output"]>;
  patientId?: Maybe<Scalars["Float"]["output"]>;
  price?: Maybe<Scalars["Float"]["output"]>;
};

export type PatientAvgAggregate = {
  __typename?: "PatientAvgAggregate";
  id?: Maybe<Scalars["Float"]["output"]>;
  userProfileId?: Maybe<Scalars["Float"]["output"]>;
};

export type PatientConnection = {
  __typename?: "PatientConnection";
  /** Array of edges. */
  edges: Array<PatientEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars["Int"]["output"];
};

export type PatientCountAggregate = {
  __typename?: "PatientCountAggregate";
  createdAt?: Maybe<Scalars["Int"]["output"]>;
  deletedAt?: Maybe<Scalars["Int"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  updatedAt?: Maybe<Scalars["Int"]["output"]>;
  userProfileId?: Maybe<Scalars["Int"]["output"]>;
};

export type PatientDepartmentsAggregateGroupBy = {
  __typename?: "PatientDepartmentsAggregateGroupBy";
  code?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type PatientDepartmentsAggregateResponse = {
  __typename?: "PatientDepartmentsAggregateResponse";
  avg?: Maybe<PatientDepartmentsAvgAggregate>;
  count?: Maybe<PatientDepartmentsCountAggregate>;
  groupBy?: Maybe<PatientDepartmentsAggregateGroupBy>;
  max?: Maybe<PatientDepartmentsMaxAggregate>;
  min?: Maybe<PatientDepartmentsMinAggregate>;
  sum?: Maybe<PatientDepartmentsSumAggregate>;
};

export type PatientDepartmentsAvgAggregate = {
  __typename?: "PatientDepartmentsAvgAggregate";
  id?: Maybe<Scalars["Float"]["output"]>;
};

export type PatientDepartmentsConnection = {
  __typename?: "PatientDepartmentsConnection";
  /** Array of nodes. */
  nodes: Array<Department>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars["Int"]["output"];
};

export type PatientDepartmentsCountAggregate = {
  __typename?: "PatientDepartmentsCountAggregate";
  code?: Maybe<Scalars["Int"]["output"]>;
  createdAt?: Maybe<Scalars["Int"]["output"]>;
  deletedAt?: Maybe<Scalars["Int"]["output"]>;
  description?: Maybe<Scalars["Int"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  name?: Maybe<Scalars["Int"]["output"]>;
  updatedAt?: Maybe<Scalars["Int"]["output"]>;
};

export type PatientDepartmentsMaxAggregate = {
  __typename?: "PatientDepartmentsMaxAggregate";
  code?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type PatientDepartmentsMinAggregate = {
  __typename?: "PatientDepartmentsMinAggregate";
  code?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type PatientDepartmentsSumAggregate = {
  __typename?: "PatientDepartmentsSumAggregate";
  id?: Maybe<Scalars["Float"]["output"]>;
};

export type PatientDoctorsAggregateGroupBy = {
  __typename?: "PatientDoctorsAggregateGroupBy";
  bio?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  doctorTypeCategoryId?: Maybe<Scalars["Float"]["output"]>;
  doctorTypeId?: Maybe<Scalars["Float"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  location?: Maybe<Scalars["String"]["output"]>;
  price?: Maybe<Scalars["Float"]["output"]>;
  ratings?: Maybe<Scalars["Float"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  uploadId?: Maybe<Scalars["Int"]["output"]>;
  userProfileId?: Maybe<Scalars["Float"]["output"]>;
};

export type PatientDoctorsAggregateResponse = {
  __typename?: "PatientDoctorsAggregateResponse";
  avg?: Maybe<PatientDoctorsAvgAggregate>;
  count?: Maybe<PatientDoctorsCountAggregate>;
  groupBy?: Maybe<PatientDoctorsAggregateGroupBy>;
  max?: Maybe<PatientDoctorsMaxAggregate>;
  min?: Maybe<PatientDoctorsMinAggregate>;
  sum?: Maybe<PatientDoctorsSumAggregate>;
};

export type PatientDoctorsAvgAggregate = {
  __typename?: "PatientDoctorsAvgAggregate";
  doctorTypeCategoryId?: Maybe<Scalars["Float"]["output"]>;
  doctorTypeId?: Maybe<Scalars["Float"]["output"]>;
  id?: Maybe<Scalars["Float"]["output"]>;
  price?: Maybe<Scalars["Float"]["output"]>;
  ratings?: Maybe<Scalars["Float"]["output"]>;
  uploadId?: Maybe<Scalars["Float"]["output"]>;
  userProfileId?: Maybe<Scalars["Float"]["output"]>;
};

export type PatientDoctorsConnection = {
  __typename?: "PatientDoctorsConnection";
  /** Array of nodes. */
  nodes: Array<Doctor>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars["Int"]["output"];
};

export type PatientDoctorsCountAggregate = {
  __typename?: "PatientDoctorsCountAggregate";
  bio?: Maybe<Scalars["Int"]["output"]>;
  createdAt?: Maybe<Scalars["Int"]["output"]>;
  deletedAt?: Maybe<Scalars["Int"]["output"]>;
  doctorTypeCategoryId?: Maybe<Scalars["Int"]["output"]>;
  doctorTypeId?: Maybe<Scalars["Int"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  location?: Maybe<Scalars["Int"]["output"]>;
  price?: Maybe<Scalars["Int"]["output"]>;
  ratings?: Maybe<Scalars["Int"]["output"]>;
  updatedAt?: Maybe<Scalars["Int"]["output"]>;
  uploadId?: Maybe<Scalars["Int"]["output"]>;
  userProfileId?: Maybe<Scalars["Int"]["output"]>;
};

export type PatientDoctorsMaxAggregate = {
  __typename?: "PatientDoctorsMaxAggregate";
  bio?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  doctorTypeCategoryId?: Maybe<Scalars["Float"]["output"]>;
  doctorTypeId?: Maybe<Scalars["Float"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  location?: Maybe<Scalars["String"]["output"]>;
  price?: Maybe<Scalars["Float"]["output"]>;
  ratings?: Maybe<Scalars["Float"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  uploadId?: Maybe<Scalars["Int"]["output"]>;
  userProfileId?: Maybe<Scalars["Float"]["output"]>;
};

export type PatientDoctorsMinAggregate = {
  __typename?: "PatientDoctorsMinAggregate";
  bio?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  doctorTypeCategoryId?: Maybe<Scalars["Float"]["output"]>;
  doctorTypeId?: Maybe<Scalars["Float"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  location?: Maybe<Scalars["String"]["output"]>;
  price?: Maybe<Scalars["Float"]["output"]>;
  ratings?: Maybe<Scalars["Float"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  uploadId?: Maybe<Scalars["Int"]["output"]>;
  userProfileId?: Maybe<Scalars["Float"]["output"]>;
};

export type PatientDoctorsSumAggregate = {
  __typename?: "PatientDoctorsSumAggregate";
  doctorTypeCategoryId?: Maybe<Scalars["Float"]["output"]>;
  doctorTypeId?: Maybe<Scalars["Float"]["output"]>;
  id?: Maybe<Scalars["Float"]["output"]>;
  price?: Maybe<Scalars["Float"]["output"]>;
  ratings?: Maybe<Scalars["Float"]["output"]>;
  uploadId?: Maybe<Scalars["Float"]["output"]>;
  userProfileId?: Maybe<Scalars["Float"]["output"]>;
};

export type PatientEdge = {
  __typename?: "PatientEdge";
  /** Cursor for this node. */
  cursor: Scalars["ConnectionCursor"]["output"];
  /** The node containing the Patient */
  node: Patient;
};

export type PatientFilter = {
  and?: InputMaybe<Array<PatientFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<PatientFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  userProfile?: InputMaybe<PatientFilterUserProfileFilter>;
  userProfileId?: InputMaybe<NumberFieldComparison>;
};

export type PatientFilterUserProfileFilter = {
  active?: InputMaybe<BooleanFieldComparison>;
  and?: InputMaybe<Array<PatientFilterUserProfileFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  dateOfBirth?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  emailVerifiedAt?: InputMaybe<DateFieldComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  gender?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  middleName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<PatientFilterUserProfileFilter>>;
  phoneNumber?: InputMaybe<StringFieldComparison>;
  phoneNumberVerifiedAt?: InputMaybe<DateFieldComparison>;
  role?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  username?: InputMaybe<StringFieldComparison>;
};

export type PatientHealthProvidersAggregateGroupBy = {
  __typename?: "PatientHealthProvidersAggregateGroupBy";
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  district?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  isFastTrack?: Maybe<Scalars["Boolean"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  region?: Maybe<Scalars["String"]["output"]>;
  type?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type PatientHealthProvidersAggregateResponse = {
  __typename?: "PatientHealthProvidersAggregateResponse";
  avg?: Maybe<PatientHealthProvidersAvgAggregate>;
  count?: Maybe<PatientHealthProvidersCountAggregate>;
  groupBy?: Maybe<PatientHealthProvidersAggregateGroupBy>;
  max?: Maybe<PatientHealthProvidersMaxAggregate>;
  min?: Maybe<PatientHealthProvidersMinAggregate>;
  sum?: Maybe<PatientHealthProvidersSumAggregate>;
};

export type PatientHealthProvidersAvgAggregate = {
  __typename?: "PatientHealthProvidersAvgAggregate";
  id?: Maybe<Scalars["Float"]["output"]>;
};

export type PatientHealthProvidersConnection = {
  __typename?: "PatientHealthProvidersConnection";
  /** Array of nodes. */
  nodes: Array<HealthProvider>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars["Int"]["output"];
};

export type PatientHealthProvidersCountAggregate = {
  __typename?: "PatientHealthProvidersCountAggregate";
  createdAt?: Maybe<Scalars["Int"]["output"]>;
  deletedAt?: Maybe<Scalars["Int"]["output"]>;
  description?: Maybe<Scalars["Int"]["output"]>;
  district?: Maybe<Scalars["Int"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  isFastTrack?: Maybe<Scalars["Int"]["output"]>;
  name?: Maybe<Scalars["Int"]["output"]>;
  region?: Maybe<Scalars["Int"]["output"]>;
  type?: Maybe<Scalars["Int"]["output"]>;
  updatedAt?: Maybe<Scalars["Int"]["output"]>;
};

export type PatientHealthProvidersMaxAggregate = {
  __typename?: "PatientHealthProvidersMaxAggregate";
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  district?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  region?: Maybe<Scalars["String"]["output"]>;
  type?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type PatientHealthProvidersMinAggregate = {
  __typename?: "PatientHealthProvidersMinAggregate";
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  district?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  region?: Maybe<Scalars["String"]["output"]>;
  type?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type PatientHealthProvidersSumAggregate = {
  __typename?: "PatientHealthProvidersSumAggregate";
  id?: Maybe<Scalars["Float"]["output"]>;
};

export type PatientMaxAggregate = {
  __typename?: "PatientMaxAggregate";
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  userProfileId?: Maybe<Scalars["Float"]["output"]>;
};

export type PatientMinAggregate = {
  __typename?: "PatientMinAggregate";
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  userProfileId?: Maybe<Scalars["Float"]["output"]>;
};

export type PatientSort = {
  direction: SortDirection;
  field: PatientSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum PatientSortFields {
  CreatedAt = "createdAt",
  DeletedAt = "deletedAt",
  Id = "id",
  UpdatedAt = "updatedAt",
  UserProfileId = "userProfileId",
}

export type PatientSumAggregate = {
  __typename?: "PatientSumAggregate";
  id?: Maybe<Scalars["Float"]["output"]>;
  userProfileId?: Maybe<Scalars["Float"]["output"]>;
};

export type Query = {
  __typename?: "Query";
  appointment: Appointment;
  appointmentAggregate: Array<AppointmentAggregateResponse>;
  appointments: AppointmentConnection;
  department: Department;
  departmentAggregate: Array<DepartmentAggregateResponse>;
  departments: DepartmentConnection;
  doctor: Doctor;
  doctorType: DoctorType;
  doctorTypeCategories: DoctorTypeCategoryConnection;
  doctorTypeCategory: DoctorTypeCategory;
  doctorTypes: DoctorTypeConnection;
  doctors: Array<Doctor>;
  /** Get User Profile for currently logged in user */
  getCurrentUserProfile: UserProfile;
  healthProvider: HealthProvider;
  healthProviderAggregate: Array<HealthProviderAggregateResponse>;
  healthProviders: HealthProviderConnection;
  patient: Patient;
  patientAggregate: Array<PatientAggregateResponse>;
  patients: PatientConnection;
  userProfile: UserProfile;
  userProfileAggregate: Array<UserProfileAggregateResponse>;
  userProfiles: UserProfileConnection;
};

export type QueryAppointmentArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryAppointmentAggregateArgs = {
  filter?: InputMaybe<AppointmentAggregateFilter>;
};

export type QueryAppointmentsArgs = {
  filter?: AppointmentFilter;
  paging?: CursorPaging;
  sorting?: Array<AppointmentSort>;
};

export type QueryDepartmentArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryDepartmentAggregateArgs = {
  filter?: InputMaybe<DepartmentAggregateFilter>;
};

export type QueryDepartmentsArgs = {
  filter?: DepartmentFilter;
  paging?: CursorPaging;
  sorting?: Array<DepartmentSort>;
};

export type QueryDoctorArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryDoctorTypeArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryDoctorTypeCategoriesArgs = {
  filter?: DoctorTypeCategoryFilter;
  paging?: CursorPaging;
  sorting?: Array<DoctorTypeCategorySort>;
};

export type QueryDoctorTypeCategoryArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryDoctorTypesArgs = {
  filter?: DoctorTypeFilter;
  paging?: CursorPaging;
  sorting?: Array<DoctorTypeSort>;
};

export type QueryDoctorsArgs = {
  filter?: DoctorFilter;
  sorting?: Array<DoctorSort>;
};

export type QueryHealthProviderArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryHealthProviderAggregateArgs = {
  filter?: InputMaybe<HealthProviderAggregateFilter>;
};

export type QueryHealthProvidersArgs = {
  filter?: HealthProviderFilter;
  paging?: CursorPaging;
  sorting?: Array<HealthProviderSort>;
};

export type QueryPatientArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryPatientAggregateArgs = {
  filter?: InputMaybe<PatientAggregateFilter>;
};

export type QueryPatientsArgs = {
  filter?: PatientFilter;
  paging?: CursorPaging;
  sorting?: Array<PatientSort>;
};

export type QueryUserProfileArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryUserProfileAggregateArgs = {
  filter?: InputMaybe<UserProfileAggregateFilter>;
};

export type QueryUserProfilesArgs = {
  filter?: UserProfileFilter;
  paging?: CursorPaging;
  sorting?: Array<UserProfileSort>;
};

export type RateDoctorDto = {
  doctorId: Scalars["Float"]["input"];
  rate: Scalars["Float"]["input"];
};

export type Schedule = {
  __typename?: "Schedule";
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  dayOfWeek: DaysOfWeek;
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  doctorId?: Maybe<Scalars["Float"]["output"]>;
  endTime: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  startTime: Scalars["String"]["output"];
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type ScheduleFilter = {
  and?: InputMaybe<Array<ScheduleFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  dayOfWeek?: InputMaybe<DaysOfWeekFilterComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  doctor?: InputMaybe<ScheduleFilterDoctorFilter>;
  doctorId?: InputMaybe<NumberFieldComparison>;
  endTime?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ScheduleFilter>>;
  startTime?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ScheduleFilterDoctorFilter = {
  and?: InputMaybe<Array<ScheduleFilterDoctorFilter>>;
  bio?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  doctorTypeCategoryId?: InputMaybe<NumberFieldComparison>;
  doctorTypeId?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  location?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ScheduleFilterDoctorFilter>>;
  price?: InputMaybe<NumberFieldComparison>;
  ratings?: InputMaybe<NumberFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  uploadId?: InputMaybe<IntFieldComparison>;
  userProfileId?: InputMaybe<NumberFieldComparison>;
};

export type ScheduleSort = {
  direction: SortDirection;
  field: ScheduleSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ScheduleSortFields {
  CreatedAt = "createdAt",
  DayOfWeek = "dayOfWeek",
  DeletedAt = "deletedAt",
  DoctorId = "doctorId",
  EndTime = "endTime",
  Id = "id",
  StartTime = "startTime",
  UpdatedAt = "updatedAt",
}

export type SetDoctorTypeDto = {
  bio?: InputMaybe<Scalars["String"]["input"]>;
  doctorTypeCategoryId?: InputMaybe<Scalars["Float"]["input"]>;
  doctorTypeId?: InputMaybe<Scalars["Float"]["input"]>;
  location?: InputMaybe<Scalars["String"]["input"]>;
  price?: InputMaybe<Scalars["Float"]["input"]>;
};

/** Sort Directions */
export enum SortDirection {
  Asc = "ASC",
  Desc = "DESC",
}

/** Sort Nulls Options */
export enum SortNulls {
  NullsFirst = "NULLS_FIRST",
  NullsLast = "NULLS_LAST",
}

export type StringFieldComparison = {
  eq?: InputMaybe<Scalars["String"]["input"]>;
  gt?: InputMaybe<Scalars["String"]["input"]>;
  gte?: InputMaybe<Scalars["String"]["input"]>;
  iLike?: InputMaybe<Scalars["String"]["input"]>;
  in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  is?: InputMaybe<Scalars["Boolean"]["input"]>;
  isNot?: InputMaybe<Scalars["Boolean"]["input"]>;
  like?: InputMaybe<Scalars["String"]["input"]>;
  lt?: InputMaybe<Scalars["String"]["input"]>;
  lte?: InputMaybe<Scalars["String"]["input"]>;
  neq?: InputMaybe<Scalars["String"]["input"]>;
  notILike?: InputMaybe<Scalars["String"]["input"]>;
  notIn?: InputMaybe<Array<Scalars["String"]["input"]>>;
  notLike?: InputMaybe<Scalars["String"]["input"]>;
};

export type UpdateDepartmentDto = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  types?: InputMaybe<Scalars["String"]["input"]>;
};

export type UpdateDoctorTypeCategoryDto = {
  code?: InputMaybe<Scalars["String"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  doctorTypeCategoryId?: InputMaybe<Scalars["Float"]["input"]>;
  doctorTypeId?: InputMaybe<Scalars["Float"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type UpdateDoctorTypeDto = {
  code?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type UpdateHealthProviderDto = {
  description: Scalars["String"]["input"];
  name: Scalars["String"]["input"];
  type: Scalars["String"]["input"];
};

export type UpdateManyDepartmentsInput = {
  /** Filter used to find fields to update */
  filter: DepartmentUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateDepartmentDto;
};

export type UpdateManyDoctorTypeCategoriesInput = {
  /** Filter used to find fields to update */
  filter: DoctorTypeCategoryUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateDoctorTypeCategoryDto;
};

export type UpdateManyDoctorTypesInput = {
  /** Filter used to find fields to update */
  filter: DoctorTypeUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateDoctorTypeDto;
};

export type UpdateManyHealthProvidersInput = {
  /** Filter used to find fields to update */
  filter: HealthProviderUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateHealthProviderDto;
};

export type UpdateManyResponse = {
  __typename?: "UpdateManyResponse";
  /** The number of records updated. */
  updatedCount: Scalars["Int"]["output"];
};

export type UpdateOneDepartmentInput = {
  /** The id of the record to update */
  id: Scalars["ID"]["input"];
  /** The update to apply. */
  update: UpdateDepartmentDto;
};

export type UpdateOneDoctorTypeCategoryInput = {
  /** The id of the record to update */
  id: Scalars["ID"]["input"];
  /** The update to apply. */
  update: UpdateDoctorTypeCategoryDto;
};

export type UpdateOneDoctorTypeInput = {
  /** The id of the record to update */
  id: Scalars["ID"]["input"];
  /** The update to apply. */
  update: UpdateDoctorTypeDto;
};

export type UpdateOneHealthProviderInput = {
  /** The id of the record to update */
  id: Scalars["ID"]["input"];
  /** The update to apply. */
  update: UpdateHealthProviderDto;
};

export type Upload = {
  __typename?: "Upload";
  createdAt: Scalars["DateTime"]["output"];
  fileName: Scalars["String"]["output"];
  humanReadableSize: Scalars["String"]["output"];
  id: Scalars["Int"]["output"];
  isAudio: Scalars["Boolean"]["output"];
  isFile: Scalars["Boolean"]["output"];
  isImage: Scalars["Boolean"]["output"];
  isVideo: Scalars["Boolean"]["output"];
  key: Scalars["String"]["output"];
  mimeType: Scalars["String"]["output"];
  name: Scalars["String"]["output"];
  signedDownloadUrl: Scalars["String"]["output"];
  signedUrl: Scalars["String"]["output"];
  size: Scalars["Float"]["output"];
  updatedAt: Scalars["DateTime"]["output"];
  userId: Scalars["Float"]["output"];
};

export type UploadEdge = {
  __typename?: "UploadEdge";
  /** Cursor for this node. */
  cursor: Scalars["ConnectionCursor"]["output"];
  /** The node containing the Upload */
  node: Upload;
};

export type UserProfile = {
  __typename?: "UserProfile";
  active?: Maybe<Scalars["Boolean"]["output"]>;
  createdAt: Scalars["DateTime"]["output"];
  dateOfBirth?: Maybe<Scalars["DateTime"]["output"]>;
  doctor: Doctor;
  email?: Maybe<Scalars["String"]["output"]>;
  emailVerifiedAt?: Maybe<Scalars["DateTime"]["output"]>;
  firstName?: Maybe<Scalars["String"]["output"]>;
  gender?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  lastName?: Maybe<Scalars["String"]["output"]>;
  middleName?: Maybe<Scalars["String"]["output"]>;
  patient: Patient;
  phoneNumber?: Maybe<Scalars["String"]["output"]>;
  phoneNumberVerifiedAt?: Maybe<Scalars["DateTime"]["output"]>;
  role?: Maybe<Scalars["String"]["output"]>;
  updatedAt: Scalars["DateTime"]["output"];
  username?: Maybe<Scalars["String"]["output"]>;
};

export type UserProfileAggregateFilter = {
  active?: InputMaybe<BooleanFieldComparison>;
  and?: InputMaybe<Array<UserProfileAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  dateOfBirth?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  emailVerifiedAt?: InputMaybe<DateFieldComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  gender?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  middleName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<UserProfileAggregateFilter>>;
  phoneNumber?: InputMaybe<StringFieldComparison>;
  phoneNumberVerifiedAt?: InputMaybe<DateFieldComparison>;
  role?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  username?: InputMaybe<StringFieldComparison>;
};

export type UserProfileAggregateGroupBy = {
  __typename?: "UserProfileAggregateGroupBy";
  active?: Maybe<Scalars["Boolean"]["output"]>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  dateOfBirth?: Maybe<Scalars["DateTime"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
  emailVerifiedAt?: Maybe<Scalars["DateTime"]["output"]>;
  firstName?: Maybe<Scalars["String"]["output"]>;
  gender?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  lastName?: Maybe<Scalars["String"]["output"]>;
  middleName?: Maybe<Scalars["String"]["output"]>;
  phoneNumber?: Maybe<Scalars["String"]["output"]>;
  phoneNumberVerifiedAt?: Maybe<Scalars["DateTime"]["output"]>;
  role?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  username?: Maybe<Scalars["String"]["output"]>;
};

export type UserProfileAggregateGroupByCreatedAtArgs = {
  by?: GroupBy;
};

export type UserProfileAggregateGroupByDateOfBirthArgs = {
  by?: GroupBy;
};

export type UserProfileAggregateGroupByEmailVerifiedAtArgs = {
  by?: GroupBy;
};

export type UserProfileAggregateGroupByPhoneNumberVerifiedAtArgs = {
  by?: GroupBy;
};

export type UserProfileAggregateGroupByUpdatedAtArgs = {
  by?: GroupBy;
};

export type UserProfileAggregateResponse = {
  __typename?: "UserProfileAggregateResponse";
  avg?: Maybe<UserProfileAvgAggregate>;
  count?: Maybe<UserProfileCountAggregate>;
  groupBy?: Maybe<UserProfileAggregateGroupBy>;
  max?: Maybe<UserProfileMaxAggregate>;
  min?: Maybe<UserProfileMinAggregate>;
  sum?: Maybe<UserProfileSumAggregate>;
};

export type UserProfileAvgAggregate = {
  __typename?: "UserProfileAvgAggregate";
  id?: Maybe<Scalars["Float"]["output"]>;
};

export type UserProfileConnection = {
  __typename?: "UserProfileConnection";
  /** Array of edges. */
  edges: Array<UserProfileEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars["Int"]["output"];
};

export type UserProfileCountAggregate = {
  __typename?: "UserProfileCountAggregate";
  active?: Maybe<Scalars["Int"]["output"]>;
  createdAt?: Maybe<Scalars["Int"]["output"]>;
  dateOfBirth?: Maybe<Scalars["Int"]["output"]>;
  email?: Maybe<Scalars["Int"]["output"]>;
  emailVerifiedAt?: Maybe<Scalars["Int"]["output"]>;
  firstName?: Maybe<Scalars["Int"]["output"]>;
  gender?: Maybe<Scalars["Int"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  lastName?: Maybe<Scalars["Int"]["output"]>;
  middleName?: Maybe<Scalars["Int"]["output"]>;
  phoneNumber?: Maybe<Scalars["Int"]["output"]>;
  phoneNumberVerifiedAt?: Maybe<Scalars["Int"]["output"]>;
  role?: Maybe<Scalars["Int"]["output"]>;
  updatedAt?: Maybe<Scalars["Int"]["output"]>;
  username?: Maybe<Scalars["Int"]["output"]>;
};

export type UserProfileEdge = {
  __typename?: "UserProfileEdge";
  /** Cursor for this node. */
  cursor: Scalars["ConnectionCursor"]["output"];
  /** The node containing the UserProfile */
  node: UserProfile;
};

export type UserProfileFilter = {
  active?: InputMaybe<BooleanFieldComparison>;
  and?: InputMaybe<Array<UserProfileFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  dateOfBirth?: InputMaybe<DateFieldComparison>;
  doctor?: InputMaybe<UserProfileFilterDoctorFilter>;
  email?: InputMaybe<StringFieldComparison>;
  emailVerifiedAt?: InputMaybe<DateFieldComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  gender?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  middleName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<UserProfileFilter>>;
  patient?: InputMaybe<UserProfileFilterPatientFilter>;
  phoneNumber?: InputMaybe<StringFieldComparison>;
  phoneNumberVerifiedAt?: InputMaybe<DateFieldComparison>;
  role?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  username?: InputMaybe<StringFieldComparison>;
};

export type UserProfileFilterDoctorFilter = {
  and?: InputMaybe<Array<UserProfileFilterDoctorFilter>>;
  bio?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  doctorTypeCategoryId?: InputMaybe<NumberFieldComparison>;
  doctorTypeId?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  location?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<UserProfileFilterDoctorFilter>>;
  price?: InputMaybe<NumberFieldComparison>;
  ratings?: InputMaybe<NumberFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  uploadId?: InputMaybe<IntFieldComparison>;
  userProfileId?: InputMaybe<NumberFieldComparison>;
};

export type UserProfileFilterPatientFilter = {
  and?: InputMaybe<Array<UserProfileFilterPatientFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<UserProfileFilterPatientFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  userProfileId?: InputMaybe<NumberFieldComparison>;
};

export type UserProfileMaxAggregate = {
  __typename?: "UserProfileMaxAggregate";
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  dateOfBirth?: Maybe<Scalars["DateTime"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
  emailVerifiedAt?: Maybe<Scalars["DateTime"]["output"]>;
  firstName?: Maybe<Scalars["String"]["output"]>;
  gender?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  lastName?: Maybe<Scalars["String"]["output"]>;
  middleName?: Maybe<Scalars["String"]["output"]>;
  phoneNumber?: Maybe<Scalars["String"]["output"]>;
  phoneNumberVerifiedAt?: Maybe<Scalars["DateTime"]["output"]>;
  role?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  username?: Maybe<Scalars["String"]["output"]>;
};

export type UserProfileMinAggregate = {
  __typename?: "UserProfileMinAggregate";
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  dateOfBirth?: Maybe<Scalars["DateTime"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
  emailVerifiedAt?: Maybe<Scalars["DateTime"]["output"]>;
  firstName?: Maybe<Scalars["String"]["output"]>;
  gender?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  lastName?: Maybe<Scalars["String"]["output"]>;
  middleName?: Maybe<Scalars["String"]["output"]>;
  phoneNumber?: Maybe<Scalars["String"]["output"]>;
  phoneNumberVerifiedAt?: Maybe<Scalars["DateTime"]["output"]>;
  role?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  username?: Maybe<Scalars["String"]["output"]>;
};

export type UserProfileSort = {
  direction: SortDirection;
  field: UserProfileSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum UserProfileSortFields {
  Active = "active",
  CreatedAt = "createdAt",
  DateOfBirth = "dateOfBirth",
  Email = "email",
  EmailVerifiedAt = "emailVerifiedAt",
  FirstName = "firstName",
  Gender = "gender",
  Id = "id",
  LastName = "lastName",
  MiddleName = "middleName",
  PhoneNumber = "phoneNumber",
  PhoneNumberVerifiedAt = "phoneNumberVerifiedAt",
  Role = "role",
  UpdatedAt = "updatedAt",
  Username = "username",
}

export type UserProfileSumAggregate = {
  __typename?: "UserProfileSumAggregate";
  id?: Maybe<Scalars["Float"]["output"]>;
};

export type ValidateOtpResponse = {
  __typename?: "ValidateOtpResponse";
  accessToken: Scalars["String"]["output"];
  /** @deprecated Fixed issue on same flag on customer resource. Encourage using that one for consistent checking point */
  requiresProfileUpdate: Scalars["Boolean"]["output"];
  userProfile: UserProfile;
};

export type VerifyOtpInput = {
  /** A nonce value received on registration request */
  nonce: Scalars["String"]["input"];
  verificationCode: Scalars["String"]["input"];
};

export type LoginMutationVariables = Exact<{
  identifier: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
}>;

export type LoginMutation = {
  __typename?: "Mutation";
  login: {
    __typename?: "LoginResponseDto";
    accessToken: string;
    expiresIn: number;
    passwordResetRequired: boolean;
  };
};

export type DoctorsQueryVariables = Exact<{
  filter: DoctorFilter;
}>;

export type DoctorsQuery = {
  __typename?: "Query";
  doctors: Array<{
    __typename?: "Doctor";
    bio?: string | null;
    price?: number | null;
    ratings?: number | null;
    id: string;
    location?: string | null;
    updatedAt: any;
    availabilities: Array<{
      __typename?: "Schedule";
      createdAt?: any | null;
      dayOfWeek: DaysOfWeek;
      deletedAt?: any | null;
      doctorId?: number | null;
      endTime: string;
      id: string;
      startTime: string;
      updatedAt?: any | null;
    }>;
    doctorType: {
      __typename?: "DoctorType";
      id: string;
      name?: string | null;
      code?: string | null;
    };
  }>;
};

export type HealthProvidersQueryVariables = Exact<{
  paging: CursorPaging;
  filter: HealthProviderFilter;
}>;

export type HealthProvidersQuery = {
  __typename?: "Query";
  healthProviders: {
    __typename?: "HealthProviderConnection";
    totalCount: number;
    edges: Array<{
      __typename?: "HealthProviderEdge";
      cursor: any;
      node: {
        __typename?: "HealthProvider";
        id: string;
        district?: string | null;
        description?: string | null;
        name?: string | null;
        region?: string | null;
        type?: string | null;
        location?: {
          __typename?: "Location";
          latitude: string;
          longitude: string;
        } | null;
        doctors: Array<{
          __typename?: "Doctor";
          price?: number | null;
          id: string;
          ratings?: number | null;
          location?: string | null;
          bio?: string | null;
          doctorType: {
            __typename?: "DoctorType";
            id: string;
            name?: string | null;
          };
          userProfile: {
            __typename?: "UserProfile";
            id: string;
            lastName?: string | null;
            middleName?: string | null;
            phoneNumber?: string | null;
            email?: string | null;
            gender?: string | null;
            firstName?: string | null;
          };
        }>;
        departments: Array<{
          __typename?: "Department";
          code?: string | null;
          id: string;
          name?: string | null;
          updatedAt?: any | null;
          doctors: {
            __typename?: "DepartmentDoctorsConnection";
            nodes: Array<{
              __typename?: "Doctor";
              bio?: string | null;
              price?: number | null;
              ratings?: number | null;
              id: string;
              location?: string | null;
              updatedAt: any;
              availabilities: Array<{
                __typename?: "Schedule";
                createdAt?: any | null;
                dayOfWeek: DaysOfWeek;
                deletedAt?: any | null;
                doctorId?: number | null;
                endTime: string;
                id: string;
                startTime: string;
                updatedAt?: any | null;
              }>;
              doctorType: {
                __typename?: "DoctorType";
                id: string;
                name?: string | null;
                code?: string | null;
              };
            }>;
          };
        }>;
      };
    }>;
  };
};

export const LoginDocument = `
    mutation Login($identifier: String!, $password: String!) {
  login(identifier: $identifier, password: $password) {
    accessToken
    expiresIn
    passwordResetRequired
  }
}
    `;
export const useLoginMutation = <TError = unknown, TContext = unknown>(
  client: GraphQLClient,
  options?: UseMutationOptions<
    LoginMutation,
    TError,
    LoginMutationVariables,
    TContext
  >,
  headers?: RequestInit["headers"]
) =>
  useMutation<LoginMutation, TError, LoginMutationVariables, TContext>(
    ["Login"],
    (variables?: LoginMutationVariables) =>
      fetcher<LoginMutation, LoginMutationVariables>(
        client,
        LoginDocument,
        variables,
        headers
      )(),
    options
  );
export const DoctorsDocument = `
    query Doctors($filter: DoctorFilter!) {
  doctors(filter: $filter) {
    bio
    availabilities {
      createdAt
      dayOfWeek
      deletedAt
      doctorId
      endTime
      id
      startTime
      updatedAt
    }
    doctorType {
      id
      name
      code
    }
    price
    ratings
    id
    location
    updatedAt
  }
}
    `;
export const useDoctorsQuery = <TData = DoctorsQuery, TError = unknown>(
  client: GraphQLClient,
  variables: DoctorsQueryVariables,
  options?: UseQueryOptions<DoctorsQuery, TError, TData>,
  headers?: RequestInit["headers"]
) =>
  useQuery<DoctorsQuery, TError, TData>(
    ["Doctors", variables],
    fetcher<DoctorsQuery, DoctorsQueryVariables>(
      client,
      DoctorsDocument,
      variables,
      headers
    ),
    options
  );
export const HealthProvidersDocument = `
    query HealthProviders($paging: CursorPaging!, $filter: HealthProviderFilter!) {
  healthProviders(paging: $paging, filter: $filter) {
    edges {
      cursor
      node {
        id
        district
        description
        name
        region
        type
        location {
          latitude
          longitude
        }
        doctors {
          doctorType {
            id
            name
          }
          price
          id
          ratings
          location
          userProfile {
            id
            lastName
            middleName
            phoneNumber
            email
            gender
            firstName
          }
          bio
        }
        departments {
          code
          id
          name
          updatedAt
          doctors {
            nodes {
              bio
              availabilities {
                createdAt
                dayOfWeek
                deletedAt
                doctorId
                endTime
                id
                startTime
                updatedAt
              }
              doctorType {
                id
                name
                code
              }
              price
              ratings
              id
              location
              updatedAt
            }
          }
        }
      }
    }
    totalCount
  }
}
    `;
export const useHealthProvidersQuery = <
  TData = HealthProvidersQuery,
  TError = unknown
>(
  client: GraphQLClient,
  variables: HealthProvidersQueryVariables,
  options?: UseQueryOptions<HealthProvidersQuery, TError, TData>,
  headers?: RequestInit["headers"]
) =>
  useQuery<HealthProvidersQuery, TError, TData>(
    ["HealthProviders", variables],
    fetcher<HealthProvidersQuery, HealthProvidersQueryVariables>(
      client,
      HealthProvidersDocument,
      variables,
      headers
    ),
    options
  );
