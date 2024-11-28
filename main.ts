input.onButtonPressed(Button.A, function () {
    music.play(music.stringPlayable("D G E A D F B A ", 199), music.PlaybackMode.UntilDone)
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . . . # .
        . # . . .
        . . . . .
        . # # # .
        # . . . #
        `)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Happy)
})
input.onGesture(Gesture.FreeFall, function () {
    basic.showString("Naaaaaaaaaaaaaao ")
})
input.onButtonPressed(Button.B, function () {
    music.setVolume(156)
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showArrow(ArrowNames.South)
})
basic.showString("Olá ")
