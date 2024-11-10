import { QueryClient } from "@tanstack/react-query";

export const ONE_SECOND_IN_MILLISECONDS = 1000;
export const ONE_MINUTE_IN_MILLISECONDS = ONE_SECOND_IN_MILLISECONDS * 60;

export const QUERY_RETRY_ATTEMPTS = 3;
export const DEFAULT_STALE_TIME = ONE_MINUTE_IN_MILLISECONDS;

export const commonReadConfig = {
  refetchInterval: false,
  refetchIntervalInBackground: false,
  refetchOnWindowFocus: false,
  refetchOnMount: false,
  staleTime: ONE_SECOND_IN_MILLISECONDS,
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
      retry: QUERY_RETRY_ATTEMPTS,
      staleTime: DEFAULT_STALE_TIME,
    },
  },
});
