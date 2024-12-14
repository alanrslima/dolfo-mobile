import React, {ReactNode} from 'react';
import {
  BaseLineContainer,
  BaseLineContent,
  BaseLineDescription,
  BaseLineCaption,
  BaseLineTitle,
} from './base-line.styles';

export type BaseLineProps = {
  overline?: string;
  title: string;
  description?: string;
  leftComponent?: ReactNode;
  rightComponent?: ReactNode;
};

export function BaseLine(props: BaseLineProps) {
  return (
    <BaseLineContainer>
      {props.leftComponent}
      <BaseLineContent>
        {props.overline && <BaseLineCaption>{props.overline}</BaseLineCaption>}
        <BaseLineTitle>{props.title}</BaseLineTitle>
        {props.description && (
          <BaseLineDescription>{props.description}</BaseLineDescription>
        )}
      </BaseLineContent>
      {props.rightComponent}
    </BaseLineContainer>
  );
}
