import {httpClient} from './http-client';

export type FetcherProps<P> = {
  url: string;
  params?: P;
  context?: any;
  processor?: (data: any, params?: any) => any;
};

export const fetcher = async <P>({
  url,
  params,
  context,
  processor,
}: FetcherProps<P>) => {
  console.log(context);
  const {data} = await httpClient.get(url, params);

  if (processor) {
    return processor(data, params);
  }
  return data;
};
