import React from 'react';
import {ActionLineLeadingContainer} from './action-line.styles';
import {Button, ButtonProps, Icon, IconNames} from '../../../atoms';
import {BaseLine} from '../base-line/base-line';

export type ActionLineProps = {
  overline?: string;
  title: string;
  description?: string;
  leadingIcon?: IconNames;
  actionButton: ButtonProps;
};

const LeftComponent = (props: ActionLineProps) => {
  if (props.leadingIcon) {
    return (
      <ActionLineLeadingContainer>
        <Icon name={props.leadingIcon} />
      </ActionLineLeadingContainer>
    );
  }
  return <></>;
};

export function ActionLine(props: ActionLineProps) {
  return (
    <BaseLine
      title={props.title}
      overline={props.overline}
      description={props.description}
      leftComponent={<LeftComponent {...props} />}
      rightComponent={<Button {...props.actionButton} />}
    />
  );
}
