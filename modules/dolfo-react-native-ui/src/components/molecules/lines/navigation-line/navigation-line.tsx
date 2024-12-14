import React from 'react';
import {
  NavigationLineLeadingContainer,
  NavigationLineTouchable,
} from './navigation-line.styles';
import {Avatar, AvatarProps, Icon, IconNames} from '../../../atoms';
import {BaseLine} from '../base-line/base-line';

export type NavigationLineProps = {
  overline?: string;
  title: string;
  description?: string;
  leadingIcon?: IconNames;
  avatar?: AvatarProps;
};

const LeftComponent = (props: NavigationLineProps) => {
  if (props.avatar) {
    return <Avatar {...props.avatar} />;
  }
  if (props.leadingIcon) {
    return (
      <NavigationLineLeadingContainer>
        <Icon name={props.leadingIcon} />
      </NavigationLineLeadingContainer>
    );
  }
  return <></>;
};

export function NavigationLine(props: NavigationLineProps) {
  return (
    <NavigationLineTouchable>
      <BaseLine
        title={props.title}
        overline={props.overline}
        description={props.description}
        leftComponent={<LeftComponent {...props} />}
        rightComponent={
          <Icon color="onBackgroundSecondary" name="ChevronRight" />
        }
      />
    </NavigationLineTouchable>
  );
}
