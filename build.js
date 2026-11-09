// Gera o index.html (arquivo único, abre no navegador ou no GitHub Pages) a partir de src/app.body.html
const fs = require('fs');
const body = fs.readFileSync('src/app.body.html', 'utf8');
fs.writeFileSync('index.html', `<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Boletim em Dia · EETEPA</title>
<meta name="description" content="Transforme o boletim da turma do PROESC em planilha de acompanhamento e relatório em PDF, prontos para imprimir. Gratuito e sem cadastro.">
<meta name="author" content="Vinicius Ramos">
<meta name="theme-color" content="#1f6f4a">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='16' fill='%231f6f4a'/%3E%3Ctext x='32' y='44' font-family='Arial,Helvetica,sans-serif' font-size='34' font-weight='700' fill='%23fff' text-anchor='middle'%3EB%3C/text%3E%3C/svg%3E">
<link rel="canonical" href="https://viniciusframos0.github.io/boletim-em-dia-eetepa/">
<meta property="og:type" content="website">
<meta property="og:locale" content="pt_BR">
<meta property="og:site_name" content="Boletim em Dia">
<meta property="og:title" content="Boletim em Dia · EETEPA">
<meta property="og:description" content="Transforme o boletim da turma do PROESC em planilha de acompanhamento e relatório em PDF, prontos para imprimir. Gratuito e sem cadastro.">
<meta property="og:url" content="https://viniciusframos0.github.io/boletim-em-dia-eetepa/">
<meta property="og:image" content="https://viniciusframos0.github.io/boletim-em-dia-eetepa/og-image.png">
<meta property="og:image:type" content="image/png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="Boletim em Dia: o boletim da turma do PROESC vira planilha de acompanhamento e relatório para imprimir">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Boletim em Dia · EETEPA">
<meta name="twitter:description" content="Transforme o boletim da turma do PROESC em planilha de acompanhamento e relatório em PDF, prontos para imprimir.">
<meta name="twitter:image" content="https://viniciusframos0.github.io/boletim-em-dia-eetepa/og-image.png">
</head>
<body>
${body}
</body>
</html>
`);
console.log('index.html gerado');
