import React, { memo } from "react";

import { FooterWrapper } from "./style";

import { Layout } from "antd";
const { Footer } = Layout;

export default memo(function MyFooter() {
  return (
    <Footer>
      <FooterWrapper>
        <div>Made with &hearts; in Melbourne.</div>
        <div>&copy; 2016 Broccoli &amp; Co. All rights reserved.</div>
      </FooterWrapper>
    </Footer>
  );
});
