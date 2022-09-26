const domain_backend =
  process.env.REACT_APP_BACKEND_URL || "http://localhost:4000";

const config = {
  GRAPHQL_URL: domain_backend + "/graphql",
};
export default config;
