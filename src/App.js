import React, { useState } from "react";
import {
  PieChartOutlined,
  UserOutlined,
  CoffeeOutlined,
  PicLeftOutlined,
  FormatPainterFilled,
  HeartFilled,
  LayoutFilled,
  HddFilled,
  AntCloudOutlined,
  ShoppingCartOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";

import Main from "./components/main/Main";

import "./App.css"

const { Sider } = Layout;

//handle aside section Layout
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem("Dashboard", "1", <PieChartOutlined />),
  getItem("Reciepes", "2", <CoffeeOutlined />),
  getItem("Blogs", "3", <PicLeftOutlined />),
  getItem("Templates", "sub1", <FormatPainterFilled />, [
    getItem("Favourites", "4", <HeartFilled />),
    getItem("Custom Template", "5", <LayoutFilled />),
  ]),
  getItem("Integrations", "sub2", <HddFilled />, [
    getItem("Semrush", "6", <AntCloudOutlined />),
  ]),
  getItem("User", "7", <UserOutlined />, [
    getItem("Change Plan", "8", <ShoppingCartOutlined />),
  ]),
];
const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        {!collapsed ? (
          <div
            style={{
              height: 32,
              margin: 16,
              color: "white",
              padding: "5px",
            }}
          >
            <span>Project: My First Project</span>{" "}
          </div>
        ) : (
          <div
            style={{
              height: 32,
              margin: 16,
              color: "white",
              textAlign: "center",
            }}
          >
            <GithubOutlined />
          </div>
        )}

        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout className="site-layout">
        <Main />
      </Layout>
    </Layout>
  );
};
export default App;
