import React from 'react';
import {
  ItemTileCarousel,
  ItemTileContainer,
  ItemTileContent,
  ItemTileParagraph,
  ItemTileTitle,
} from './item-tile.styles';

export type ItemTileProps = {
  title: string;
  paragraph?: string;
  onPress?: () => void;
};

export function ItemTile(props: ItemTileProps) {
  return (
    <ItemTileContainer onPress={props.onPress}>
      <ItemTileCarousel
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
  );
}
