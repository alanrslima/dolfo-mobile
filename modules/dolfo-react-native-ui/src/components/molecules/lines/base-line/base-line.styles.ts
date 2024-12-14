import styled from 'styled-components/native';
import {Typography} from '../../../atoms';

export const BaseLineContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: ${({theme}) => theme.spaces[4]};
`;

export const BaseLineContent = styled.View`
  flex: 1;
`;

export const BaseLineCaption = styled(Typography).attrs({
  type: 'caption',
})``;

export const BaseLineTitle = styled(Typography).attrs({
  type: 'body-large-bold',
})``;

export const BaseLineDescription = styled(Typography).attrs({
  type: 'body-default',
  color: 'onBackgroundSecondary',
})``;
