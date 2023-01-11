export default class PerfMate {
    private value;
    constructor();
    private static getTime;
    clear(): this;
    end(): this;
    diff(round?: number): string;
    log(message: string, round?: number): void;
    warn(message: string, round?: number): void;
    error(message: string, round?: number): void;
}
