import React from 'react';
import {SpacerContainer} from './spacer.styles';

export type SpacerProps = {
  h?: string;
  w?: string;
};

export function Spacer(props: SpacerProps) {
  return <SpacerContainer $w={props.w} $h={props.h} />;
}
