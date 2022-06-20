/* Your Code Here */
const allEmployees = []
function createEmployeeRecord([firstName, familyName, title, pay]){
    const employeeRecord= {
        firstName: firstName,
        familyName: familyName,
        title: title,
        payPerHour: pay,
        timeInEvents: [],
        timeOutEvents: []
    }

allEmployees.push(employeeRecord)
return employeeRecord
}
//array
function createEmployeeRecords(arrays){
    const arrOfObjs = []
  arrays.forEach((array) => {
    const newObj = createEmployeeRecord(array)
    arrOfObjs.push(newObj)
  })
  return arrOfObjs
}
//timeinevent
function createTimeInEvent(dateStamp){
    const hour = dateStamp.split(" ")[1]
    const MDYdate = dateStamp.split(" ")[0]
    const timeInEmployee = {
      type: "TimeIn",
      hour: parseInt(hour, 10),
      date: MDYdate
}
const timeInEvents = this.timeInEvents
  timeInEvents.push(timeInEmployee)
  return this
}
//Timeoutevent
 function createTimeOutEvent(dateStamp){
  const hour = dateStamp.split(" ")[1]
    const MDYdate = dateStamp.split(" ")[0]
    const timeOutEmployee = {
      type: "TimeOut",
      hour: parseInt(hour, 10),
      date: MDYdate
}
const timeOutEvents = this.timeOutEvents
  timeOutEvents.push(timeOutEmployee)
  return this
 }

 //hoursWorkedOnDate

 function hoursWorkedOnDate(dateStamp){
  let timeIn =""
  let timeOut =""
  this.timeInEvents.forEach((x) => {
    if (x.date === dateStamp) {
      timeIn = x.hour
    }
  })
  this.timeOutEvents.forEach((x) => {
    if (x.date === dateStamp) {
      timeOut = x.hour
    }
  })
  const hoursWorked = (timeOut - timeIn) / 100
  return hoursWorked
 }
 //wagesearned
 function wagesEarnedOnDate(dateStamp){
  const hoursWorked = hoursWorkedOnDate.call(this, dateStamp)
  const wagesEarned = hoursWorked * this.payPerHour
  return wagesEarned

 }
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function findEmployeeByFirstName(srcArray, name) {
   return srcArray.find(emp => emp.firstName === name)
}

function calculatePayroll (array) {

    const reducer = (previousValue, employee) => previousValue + allWagesFor.call(employee)
    return array.reduce(reducer, 0)
}