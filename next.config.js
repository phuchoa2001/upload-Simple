module.exports = {
  reactStrictMode: true,
  redirects: async () => {
    return [
      {
        source: "/about",
        destination: "/",
        permanent: false,
      },
    ];
  },
  api: {
    bodyParser: {
      sizeLimit: "50mb",
    },
  },
};
