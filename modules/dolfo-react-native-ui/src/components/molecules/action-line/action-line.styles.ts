import styled from 'styled-components/native';
import {Typography} from '../../atoms';

export const ActionLineContainer = styled.View`
  flex-direction: row;
`;

export const ActionLineContent = styled.View``;

export const ActionLineCaption = styled(Typography).attrs({
  type: 'caption',
})``;

export const ActionLineTitle = styled(Typography).attrs({
  type: 'body-large-bold',
})``;

export const ActionLineDescription = styled(Typography).attrs({
  type: 'body-default',
  color: 'onBackgroundSecondary',
})``;
