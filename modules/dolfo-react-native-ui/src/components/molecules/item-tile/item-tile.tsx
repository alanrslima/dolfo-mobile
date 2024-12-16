import React from 'react';
import {
  ItemTileContainer,
  ItemTileContent,
  ItemTileParagraph,
  ItemTileTitle,
} from './item-tile.styles';
import {CarouselImages} from '../carousel-images/carousel-images';
import {TouchableWithoutFeedback} from 'react-native';

export type ItemTileProps = {
  title: string;
  paragraph?: string;
  onPress?: () => void;
};

export function ItemTile(props: ItemTileProps) {
  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <ItemTileContainer>
        <CarouselImages
          images={[
            {
              uri: 'https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
            {
              uri: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
            {
              uri: 'https://images.pexels.com/photos/850602/pexels-photo-850602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
          ]}
        />
        <ItemTileContent>
          <ItemTileTitle>{props.title}</ItemTileTitle>
          <ItemTileParagraph>{props.paragraph}</ItemTileParagraph>
        </ItemTileContent>
      </ItemTileContainer>
    </TouchableWithoutFeedback>
  );
}
