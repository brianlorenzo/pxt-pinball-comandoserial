serial.redirect(
SerialPin.P13,
SerialPin.P14,
BaudRate.BaudRate115200
)
basic.forever(function () {
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(500)
    pinball.activateFlipperAfter(pinball.Mecanismo.FlipperDerecho, randint(0, 4000))
    basic.showIcon(IconNames.Heart)
    basic.pause(500)
})
