const five = require('johnny-five');
const board = new five.Board();

board.on('ready', ()=>{ //waits for the board to fire the ready event
    const led = new five.Led(13); //instantiates an LED object on pin 13 
    // led.blink(500); //makes the LED blink every 500ms
    var blinkCount = 0; 
    const blinkMax = 10; //configures how many times the LED should blink in total

    led.blink(500, ()=>{
        blinkCount++;
        console.log(`I have changed state ${blinkCount} times`);
        if(blinkCount>=blinkMax){
            console.log('I shall stop blinking now');
            led.stop(); //once blinkCount has hit blinkMax, invokes the stop method
        }
    });
});