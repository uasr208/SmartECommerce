import moment from "moment";

export const getDatefromFireStoreTimeStampObject = (fireStoreDateObject) => {
  const date = new Date(fireStoreDateObject.seconds * 1000);
  return moment(date).format("MMM Do, hh:mm A");
};
