import { createProxyMiddleware } from "http-proxy-middleware";


export default createProxyMiddleware({
  target: process.env.NEXT_PUBLIC_GRAPHQL_URL, 
  changeOrigin: true,
  pathRewrite: {
    '^/api/graphql': 'index.php?graphql',
  },
});

export const config = {
  api: {
    bodyParser: false,
  },
};
