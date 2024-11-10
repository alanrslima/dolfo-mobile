import {
  MutationFunction,
  UseMutationOptions,
  UseMutationResult,
  useMutation as useMutationReactQuery,
} from '@tanstack/react-query';

export function useMutation<
  TData = unknown,
  TError = unknown,
  TVariables = void,
  TContext = unknown,
>(
  mutationFn: MutationFunction<TData, TVariables>,
  options?: Omit<
    UseMutationOptions<TData, TError, TVariables, TContext>,
    'mutationFn'
  >,
): UseMutationResult<TData, TError, TVariables, TContext> {
  return useMutationReactQuery({mutationFn, ...options});
}
