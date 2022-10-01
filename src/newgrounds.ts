import { KaboomCtx } from "kaboom";
import { NewgroundsPlugin } from "./types";
import ng from "newgrounds.js";

export function newgroundsPlugin(k: KaboomCtx): NewgroundsPlugin {
    return {
        ngConnect(id: string, cipher: string) {
            // @ts-ignore
            ng.connect(id, cipher, 0);
        },
        ngUnlockMedal(id: number) {
            ng.unlockMedal(id);
        },
        ngPostScore(id: number, value: number) {
            ng.postScore(id, value);
        },
        ngUsername() {
            return ng.getUsername();
        },
        ngVersion() {
            return ng.getVersion();
        },
        ngIsSupporter() {
            return Boolean(ng.isSupporter());
        },
    };
}

export default newgroundsPlugin;
