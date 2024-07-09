import Button from "../ui/button";
import classes from "./event-searche.module.css";

import { useRef } from "react";

function EventSearch(props) {
  const yearInputRef = useRef();
  const monthInputRef = useRef();

  function submitHandler(event) {
    //阻止想服务器提交
    event.preventDefault();

    const selectedYear = yearInputRef.current.value;
    const selectedMonth = monthInputRef.current.value;

    console.log("selectedYear:" + selectedYear);
    console.log("selectedMonth:" + selectedMonth);

    props.onQuery(selectedYear, selectedMonth);
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year">Year</label>
          <select id="year" ref={yearInputRef}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="month">Month</label>
          <select id="month" ref={monthInputRef}>
            <option value="1">1 month</option>
            <option value="2">2 month</option>
            <option value="3">3 month</option>
            <option value="4">4 month</option>
            <option value="5">5 month</option>
            <option value="6">6 month</option>
            <option value="7">7 month</option>
            <option value="8">8 month</option>
            <option value="9">9 month</option>
            <option value="10">10 month</option>
            <option value="11">11 month</option>
            <option value="12">12 month</option>
          </select>
        </div>
        <div>
          <Button>Query Events</Button>
        </div>
      </div>
    </form>
  );
}

export default EventSearch;
