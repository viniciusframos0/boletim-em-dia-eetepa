// Gera o index.html (arquivo único, abre no navegador ou no GitHub Pages) a partir de src/app.body.html
const fs = require('fs');
const body = fs.readFileSync('src/app.body.html', 'utf8');
fs.writeFileSync('index.html', `<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Boletim em Dia · EETEPA</title>
</head>
<body>
${body}
</body>
</html>
`);
console.log('index.html gerado');
