# Remove Duplicates from Sorted Array

Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.


>Do not allocate extra space for another array, you must do this by    modifying the input array in-place with O(1) extra memory.


#### Example 1:
```
Given nums = [1,1,2],
Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.
```

#### Example 2:
```
Given nums = [0,0,1,1,1,2,2,3,3,4],
Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively.

```

#`Solution`

	Use nested loop to search for duplicated values.
	remove the duplicated values using splice function.
	return the new list length.