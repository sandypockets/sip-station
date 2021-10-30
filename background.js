chrome.alarms.onAlarm.addListener(function() {
  chrome.action.setBadgeText({text: ''});
  const options = {
    type:     'basic',
    iconUrl:  'images/water256.png',
    title:    'Sip Station',
    message:  'Drink water!',
    requireInteraction: true,
    priority: 0
  }

  chrome.notifications.create(options)
  chrome.storage.sync.get(['minutes'], function(item) {
    chrome.action.setBadgeText({ text: 'ON' });
    chrome.alarms.create({ delayInMinutes: item.minutes });
  });
});

chrome.notifications.onButtonClicked.addListener(function() {
  chrome.action.setBadgeText({ text: '' });
  chrome.alarms.clearAll();
  window.close();
});