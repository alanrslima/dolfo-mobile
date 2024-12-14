import styled from 'styled-components/native';
import {SpaceProps} from '../../../types';

export const WrapperContainer = styled.View<{
  $px: keyof SpaceProps;
  $py: keyof SpaceProps;
}>`
  padding: ${({$py, $px, theme}) =>
    `${theme.spaces[$px]} ${theme.spaces[$py]}`};
`;
