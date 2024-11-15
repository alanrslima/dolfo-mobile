import { Asset } from "@/types/asset";
import * as ImagePicker from "expo-image-picker";

export function useImagePicker() {
  const launchImageLibraryAsync = async (): Promise<Asset[] | undefined> => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images", "videos"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      return result.assets;
    }
  };

  return { launchImageLibraryAsync };
}
