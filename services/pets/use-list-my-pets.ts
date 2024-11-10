import { Pet } from "@/types/pet";
import { PetsKeys as Keys } from "./state-keys";
import { useFetch, UseFetchHooks } from "../api/use-fetch";

type ParamsProps = {};

const processor = (data: Pet[]): Pet[] => {
  return data;
};

export const useListMyPets = (props?: UseFetchHooks<ParamsProps>) => {
  const { context, config, params } = props || {};
  return useFetch<Pet[], ParamsProps>({
    key: Keys.list(),
    url: "agendas",
    params,
    context,
    config,
    processor,
  });
};
