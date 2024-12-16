import styled from 'styled-components/native';
import {Typography} from '../../atoms';

export const ToogleButtonContainer = styled.TouchableOpacity<{
  $selected?: boolean;
}>`
  flex-direction: row;
  padding: ${({theme}) => theme.spaces[5]};
  border-width: 1px;
  gap: ${({theme}) => theme.spaces[4]};
  border-color: ${({theme, $selected}) =>
    $selected ? theme.colors.interactivePrimary : theme.colors.borderNeutral};
  border-radius: ${({theme}) => theme.radii.md};
  background-color: ${({theme, $selected}) =>
    $selected
      ? theme.colors.interactiveSecondary
      : theme.colors.backgroundScreen};
`;

export const ToogleButtonLeading = styled.View`
  height: 54px;
  width: 54px;
  background-color: ${({theme}) => theme.colors.interactiveSecondary};
  border-radius: ${({theme}) => theme.radii.round};
  justify-content: center;
  align-items: center;
`;

export const ToogleButtonContent = styled.View`
  flex: 1;
`;

export const ToogleButtonTitle = styled(Typography).attrs({
  type: 'body-large-bold',
})``;

export const ToogleButtonDescription = styled(Typography).attrs({
  color: 'onBackgroundSecondary',
})``;
