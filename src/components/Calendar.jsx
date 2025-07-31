import { endOfDay, format } from "date-fns";
import { useEffect, useState } from "react";

export default function Calendar({ cardData, setCardData, isEditing }) {
  const TODAY = new Date();
  const TASK_DAY = new Date(cardData && cardData.date);
  const DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const DAYS_OF_THE_WEEK = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
  const MONTHS = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];

  const isLeapYear = (year) =>
    (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

  const firstDayInMonth = (dateNow) =>
    new Date(dateNow.getFullYear(), dateNow.getMonth(), 1).getDay();

  const startDate = () => (cardData?.date ? TASK_DAY : TODAY);

  const [dateNow, setDate] = useState(startDate());
  const [day, setDay] = useState(dateNow.getDate());
  const [month, setMonth] = useState(dateNow.getMonth());
  const [year, setYear] = useState(dateNow.getFullYear());
  const [startDay, setStartDay] = useState(firstDayInMonth(dateNow));

  useEffect(() => {
    setDay(dateNow.getDate());
    setMonth(dateNow.getMonth());
    setYear(dateNow.getFullYear());
    setStartDay(firstDayInMonth(dateNow));
  }, [dateNow]);

  const days = isLeapYear(dateNow.getFullYear()) ? DAYS_LEAP : DAYS;

  const currentDay = (dayIndex) => {
    return (
      dayIndex + 1 === TODAY.getDate() &&
      MONTHS[month].toLowerCase() ===
        TODAY.toLocaleDateString("ru-RU", { month: "long" }) &&
      year === TODAY.getFullYear()
    );
  };

  const isTaskDay = (dayIndex) => {
      return (
      dayIndex + 1 === TASK_DAY.getDate() &&
      MONTHS[month].toLowerCase() ===
        TASK_DAY.toLocaleDateString("ru-RU", { month: "long" }) &&
      year === TASK_DAY.getFullYear()
    );
  }
 
  const handleClickTaskDay = (e) => {
    const attrNameValue = e.target.getAttribute("name");
    const end = endOfDay(
      `${year}/${month + 1}/${e.target.textContent}`
    ).toISOString();
    setCardData({ ...cardData, [attrNameValue]: end });
  };

  return (
    <div className="calendar__block">
      <div className="calendar__nav">
        <div className="calendar__month">
          {MONTHS[month]} {year}
        </div>
        <div className="nav__actions">
          <div
            className="nav__action"
            data-action="prev"
            onClick={() => setDate(new Date(year, month - 1, day))}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="11"
              viewBox="0 0 6 11"
            >
              <path d="M5.72945 1.95273C6.09018 1.62041 6.09018 1.0833 5.72945 0.750969C5.36622 0.416344 4.7754 0.416344 4.41218 0.750969L0.528487 4.32883C-0.176162 4.97799 -0.176162 6.02201 0.528487 6.67117L4.41217 10.249C4.7754 10.5837 5.36622 10.5837 5.72945 10.249C6.09018 9.9167 6.09018 9.37959 5.72945 9.04727L1.87897 5.5L5.72945 1.95273Z" />
            </svg>
          </div>
          <div
            className="nav__action"
            data-action="next"
            onClick={() => setDate(new Date(year, month + 1, day))}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="11"
              viewBox="0 0 6 11"
            >
              <path d="M0.27055 9.04727C-0.0901833 9.37959 -0.0901832 9.9167 0.27055 10.249C0.633779 10.5837 1.2246 10.5837 1.58783 10.249L5.47151 6.67117C6.17616 6.02201 6.17616 4.97799 5.47151 4.32883L1.58782 0.75097C1.2246 0.416344 0.633778 0.416344 0.270549 0.75097C-0.0901831 1.0833 -0.090184 1.62041 0.270549 1.95273L4.12103 5.5L0.27055 9.04727Z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="calendar__content">
        <div className="calendar__days-names">
          {DAYS_OF_THE_WEEK.map((day) => (
            <div key={day} className="calendar__day-name">
              {day}
            </div>
          ))}
        </div>
        <div className="calendar__cells">
          {/* shift to the first day of the month */}
          {Array(startDay === 0 ? 6 : startDay - 1)
            .fill(null)
            .map((_, index) => {
              return (
                <div key={index} className="calendar__cell _other-month">
                  {index}
                </div>
              );
            })}
          {Array(days[month])
            .fill(null)
            .map((_, index) => {
              return (
                <div
                  key={index}
                  name="date"
                  className={`calendar__cell _cell-day ${
                    currentDay(index) ? "_current" : ""
                  } ${isTaskDay(index) ? "_active-day" : ""}`}
                  onClick={isEditing ? handleClickTaskDay : undefined}
                >
                  {index + 1}
                </div>
              );
            })}
        </div>
      </div>

      <input type="hidden" id="datepick_value" value="08.09.2023" />
      <div className="calendar__period">
        <p className="calendar__p date-end">
          Срок исполнения:{" "}
          <span className="date-control">
            {cardData?.date ? format(TASK_DAY, "dd.MM.yy") : ""}
          </span>
        </p>
      </div>
    </div>
  );
}
