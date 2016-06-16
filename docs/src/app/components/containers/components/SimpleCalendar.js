import React from 'react';
import moment from 'moment';
import DayPicker from './DayPicker';
import DateUtils from './DateUtils';

class SimpleCalendar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      from: null,
      to: null
    }
  }

  handleDayClick(e, day) {

    const dayString = day.toISOString().slice(0, day.toISOString().indexOf('T'));
    const dayStrUTC = dayString.concat('T00:00:00Z');
    this.props.onChange(dayStrUTC);

    const target = moment(day).add(6, 'day')._d;
    this.state.to = target
    this.state.from = day
    this.setState(this.state);
  }

  render() {
    const { from, to } = this.state;

    const modifiers = {
      selected: day => DateUtils.isSameDay(this.state.from, day),
      highlighted: day => DateUtils.isDayInRange(day, {
        from: from,
        to: to
      })
    };

    return <DayPicker handleJsonDate = {this.props.jsonDate[0]} enableOutsideDays modifiers = {
      modifiers
    }
    onDayClick = {
      this.handleDayClick.bind(this)
    }
    />;
  }
}

SimpleCalendar.defaultProps = {
  onChange: function () {}
}

export default SimpleCalendar;
