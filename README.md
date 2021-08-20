# **Robogers Neighborhood**

#### Application uses information about a person to suggest the best programming language for them.

#### By: **Brad Prettyman**

## Technologies Used

* HTML
* JavaScript
* CSS
* Jquery
* Markdown

## Description

This application is a web application that takes a number from a user and returns a range of numbers from 0 to the user inputted number with the following exceptions:

Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"
Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"
Numbers that contain a 3: all digits are replaced (all digits) with "Won't you be my neighbor?"

## Setup/Installation Requirements

* Clone this repository to your desktop from this [Link.](https://github.com/BradPrettyman/robogers-project)
* Navigate to top level of directory
* Open robogers-project/index.html


## Known Bugs

* No known bugs at the moment.

## License

* [MIT](https://www.mit.edu/~amini/LICENSE.md)

## Contact Information

Brad Prettyman 
email: brad.prettyman5@gmail.com



Describe: numberInput()

Test: Number 1 will be replaced with "Beep!"
Code: numberInput(1);
Expected Output: "Beep!"

Test: Number 2 will be replaced with "Boop!"
Code: numberInput(2);
Expected Output: "Boop!"

Test: Number 3 will be replaced with "Won't you be my neighbor!"
Code: numberInput(3);
Expected Output: "Won't you be my neighbor!"

Test: Any numbers that contain a 1 will be replaced with "Beep!"
Code: numberInput(21);
Expected Output: "Beep!"

Test: Numbers that contain a 2 will be replaced with "Boop!"
Code: numberInput(12);
Expected Output: "Boop!"

Test: Numbers that contain a 3 will be replaced with "Won't you be my neighbor!"
Code: numberInput(13);
Expected Output: "Won't you be my neighbor!"
