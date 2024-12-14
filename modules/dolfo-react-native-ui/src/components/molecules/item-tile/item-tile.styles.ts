import styled from 'styled-components/native';
import {Typography} from '../../atoms';
import {CarouselImages} from '../carousel-images/carousel-images';

export const ItemTileContainer = styled.TouchableOpacity`
  border-radius: ${({theme}) => theme.radii.md};
  overflow: hidden;
  gap: ${({theme}) => theme.spaces[5]};
`;

export const ItemTileCarousel = styled(CarouselImages)``;

export const ItemTileContent = styled.View``;

export const ItemTileTitle = styled(Typography).attrs({
  type: 'body-large-bold',
})``;

export const ItemTileParagraph = styled(Typography).attrs({numberOfLines: 2})``;