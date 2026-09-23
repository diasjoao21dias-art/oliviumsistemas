# Olivium Tecnologia — Landing page

Site completo com a logo oficial, favicon, navegação mobile compacta e WhatsApp **(34) 99921-4295**.

Atualização de 23/09/2026: cabeçalho e menu mais compactos no celular, barra inferior mais baixa com botões confortáveis para toque, descrição mais curta, botão principal “Pedir orçamento” e ilustração menor. As dimensões do layout de computador foram preservadas.

## Subir no GitHub

1. Extraia o ZIP.
2. Abra a pasta extraída que contém `index.html`.
3. Envie todos os arquivos e pastas de dentro dela para a raiz do repositório, substituindo os arquivos anteriores.
4. O `index.html` deve ficar diretamente na raiz do repositório.

Envie os arquivos extraídos; subir somente o ZIP não publica o site.

## Estrutura

- `index.html`: página, textos, links e informações para buscadores.
- `styles.css`: layout para computador e celular.
- `script.js`: menu mobile, navegação por seções e perguntas frequentes.
- `assets/`: logo, imagens, fontes locais e ícones.
- `favicon.ico`: ícone da aba do navegador.
- `brand/olivium-original.png`: logo original em alta resolução.

## Publicação

Este é um site estático em HTML, CSS e JavaScript. Não depende de Node.js, npm, banco de dados ou compilação.

A pasta pública é a raiz que contém `index.html`. Em serviços de hospedagem estática, use essa pasta como diretório de publicação.

### Configuração no Render — Static Site

- **Branch:** `main`
- **Root Directory:** deixe vazio
- **Build Command:** `echo "Site pronto"`
- **Publish Directory:** `.` (um ponto)

Depois de enviar os arquivos atualizados ao GitHub, aguarde a publicação automática. Se ela estiver desativada, use **Manual Deploy → Deploy latest commit** no Render. Este pacote não usa `npm install`, `npm run build` nem uma pasta `dist`.

Os caminhos dos arquivos são relativos, compatíveis com publicação em domínio próprio ou em uma subpasta do repositório.

## Domínio e contato

A URL canônica, o endereço de compartilhamento e os dados estruturados estão preparados para `https://oliviumsistemas.com.br/`.
Se publicar definitivamente em outro endereço, substitua esse domínio no `index.html`.

WhatsApp: `https://wa.me/5534999214295`  
E-mail: `dom_dias21@hotmail.com`

## Testar no computador

Com Python instalado, abra um terminal nesta pasta e execute:

```sh
python -m http.server 8000
```

Acesse `http://localhost:8000` no navegador.

## Conteúdo do pacote

Pacote completo atualizado em 23/09/2026, com `index.html` diretamente na raiz do ZIP. Todas as imagens e fontes usadas na página estão incluídas. A logo e seu símbolo foram fornecidos pelo proprietário da marca.
