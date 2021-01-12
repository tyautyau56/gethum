import { DenonConfig } from "https://deno.land/x/denon/mod.ts";

const config: DenonConfig = {
    scripts: {
        dev: {
            cmd: "deno index.ts",
            allow: [
                "run",
                "net"
            ],
            watch: true,
            unstable: true
        }
    }
};

export default config;
