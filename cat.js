require("dotenv").config();
const catme = require("cat-me");
const axios = require("axios");
axios.get(process.env.URL).then((res) => {
  let gifs = res.data.data;

  gifs.map((gif) => {
    console.log(gif.images.downsized.url);
  });
});
console.log(catme("grumpy"));
