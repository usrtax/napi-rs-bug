#!/usr/bin/env coffee

import { blake3Round } from ".."

n = 0
buf = Buffer.from [1,2,3]
loop
  await blake3Round buf,3

  if n%1000 == 0
    console.log n, 'memoryUsage', process.memoryUsage()
  n += 1

