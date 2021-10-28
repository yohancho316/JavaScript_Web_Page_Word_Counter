
// Find Top 25 Most Common Words on Wiki Page Code
// -----------------------------------------------------------------------------------------------------
// Step 1: Concatenate HTML <p> Tag (Paragraph Tag) textContent in the Wikipedia HTML File
let pTagList = document.getElementsByTagName('p')
let preParsedTotalText = "";
for(let i = 0; i < pTagList.length; i++) {
  preParsedTotalText += " " + pTagList[i].textContent + " ";
}
// Time Complexity: O(N)


// ---------------------------------------------------------------------------------------------------------------------------------------
// Step 2: Use Regex to Parse the Text to Comply to Edge Cases (No HTML Tags, JS Code, Numbers, Spaces, Punctutation, Single Characters)
const regex = /\r?\n|\\|\r|[0-9]|[,#!%&;:{}="`~]|\[|\]|\.|\(|\)|\*|\$|\#|\-|\_/g;
let parsedTotalText = preParsedTotalText.replace(regex,"");
// Time Complexity: 0(N)


// ---------------------------------------------------------------------------------------------------------------------------------------
// Step 3: Split Text by White Spaces into Collection Elements
let splitParsedTotalText = parsedTotalText.split(" ")
for(let i = 0; i < splitParsedTotalText.length; i++) {
  let len = splitParsedTotalText[i].length;
  if(len <= 1) {
    splitParsedTotalText.splice(i,1);
    i--;
  }
}
// Time Complexity: O(N)


// ---------------------------------------------------------------------------------------------------------------------------------------
// Step 4: Get the List of Valid Words w/ Fetch API
const WIKI_URL = "https://gist.githubusercontent.com/Thessiah/fb969b429b4d6173916628c7d92bf6e4/raw/fb30bf33cbade43fd667c45437d4937b53ce868a/top1k.json"
let getListOfValidWords = () => {
  fetch(WIKI_URL)
  .then(response => response.json())
  .then(data => {
    listOfValidWords = data;
  })
}

// Grab List of Data Async w/ XMLHttpRequest Object (AJAX Operation)
let getListOfValidWords2 = () => {
  const url = "https://gist.githubusercontent.com/Thessiah/fb969b429b4d6173916628c7d92bf6e4/raw/fb30bf33cbade43fd667c45437d4937b53ce868a/top1k.json";
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.onload = function() {
    // Execute if status is 200 (OK/GOOD)
    if(xhr.status == 200 && this.readyState == 4) {
      console.log("Successfully Retrieved List of Valid Words!");
      listOfValidWords = JSON.parse(xhr.responseText)
    }
    // Execute if status is 403 (forbidden)
    else if(xhr.status == 403) {
        console.log("Status 403 Forbidden");
    }
    // Execute if status is 404 (Not Found)
    else if(xhr.status == 404) {
        console.log("Status 404 Not Found");
    }
  }

  xhr.onerror = function() {
    console.log("Request Error...");
}
xhr.send();
}

let listOfValidWords = getListOfValidWords2(); // you will need to parse this further as it returns as string
// let listOfValidWords = getListOfValidWords();


// ---------------------------------------------------------------------------------------------------------------------------------------
// Step 5: Organize the List of Valid Words by Alphabetical Order (Quick Sort Algorithm)
const lowercase = listOfValidWords.map(name => name.toLowerCase());
let sortedListOfValidWords = lowercase.sort();
sortedListOfValidWords[399] = "I";
// Time Complexity: O(N LOG N)


// ---------------------------------------------------------------------------------------------------------------------------------------
// Step 6: Binary Search Method
let binarySearch = (val) => {
  let lower = 0;
  let upper = sortedListOfValidWords.length - 1;
  while(lower <= upper) {
    let middle = Math.floor((lower + upper)/2);
    // let middle = lower + Math.floor((upper - lower) / 2);
    if(val === sortedListOfValidWords[middle]) {
      return true;
    }
    if(val < sortedListOfValidWords[middle]) {
      upper = middle - 1;
    } else {
      lower = middle + 1;
    }
  }
  return false;
}
// Time Complexity: O(Log N)


// ---------------------------------------------------------------------------------------------------------------------------------------
// Step 7: Iterate splitParsedTotalText Collection & Populate Dictionary Data Structure w/ Recurring Words & Count of Reptitions
let recurringWordTracker = {};
for(let i = 0; i < splitParsedTotalText.length; i++) {
  let val = splitParsedTotalText[i]
  if(binarySearch(val)) {
    if(val in recurringWordTracker) {
      recurringWordTracker[val] += 1
    } else {
      recurringWordTracker[val] = 1;
    }
  }
}
// Time Complexity: O(N)


// ---------------------------------------------------------------------------------------------------------------------------------------
// Step 8: Map Hash Table KVP's to Collections
let topOccuringWords = Object.keys(recurringWordTracker).map(function(key) {
  console.log([key, recurringWordTracker[key]]);
  return [key, recurringWordTracker[key]];
});
// Time Complexity: O(N)


// ---------------------------------------------------------------------------------------------------------------------------------------
// Step 9: Sort the Collection to Order from Most -> Least Occuring
// Sort the array based on the second element
topOccuringWords.sort(function(first, second) {
  return second[1] - first[1];
});
// Time Complexity: O(N LOG N)


// ---------------------------------------------------------------------------------------------------------------------------------------
// Step 10: Grab the Top 25 Most Occuring Words from the Collection & Print to Terminal
topOccuringWords = topOccuringWords.slice(0, 25);
console.log("Top 25 Most Occuring Words:\n\n");
for(let i = 0; i < topOccuringWords.length; i++) {
  console.log("Word: " + topOccuringWords[i][0] + "    # of Occurences: " + topOccuringWords[i][1]);
}
// Time Complexity: O(N)



// Replace Common Text Method Code
// ---------------------------------------------------------------------------------------------------------------------------------------
function replaceCommonText(message) {

  // Local Declarations
  let str = "";
  let recurringMessageWords = {};
  console.log("Original Message: " + message);

  // Step 1: Use Regex to Parse the Text to Comply to Edge Cases (No HTML Tags, JS Code, Numbers, Spaces, Punctutation, Single Characters)
  // Time Complexity: O(N)
  const regex = /\r?\n|\\|\r|[0-9]|[,#!%&;:{}="`~]|\[|\]|\.|\(|\)|\*|\$|\#|\-|\_/g;
  let parsedMessage = message.replace(regex,"");


  // Step 2: Split the String Message into Colection Elements
  // Time Complexity: O(N)
  parsedMessage = parsedMessage.split(" ");

  // Step 3: Iterate through parsedMessage Collection & Cross Reference w/ Valid Words.
  // Time Complexity: O(N)
  for(let i = 0; i < parsedMessage.length; i++) {
    let val = parsedMessage[i]
    if(binarySearch(val)) {
      if(val in recurringMessageWords) {
        recurringMessageWords[val] += 1
      } else {
        recurringMessageWords[val] = 1;
      }
    }
  }

  // Step 4: Concatenate Return String w/ Most Occuring Valid Words
  // Time Complexity: O(N^2)
  for(let i = 0; i < parsedMessage.length; i++) {
    let key = parsedMessage[i];
    if(key in recurringMessageWords) {
      let len = recurringMessageWords[key];
      for(let x = 0; x < len; x++) {
        str += key + " ";
      }
    } else {
        str += key + " ";
    }
  }

  // Step 5: Return Substring of str to Ending White Space
  return str.substring(0,str.length - 1);
}

let msg = "Hello man man this is your captain man speaking man.";
let duplicatedMsg = replaceCommonText(msg);

console.log(duplicatedMsg);