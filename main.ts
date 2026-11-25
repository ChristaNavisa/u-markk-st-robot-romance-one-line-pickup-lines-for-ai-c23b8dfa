import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "You must be a CAPTCHA — I can't prove I'm human around you.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
