## Newgrounds Api plugin for Kaboom.js

With this [Kaboom](https://github.com/replit/kaboom) plugin you can use medals and post scores on [Newgrounds.com](https://newgrounds.com)

## Quick example 

```.js
import { newgroundsPlugin } from "https://cdn.jsdelivr.net/gh/lajbel/newgrounds-boom@master/newgrounds.js";

const k = kaboom({
    width: 500,
    height: 500,
    plugins: [ newgroundsPlugin ],
});

ngInit("52924:fdddr5yP", "oEZ7GGD79Wht9upZ4HH7Dw==", 1);

ngUnlockMedal(65022);
ngPostScore(10739, 1234);
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

## Special
If you create a game using this api, let me know in an issue and I will put the newgrounds link as a demo, thank you!

## Thanks to

* [Kaboom](), the way to make games **fun** and **fast** <br>
* [KilledByAPixel Newgrounds API](https://github.com/KilledByAPixel/newgrounds)