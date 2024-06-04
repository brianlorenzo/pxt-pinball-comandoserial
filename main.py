serial.redirect(SerialPin.USB_TX, SerialPin.USB_RX, BaudRate.BAUD_RATE115200)

def on_forever():
    serial.write_string("FD,5")
    basic.pause(1000)
basic.forever(on_forever)
