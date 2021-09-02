## Newgrounds Api plugin for Kaboom.js

With this [Kaboom](https://github.com/replit/kaboom) plugin you can use medals and post scores on [Newgrounds.com](https://newgrounds.com)

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

```.js
ngUnlockMedal("Medal Id in Number");
```

### Post Scores

```.js
ngPostScore("Board id in Number", "Score for post in Number");
```

## Thanks to

Kaboom <br>
KilledByAPixel Newgrounds API