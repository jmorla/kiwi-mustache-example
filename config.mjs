import * as esbuild from 'esbuild';
import fs from 'fs';


function resolve(path) {
    return "src/main/resources/static/generated/" + path;
}

function resolveAll(paths) {
    return paths.map(resolve);
}

function lookupEntries(path, entries) {
    const files = fs.readdirSync(path);
    for (let file of files) {
        const stat = fs.statSync(path + '/' + file);
        if (stat.isDirectory()) {
            console.log(path + '/' + file)
            lookupEntries(path + '/' + file, entries);
            continue;
        }
        if (stat.isFile()) {
            if (file.endsWith('.js')) {
                entries.push(path + '/' + file);
            }
        }
    }
}

function getGeneratedEntries() {
    const entries = [];
    lookupEntries("src/main/resources/static/generated", entries);
    return entries;
}

await esbuild.build({
    entryPoints: [
        ...getGeneratedEntries(),
        ...resolveAll([])
    ],
    bundle: true,
    outdir: './target/classes/static/generated',
    loader: { ".js": "jsx" }
});