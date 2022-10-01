export interface NewgroundsPlugin {
    /** Connect to Newgrounds.io */
    ngConnect(
        /** ID of app, check API TOOLS */
        id: number,
        /** Cipher code of app, check API TOOLS */
        cipher: string
    ): void;

    /** Unlock a medal. [Documentation](http://www.newgrounds.io/help/components/#medal-unlock)*/
    ngUnlockMedal(
        /** ID of medal. */
        id: number
    ): void;

    /** Post a score in a scoreboard */
    ngPostScore(
        /** ID of scoreboard */
        id: number,
        /** Value of the score */
        value: number
    ): void;

    // INFO
    /** Get the username of player */
    ngUsername(): string;
    /** Get the version of the game defined on API TOOLS */
    ngVersion(): string;
    /** Check if user is a Newgrounds Supporter */
    ngIsSupporter(): boolean;
}
