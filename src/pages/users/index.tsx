import React from "react";
import { Table } from "antd";
import { useGetUsersQuery } from "../../schema/schema";

export const UserTable: React.FC = () => {
  const [query] = useGetUsersQuery();
  const users = query.data?.getUsers;
  console.log({ users });
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
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
  ];

  return <Table rowKey={"id"} dataSource={users || []} columns={columns} />;
};
