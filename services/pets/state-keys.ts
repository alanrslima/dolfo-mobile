export const PetsKeys = {
  all: ["pets"] as const,
  list: () => [...PetsKeys.all, "list"] as const,
};
