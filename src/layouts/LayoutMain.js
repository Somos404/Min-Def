import React from "react";
import { Layout } from "antd";
import LoadRoutes from "config/LoadRoutes";
import MenuTop from "componentes/menuTop";
import Whatsapp from 'componentes/whatsapp'

import "./LayoutMain.scss";

export default function LayoutBasic(props) {
  const { routes } = props;
  const { Content, Footer } = Layout;
  return (
    <Layout>
      <MenuTop />
      <Content>
        <div className="contentLoadRoutes">
          <LoadRoutes routes={routes} />
        </div>
      </Content>
      <Whatsapp/>
      <Footer className="footerLayoutMain">©2020 Created by Somos 404</Footer>
    </Layout>
  );
}
