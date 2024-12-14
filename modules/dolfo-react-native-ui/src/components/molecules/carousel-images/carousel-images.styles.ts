import {FlatList, ImageSourcePropType} from 'react-native';
import styled from 'styled-components/native';

export const CarouselImagesContainer = styled(FlatList<ImageSourcePropType>)``;

export const CarouselImagesPage = styled.View<{
  $width: number;
  $height?: number;
}>`
  width: ${({$width}) => $width}px;
  height: ${({$height}) => $height || 200}px;
  background-color: red;
`;

export const CarouselImagesItem = styled.Image`
  flex: 1;
`;
