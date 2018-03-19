import time
import RPi.GPIO as GPIO
GPIO.setmode(GPIO.BCM)
pins=[4, 25, 24, 23, 22, 27, 18, 17]
interval=.2

for pin in pins:
  GPIO.setup(pin, GPIO.OUT)

def pinOn(pin):
  GPIO.output(pin, GPIO.LOW)

def pinOff(pin):
  GPIO.output(pin, GPIO.HIGH)

while True:
  for pin in pins:
    pinOn(pin)
    time.sleep(interval)

  for pin in reversed(pins):
    pinOff(pin)
    time.sleep(interval)
