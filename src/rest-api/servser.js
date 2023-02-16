const proxy = require("http-proxy-middleware");
// useEffect(() => {
//   axios.post("/login", { username: user.username, password: user.password }).then((res) => {
//     console.log(res.data['token'])
//   });
// });

module.exports = function (app) {
  app.use(
    proxy("/login", {
      target: "http://tsmapi.suksan.group",
      secure: false,
      changeOrigin: true,
    })
  );
};
