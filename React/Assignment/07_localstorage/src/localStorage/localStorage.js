
// SetItem: saving a variable in the localStorage
// its has two parameter (key ,Value)

localStorage.setItem("testStorage", "hello Word")

// getItem: obtaining a variable form the local Storage
// its has one parameter

const varStorage = localStorage.getItem("testStorage")
console.log(varStorage)

localStorage.removeItem('testStorage')



const FBW39Participant={
  id:39,
  participant:14,
  location:['Berlin','Hamburg','Leipzig']
}

// localStorage.setItem('Fbw39Par', FBW39Participant)

// We need to use th JSON=JSON.stringify() when we setItem in the localStorage

const stringifyObject= JSON.stringify(FBW39Participant)

localStorage.setItem('Fbw39Par', stringifyObject)


// We need to use th JSON=JSON.parse() when we get the item from LocalStorage
const fromLocal=localStorage.getItem('Fbw39Par');

const parsedString=JSON.parse(fromLocal);










