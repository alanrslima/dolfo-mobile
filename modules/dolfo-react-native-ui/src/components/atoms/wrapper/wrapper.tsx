import React, {ReactNode} from 'react';
import {SpaceProps} from '../../../types';
import {WrapperContainer} from './wrapper.styles';

export type WrapperProps = {
  children: ReactNode;
  px?: keyof SpaceProps;
  py?: keyof SpaceProps;
};

export function Wrapper({children, px = 0, py = 0}: WrapperProps) {
  return (
    <WrapperContainer $px={px} $py={py}>
      {children}
    </WrapperContainer>
  );
}
