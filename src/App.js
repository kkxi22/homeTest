import React, { memo, Suspense } from "react";
import { Provider } from "react-redux";

import store from "./store";

import { Layout } from "antd";
import MyHeader from "components/header";
import MyFooter from "components/footer";
import Home from "./pages/home";

const { Content } = Layout;

export default memo(function App() {
  return (
    <Provider store={store}>
      <Layout>
        <MyHeader />
        <Suspense fallback={<div>page loading</div>}></Suspense>
        <Content>
          <Home />
        </Content>
        <MyFooter />
      </Layout>
    </Provider>
  );
});
