# Boletim em Dia · EETEPA

Transforma o **Boletim de avaliações da turma** exportado do **PROESC** (em PDF) numa planilha de acompanhamento em Excel e num relatório em PDF para imprimir, prontos para a coordenação pedagógica.

Versão para as escolas EETEPA. A versão para o sistema da SEDUC-PA está em [boletim-em-dia](https://github.com/viniciusframos0/boletim-em-dia).

## Como usar

1. No PROESC, gere o boletim de avaliações da turma e salve como PDF.
2. Abra a ferramenta e envie o PDF.
3. Confira os alunos lidos e os avisos.
4. Escolha as avaliações, as disciplinas e as colunas extras, e baixe a planilha (Excel) ou o relatório (PDF).

## O que ela faz

- Média de aprovação 7,0 (pode ser alterada na tela), com notas abaixo da média destacadas.
- Excel já configurado para impressão: paisagem, margens estreitas, ajustado em 1 página (A4).
- Escolha de avaliações (AV1, AV2, média semestral, recuperação, média final, faltas) e de disciplinas por área (base comum e formação técnica).
- Colunas extras: nº de notas abaixo da média, total de faltas, % de faltas e situação.
- Linhas opcionais de resumo da turma.
- Alunos que cursam só algumas disciplinas (dependência) aparecem identificados, e dá para incluir ou tirar.
- Confere a soma das faltas de cada aluno com o total impresso no boletim e avisa se houver diferença.
- Arquivos saem com o nome da turma, por exemplo `acompanhamento-Tec-Edificacoes.xlsx`.

## Privacidade

Tudo roda no navegador. O PDF e as notas dos alunos **não são enviados para nenhum servidor**.

## Para desenvolvedores

- `src/app.body.html`: código-fonte (interface, leitura do PDF, geração do Excel e do PDF).
- `node build.js`: gera o `index.html` final a partir do código-fonte (inclui as etiquetas de compartilhamento).
- `og-image.png`: imagem que aparece ao compartilhar o link (1200×630).
- Bibliotecas (via cdnjs): pdf.js 3.11.174, ExcelJS 4.4.0, pdf-lib 1.17.1.

## Autor

Vinicius Ramos · vinicius.ramos@docente.sectet.pa.gov.br
