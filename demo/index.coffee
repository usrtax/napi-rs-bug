#!/usr/bin/env coffee

import { blake3Round } from ".."

n = 0
loop
  await blake3Round [
    new Buffer([1]),
    '3wzw23242w'
  ],3

  if n%1000 == 0
    console.log n, 'memoryUsage', process.memoryUsage()
  n += 1

