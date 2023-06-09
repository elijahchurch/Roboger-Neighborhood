# Mr. Roboger's Neighborhood

#### By: Jason Elijah Church

#### A webpage that will return a greeting from Mr. Roboger when a user inputs a number.

## Technologies Used

* HTML
* JavaScripts
* Markdown
* CSS
* Git Bash
* Visual Code Studio

## Description:

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

**Test:** "It should return 'Mr. Roboger only wants positivity in his neighborhood. Please enter a positive number. Boop.' if user inputs a negative number"\
**Code:** roboGreeting(-5)\
**Expected Output:** 
    **"Mr. Roboger only wants positivity in his neighborhood. Please enter a positive number. Boop."**

**Test:** "It will return array with each number as a string (so that the indexOf method can be used in the future)"\
**Code:** roboGreeting(5)\
**Expected Output** 
    **["0","1","2","3","4","5"]**

**Test:** "It should replace '1' and '10' with 'Beep!' from an array of 10 (in addition to the above)"\
**Code:** roboGreeting(10)\
**Expected Output:** 
    [0, **"Beep!"**, "Boop!", "Won't you be my neighbor!",4,5,6,7,8,9,**"Beep!"**]

**Test:** "It should replace any number that has a '1' as a digit to 'Beep!'"\
    Note: At this point, the function is now creating elements as strings, but to make it less confusing for me I am still referring to the elements as a number, and will do so going forward.\
**Code:** roboGreeting(15)\
**Expected Output:** 
    [0, **"Beep!"**, "Boop!", "Won't you be my neighbor!",4,5,6,7,8,9,**"Beep!"**, **"Beep!"**,**"Beep!"**,**"Beep!"**,**"Beep!"**,**"Beep!"**,]

**Test:** "It should return numbers back instead of strings where the stipulations are met"\
**Code:** roboGreeting(10)\
**Expected Output:** 
    [**0**, "Beep!", "Boop!", "Won't you be my neighbor!",**4**,**5**,**6**,**7**,**8**,**9**,"Beep!"]\
    Note: the two tests above were returning numbers as strings i.e. "0" instead of 0

**Test:** "It should replace any number that has '2' as a digit to 'Boop!", with a hierachy substition when a number has '1' and '2' in it"\
**Code:** roboGreeting(12)\
**Expected Output:** 
    [0, "Beep!", **"Boop!"**, "Won't you be my neighbor!",4,5,6,7,8,9,"Beep!", "Beep!",**"Boop!"**]

**Test:** "It should replace any number that has '3' as a digit to 'Won't you be my neighbor?', with a hierachy subsition when a number has '1' or '2' in it"\
**Code:** roboGreeting(23)\
**Expected Output:** 
    [0, "Beep!", "Boop!", **"Won't you be my neighbor!"**,4,5,6,7,8,9,"Beep!", "Beep!","Boop!", **"Won't you be my neighbor?"**,"Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Boop!", "Boop!", "Boop!", **"Won't you be my neighbor?"**]

**Final Test:** "It should return the final outcome to the user as a string instead of an array"\
    Note: this makes an above test where strings were being turned back into numbers void and the JavaScript code for it unnecessary. It has been changed back.\
**Code:** roboGreeting(13)\
**Expected Output:** 
    **"0 Beep! Boop! Won't you be my neighbor! 4 5 6 7 8 9 Beep! Boop! Won't you be my neighbor?"**

