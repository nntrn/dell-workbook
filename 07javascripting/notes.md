# JAVASCRIPTING


npx javascripting verify 07javascripting/

## INTRODUCTION (Exercise 1 of 19)

 Here's the official solution in case you want to compare notes:

 Anything between the parentheses of `console.log()` are printed to the terminal.

    console.log('hello');

 prints hello to the terminal.

 Currently we are printing a string of characters to the terminal: hello.

## VARIABLES (Exercise 2 of 19)

  A variable is a name that can reference a specific value. Variables are declared using `var` followed by the variable's name.

  Here's an example:

     var example;

  The above variable is declared, but it isn't defined (it does not yet
  reference a specific value).

  Here's an example of defining a variable, making it reference a specific
  value:

     var example = 'some string';

 # NOTE

  A variable is declared using var and uses the equals sign to define the
  value that it references. This is colloquially known as "Making a variable
  equal a value".

 ## The challenge:

  > Create a file named `variables.js`.
  In that file declare a variable named `example`.
  Make the variable `example` equal to the value `'some string'`.
  Then use `console.log()` to print the example variable to the console.



   ## STRINGS (Exercise 3 of 19)

  A **string** is a sequence of characters. A character is, roughly speaking, a written symbol. Examples of characters are letters, numbers, punctuation marks, and spaces.

  String values are surrounded by either single or double quotation marks.

     'this is a string'

     "this is also a string"

 ## NOTE

  Try to stay consistent. In this workshop we'll only use ==single quotation marks.==

 The challenge:

  >For this challenge, create a file named `strings.js`.
  In that file create a variable named **someString** like this:
     `var someString = 'this is a string';`
     Use console.log to print the variable someString to the terminal.

## STRING LENGTH (Exercise 4 of 19)

  You will often need to know how many characters are in a string.

  For this you will use the `.length` property. Here's an example:

     var example = 'example string';
     example.length

 ## NOTE

  Make sure there is a period between example and length.

  The above code will return a number for the total **number of characters** in
  the string.

 ## The challenge:

  >Create a file named `string-length.js`.
  In that file, create a variable named **example**.
  Assign the string `'example string'` to the variable **example**.
  Use `console.log` to print the **length** of the string to the terminal.

## REVISING STRINGS (Exercise 5 of 19)

  You will often need to change the contents of a string.

  Strings have built-in functionality that allow you to inspect and
  manipulate their contents.

  Here is an example using the `.replace()` method:

     var example = 'this example exists';
     example = example.replace('exists', 'is awesome');
     console.log(example);

  Note that to change the value that the example variable references, we need to use the equals sign again, this time with the `example.replace()` method to the right of the equals sign.

 ## The challenge:

  > Create a file named `revising-strings.js`.
  Define a variable named **pizza** that references this string: `'pizza is alright'`
  Use the `.replace()` method to change alright to **wonderful**.
> 
> Use console.log() to print the results of the .replace() method to the terminal.
