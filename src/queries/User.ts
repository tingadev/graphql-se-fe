import { gql } from "urql";

export const USER_FRAGMENT = gql`
  fragment User on User {
    firstname
    email
    id
    lastname
    fullname
  }
`;

export const GET_USER = gql`
  query getUser($id: String!) {
    getUser(id: $id) {
      ...User
    }
  }
  ${USER_FRAGMENT}
`;

export const GET_USERS = gql`
  query getUsers {
    getUsers {
      ...User
    }
  }
  ${USER_FRAGMENT}
`;

export const GET_NOTIFICATION_USER = gql`
  subscription newNotification {
    newNotification {
      id
      message {
        ...User
      }
      date
      type
    }
  }
  ${USER_FRAGMENT}
`;
