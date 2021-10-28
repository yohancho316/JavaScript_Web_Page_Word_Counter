# JavaScript_Web_Page_Word_Counter


# Table of Contents
* Project Description
* Project Requirements
* Running the Code
* Additional Documentation

## Project Description

In this project I created an algorithm written in JavaScript that outputs the top 25 most common words on the current webpage, sorted by most common words on the page first. After this, I generated a function which, given any string, replaces all occurences of the top 25 most common words within that string with the amount of times that word appears in the sring. My code is pastable and runnable in the browser console.

```
Click on the Image to Watch My Project in Action on YouTube
```
[![Watch my Project in Action on YouTube](JS_Word_Count.gif)](https://youtu.be/mu8z7LGjdCA)

## Project Requirements

* For the first part, the page to process and run your code on: https://en.wikipedia.org/wiki/Programming_language

* For the second part, the generated function should be named replaceCommonText and should expect only the first argument to be used. The return value of the function should be the result of the word replacement.

* A word may NOT include HTML tags, JavaScript code, numbers, spaces, punctuation, or any single characters.

* A word may NOT be from the top 1000 common words in english and you may NOT hardcode these into the source code; instead, you must use JavaScript to retrieve this json file asynchronously: https://gist.githubusercontent.com/Thessiah/fb969b429b4d6173916628c7d92bf6e4/raw/fb30bf33cbad e43fd667c45437d4937b53ce868a/top1k.json

## Running the Code

1. Open Chrome and open the developer tools (ctrl+shift+i) and paste my JavaScript code into the console.
2. The output of the first part of the test can be in any format, however, it must be sorted by most common words on the page first.
3. After pasting adn running your code, running replaceCommonText('some body of text to parse') shoudl successfully output a properly updated string.

* TKinter
* SQLite3

## Additional Documentation

* WikiPage: https://en.wikipedia.org/wiki/Programming_language
* GIST JSON File: https://gist.githubusercontent.com/Thessiah/fb969b429b4d6173916628c7d92bf6e4/raw/fb30bf33cbad e43fd667c45437d4937b53ce868a/top1k.json