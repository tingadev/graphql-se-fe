import React from "react";
import { Table } from "antd";
import {
  useGetUsersQuery,
  useNewNotificationSubscription,
  UserFragment,
} from "../../schema/schema";

export const UserTable: React.FC = () => {
  const [query] = useGetUsersQuery();
  const [subscription] = useNewNotificationSubscription();
  const notification = subscription.data?.newNotification;
  const newUser = notification?.message;
  const type = notification?.type;
  console.log({ notification });
  const [dataSource, setDataSource] = React.useState<UserFragment[]>([]);
  const users = query.data?.getUsers;
  React.useEffect(() => {
    if (users) {
      if (newUser && type === "CREATE") {
        setDataSource((prev) => {
          return [...prev, newUser];
        });
      } else if (type === "DELETE") {
        setDataSource((prev) => {
          return [...prev.filter((item) => item.id !== notification?.id)];
        });
      } else {
        setDataSource([...users]);
      }
    }
  }, [newUser, notification?.id, type, users]);
  const columns = [
    {
      title: "Firstname",
      dataIndex: "firstname",
      key: "firstname",
    },
    {
      title: "Lastname",
      dataIndex: "lastname",
      key: "lastname",
    },
    {
      title: "Fullname",
      dataIndex: "fullname",
      key: "fullname",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
  ];

  return <Table rowKey={"id"} dataSource={dataSource} columns={columns} />;
};
