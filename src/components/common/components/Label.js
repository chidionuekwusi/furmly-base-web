import React from "react";
import styled from "styled-components";
import {
  labelBackgroundColor,
  smallText,
  errorColor,
  errorForegroundColor,
  labelColor,
  formLineWidth
} from "../variables";
import FormDiv from "../components/FormDiv";
import { setupReversal } from "../utils";

export const Label = styled.label`
  background-color: ${setupReversal(labelBackgroundColor, labelColor)};
  color: ${setupReversal(labelColor, labelBackgroundColor)};
  padding: ${props => props.theme.factor * 5}px;
  font-size: ${smallText}px;
  font-weight: bold;
  display: inline-block;
  transition: background-color 1s;
  &.error {
    background-color: ${errorColor};
    color: ${errorForegroundColor};
    transition: background-color 1s;
  }
`;

const FormLabelContainer = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  visibility: ${props => (props.hide && "hidden") || "visible"};
  &.no-indicator {
    overflow: visible;
  }
`;
const FocusIndicator = styled.hr`
  width: 100%;
  transform: translateX(-101%);
  position: absolute;
  bottom: 0px;
  border: none;
  margin: 0px;
  height: ${formLineWidth}px;
  background-color: ${labelBackgroundColor};
  transition-property: transform;
  transition-duration: 0.5s;
  transition-delay: 200ms;
  ${FormDiv}:hover & {
    transform: translateX(0);
  }
  ${FormLabelContainer}.no-indicator & {
    visibility: collapse;
  }
  ${Label}.error+& {
    background-color: ${errorColor};
  }
`;
export default props => {
  const { className, ...rest } = props;
  return (
    <FormLabelContainer className={className}>
      <Label {...rest} />
      <FocusIndicator />
    </FormLabelContainer>
  );
};
