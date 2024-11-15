import { Badge, Paragraph, Surface, Title } from "@/components/atoms";
import { CardContent, CardImage } from "./card.styles";
import { ImageSourcePropType } from "react-native";

type CardProps = {
  title: string;
  paragraph: string;
  imageSource?: ImageSourcePropType;
};

export function Card(props: CardProps) {
  return (
    <Surface>
      <CardImage source={props.imageSource} />
      <CardContent>
        <Title>{props.title}</Title>
        <Paragraph numberOfLines={2}>{props.paragraph}</Paragraph>
        <Badge />
      </CardContent>
    </Surface>
  );
}
