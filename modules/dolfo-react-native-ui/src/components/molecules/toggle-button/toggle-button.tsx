import React from 'react';
import {Icon, IconNames} from '../../atoms';
import {
  ToogleButtonContainer,
  ToogleButtonContent,
  ToogleButtonDescription,
  ToogleButtonLeading,
  ToogleButtonTitle,
} from './toggle-button.styles';
import {TouchableOpacityProps} from 'react-native';

export type ToogleButtonProps = TouchableOpacityProps & {
  leadingIcon?: IconNames;
  title: string;
  description?: string;
  selected?: boolean;
};

export function ToogleButton({
  title,
  leadingIcon,
  description,
  selected,
  ...rest
}: ToogleButtonProps) {
  return (
    <ToogleButtonContainer {...rest} $selected={selected}>
      {leadingIcon && (
        <ToogleButtonLeading>
          <Icon name={leadingIcon} />
        </ToogleButtonLeading>
      )}
      <ToogleButtonContent>
        <ToogleButtonTitle>{title}</ToogleButtonTitle>
        <ToogleButtonDescription>{description}</ToogleButtonDescription>
      </ToogleButtonContent>
    </ToogleButtonContainer>
  );
}
