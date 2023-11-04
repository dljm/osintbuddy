import { emptyApi as api } from "./baseApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCasdoorConfig: build.query<
      GetCasdoorConfigApiResponse,
      GetCasdoorConfigApiArg
    >({
      query: () => ({ url: `/api/v1/config/casdoor` }),
    }),
    postSignin: build.mutation<PostSigninApiResponse, PostSigninApiArg>({
      query: (queryArg) => ({
        url: `/api/v1/auth/sign-in`,
        method: "POST",
        params: { code: queryArg.code },
      }),
    }),
    postSignout: build.mutation<PostSignoutApiResponse, PostSignoutApiArg>({
      query: () => ({ url: `/api/v1/auth/sign-out`, method: "POST" }),
    }),
    getAccount: build.query<GetAccountApiResponse, GetAccountApiArg>({
      query: () => ({ url: `/api/v1/account/` }),
    }),
    getGraph: build.query<GetGraphApiResponse, GetGraphApiArg>({
      query: (queryArg) => ({ url: `/api/v1/graphs/${queryArg.graphId}` }),
    }),
    updateFavoriteGraphUuid: build.mutation<
      UpdateFavoriteGraphUuidApiResponse,
      UpdateFavoriteGraphUuidApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/graphs/${queryArg.graphId}/favorite`,
        method: "PATCH",
        params: { is_favorite: queryArg.isFavorite },
      }),
    }),
    getGraphs: build.query<GetGraphsApiResponse, GetGraphsApiArg>({
      query: (queryArg) => ({
        url: `/api/v1/graphs`,
        params: {
          skip: queryArg.skip,
          limit: queryArg.limit,
          is_favorite: queryArg.isFavorite,
        },
      }),
    }),
    createGraph: build.mutation<CreateGraphApiResponse, CreateGraphApiArg>({
      query: (queryArg) => ({
        url: `/api/v1/graphs`,
        method: "POST",
        body: queryArg.graphCreate,
      }),
    }),
    deleteGraph: build.mutation<DeleteGraphApiResponse, DeleteGraphApiArg>({
      query: (queryArg) => ({
        url: `/api/v1/graphs`,
        method: "DELETE",
        params: { uuid: queryArg.uuid },
      }),
    }),
    getFavoriteGraphs: build.query<
      GetFavoriteGraphsApiResponse,
      GetFavoriteGraphsApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/graphs/favorites`,
        params: { skip: queryArg.skip, limit: queryArg.limit },
      }),
    }),
    getGraphStats: build.query<GetGraphStatsApiResponse, GetGraphStatsApiArg>({
      query: (queryArg) => ({
        url: `/api/v1/graphs/${queryArg.graphId}/stats`,
      }),
    }),
    getEntity: build.query<GetEntityApiResponse, GetEntityApiArg>({
      query: (queryArg) => ({ url: `/api/v1/entities/${queryArg.entityUuid}` }),
    }),
    getEntities: build.query<GetEntitiesApiResponse, GetEntitiesApiArg>({
      query: (queryArg) => ({
        url: `/api/v1/entities`,
        params: {
          skip: queryArg.skip,
          limit: queryArg.limit,
          is_favorite: queryArg.isFavorite,
        },
      }),
    }),
    createEntity: build.mutation<CreateEntityApiResponse, CreateEntityApiArg>({
      query: (queryArg) => ({
        url: `/api/v1/entities`,
        method: "POST",
        body: queryArg.postEntityCreate,
      }),
    }),
    getEntityTransforms: build.query<
      GetEntityTransformsApiResponse,
      GetEntityTransformsApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/entities/transforms`,
        params: { label: queryArg.label },
      }),
    }),
    updateEntityByUuid: build.mutation<
      UpdateEntityByUuidApiResponse,
      UpdateEntityByUuidApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/entities/${queryArg.entityId}`,
        method: "PUT",
        body: queryArg.entityBase,
      }),
    }),
    deleteEntity: build.mutation<DeleteEntityApiResponse, DeleteEntityApiArg>({
      query: (queryArg) => ({
        url: `/api/v1/entities/${queryArg.entityId}`,
        method: "DELETE",
      }),
    }),
    updateFavoriteEntityUuid: build.mutation<
      UpdateFavoriteEntityUuidApiResponse,
      UpdateFavoriteEntityUuidApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/entities/${queryArg.entityId}/favorite`,
        method: "PUT",
        params: { is_favorite: queryArg.isFavorite },
      }),
    }),
    refreshPlugins: build.query<
      RefreshPluginsApiResponse,
      RefreshPluginsApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/nodes/refresh`,
        params: { uuid: queryArg.uuid },
      }),
    }),
    createGraphEntity: build.mutation<
      CreateGraphEntityApiResponse,
      CreateGraphEntityApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/nodes/`,
        method: "POST",
        body: queryArg.createNode,
      }),
    }),
    createScanMachine: build.mutation<
      CreateScanMachineApiResponse,
      CreateScanMachineApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/scans/machines`,
        method: "POST",
        body: queryArg.scanMachineCreate,
      }),
    }),
    getScanMachines: build.query<
      GetScanMachinesApiResponse,
      GetScanMachinesApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/scans/machines`,
        params: { skip: queryArg.skip, limit: queryArg.limit },
      }),
    }),
    deleteScanProject: build.mutation<
      DeleteScanProjectApiResponse,
      DeleteScanProjectApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/scans`,
        method: "DELETE",
        params: { sid: queryArg.sid },
      }),
    }),
    getStatus: build.query<GetStatusApiResponse, GetStatusApiArg>({
      query: () => ({ url: `/status` }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as api };
export type GetCasdoorConfigApiResponse =
  /** status 200 Successful Response */ any;
export type GetCasdoorConfigApiArg = void;
export type PostSigninApiResponse = /** status 200 Successful Response */
  | Status
  | HttpError;
export type PostSigninApiArg = {
  code: string;
};
export type PostSignoutApiResponse =
  /** status 200 Successful Response */ Status;
export type PostSignoutApiArg = void;
export type GetAccountApiResponse = /** status 200 Successful Response */
  | User
  | HttpError;
export type GetAccountApiArg = void;
export type GetGraphApiResponse = /** status 200 Successful Response */ Graph;
export type GetGraphApiArg = {
  graphId: string;
};
export type UpdateFavoriteGraphUuidApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateFavoriteGraphUuidApiArg = {
  graphId: string;
  isFavorite?: boolean;
};
export type GetGraphsApiResponse =
  /** status 200 Successful Response */ GraphsList;
export type GetGraphsApiArg = {
  skip?: number;
  limit?: number;
  isFavorite?: boolean;
};
export type CreateGraphApiResponse =
  /** status 200 Successful Response */ Graph;
export type CreateGraphApiArg = {
  graphCreate: GraphCreate;
};
export type DeleteGraphApiResponse = /** status 200 Successful Response */ any;
export type DeleteGraphApiArg = {
  uuid: string;
};
export type GetFavoriteGraphsApiResponse =
  /** status 200 Successful Response */ GraphsList;
export type GetFavoriteGraphsApiArg = {
  skip?: number;
  limit?: number;
};
export type GetGraphStatsApiResponse =
  /** status 200 Successful Response */ any;
export type GetGraphStatsApiArg = {
  graphId: string;
};
export type GetEntityApiResponse = /** status 200 Successful Response */ Entity;
export type GetEntityApiArg = {
  entityUuid: string;
};
export type GetEntitiesApiResponse = /** status 200 Successful Response */ any;
export type GetEntitiesApiArg = {
  skip?: number;
  limit?: number;
  isFavorite?: boolean;
};
export type CreateEntityApiResponse = /** status 200 Successful Response */ any;
export type CreateEntityApiArg = {
  postEntityCreate: PostEntityCreate;
};
export type GetEntityTransformsApiResponse =
  /** status 200 Successful Response */ any;
export type GetEntityTransformsApiArg = {
  label: string;
};
export type UpdateEntityByUuidApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateEntityByUuidApiArg = {
  entityId: string;
  entityBase: EntityBase;
};
export type DeleteEntityApiResponse = /** status 200 Successful Response */ any;
export type DeleteEntityApiArg = {
  entityId: string;
};
export type UpdateFavoriteEntityUuidApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateFavoriteEntityUuidApiArg = {
  entityId: string;
  isFavorite?: boolean;
};
export type RefreshPluginsApiResponse =
  /** status 200 Successful Response */ any;
export type RefreshPluginsApiArg = {
  uuid: string;
};
export type CreateGraphEntityApiResponse =
  /** status 200 Successful Response */ any;
export type CreateGraphEntityApiArg = {
  createNode: CreateNode;
};
export type CreateScanMachineApiResponse =
  /** status 200 Successful Response */ any;
export type CreateScanMachineApiArg = {
  scanMachineCreate: ScanMachineCreate;
};
export type GetScanMachinesApiResponse =
  /** status 200 Successful Response */ any;
export type GetScanMachinesApiArg = {
  skip?: number;
  limit?: number;
};
export type DeleteScanProjectApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteScanProjectApiArg = {
  sid: number;
};
export type GetStatusApiResponse = /** status 200 Successful Response */ any;
export type GetStatusApiArg = void;
export type Status = {
  status: string;
};
export type HttpError = {
  detail: string;
};
export type ValidationError = {
  loc: (string | number)[];
  msg: string;
  type: string;
};
export type HttpValidationError = {
  detail?: ValidationError[];
};
export type User = {
  name: string;
  username?: string | null;
  email?: string | null;
  avatar?: string | null;
  phone?: string | null;
  display_name?: string | null;
  first_name?: string | null;
  last_name?: string | null;
  is_admin: boolean;
  created_time: string;
  updated_time: string;
  uuid: string;
};
export type Graph = {
  name: string;
  description: string | null;
  is_favorite?: boolean;
  uuid: string;
  updated: string;
  created: string;
  last_seen: string;
};
export type GraphsList = {
  graphs: Graph[];
  count: number;
};
export type GraphCreate = {
  name: string;
  description: string | null;
  is_favorite?: boolean;
};
export type Entity = {
  label?: string | null;
  author?: string | null;
  description?: string | null;
  source?: string | null;
  is_favorite?: boolean | null;
  uuid?: string | null;
  last_edited: string | null;
  updated: string | null;
  created: string | null;
};
export type PostEntityCreate = {
  label: string;
  author: string;
  description: string;
};
export type EntityBase = {
  label?: string | null;
  author?: string | null;
  description?: string | null;
  source?: string | null;
  is_favorite?: boolean | null;
};
export type XyPosition = {
  x: number;
  y: number;
};
export type CreateNode = {
  label: string;
  position: XyPosition;
  uuid: string;
};
export type ScanMachineCreate = {
  name: string;
  description: string;
};
export const {
  useGetCasdoorConfigQuery,
  usePostSigninMutation,
  usePostSignoutMutation,
  useGetAccountQuery,
  useGetGraphQuery,
  useUpdateFavoriteGraphUuidMutation,
  useGetGraphsQuery,
  useCreateGraphMutation,
  useDeleteGraphMutation,
  useGetFavoriteGraphsQuery,
  useGetGraphStatsQuery,
  useGetEntityQuery,
  useGetEntitiesQuery,
  useCreateEntityMutation,
  useGetEntityTransformsQuery,
  useUpdateEntityByUuidMutation,
  useDeleteEntityMutation,
  useUpdateFavoriteEntityUuidMutation,
  useRefreshPluginsQuery,
  useCreateGraphEntityMutation,
  useCreateScanMachineMutation,
  useGetScanMachinesQuery,
  useDeleteScanProjectMutation,
  useGetStatusQuery,
} = injectedRtkApi;
