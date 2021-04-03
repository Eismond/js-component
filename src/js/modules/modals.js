const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector),
            windowWithAttr = document.querySelectorAll('[data-modal]');

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                windowWithAttr.forEach((item) => {
                    item.style.display = 'none';
                })

                modal.style.display = 'block';
                // document.body.style.overflow = 'hidden';
                document.body.classList.add('modal-open');
            })
        })

        close.addEventListener('click', () => {
            modal.style.display = 'none';
            windowWithAttr.forEach((item) => {
                item.style.display = 'none';
            })
            // document.body.style.overflow = '';
            document.body.classList.remove('modal-open');
        })

        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeClickOverlay) {
                modal.style.display = 'none';
                windowWithAttr.forEach((item) => {
                    item.style.display = 'none';
                })
                // document.body.style.overflow = 'visible';
                document.body.classList.remove('modal-open');
            }
        });
    }

    function showModalByTime(selector, time = 6000) {
        setTimeout(() => {
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = 'hidden';
        }, time)
    }

    const callEngBtn = '.popup_engineer_btn',
        modalEngineer = '.popup_engineer',
        modalEngineerClose = '.popup_engineer .popup_close';

    bindModal(callEngBtn, modalEngineer, modalEngineerClose);
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc .popup_calc_close');
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
    showModalByTime('.popup', 6000000)
}

export default modals;