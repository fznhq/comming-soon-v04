(function(countDownDate) {
    var days = document.getElementById("days");
    var hours = document.getElementById("hours");
    var minutes = document.getElementById("minutes");
    var seconds = document.getElementById("seconds");

    function getLocalTime(offset) {
        var date = new Date();
        var localTime = date.getTime();
        var localOffset = date.getTimezoneOffset() * 60000;
        var utc = localTime + localOffset;
        return new Date((utc + (3600000 * offset))); 
    }

    function pad(num) {
        return (num < 10 ? '0' : '') + num;
    }

    function convertTime(time) {
        return {
            days: pad(Math.floor(time / (1000 * 60 * 60 * 24))),
            hours: pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))),
            minutes: pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))),
            seconds: pad(Math.floor((time % (1000 * 60)) / 1000)),
        }
    }

    function countDown(interval) {
        var now = getLocalTime(7); //TimeZone UTC+7
        var distance = countDownDate - now;
        
        if (distance <= 0) {
            try { clearInterval(interval); } catch(e) {};
        } else {
            var time = convertTime(distance);
            days.innerHTML = time.days;
            hours.innerHTML = time.hours;
            minutes.innerHTML = time.minutes;
            seconds.innerHTML = time.seconds;
        }
    }

    countDown();
    var count = setInterval(function() {
        countDown(count);
    }, 1000);
})(countDownDate.getTime());