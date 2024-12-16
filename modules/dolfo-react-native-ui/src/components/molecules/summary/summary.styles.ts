import styled from 'styled-components/native';
import {Typography} from '../../atoms';

export const SummaryContainer = styled.View`
  flex-direction: row;
  gap: ${({theme}) => theme.spaces[4]};
`;

export const SummaryContent = styled.View`
  flex: 1;
`;

export const SummaryTitle = styled(Typography).attrs({
  type: 'body-large-bold',
})``;

export const SummaryParagraph = styled(Typography).attrs({
  type: 'body-default',
  color: 'onBackgroundSecondary',
})``;
