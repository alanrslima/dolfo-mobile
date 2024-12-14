import React from 'react';
import {useState} from 'react';
import {
  CarouselImagesContainer,
  CarouselImagesItem,
  CarouselImagesPage,
} from './carousel-images.styles';
import {ImageSourcePropType} from 'react-native';

export type CarouselProps = {
  height?: number;
  images: ImageSourcePropType[];
};

export function CarouselImages(props: CarouselProps) {
  const [containerWidth, setContainerWidth] = useState(0);

  return (
    <CarouselImagesContainer
      showsHorizontalScrollIndicator={false}
      onLayout={evt => setContainerWidth(evt.nativeEvent.layout.width)}
      pagingEnabled
      horizontal
      data={props.images}
      keyExtractor={(item, i) => `${item}${i}`}
      renderItem={({item}) => (
        <CarouselImagesPage $height={props.height} $width={containerWidth}>
          <CarouselImagesItem source={item} />
        </CarouselImagesPage>
      )}
    />
  );
}
