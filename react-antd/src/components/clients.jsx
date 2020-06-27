import React, { Component } from "react";
import { Tree } from "antd";
import { Client } from "../models/client";

import { Card, Avatar } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";

class Clients extends Component {
  state = {};

  render() {
    const { Meta } = Card;
    let mamClient229 = new Client("mamClient229", "client101", "active", [], {
      ip: "192.168.1.229",
      port: 9003,
    });
    let mamClient22 = new Client("mamClient22", "client22", "active", [], {
      ip: "192.168.1.22",
      port: 9003,
    });
    let mamClient104 = new Client("mamClient104", "client104", "active", [], {
      ip: "192.168.1.104",
      port: 9003,
    });
    let mamClient3 = new Client("mamClient3", "client3", "active", [], {
      ip: "192.168.1.3",
      port: 9003,
    });
    let clientList = [mamClient229, mamClient22, mamClient104, mamClient3];
    console.log("[Clients] Clients : ", clientList);
    return (
      <div>
        {clientList.map((client) => {
          return (
            <Card
              style={{ width: 300 }}
              key={client.getClientId()}
              actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="setting" />,
                <EllipsisOutlined key="setting" />,
              ]}
            >
              <Meta title={client.getClientName()} avatar="" description="" />
            </Card>
          );
        })}
      </div>
    );
  }
}
export default Clients;
