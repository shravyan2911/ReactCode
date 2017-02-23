# ReactCode
Code Challenge

A restaurant wants to digitally display the menu for the current  date and time. You are given an array of objects. Each object contains a startTime (integer), endTime (integer), daysOfWeekOpen (array of integers), and menu (string). The startTime and endTime are the minutes elapsed that day, and can range from 0-1440. The daysOfWeekOpen will contain integers from 1-7 (Monday-Sunday). You may access the data in each object in any way you'd prefer (i.e., obj.startTime, obj.getStartTime(), etc.).

You are given the following methods:

getCurrentTime(): which returns the number of minutes that have elapsed today (integer from 0-1440)

getCurrentDay(): which returns the current day of the week  (integer from 1-7)

Assume all input is valid, i.e., endTime cannot be less than or equal to startTime, and you cannot have more than 1 menu at any time range for that given day. If there is no menu for the current time, display the next menu available today. If there are no more menus today, return an empty string. 

Example: given the array

[

{startTime: 0, endTime: 120, daysOfWeekOpen: [1, 2, 3,

4], menu: "Midnight menu"},

{startTime: 660, endTime: 780, daysOfWeekOpen: [1, 2,

3, 4], menu: "Lunch menu"},

{startTime: 1080, endTime: 1200, daysOfWeekOpen: [1,

2, 3, 4], menu: "Dinner menu"},

{startTime: 0, endTime: 1440, daysOfWeekOpen: [7],

menu: "Sunday menu"}

]

If getCurrentTime() returns 100 and getCurrentDay() returns 1,

return "Midnight menu".

If getCurrentTime() returns 500 and getCurrentDay() returns 1,

return "Lunch menu".

If getCurrentTime() returns 1300 and getCurrentDay() returns 1,

return "".

If getCurrentTime() returns 500, and getCurrentDay() returns 5,

return "".
