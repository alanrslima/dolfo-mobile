import { IconNames, SelectSquare } from "@/components/atoms";
import { ListPickerContainer } from "./list-picker.styles";
import { FlatListProps } from "react-native";

export type ListPickerOption = {
  value: string;
  label: string;
  icon: IconNames;
};

export type ListPickerProps = Omit<
  FlatListProps<ListPickerOption>,
  "renderItem"
> & {
  data: ListPickerOption[];
  value: string;
  onChangeValue: (value: string) => void;
};

export function ListPicker({ value, onChangeValue, ...rest }: ListPickerProps) {
  return (
    <ListPickerContainer
      keyExtractor={(item, index) => `${item}${index}`}
      {...rest}
      renderItem={({ item }) => (
        <SelectSquare
          selected={item.value === value}
          text={item.label}
          onPress={() => onChangeValue(item.value)}
          icon={item.icon}
        />
      )}
    />
  );
}
