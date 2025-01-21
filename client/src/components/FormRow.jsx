import { FaRegCalendar } from "react-icons/fa6";
import DatePicker from "react-datepicker";
import { useEffect, useState } from "react";

import "react-datepicker/dist/react-datepicker.css";


const FormRow = ({ type, name, label, required = false, listValues, onchange, defaultVal }) => {

    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    
    useEffect(() => {
        setStartDate(defaultVal?.startDate)
        setEndDate(defaultVal?.endDate)
        
    },[defaultVal])
    
    switch (type) {
        case 'select':
            return (
                <div className="form-row">
                    <select id={`select-${name}`} name={name} className="form-select" required={required} placeholder={label} defaultValue={defaultVal || ''} onChange={onchange}>
                        <option value='' disabled key={`empty-${name}`}> {label} </option>
                        {
                            listValues.map((val) => {
                                return (
                                    <option value={val.value || val} key={val.value || val}> {val.title || val} </option>
                                )
                            })
                        }
                    </select>
                </div>
            )
        case 'date-range':
            return(
                <>
                <div className="form-row date-row">
                    <FaRegCalendar/>
                   <DatePicker name="dateFrom" selected={startDate} value={startDate} onChange={(date) => setStartDate(date)} placeholderText="From"/>
                </div>
                <div className="form-row date-row">
                <FaRegCalendar/>
               <DatePicker name="dateTo" selected={endDate} value={endDate} onChange={(date) => setEndDate(date)} placeholderText="To"/>
            </div>
                </>
            )
            case 'date':
            return(
                <>
                <div className="form-row date-row">
                    <FaRegCalendar/>
                   <DatePicker name="date" selected={startDate} value={startDate} onChange={(date) => setStartDate(date)} placeholderText="Date"/>
                </div>
                </>
            )
        default:
            return (
                <div className="form-row">
                    <input type={type} id={name} className="form-input" required={required} placeholder={label} defaultValue={defaultVal} onChange={onchange}></input>
                </div>
            )
    }

}
export default FormRow