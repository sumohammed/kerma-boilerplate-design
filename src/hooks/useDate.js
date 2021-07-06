import { h } from "preact";

export const useDate = () => {
  const date = (date) => new Date(date);

  const currentDate = new Date();

  const getTime = (data) => {
    let period = date(data).getHours() >= 12 ? "pm" : "am";
    return date(data).getHours() + ":" + date(data).getMinutes() + " " + period;
  };

  const getDate = (data) => {
    return date(data).getDate();
  };

  const getWeekDay = (data, day = "short") => {
    return date(data).toLocaleString("default", {
      weekday: "short",
    });
  };

  const getMonth = (data, month = "short") => {
    return date(data).toLocaleString("default", {
      month: "short",
    });
  };

  const getFullYear = (data, month = "short") => {
    return date(data).getFullYear();
  };

  const getDateNMonth = (date, month = "short") => {
    let year =
      date.getFullYear() !== new Date().getFullYear()
        ? ", " + date.getFullYear().toString().slice(-2)
        : "";
    return (
      date.toLocaleString("default", {
        month: month,
      }) +
      " " +
      date.getDate() +
      year
    );
  };

  return {
    date,
    currentDate,
    getTime,
    getDate,
    getWeekDay,
    getMonth,
    getFullYear,
    getDateNMonth,
  };
};
