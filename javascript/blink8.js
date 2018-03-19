const rpio = require('rpio');
const argv = require('yargs').argv

rpio.init({
    gpiomem: true,
    mapping: 'gpio',
});

const direction = argv._[0];
const interval = argv._[1] || 60;

const pins = [
    4, 25, 24, 23, 22, 27, 18, 17
];

function pinOn(pin) {rpio.write(pin, 0);}
function pinOff(pin) {rpio.write(pin, 1);}

function turn(direction) {
    pins.forEach((pin) => {
        if (direction === 'on') {
            pinOn(pin);
        }
        if (direction === 'off') {
            pinOff(pin);
        }
    });
}

function blink8() {
    while (true) {
        for (let i=0; i< pins.length; i++) {
            pinOn(pins[i]);
            rpio.msleep(interval);
        }
        for (let i=pins.length-1; i>=0; i--) {
            pinOff(pins[i]);
            rpio.msleep(interval);
        }
    }
}

turn(direction);
//blink8();


//readInput();

