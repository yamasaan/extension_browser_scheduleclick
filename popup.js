const schedule = document.getElementById("schedule");
const schedule_submit = document.getElementById("schedule_submit");

const settingSchedule = () => {
  const today = new Date();
  const time = new Date( today.getMonth() + 1 + " " + today.getDate() + " " + today.getFullYear() + " " + schedule.value );
  const result = time.valueOf();
  return result;
};

const createAlarms = () => {
  chrome.alarms.create("simple", { when: settingSchedule() });
};

schedule_submit.addEventListener("click", () => {
  createAlarms();
  window.close();
});
