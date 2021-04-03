import { validationDigits } from './validation';

const changeModalState = (state) => {
    const windowForm = document.querySelectorAll('.balcon_icons_img'),
        windowWidth = document.querySelectorAll('#width'),
        windowHeight = document.querySelectorAll('#height'),
        windowType = document.querySelectorAll('#view_type'),
        windowProfile = document.querySelectorAll('.checkbox');

    validationDigits('#width');
    validationDigits('#height');

    function bindActionToElement(event, elem, prop) {
        elem.forEach((item, i) => {
            item.addEventListener(event, () => {
                // if (elem.length > 1) {
                //     state[prop] = i;
                //     console.log('state in if', state)
                //     return;
                // }

                switch (item.nodeName) {
                    case 'SPAN':
                        state[prop] = i;
                        console.log('span');
                        break;
                    case 'INPUT':
                        console.log('input');
                        if (item.getAttribute('type') === 'checkbox') {
                            i === 0 ? state[prop] = 'cold' : state[prop] = 'warm';
                            elem.forEach((box, j) => {
                                box.checked = false;

                                if (i == j)
                                    box.checked = true;
                            })
                            console.log('checkbox');
                        } else {
                            state[prop] = item.value;
                            console.log('input');
                        }
                        break;
                    case 'SELECT':
                        state[prop] = item.value;
                        console.log('select');
                        break;
                    default:
                        console.log('default');
                        break;
                }

                console.log('state', state)
            })
        })
    }

    bindActionToElement('click', windowForm, 'windowForm');
    bindActionToElement('input', windowHeight, 'height');
    bindActionToElement('input', windowWidth, 'width');
    bindActionToElement('change', windowType, 'type');
    bindActionToElement('change', windowProfile, 'profile');
}

export default changeModalState;