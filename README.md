# Expense Tracker using React Context

- why context?
  - to avoid prop drilling
  - if we want to use a certain data in multiple components then we can make a global context which has this data and then we can use that data anywhere 

- steps:
  - create a context DataContext
  - then create a function DataProvider which has context value and fucntion to chnge that value 
  - wrap any component inside DataContext using Provider keyword and pass value
  - this value you pass represents the value that our DataContext holds

- Features
  - add expense or income
  - show expense and income history
  - show balance available after adding income and expense