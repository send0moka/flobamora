import { format } from "date-fns";

export function getUserTime() {

  const userTime = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Shanghai" 
  });

  return format(userTime, "HH:mm:ss");
}