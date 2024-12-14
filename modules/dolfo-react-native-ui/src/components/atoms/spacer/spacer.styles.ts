import styled from 'styled-components/native';
import {SpaceProps} from '../../../types';

export const SpacerContainer = styled.View<{$h: keyof SpaceProps}>`
  height: ${({theme, $h}) => theme.spaces[$h]};
`;
