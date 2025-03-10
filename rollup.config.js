import typescript from "rollup-plugin-typescript2";
import del from"rollup-plugin-delete";

export default {
    input: "source/index.ts",
    output: [
        {
            file: "library/index.cjs",
            format: "cjs"
        },
        {
            file: "library/index.esm.js",
            format: "esm"
        },
    ],
    plugins: [
        del({targets:["library/*"]}),
        typescript({useTsconfigDeclarationDir: true})
    ]
}