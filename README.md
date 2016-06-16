# Upcoming-Assignment-Calendar

## Installation

### Quick Start
Clone Element sdk and switch to laxapana-calendar-new branch

        git clone https://github.com/Pearson-Higher-Ed/elements.git
        git checkout laxapana-calendar-new
        npm install
        npm start
        npm link

Clone Upcoming Assignment

    git clone https://github.com/Pearson-Higher-Ed/Upcoming-Assignment-Calendar.git
    npm install
    npm start
    npm link pearson-elements


Navigate to **http://localhost:8081**, where the spawned Node server hosts a webpack-generated SPA using
React Router for defining how to render the components.


## Demo and Code structure

This is the main page. When the page is loaded the user can see the current date with a different background color and border.
This UI applies different background colors to show dates within and outside of the month.
User can navigate between months using buttons. And also this calendar UI displays the assignment using a dot.

![alt tag](https://github.com/Pearson-Higher-Ed/Upcoming-Assignment-Calendar/blob/master/images/upcoming_assignment.png)

app.js will render the calendar component <SimpleCalendar>. with the jsonDate array as below.

        <SimpleCalendar jsonDate={ [dateArray] }/>

Sample JSON date data array.


    const dateArray = [{
      'dueDateUTC':'2016-06-06T00:00:00Z'
    },
    {
      'dueDateUTC':'2016-06-07T00:00:00Z'
    }
    ];


User can select a date and it will highlighted 6 days followed by the selected date.

![alt tag](https://github.com/Pearson-Higher-Ed/Upcoming-Assignment-Calendar/blob/master/images/upcoming_calendar.png)

The “handleDayClick” event is used to find the selected date and 6 days followed by selected date.

    handleDayClick(e, day, modifiers) {
    let dayString = day.toISOString().slice(0, day.toISOString().indexOf('T'));
    let dayStrUTC = dayString.concat("T00:00:00Z");
    let dayCli=  DayHanddler.clickedDay(dayStrUTC);

    var target = moment(day).add(6, 'day')._d;
    this.state.to = target
    this.state.from = day
    this.setState(this.state);
    }

And it will pass through the below function.

    export function clickedDay(day) {
      console.log("You clicked : " + day);
      return day;
    }
