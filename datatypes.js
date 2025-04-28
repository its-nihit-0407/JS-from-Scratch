"use strict";

let number = 2;
let floatingnum = 2.23;

let literal = "Nishidh";
let Boolean1 = true;
let value = null;
let undefined_val = undefined;
let bigint = 234567890123456789012345678901234567890n;
let symbol = Symbol("123");

console.table({
    number: typeof number,
    floatingnum: typeof floatingnum,
    literal: typeof literal,
    Boolean1: typeof true,
    value: typeof value,
    undefined_val: typeof undefined_val,
    bigint: typeof bigint,
    symbol: typeof symbol
})