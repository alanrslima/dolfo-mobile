import React from 'react';
import {ReactNode} from 'react';
import {FooterContainer} from './footer.styles';

export type FooterProps = {
  children: ReactNode;
};

export function Footer(props: FooterProps) {
  return <FooterContainer>{props.children}</FooterContainer>;
}
