import {
  UseQueryOptions,
  QueryKey,
  UseInfiniteQueryOptions,
} from "@tanstack/react-query";

export type UseFetchProps<P> = {
  key: QueryKey;
  url: string;
  params?: P;
  config?: Omit<
    UseQueryOptions<any, any, any, any>,
    "queryKey" | "queryFn" | "initialData"
  > & {
    initialData?: () => undefined;
  };
  context?: any;
  processor?: (data: any, params?: any) => any;
};

export type UseInfiniteFetchProps<P> = {
  key: QueryKey;
  url: string;
  params?: P;
  config?: Omit<
    UseInfiniteQueryOptions<any, any, any, any>,
    "queryKey" | "queryFn" | "initialData"
  > & {
    initialData?: () => undefined;
  };
  context?: any;
  processor?: (data: any, params?: any) => any;
};
