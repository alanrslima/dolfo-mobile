import { ReactNode } from "react";
import { Title } from "../texts";
import { SectionHeaderContainer } from "./section-header.styles";

export type SectionHeaderProps = {
  title: string;
  rightComponent?: ReactNode;
};

export function SectionHeader(props: SectionHeaderProps) {
  return (
    <SectionHeaderContainer>
      <Title size="xl">{props.title}</Title>
      {props.rightComponent}
    </SectionHeaderContainer>
  );
}
