import React from "react";
import { WelcomeStyle } from "./style";
const Introduction = props => {
  const { children } = props;
  return (
    <div>
      <WelcomeStyle>{children}</WelcomeStyle>
    </div>
  );
};
export default Introduction;
