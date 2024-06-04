serial.redirect(
SerialPin.P13,
SerialPin.P14,
BaudRate.BaudRate115200
)
basic.forever(function () {
    basic.showIcon(IconNames.SmallHeart)
    serial.writeLine("FD,5")
    basic.pause(500)
    basic.showIcon(IconNames.Heart)
    basic.pause(500)
})
