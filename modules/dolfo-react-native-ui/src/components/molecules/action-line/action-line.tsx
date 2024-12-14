import React from 'react';
import {
  ActionLineContainer,
  ActionLineContent,
  ActionLineDescription,
  ActionLineCaption,
  ActionLineTitle,
} from './action-line.styles';

export type ActionLineProps = {
  overline?: string;
  title: string;
  description?: string;
};

export function ActionLine(props: ActionLineProps) {
  return (
    <ActionLineContainer>
      <ActionLineContent>
        <ActionLineCaption>{props.overline}</ActionLineCaption>
        <ActionLineTitle>{props.title}</ActionLineTitle>
        {props.description && (
          <ActionLineDescription>{props.description}</ActionLineDescription>
        )}
      </ActionLineContent>
    </ActionLineContainer>
  );
}
