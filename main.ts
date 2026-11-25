import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  'My older sister, lending me her last twenty, said, "Pay me back by never needing it again."';

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
