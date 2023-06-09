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
Code: roboGreeting(5)
Expected Output: [0,1,"Boop!", "Won't you be my neighbor?", 4,5]

Test: "It should return 'Beep!' instead of '1' from an array of 5 (in addiition to the replacement for 3 and 2)"
Code: roboGreeting(5)
Expected Output: [0,"Beep!", "Boop!", "Won't you be my neighbor!",4,5]

Test: "It should return 'Mr. Roboger only wants positivity in his neighborhood. Please enter a positive number. Boop.' if user inputs a negative number"
Code: roboGreeting(-5)
Expected Output: "Mr. Roboger only wants positivity in his neighborhood. Please enter a positive number. Boop."

Test: "It will return array with each number as a string (so that the indexOf method can be used in the future)"
Code: roboGreeting(5)
Return: ["0","1","2","3","4","5"]

Test: "It should replace '1' and '10' with 'Beep!' from an array of 10 (in addition to the above)"
Code: roboGreeting(10)
Expected Output: [0, "Beep!", "Boop!", "Won't you be my neighbor!",4,5,6,7,8,9,"Beep!"]

Test: "It should replace any number that has a '1' as a digit to 'Beep!'"
Code: roboGreeting(15)
Expected Output: [0, "Beep!", "Boop!", "Won't you be my neighbor!",4,5,6,7,8,9,"Beep!", "Beep!","Beep!","Beep!","Beep!","Beep!",]

Test: "It should return numbers back instead of strings where the stipulations are met"
Code: roboGreeting(10)
Expected Output: [0, "Beep!", "Boop!", "Won't you be my neighbor!",4,5,6,7,8,9,"Beep!"] 
  Note: the two tests above were returning numbers as strings i.e. "0" instead of 0

Test: "It should replace any number that has '2' as a digit to 'Boop!", with a hierachy substition when a number has '1' and '2' in it"
Code: roboGreeting(12)
Expected Output: [0, "Beep!", "Boop!", "Won't you be my neighbor!",4,5,6,7,8,9,"Beep!", "Beep!","Boop!"]


