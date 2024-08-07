export enum HttpResponseStatusCode {
  SUCCESS = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
  INTRNAL_SERVER_ERROR = 500,
}

export enum StoreStatus {
  IDLE = 'idle',
  LOADING = 'loading',
  ERROR = 'error',
}
