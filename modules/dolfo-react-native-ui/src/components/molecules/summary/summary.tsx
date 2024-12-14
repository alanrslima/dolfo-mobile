import React from 'react';
import {Icon, IconNames} from '../../atoms';
import {
  SummaryContainer,
  SummaryContent,
  SummaryParagraph,
  SummaryTitle,
} from './summary.styles';

export type SummaryProps = {
  title: string;
  paragraph?: string;
  icon: IconNames;
};

export function Summary(props: SummaryProps) {
  return (
    <SummaryContainer>
      <Icon name={props.icon} />
      <SummaryContent>
        <SummaryTitle>{props.title}</SummaryTitle>
        {props.paragraph && (
          <SummaryParagraph>{props.paragraph}</SummaryParagraph>
        )}
      </SummaryContent>
    </SummaryContainer>
  );
}
