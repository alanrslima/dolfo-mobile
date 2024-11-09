import { IconNames, SelectButton } from "@/components/atoms";
import {
  SegmentedButtonsContainer,
  SegmentedButtonsItem,
  SegmentedButtonsItemText,
} from "./segmented-buttons.styles";

export type SegmentedButtonsProps = {
  value: string;
  onValueChange: (value: string) => void;
  buttons: { value: string; label: string; icon?: IconNames }[];
};

export function SegmentedButtons(props: SegmentedButtonsProps) {
  return (
    <SegmentedButtonsContainer>
      {props.buttons.map((button) => (
        <SelectButton
          key={button.value}
          selected={button.value === props.value}
          icon={button.icon}
          text={button.label}
        />
      ))}
    </SegmentedButtonsContainer>
  );
}
