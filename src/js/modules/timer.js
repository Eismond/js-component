const timer = (id, deadline) => {
    console.log('timer')
    const addZero = (num) => {
        if (num <= 9) {
            return `0${num}`;
        }

        return num;
    }

    const getTimeRemaining = (endtime) => {
        const timeForShow = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((timeForShow / 1000) % 60), // get Time in second
            minutes = Math.floor((timeForShow / 1000 / 60) % 60),
            hours = Math.floor((timeForShow / (1000 * 60 * 60)) % 24),
            days = Math.floor((timeForShow / (1000 * 60 * 60 * 24)))

        return {
            'total': timeForShow,
            days,
            hours,
            minutes,
            seconds
        }
    }

    const setClock = (selector, endtime) => {
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        updateClock()
        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.textContent = addZero(t.days);
            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);

            if (t.total <= 0) {
                days.textContent = '00';
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';

                clearInterval(timeInterval);
            }
        }
    }

    setClock(id, deadline);
}

export default timer;