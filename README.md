# Mr. Roboger's Neighborhood

#### By: Jason Elijah Church

#### A webpage that will return a greeting from Mr. Roboger when a user inputs a number.

## Technologies Used

* HTML
* JavaScript
* Markdown
* CSS
* Git Bash
* Visual Code Studio

## Description:

This webpage was created and styled with HTML and CSS respectively. It contains a form that prompts the user to input a number in order to receive a greeting from Mr. Roboger. In Javascript, a function was created to take the inputed number and turn it into an array that lists all the values starting from 0 leading to the inputed number. Logic was then added within the function to replace numbers as follows (and in this ordered hierarchy):
1. If the number contains the digit 3, it will be replaced with the phrase "Won't you be my neighbor?".
2. If the number contains the digit 2, it will be replaced with the phrase "Boop!".
3. If the number contains the digit 1, it will be replaced with the phrase "Beep!".

This function was then used within a form submission event function to generate the value as a string and add its return value as innertext for an empty paragraph html element that existed below the form element. 

## Tests for JavaScript functions

**Describe:** roboGreeting()

**Test:** "It should return an array of numbers from 0 to the user's inputted number"\
**Code:** roboGreeting(5)\
**Expected Output:**
    **[0,1,2,3,4,5]**

**Test:** "It should return 'Won't you be my neighbor?' instead of '3' from an array of 5"\
**Code:** roboGreeting(5)\
**Expected Output:** 
    [0,1,2,**"Won't you be my neighbor?"**,4,5]

**Test:** "It should return 'Boop!' instead of '2' from an array of 5 (in addition to  the replacement for 3)"\
**Code:** roboGreeting(5)\
**Expected Output:** 
    [0,1,**"Boop!"**, "Won't you be my neighbor?", 4,5]

**Test:** "It should return 'Beep!' instead of '1' from an array of 5 (in addiition to the replacement for 3 and 2)"\
**Code:** roboGreeting(5)\
**Expected Output:** 
    [0,**"Beep!"**, "Boop!", "Won't you be my neighbor!",4,5]

**Test:** "It should return 'Mr. Roboger only wants positivity in its neighborhood. Please enter a positive number. Boop.' if user inputs a negative number"\
**Code:** roboGreeting(-5)\
**Expected Output:** 
    **"Mr. Roboger only wants positivity in its neighborhood. Please enter a positive number. Boop."**

**Test:** "It will return array with each number as a string (so that the indexOf method can be used in the future)"\
**Code:** roboGreeting(5)\
**Expected Output** 
    **["0","1","2","3","4","5"]**

**Test:** "It should replace '1' and '10' with 'Beep!' from an array of 10 (in addition to the above)"\
**Code:** roboGreeting(10)\
**Expected Output:** 
    [0, **"Beep!"**, "Boop!", "Won't you be my neighbor!",4,5,6,7,8,9,**"Beep!"**]

**Test:** "It should replace any number that has a '1' as a digit to 'Beep!'"\
    Note: At this point, the function is now creating elements as strings, but to make it less confusing for me I am referring to the elements as a number, and will do so going forward.\
**Code:** roboGreeting(15)\
**Expected Output:** 
    [0, **"Beep!"**, "Boop!", "Won't you be my neighbor!",4,5,6,7,8,9,**"Beep!"**, **"Beep!"**,**"Beep!"**,**"Beep!"**,**"Beep!"**,**"Beep!"**,]

**Test:** "It should return numbers back instead of strings where the stipulations are met"\
**Code:** roboGreeting(10)\
**Expected Output:** 
    [**0**, "Beep!", "Boop!", "Won't you be my neighbor!",**4**,**5**,**6**,**7**,**8**,**9**,"Beep!"]\
    Note: the two tests above were returning numbers as strings i.e. "0" instead of 0

**Test:** "It should replace any number that has '2' as a digit to 'Boop!", with a hierachy substitution when a number has '1' and '2' in it"\
**Code:** roboGreeting(12)\
**Expected Output:** 
    [0, "Beep!", **"Boop!"**, "Won't you be my neighbor!",4,5,6,7,8,9,"Beep!", "Beep!",**"Boop!"**]

**Test:** "It should replace any number that has '3' as a digit to 'Won't you be my neighbor?', with a hierachy substitution when a number has '1' or '2' in it"\
**Code:** roboGreeting(23)\
**Expected Output:** 
    [0, "Beep!", "Boop!", **"Won't you be my neighbor!"**,4,5,6,7,8,9,"Beep!", "Beep!","Boop!", **"Won't you be my neighbor?"**,"Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Boop!", "Boop!", "Boop!", **"Won't you be my neighbor?"**]

**Final Test:** "It should return the final outcome to the user as a string instead of an array"\
    Note: this makes an above test where strings were being turned back into numbers void and the JavaScript code for it unnecessary. It has been changed back.\
**Code:** roboGreeting(13)\
**Expected Output:** 
    **"0 Beep! Boop! Won't you be my neighbor! 4 5 6 7 8 9 Beep! Boop! Won't you be my neighbor?"**

**Extra Test:** "It should return a statement directing the user to input a smaller number"\
**Code:** roboGreeting(250)\
**Expected Output:** 
    **"Mr. Roboger has not drained its morning coffee. Please enter a smaller number. Beep."**

## Setup/ Installation Requirements

* Clone this repository to your desktop.
* In the topmost directory of the project, open up all of the code using Visual Code Studio or a similar application to view the written code.
* The webpage itself can be viewed and interacted with by right-clicking the index.html in Visual Code and opening up a Live Server or visiting this [webpage hosted by github](http://elijahchurch.github.io/Roboger-Neighborhood).

## Known Bugs

* The background image for the webpage isn't reactive.

## License

MIT

Copyright (c) 2023 Jason Elijah Church
