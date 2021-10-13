function setAlarm(event) {
  let minutes = parseFloat(event.target.value);
  chrome.browserAction.setBadgeText({ text: 'ON' });
  chrome.alarms.create({ delayInMinutes: minutes });
  chrome.storage.sync.set({ minutes: minutes });
  window.close();
}

function clearAlarm() {
  chrome.browserAction.setBadgeText({ text: '' });
  chrome.alarms.clearAll();
  window.close();
}

//An Alarm delay of less than the minimum 1 minute will fire
// in approximately 1 minute incriments if released
document.getElementById('15min').addEventListener('click', setAlarm);
document.getElementById('30min').addEventListener('click', setAlarm);
document.getElementById('1hr').addEventListener('click', setAlarm);
document.getElementById('turnOff').addEventListener('click', clearAlarm);