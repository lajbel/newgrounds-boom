import { newgroundsPlugin } from "./newgrounds.js";

const k = kaboom({
    width: 500,
    height: 500,
    plugins: [ newgroundsPlugin ],
});

ngInit("52924:fdddr5yP", "oEZ7GGD79Wht9upZ4HH7Dw==", 1);

ngUnlockMedal(65022);
ngPostScore(10739, 1234);

console.log(ngUsername());
