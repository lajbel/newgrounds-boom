## Kaboom Newgrounds API Plugin

With this [Kaboom](https://github.com/replit/kaboom) plugin you can use medals and post scores on [Newgrounds.com](https://newgrounds.com)

## Quick example 

```.js
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
```

## How to use 

### Init

In your project, activate the "api tools" and you will see the following credentials

![](https://imgur.com/l4W6YAV.png)

Before using the newgrounds features, you'll need to connect your game, use `ngInit("App ID", "Encryption Key")`. You can activate the debug mode, which will return the results by console (cool if you have not yet published your game), use `ngInit("App ID", "Encryption Key", 1);`


Using the credentials of this game, it would be like this:
```.js
ngInit("52924:fdddr5yP", "oEZ7GGD79Wht9upZ4HH7Dw==");

```

### Unlock Medals 

Once you have done the previous step, you can use the scores and medals. Let's see the medals, for that you must first have a medal, duh

![](https://imgur.com/VwzxtXn.png)

We will use the `ngUnlockMedal("Medal ID in Number")` function

```.js
ngUnlockMedal(65022);
```

### Post Scores

Now, to use the scoreboards, again, we have to have a scoreboard **duh**

![](https://imgur.com/ySpdtn3.png)

We will use the `ngPostScore("Board ID in Number", "score")` function

```.js
ngPostScore(10739, 1234);
```

### Other functions

`ngUsername()`: returns a String with the newgrounds username of the player <br>
`ngVersion()`: returns a Number with the version of the newgrounds app <br>
`ngIsSupport()`: returns a Boolean with the status of newgrounds **Support** player <br>
`ngCall(component, parameters?)`: call any component of [Newgrounds.io](http://www.newgrounds.io/help/components/)

## Thanks to

* [Kaboom](https://github.com/replit/kaboom), the way to make games **fun** and **fast** <br>
* [JS Wrapper NG.io (rv)](https://github.com/lajbel/newgrounds-reversion), library for use ng.io functions in js
