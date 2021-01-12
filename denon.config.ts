import { DenonConfig } from "https://deno.land/x/denon/mod.ts";

const config: DenonConfig = {
    scripts: {
        dev: "deno --allow-all index.ts"
    }
};

export default config;
