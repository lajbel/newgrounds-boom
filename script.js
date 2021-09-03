import { newgroundsPlugin } from "./newgrounds.js";

kaboom({
    width: 500,
    height: 500,
    font: "unscii",
    plugins: [ newgroundsPlugin ]
});

ngInit("52924:fdddr5yP", "oEZ7GGD79Wht9upZ4HH7Dw==", 1);

ngUnlockMedal(65025);

add([
    text("ohhi " + String(ngUsername()), {size: 40, width: 400}),
    origin("center"),
    pos(width() / 2, height() / 2)
]);

keyPress("space", () => {
    add([
        text(String(ngVersion()), {size: 30}),
        origin("center"),
        pos(width() / 2, height() - 80)
    ]);
});
 
mouseClick(() => {
    ngUnlockMedal(65022);
    ngPostScore(10739, rand(0, 9999).toString());
});