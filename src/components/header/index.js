import React, { memo } from "react";

import { HeaderWrapper } from "./style";

import { Layout } from "antd";
const { Header } = Layout;

export default memo(function MyHeader() {
  return (
    <HeaderWrapper>
      <Header>BROCCOLI &amp; CO.</Header>
    </HeaderWrapper>
  );
});
