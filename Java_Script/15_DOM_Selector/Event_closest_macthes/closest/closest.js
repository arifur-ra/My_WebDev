//

let val;
let chapter = document.querySelector("li.chapter:first-child");

val = chapter;

// getting the closest ancestor with css selector.chapter

val = chapter.closest(".chapter");
// getting the closest ancestor with css selector.book

val = chapter.closest(".book");

console.log(val);
