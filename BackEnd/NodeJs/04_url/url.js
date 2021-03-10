//const url = require("url");

const { URL } = require("url");

// Parsing the url String using Legacy API

// const myUrl = url.parse(
//   "https://user:pass@mywebsite.com:8080/hello.html?id=100&status=active#hash"
// );

// Parsing thr Ulr string using WHATWG // don't need to import form Node.js

const myUrl = new URL(
  "https://user:pass@mywebsite.com:8080/hello.html?id=100&status=active#hash"
);

// get Serialized URL
// you can access all the url properties by dot notation like myUrl.href,myUrl.host

console.log(myUrl.href);
console.log(myUrl.host);
console.log(myUrl.toString());

// Looping through the Parameter(params)
myUrl.search = "?id=101&status=inactive";
myUrl.searchParams.forEach((value, key) => {
  console.log(key, value);
});
