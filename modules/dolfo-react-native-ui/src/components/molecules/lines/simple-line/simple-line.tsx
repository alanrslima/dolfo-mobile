import React from 'react';
import {SimpleLineLeadingContainer} from './simple-line.styles';
import {Avatar, AvatarProps, Icon, IconNames} from '../../../atoms';
import {BaseLine} from '../base-line/base-line';

export type SimpleLineProps = {
  overline?: string;
  title: string;
  description?: string;
  leadingIcon?: IconNames;
  avatar?: AvatarProps;
};

const LeftComponent = (props: SimpleLineProps) => {
  if (props.avatar) {
    return <Avatar {...props.avatar} />;
  }
  if (props.leadingIcon) {
    return (
      <SimpleLineLeadingContainer>
        <Icon name={props.leadingIcon} />
      </SimpleLineLeadingContainer>
    );
  }
  return <></>;
};

export function SimpleLine(props: SimpleLineProps) {
  return (
    <BaseLine
      overline={props.overline}
      title={props.title}
      description={props.description}
      leftComponent={<LeftComponent {...props} />}
    />
  );
}
