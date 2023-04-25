var url = 'https://docs.google.com/forms/d/e/1FAIpQLSeCcG-Fpw7UsSuYX2KbT6xxB-ppqE2uUx7W1oimuXsmsFRaFQ/viewform'
function fakeMouthEvent(target, eventName) {
    const event = document.createEvent('MouseEvents')
    event.initMouseEvent(eventName, true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
    target.dispatchEvent(event)
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	if (request === 'go') {
		window.location.href = url
	}
	if (request === 'vote') {
		const emailCheckbox = document.querySelector('#i5')
		const yearRadio = document.querySelector("[data-value='1990年代']")
		const nextPage = document.querySelector('[jsname=OCpkoe]')

		if (emailCheckbox) {
			fakeMouthEvent(yearRadio, 'click')
			setTimeout(() => {
				fakeMouthEvent(emailCheckbox, 'click')
				fakeMouthEvent(nextPage, 'click')
			}, 200)
		}
	}
})

const aiRadio = document.querySelector('[data-value=「名探偵コナン」灰原哀]')
// const submit = document.querySelector('[jsname=M2UYVd]')
const nextPage = document.querySelector('[jsname=OCpkoe]')
// const input = document.querySelector('[jsname=YPqjbf]')

if (aiRadio) {
	fakeMouthEvent(aiRadio, 'click')
	setTimeout(() => {
		fakeMouthEvent(nextPage, 'click')
	}, 200)
}

if (input) {
	chrome.runtime.sendMessage('code', function(req, sender, sendResponse) {
		input.value = req;
		// fakeMouthEvent(submit, 'click')
		chrome.runtime.sendMessage('time')
	})
}
