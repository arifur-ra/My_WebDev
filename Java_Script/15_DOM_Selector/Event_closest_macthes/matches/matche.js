//statement: for... of used to iterate within an iterable object

// iterable object: keys are numbers:not anything else ('array like or array')

for (const element of document.body.children) {
  if (element.matches('a[href$="zip"]')) {
    console.log("This Element is a match ", element);
  }
  if (element.matches(".nein")) {
    console.log("This Element is a match ", element);
  }
}
