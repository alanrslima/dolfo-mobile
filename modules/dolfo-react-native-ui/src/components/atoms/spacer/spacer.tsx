import React from 'react';
import {SpacerContainer} from './spacer.styles';
import {SpaceProps} from '../../../types';

export type SpacerProps = {
  h: keyof SpaceProps;
};

export function Spacer(props: SpacerProps) {
  return <SpacerContainer $h={props.h} />;
}
