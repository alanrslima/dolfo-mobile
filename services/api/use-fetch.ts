import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { UseFetchProps } from "@/types/fetch-props";
import { fetcher } from "./fetcher";

// export type UseFetchHooks<P = any> = Omit<UseFetchProps<P>, 'key' | 'url'>;
export type UseFetchHooks<P = any> = Omit<UseFetchProps<P>, "key" | "url">;

export const useFetch = <T, P = any>({
  key,
  url,
  params,
  config,
  context,
  processor,
}: UseFetchProps<P>): UseQueryResult<T, Error> => {
  return useQuery({
    queryKey: key,
    queryFn: () => fetcher({ url, params, context, processor }),
    ...config,
    // staleTime: Infinity,
    // cacheTime: Infinity,
  });
};
