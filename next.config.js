module.exports = {
  async redirects() {
    return [
      {
        source: "/:lang((?!mn|cn))/:path*",
        destination: "/mn/:path*",
        permanent: true
      },
      {
        source: "/someSubdir/test",
        destination: "/mn/someSubdir/test",
        permanent: true
      }
    ];
  },
  async rewrites() {
    return [
      {
        source: "/testpath/:lang",
        destination: "/testpage"
      }
    ];
  }
};
