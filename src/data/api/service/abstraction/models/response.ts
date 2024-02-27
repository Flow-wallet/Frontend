class ApiResponse<T = any> {
  constructor(readonly data: T, readonly status: number) {}
}

export { ApiResponse };
