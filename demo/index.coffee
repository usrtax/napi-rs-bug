#!/usr/bin/env coffee

import { blake3Round } from ".."

n = 0
loop
  await blake3Round [
    new Uint8Array([1]),
    '3wzw23242w'
  ],3
  if n%1000 == 0
    console.log n
  ++n
