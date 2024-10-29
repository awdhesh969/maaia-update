import { createProxyMiddleware } from "http-proxy-middleware";


export default createProxyMiddleware({
  // target: `${process.env.NEXT_PUBLIC_EMAIL_SUBSCRIBERS_API_URL}`,
  target: `${process.env.NEXT_PUBLIC_EMAIL_SUBSCRIBERS_API_URL}`,
  changeOrigin: true,
  pathRewrite: {
    '^/api/newsletter': '/wp-json/email-subscribers/v1/subscribers',
  },
});

export const config = {
  api: {
    bodyParser: false,
  },
};