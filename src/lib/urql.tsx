import { cacheExchange, dedupExchange } from "@urql/core";
import { multipartFetchExchange } from "@urql/exchange-multipart-fetch";
import { createClient } from "urql";
import config from "../config";

export const clientUrql = createClient({
  url: config.GRAPHQL_URL,
  exchanges: [dedupExchange, cacheExchange, multipartFetchExchange],
});
