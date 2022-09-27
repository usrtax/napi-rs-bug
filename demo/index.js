#!/usr/bin/env -S node --es-module-specifier-resolution=node --trace-uncaught --expose-gc --unhandled-rejections=strict
var n;

import {
  blake3Round
} from "..";

n = 0;

while (true) {
  await blake3Round([new Uint8Array([1]), '3wzw23242w'], 3);
  if (n % 1000 === 0) {
    console.log(n);
  }
  ++n;
}
