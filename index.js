// Elements
var times = document.getElementById('times'),
    goBtn = document.getElementById('go'),
    voteBtn = document.getElementById('vote'),
    input = document.getElementById('code')
var count = window.localStorage.getItem('time') || 0
times.innerText = count

function sendMsgToContentScript(msg) {
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, msg)
    })
}

goBtn.onclick = function(e) {
    e.preventDefault()
    sendMsgToContentScript('go')
}

voteBtn.onclick = function(e) {
    e.preventDefault()
    sendMsgToContentScript('vote')
}

chrome.runtime.onMessage.addListener(function(req, sender, sendRes) {
    if (req === 'time') {
        var count = window.localStorage.getItem('time')
        if (count) count = parseInt(count)
        else count = 0
        count ++
        window.localStorage.setItem('time', count)
        times.innerText = count
    }
    if (req === 'code') {
        sendRes(input.value)
    }
})
