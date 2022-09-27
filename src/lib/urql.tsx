import { defaultExchanges, subscriptionExchange } from "@urql/core";
import { createClient } from "urql";
import { createClient as createWSClient } from "graphql-ws";
import config from "../config";
const wsClient = createWSClient({
  url: "ws://localhost:4000/graphql",
});
export const clientUrql = createClient({
  url: config.GRAPHQL_URL,
  exchanges: [
    ...defaultExchanges,
    subscriptionExchange({
      forwardSubscription: (operation) => ({
        subscribe: (sink) => ({
          unsubscribe: wsClient.subscribe(operation, sink),
        }),
      }),
    }),
  ],
});
