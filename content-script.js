var url = 'https://docs.google.com/forms/d/e/1FAIpQLSc5dhW9bHQmSOLNNazEkiv0A5PmFq0wsp5GwzqgwhUgBofR5Q/viewform'
function fakeMouthEvent(target, eventName) {
    const event = document.createEvent('MouseEvents')
    event.initMouseEvent(eventName, true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
    target.dispatchEvent(event)
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	if (request === 'go') {
		window.location.href = url
	} else if (request === 'vote') {
		const yearRadio = document.querySelector('#i14')
		const nextPage = document.querySelector('[jsname=OCpkoe]')

		if (yearRadio) {
			fakeMouthEvent(yearRadio, 'click')
			setTimeout(() => {
				fakeMouthEvent(nextPage, 'click')
			}, 200)
		}
	}
})

const aiRadio = document.querySelector('[data-value=「名探偵コナン」灰原哀]')
const submit = document.querySelector('[jsname=M2UYVd]')

if (aiRadio) {
	fakeMouthEvent(aiRadio, 'click')
	setTimeout(() => {
		fakeMouthEvent(submit, 'click')
		chrome.runtime.sendMessage('time')
	}, 200)
}
