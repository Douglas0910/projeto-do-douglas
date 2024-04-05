basic.forever(function () {
    basic.showIcon(IconNames.Skull)
    basic.pause(500)
    basic.showLeds(`
        # # # # .
        # . . . .
        # . . . .
        # . . . .
        # # # # .
        `)
    basic.showLeds(`
        . # # # #
        . # . . #
        . # # # #
        . # . # .
        . # . . #
        `)
    basic.showLeds(`
        # # # # #
        . . . . #
        . . . # .
        . . # . .
        . # . . .
        `)
})
