import fs from "node:fs";

const ENTRY = "That meeting could've been an email, but then we'd have missed 45 minutes of staring at each other on mute.";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", ENTRY);
process.stdout.write(ENTRY);
