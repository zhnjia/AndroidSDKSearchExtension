// Saves options to chrome.local.sync.
function updateStatus() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.innerHTML = '<strong>Options saved.</strong>';
    setTimeout(function() {
      status.textContent = '';
    }, 2000);
}

function save_options() {
  var url = document.getElementById('baseurl').value;
  chrome.storage.local.set({
    baseUrl: url
  }, updateStatus);
    var path = document.getElementById('localdocpath').value;
    chrome.storage.local.set({
        localDocPath: path
    }, updateStatus);
}

function restore_options() {
  chrome.storage.local.get({
    baseUrl: 'https://android.googlesource.com'
  }, function(items) {
    document.getElementById('baseurl').value = items.baseUrl;
  });
    chrome.storage.local.get({
        localDocPath: 'file:///opt/android_tools/android-sdk-linux_x86/docs'
    }, function(items) {
        document.getElementById('localdocpath').value = items.localDocPath;
    });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
