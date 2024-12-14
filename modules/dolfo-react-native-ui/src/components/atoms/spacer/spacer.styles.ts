import styled from 'styled-components/native';

export const SpacerContainer = styled.View<{$h?: string; $w?: string}>`
  height: ${({$h}) => $h || 'auto'};
  width: ${({$w}) => $w || 'auto'};
`;
