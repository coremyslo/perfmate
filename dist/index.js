"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PerfMate {
    constructor() {
        this.value = [PerfMate.getTime()];
    }
    static getTime() {
        return performance.now() || Number(process.hrtime.bigint()) / 1000000;
    }
    clear() {
        this.value = [PerfMate.getTime()];
        return this;
    }
    end() {
        this.value[1] = PerfMate.getTime();
        return this;
    }
    diff(round = 3) {
        return ((this.value[1] || PerfMate.getTime()) - this.value[0]).toFixed(round);
    }
    log(message, round = 3) {
        console.log(`${message} : ${this.diff(round)}`);
    }
    warn(message, round = 3) {
        console.warn(`${message} : ${this.diff(round)}`);
    }
    error(message, round = 3) {
        console.error(`${message} : ${this.diff(round)}`);
    }
}
exports.default = PerfMate;
