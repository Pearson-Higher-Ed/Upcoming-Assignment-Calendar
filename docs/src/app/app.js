import 'main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import Routes from './routes';
import createHistory from 'history/lib/createHashHistory';
import SimpleCalendar from '../app/components/containers/components/SimpleCalendar';

// Expose globals for debugging
window.React = React;

//This is for testing (For assignment day dots)
const dateArray = [{
  'dueDateUTC':'2016-06-06T00:00:00Z'
},
{
  'dueDateUTC':'2016-06-07T00:00:00Z'
},
{
  'dueDateUTC':'2016-06-08T00:00:00Z'
},
{
  'dueDateUTC':'2016-06-12T00:00:00Z'
},
{
  'dueDateUTC':'2016-06-16T00:00:00Z'
},
{
  'dueDateUTC':'2016-06-30T00:00:00Z'
},
{
  'dueDateUTC':'2016-07-02T00:00:00Z'
},
{
  'dueDateUTC':'2016-07-03T00:00:00Z'
}];

//This is for testing (For retrieve clicked date)
var dayHandle = function (day) {
  console.log("Date is : "+day);
};

ReactDOM.render(
  <SimpleCalendar onChange={dayHandle} jsonDate={ [dateArray] }/>
, document.getElementById('app'));
