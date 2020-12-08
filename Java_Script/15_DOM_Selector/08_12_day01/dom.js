const Search = () => {
  //   console.log(e.target.value);
  let search = document.getElementById("search");

  let elements = Array.from(document.getElementsByClassName(search.value));
  //   console.log(elements);

  // get element by Tag name
  elements = document.getElementsByTagName(search.value);

  elements = document.querySelectorAll(search.value);
  console.log(elements);
};
