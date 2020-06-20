# Search Insert Position

Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

######You may assume no duplicates in the array.


#### Example 1:
```
Input: [1,3,5,6], 5
Output: 2
```

#### Example 2:
```
Input: [1,3,5,6], 2
Output: 1
```

#### Example 3:
```
Input: [1,3,5,6], 7
Output: 4
```

#### Example 4:
```
Input: [1,3,5,6], 0
Output: 0
```

#`Solution`

	Use loop to search for given value.
	if the element = the given target return the index.
	in case the element is not in the list, return the index of the first number that is greater than the target!
	otherwise return the list length as the index of the end of your list.