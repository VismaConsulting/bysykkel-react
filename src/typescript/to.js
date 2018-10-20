

let typescript = require('typescript');
let fs = require('fs');
let code = fs.readFileSync(__dirname + '/variable.ts', 'utf-8');

if (fs.existsSync(__dirname + '/typescript.js')) {
    fs.unlinkSync(__dirname + '/typescript.js');
}

code = typescript.transpileModule(code, {compilerOptions: {noImplicitUseStrict: true}});


fs.writeFileSync(__dirname + '/typescript.js', code.outputText);
