import { FlatList } from "react-native";
import styled from "styled-components/native";
import { ListPickerOption } from "./list-picker";

export const ListPickerContainer = styled(FlatList<ListPickerOption>).attrs({
  numColumns: 2,
  contentContainerStyle: { gap: 12, paddingVertical: 16 },
  columnWrapperStyle: { gap: 12, paddingHorizontal: 24 },
})``;
