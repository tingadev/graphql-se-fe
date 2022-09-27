import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type Mutation = {
  createUser: User;
  deleteUser: Scalars['String'];
};


export type MutationCreateUserArgs = {
  data: NewUserInput;
};


export type MutationDeleteUserArgs = {
  id: Scalars['String'];
};

export type NewUserInput = {
  email: Scalars['String'];
  firstname: Scalars['String'];
  lastname: Scalars['String'];
};

export type NotificationObject = {
  date: Scalars['DateTime'];
  id: Scalars['String'];
  message?: Maybe<User>;
  type: Scalars['String'];
};

export type Query = {
  getUser: User;
  getUsers: Array<User>;
};


export type QueryGetUserArgs = {
  id: Scalars['String'];
};

export type Subscription = {
  newNotification: NotificationObject;
};

export type User = {
  email: Scalars['String'];
  firstname: Scalars['String'];
  fullname: Scalars['String'];
  id: Scalars['String'];
  lastname: Scalars['String'];
};

export const UserFragmentDoc = gql`
    fragment User on User {
  firstname
  email
  id
  lastname
  fullname
}
    `;
export const GetUserDocument = gql`
    query getUser($id: String!) {
  getUser(id: $id) {
    ...User
  }
}
    ${UserFragmentDoc}`;

export function useGetUserQuery(options: Omit<Urql.UseQueryArgs<GetUserQueryVariables>, 'query'>) {
  return Urql.useQuery<GetUserQuery, GetUserQueryVariables>({ query: GetUserDocument, ...options });
};
export const GetUsersDocument = gql`
    query getUsers {
  getUsers {
    ...User
  }
}
    ${UserFragmentDoc}`;

export function useGetUsersQuery(options?: Omit<Urql.UseQueryArgs<GetUsersQueryVariables>, 'query'>) {
  return Urql.useQuery<GetUsersQuery, GetUsersQueryVariables>({ query: GetUsersDocument, ...options });
};
export const NewNotificationDocument = gql`
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
    ${UserFragmentDoc}`;

export function useNewNotificationSubscription<TData = NewNotificationSubscription>(options: Omit<Urql.UseSubscriptionArgs<NewNotificationSubscriptionVariables>, 'query'> = {}, handler?: Urql.SubscriptionHandler<NewNotificationSubscription, TData>) {
  return Urql.useSubscription<NewNotificationSubscription, TData, NewNotificationSubscriptionVariables>({ query: NewNotificationDocument, ...options }, handler);
};
export type UserFragment = { firstname: string, email: string, id: string, lastname: string, fullname: string };

export type GetUserQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetUserQuery = { getUser: { firstname: string, email: string, id: string, lastname: string, fullname: string } };

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { getUsers: Array<{ firstname: string, email: string, id: string, lastname: string, fullname: string }> };

export type NewNotificationSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type NewNotificationSubscription = { newNotification: { id: string, date: any, type: string, message?: { firstname: string, email: string, id: string, lastname: string, fullname: string } | null } };
