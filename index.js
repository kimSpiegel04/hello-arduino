const five = require('johnny-five');
const board = new five.Board();

board.on('ready', ()=>{ //waits for the board to fire the ready event
    const led = new five.Led(13); //instantiates an LED object on pin 13 
    led.blink(500); //makes the LED blink every 500ms
});