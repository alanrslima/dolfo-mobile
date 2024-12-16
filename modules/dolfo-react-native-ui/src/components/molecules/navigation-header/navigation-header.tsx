import React from 'react';
import {
  NavigationHeaderContainer,
  NavigationHeaderContent,
} from './navigation-header.styles';
import {useDevice} from '../../../hooks';
import {IconButton} from '../../atoms';

export function NavigationHeader() {
  const {statusBarHeight} = useDevice();

  return (
    <NavigationHeaderContainer $statusBarHeight={statusBarHeight}>
      <NavigationHeaderContent>
        <IconButton icon="ChevronLeft" />
      </NavigationHeaderContent>
    </NavigationHeaderContainer>
  );
}
