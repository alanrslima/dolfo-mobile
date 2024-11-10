import { useWindowDimensions } from "react-native";
import {
  MultiStepFormContainer,
  MultiStepFormPage,
  MultiStepFormScroll,
} from "./multi-step-form.styles";
import {
  forwardRef,
  ReactNode,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { ScrollView } from "react-native-gesture-handler";
import { ProgressLine } from "@/components/molecules";

export type MultiStepFormProps = {
  steps: { id: string; content: ReactNode }[];
};

export type MultiStepFormHandle = {
  next: () => void;
  previous: () => void;
};

export const MultiStepForm = forwardRef<
  MultiStepFormHandle,
  MultiStepFormProps
>((props, ref) => {
  const { width } = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const scrollRef = useRef<ScrollView>(null);

  useEffect(() => {
    const x = index * width;
    scrollRef?.current?.scrollTo({ x });
  }, [index]);

  const next = () => {
    if (index < props.steps.length - 1) {
      setIndex((prev) => (prev += 1));
    }
  };

  const previous = () => {
    if (index > 0) {
      setIndex((prev) => (prev -= 1));
    }
  };

  useImperativeHandle(ref, () => ({
    next,
    previous,
  }));

  return (
    <MultiStepFormContainer>
      <MultiStepFormScroll ref={scrollRef}>
        {props.steps?.map((step) => (
          <MultiStepFormPage key={step.id} $width={width}>
            {step.content}
          </MultiStepFormPage>
        ))}
      </MultiStepFormScroll>
    </MultiStepFormContainer>
  );
});
