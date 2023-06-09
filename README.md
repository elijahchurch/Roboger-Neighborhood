# Mr. Roboger's Neighborhood

#### By: Jason Elijah Church

#### A website that will return a greeting from Mr. Roboger when a user inputs a number.

## Technologies Used

* HTML
* JavaScripts
* Markdown
* CSS
* Git Bash
* Visual Code Studio

## Description:

## Tests for JavaScript functions written

Describe: roboGreeting()

Test: "It should return an array of numbers from 0 to the user's inputted number"
Code: roboGreeting(5)
Expected Output: [0,1,2,3,4,5]

Test: "It should return 'Won't you be my neighbor?' instead of '3' from an array of 5"
Code: roboGreeting(5)
Expected Output: [0,1,2,"Won't you be my neighbor?",4,5]

Test: "It should return 'Boop!' instead of '2' from an array of 5 (in addition to  the replacement for 3)"
Code: RoboGreeting(5)
Expected Output: [0,1,"Boop!", "Won't you be my neighbor?", 4,5]

Test: "It should return 'Beep!' instead of '1' from an array of 5 (in addiition to the replacement for 3 and 2)"
Code: RoboGreeting(5)
Expected Output: [0,"Beep!", "Boop!", "Won't you be my neighbor!",4,5]