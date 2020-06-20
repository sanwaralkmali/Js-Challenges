# Valid Parentheses

Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

>An input string is valid if:

 - Open brackets must be closed by the same type of brackets.
 - Open brackets must be closed in the correct order.
 - Note that an empty string is also considered valid.


##### Example1

```
Input: "()"
Output: true
```



##### Example 2:
```
Input: "()[]{}"
Output: true
```

##### Example 3:
```
Input: "(]"
Output: false
```

#` Solution `
>```
 Read the input
 split input into content
 for each character : if it is open bracket push the close bractet   to colse list, 
 if it is close bracket pop from the close list and compare them,
 if they are diffrent return false! 
 otherwise continue;
 ```
