serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    Serial_ID = serial.readString()
})
let Serial_ID = ""
let isready = 0
let Key = ""
while (Key == "") {
    music.playTone(262, music.beat(BeatFraction.Whole))
}
while (Key != "" && isready == 0) {
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Yes)
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            . . # . .
            `)
    }
    isready = 1
}
if (isready == 1) {
    if (Serial_ID == "AUTH_STORE" && Key != "") {
        basic.showLeds(`
            . . . . .
            . . # . .
            . . # . .
            . . . . .
            . . # . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        serial.writeLine(Key)
    }
    if (Serial_ID == "GET_ID") {
        basic.showLeds(`
            # . # . #
            . # . # .
            # . # . #
            . # . # .
            # . # . #
            `)
        basic.showLeds(`
            . # . # .
            # . # . #
            . # . # .
            # . # . #
            . # . # .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        serial.writeLine("ACCEPT_AUTH")
    }
    if (Serial_ID == "SEND_ID") {
        Key = serial.readString()
        serial.writeLine("STOP_PROGRAM")
        basic.showIcon(IconNames.Yes)
    }
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
}
