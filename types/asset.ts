import { ImagePickerAsset } from "expo-image-picker";

export type Asset = {
  uri: string;
  assetId?: string | null;
  width: number;
  height: number;
  type?: "image" | "video" | "livePhoto" | "pairedVideo";
  fileName?: string | null;
  fileSize?: number;
  exif?: Record<string, any> | null;
  base64?: string | null;
  duration?: number | null;
  mimeType?: string;
  pairedVideoAsset?: ImagePickerAsset | null;
  file?: File;
};
