# Blink 8


This ScratchGPIO example is a scratch parity example for the 8 blinking LEDs found in [WiringPi's example](http://wiringpi.com/examples/) (blink8.c) and Sunfounder's 8led.c code. AKA ["Lesson 3 Flowing LED lights"](http://www.sunfounder.com/index.php?c=case_incs&a=detail_&id=114&name=super%20kit)

## Prerequisites
1. Raspberry Pi
2. A wiring kit with breadboard, LEDs, jumpers, etc.  [This](http://amzn.com/B00MHK2QGC) is a great one.
3. [WiringPi](http://wiringpi.com/download-and-install/)
4. [ScratchGPIO](http://simplesi.net/scratchgpio/)
5. Understanding the Raspery Pi GPIO pins is important to understanding this code.  Read the chart and explanation raspberry-pi-gpio-pins.pdf in the root level directory of this project to see how pins are referenced differently by WiringPi, Broadcom and GPIO numbers.  

## Instructions
1. Wire your breadboard to your Pi in the manner shown in the image file 8led-diagram.png.  The long post of the led needs to be connected to the resistor.  The short post goes to the GPIO port.
2. Open the 8led.sb file with ScratchGPIO
3. Click the green flag to run.
4. If you want to change the speed at which the lights flash, change the value of the `interval` variable.
5. When in doubt, refer to the ScratchGPIO and WiringPi websites for set up and troubleshooting
6. There are two broad cast buttons on the Scripts canvas for convenience (broadcast 'AllOff' and broadcast 'AllOn') to turn all LEDs on or off if you want to reset them.

## Notes
The WiringPi examples all use the WiringPi's 0-based pin numbers.  ScratchGPIO references pins by the pin number (e.g. pin11 is GPIO0 and WiringPi's pin 0).  This example abstracts the ScratchGPIO pin references to 1-based references so they are easy to loop through.  Scratch uses 1-based arrays (list) unlike other programming languages that start at 0.

One thing to note (this is documented in other projects): the interface to the pins is opposite what you might think.  To turn an LED (pin) on, you send it 'low' (or 0 in WiringPi code), to turn if off, you send it 'high' (or 1).  The provided broadcast functions "led on" and "led off" wrap this functionality into more expected names.

Also, after importing the 8led.c depending on your Scratch window dimensions, some of the important parts of the scratch may be out of view.  You can scroll to see it or increase your window size. 


## Credits
All credit is due to the creators of WiringPi and ScratchGPIO.
