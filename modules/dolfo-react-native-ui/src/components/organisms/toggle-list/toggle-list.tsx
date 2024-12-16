import React from 'react';
import {IconNames} from '../../atoms';
import {ToogleButton} from '../../molecules';
import {ToogleListContainer} from './toggle-list.styles';

export type ToogleListProps = {
  options: {
    title: string;
    description?: string;
    value: string;
    leadingIcon?: IconNames;
  }[];
  onChange(value: string): void;
  value: string;
};

export function ToogleList(props: ToogleListProps) {
  return (
    <ToogleListContainer>
      {props.options.map(option => (
        <ToogleButton
          key={option.value}
          onPress={() => props.onChange(option.value)}
          title={option.title}
          description={option.description}
          leadingIcon={option.leadingIcon}
          selected={option.value === props.value}
        />
      ))}
    </ToogleListContainer>
  );
}
