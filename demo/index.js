#!/usr/bin/env -S node --es-module-specifier-resolution=node --trace-uncaught --expose-gc --unhandled-rejections=strict
var n;

import {
  blake3Round
} from "..";

// import { randomBytes, blake3Round, zipU64, unzipU64, u64Bin, binU64,z85Dump,z85Load } from ".."
n = 0;

while (true) {
  // z85Load z85Dump Buffer.from [1,2,3]
  // binU64 u64Bin 1024
  // binU64 u64Bin 256
  // binU64 u64Bin 255
  // binU64 u64Bin 1
  // li = [2000,50*10000*10000,34359738368]
  // x = zipU64 li
  // unzipU64 x,li.length
  await blake3Round([new Uint8Array([1]), '3wzw23242w'], 3);
  //gc()
  if (n % 1000 === 0) {
    console.log(n);
  }
  ++n;
}

//console.log randomBytes(10)
/*

  console.log u64Bin 1024
  console.log u64Bin 256
  console.log u64Bin 255
  console.log u64Bin 1
  console.log u64Bin -1
  console.log u64Bin -256
  console.log u64Bin -1024
*/
