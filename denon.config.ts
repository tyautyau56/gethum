import { DenonConfig } from "https://deno.land/x/denon/mod.ts";

const config: DenonConfig = {
    scripts: {
        dev: {
            cmd: "deno run --importmap=import_map.json index.ts",
            allow: [
                "run",
                "net",
                "read",
                "env"
            ],
            watch: true,
            unstable: true,
        },
    }
};

export default config;
