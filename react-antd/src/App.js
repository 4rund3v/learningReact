import React from "react";
import { Layout, Menu } from "antd";
import { Avatar } from "antd";
import {
  DashboardOutlined,
  BarChartOutlined,
  SettingOutlined,
  ProfileOutlined,
  UnorderedListOutlined,
  ImportOutlined,
} from "@ant-design/icons";
import "./App.css";
import "antd/dist/antd.css";

import { Typography } from "antd";
function App() {
  const { Title } = Typography;
  const { SubMenu } = Menu;

  const { Header, Footer, Sider, Content } = Layout;
  return (
    <div className="App">
      <Layout>
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
        <Layout>
          <Sider>
            <Menu mode="inline">
              <Menu.Item key="dashboard" icon={<DashboardOutlined />}>
                Dashboard
              </Menu.Item>
              <Menu.Item key="stats" icon={<BarChartOutlined />}>
                Stats
              </Menu.Item>
              <SubMenu key="tasks" title="Tasks" icon={<ProfileOutlined />}>
                <Menu.ItemGroup>
                  <Menu.Item
                    key="recognitionTasks"
                    icon={<UnorderedListOutlined />}
                  >
                    Recognition Tasks{" "}
                  </Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup>
                  <Menu.Item key="relearnTasks" icon={<ImportOutlined />}>
                    Relearn Tasks
                  </Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
              <Menu.Item key="settings" icon={<SettingOutlined />}>
                Settings
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Content>Content</Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </Layout>{" "}
    </div>
  );
}

export default App;
