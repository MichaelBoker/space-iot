import {Calendar} from 'react-calendar'

import 'react-calendar/dist/Calendar.css';
import DateRecord from '../../components/DateRecord';
import Wrapper from '../../assets/Wrappers/Calendar';
import { useState } from 'react';
import { Form } from 'react-router-dom';
import FormRow from '../../components/FormRow';

const CalendarPage = () => {
  
  const [dates, setDate] = useState();

  const onDateSelect = (dates) => {
    dates.startDate= new Date(dates[0]),
      dates.endDate= new Date(dates[1])
    
      console.log(dates);
      
    setDate(dates)
  }

  return (
    <Wrapper>
      <section id="left-calendar">
      <Calendar minDate={new Date()} selectRange={true} view='month' value={dates} onChange={(val) => onDateSelect(val)} returnValue='range'/>
      <Form className='form'>
        <h5>new Reservation</h5>
        <FormRow type='text' label="title" name="title" required={true}/>
        <FormRow type="text" label="name" name="name" required={true}/>
        <div id="date-wrapper">
          <FormRow type="date" defaultVal={dates}/>
        </div>
      </Form>
      </section>
      <section id="reserved-dates">
        <h2>Reserved Dates</h2>
        <DateRecord name="Michael Boker" title="Daily cruse" dateFrom={new Date().toDateString()} DateTo={new Date().toDateString()}/>
        <DateRecord name="Michael Boker" title="Daily cruse" dateFrom={new Date().toDateString()} DateTo={new Date().toDateString()}/>
        <DateRecord name="Michael Boker" title="Daily cruse" dateFrom={new Date().toDateString()} DateTo={new Date().toDateString()}/>
        <DateRecord name="Michael Boker" title="Daily cruse" dateFrom={new Date().toDateString()} DateTo={new Date().toDateString()}/>
        <DateRecord name="Michael Boker" title="Daily cruse" dateFrom={new Date().toDateString()} DateTo={new Date().toDateString()}/>
      </section>
    </Wrapper>
  )
}
export default CalendarPage