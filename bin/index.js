#!/usr/bin/env node
const PerfMate = require("../dist/index.js").default;

(function(){
    const perf = new PerfMate()
    setTimeout(() => {
        perf.log("named label");
    }, 100)
}());



