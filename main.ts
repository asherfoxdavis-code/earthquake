let center: Position = null
player.onChat("earthquake", function () {
    center = positions.add(
    player.position(),
    pos(-30, 0, 0)
    )
    for (let index = 0; index < 30; index++) {
        center = positions.add(
        center,
        pos(1, 0, Math.randomRange(0, 2))
        )
        blocks.fill(
        AIR,
        positions.add(
        center,
        pos(0, 0, -1)
        ),
        positions.add(
        center,
        pos(0, -4, 1)
        ),
        FillOperation.Replace
        )
        blocks.place(LAVA, positions.add(
        center,
        pos(0, -3, 0)
        ))
    }
})
