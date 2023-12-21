export type APIResponse<T = any> = {
  info: {
    seed: string;
    results: number;
    page: number;
    version: string;
  };
  results: T;
};
