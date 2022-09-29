let humidite = 0
basic.forever(function () {
    humidite = pins.analogReadPin(AnalogPin.P0)
    if (humidite > 300) {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.showIcon(IconNames.Sad)
    }
    serial.writeLine("" + (pins.analogReadPin(AnalogPin.P0)))
    basic.pause(1000)
})
