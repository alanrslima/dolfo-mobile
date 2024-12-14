import styled from 'styled-components/native';
import {Typography} from '../typography/typography';

export const SectionHeaderContainer = styled.View``;

export const SectionHeaderTitle = styled(Typography).attrs({
  type: 'title-screen',
})``;

export const SectionHeaderSubtitle = styled(Typography).attrs({
  type: 'body-large',
  color: 'onBackgroundSecondary',
})``;
