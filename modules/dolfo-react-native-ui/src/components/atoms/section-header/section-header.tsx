import React from 'react';
import {
  SectionHeaderContainer,
  SectionHeaderSubtitle,
  SectionHeaderTitle,
} from './section-header.styles';

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
};

export function SectionHeader(props: SectionHeaderProps) {
  return (
    <SectionHeaderContainer>
      <SectionHeaderTitle>{props.title}</SectionHeaderTitle>
      <SectionHeaderSubtitle>{props.subtitle}</SectionHeaderSubtitle>
    </SectionHeaderContainer>
  );
}
