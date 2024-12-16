import React from 'react';
import {Icon, IconNames} from '../icon/icon';
import {IconButtonContainer} from './icon-button.styles';
import {TouchableOpacityProps} from 'react-native';

export type IconButtonSizes = 'sm' | 'md' | 'lg';

export type IconButtonProps = TouchableOpacityProps & {
  icon: IconNames;
  size?: IconButtonSizes;
};

export function IconButton({icon, size = 'md', ...rest}: IconButtonProps) {
  return (
    <IconButtonContainer $size={size} {...rest}>
      <Icon name={icon} size={20} />
    </IconButtonContainer>
  );
}
