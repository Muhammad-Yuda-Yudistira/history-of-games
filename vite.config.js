import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

export default defineConfig(({ mode }) => {
    // const envFile =
    //     process.env.NODE_ENV === "production" ? ".env.production" : ".env";
    let envFile;

    switch (process.env.NODE_ENV) {
        case "production":
            envFile = ".env.production";
            break;
        case "preview":
            envFile = ".env.preview";
            break;
        case "development":
            envFile = ".env";
            break;
    }

    dotenv.config({ path: envFile });

    console.log(`Running in ${mode} mode.`);
    console.log(process.env.APP_URL);

    const baseURL = process.env.APP_URL || "/";
    const host = process.env.VITE_HOST || "localhost";

    console.log("baseURL: ", baseURL);
    console.log("host: ", host);

    return {
        plugins: [
            laravel({
                input: "resources/js/app.jsx",
                refresh: true,
            }),
            react(),
        ],
        base: baseURL,
        server: {
            host: host,
            headers: {
                "Content-Type": "application/javascript",
            },
        },
        build: {
            outDir: "public/build",
        },
    };
});
