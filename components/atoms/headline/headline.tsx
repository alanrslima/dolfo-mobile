import { ReactNode } from "react";
import {
  HeadlineContainer,
  HeadlineContent,
  HeadlineSubTitle,
  HeadlineTitle,
} from "./headline.styles";

type HeadlineProps = {
  title: string;
  subTitle?: string;
  rightComponent?: () => ReactNode;
};

export function Headline(props: HeadlineProps) {
  return (
    <HeadlineContainer>
      <HeadlineContent>
        <HeadlineTitle weight="semiBold" size="3xl">
          {props.title}
        </HeadlineTitle>
        {props.subTitle && (
          <HeadlineSubTitle weight="regular">{props.subTitle}</HeadlineSubTitle>
        )}
      </HeadlineContent>
      {props.rightComponent && props.rightComponent()}
    </HeadlineContainer>
  );
}
