import styled, {css} from 'styled-components/native';
import {IconButtonSizes} from './icon-button';

const containerSizeStyles = (size: IconButtonSizes) =>
  ({
    sm: css`
      width: 36px;
      height: 36px;
    `,
    md: css`
      width: 48px;
      height: 48px;
    `,
    lg: css`
      width: 56px;
      height: 56px;
    `,
  }[size]);

export const IconButtonContainer = styled.TouchableOpacity<{
  $size: IconButtonSizes;
}>`
  background-color: ${({theme}) => theme.colors.backgroundOverlay};
  justify-content: center;
  align-items: center;
  border-radius: ${({theme}) => theme.radii.round};

  ${({$size}) => containerSizeStyles($size)}
`;
