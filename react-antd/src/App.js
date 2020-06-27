import React from "react";
import { Layout, Menu } from "antd";
import { Avatar } from "antd";
import {
  DashboardTwoTone,
  PieChartTwoTone,
  SettingTwoTone,
  ProfileTwoTone,
  CodeTwoTone,
  InteractionTwoTone,
  IdcardTwoTone,
} from "@ant-design/icons";
import "./App.css";
import "antd/dist/antd.css";

import { Typography } from "antd";
import Clients from "./components/clients";
function App() {
  const { Title } = Typography;
  const { SubMenu } = Menu;

  const { Header, Footer, Sider, Content } = Layout;
  return (
    <div className="App">
      <Layout className="layout">
        <Header style={{ padding: 10 }}>
          <Avatar
            style={{ float: "right", backgroundColor: "#fde3cf" }}
            src={"../turtle.png"}
            shape="circle"
            size="large"
          />
          <Title style={{ color: "white" }} level={3}>
            Dashboard
          </Title>
        </Header>
        <Sider
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
          }}
        >
          <Menu mode="inline" theme={"dark"}>
            <Menu.Item key="dashboard" icon={<DashboardTwoTone />}>
              Dashboard
            </Menu.Item>
            <Menu.Item key="stats" icon={<PieChartTwoTone />}>
              {"Stats"}
            </Menu.Item>
            <SubMenu key="tasks" title="Tasks" icon={<ProfileTwoTone />}>
              <Menu.Item key="recognitionTasks" icon={<CodeTwoTone />}>
                {"Recognition Tasks"}
              </Menu.Item>
              <Menu.Item key="relearnTasks" icon={<InteractionTwoTone />}>
                {"Relearn Tasks"}
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="clients" icon={<IdcardTwoTone />}>
              {"Clients"}
            </Menu.Item>
            <Menu.Item key="settings" icon={<SettingTwoTone />}>
              {"Settings"}
            </Menu.Item>
          </Menu>
        </Sider>
        <Content>
          <div
            className="site-layout-content"
            style={{
              background: "#fff",
              padding: 24,
              minHeight: 440,
              width: "100%",
            }}
          >
            <Clients />
          </div>
        </Content>

        <Footer
          style={{
            textAlign: "center",
          }}
        >
          {"PotatoCodes ©2020 Created by Arun Dev"}
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
