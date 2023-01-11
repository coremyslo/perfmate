export default class PerfMate {
    private value: number[];

    public constructor () {
        this.value = [PerfMate.getTime()];
    }

    private static getTime () : number {
        return performance.now() || Number(process.hrtime.bigint()) / 1000000;
    }

    public clear () : this {
        this.value = [PerfMate.getTime()];

        return this;
    }

    public end () : this {
        this.value[1] = PerfMate.getTime();

        return this;
    }

    public diff (round = 3) : string {
        return ((this.value[1] || PerfMate.getTime()) - this.value[0]).toFixed(round);
    }

    public log (message: string, round = 3) : void {
        console.log(`${message}: ${this.diff(round)}`);
    }

    public warn (message: string, round = 3) : void {
        console.warn(`${message}: ${this.diff(round)}`);
    }

    public error (message: string, round = 3) : void {
        console.error(`${message}: ${this.diff(round)}`);
    }
}
