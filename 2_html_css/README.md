# HTML

O `HTML` (Hyper Text Markup Language ou Linguagem de Marcação de Hipertexto) é o componente base para o desenvolvimento de Sites e páginas Web. Isso porque ele é a estrutura onde são adicionados todos os conteúdos, textos, vídeos, imagens (e por ai vai), que compõem os Sites que navegamos todos os dias.

Se fizermos um paralelo com o corpo humano, o `HTML` seria toda a nossa estrutura óssea e muscular, que contém e suporta o nosso conteúdo, nesse caso os órgãos.

É uma linguagem com sintaxe própria e estruturada através de tags.

## Estrutura básica de uma página

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Título da página</title>
</head>
<body>
  
</body>
</html>
```

`<!DOCTYPE html>` é o tipo de documento, nos nossos casos será sempre `HTML`.

`<html></html>` demarca o início e o fim do documento, todas a demais tags que virão precisarão estar dentro da tag `HTML`.

`<head></head>` é o cabeçalho da página. Local onde ficarão as informações de configuração da página, como metatags e folhas de estilo.

`<body></body>` é o corpo da página, muito similar a um e-mail, é aqui que colocaremos todos os nossos elementos e conteúdos. 

Se você estiver utilizando o `VSCode` para desenvolver suas páginas, não esqueça que existe o atalho `! + enter` logo no início de um documento `HTML` em branco e essa estrutura básica será criada automáticamente.

[Aqui](https://www.loom.com/share/a0e22f535fd74b3e9940cd1366212ed5?sharedAppSource=personal_library) tem um vídeo bem curtinho explicando um pouco mais sobre a estrutura inicial das páginas HTML.

## Principais Elementos

### Títulos e sub-títulos `<h1>, <h2>, ...`
Muito similar ao que temos ao criar um texto no Word ou Google Docs, temos elementos pré-formatados para títulos e sub-títulos.

Existem 6 tipos de `<h>`, indo de 1 a 6.  
O `<h1>` é o maior texto e destinado para o título principal da página. Normalmente temos apenas 1 `<h1>` por página.  
Os demais devem ser utilizados para sub-títulos ou tópicos importantes da página.  
Vão ficando cada vez menores e menos destacados conforme seu número aumenta.

```html
<h1>Título principal da página</h1>
<h2>Sub-título 1</h2>
<h3>Sub-título 2</h3>
<h4>Sub-título 3</h4>
<h5>Sub-título 4</h5>
<h6>Sub-título 5</h6>
```
[Aqui](https://www.loom.com/share/6f45cadadd7d4a9ea5c155ac1610fc8e?sharedAppSource=personal_library) tem um vídeo bem curtinho falando sobre os títulos e outros elementos de texto.

### Parágrafos `<p>`
Como o próprio nome já diz é destinado para acomodar os parágrafos com textos comuns das suas páginas.  

```html
<p>
  Aqui vão os textos comuns das páginas, normalmente são os conteúdos das noticias ou legendas de fotos...
</p>
```
[Aqui](https://www.loom.com/share/6f45cadadd7d4a9ea5c155ac1610fc8e?sharedAppSource=personal_library) tem um vídeo bem curtinho falando sobre os parágrafos e outros elementos de texto.

### Listas Ordenadas `<ol>`
Para os momentos em que queremos mostras os itens e formato de lista e a ordem deles importa.  
O `ol` vem de `Ordered List`.

```html
<ol>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ol>
```

O código acima produzira uma lista exatamente como a lista abaixo:

1. Item 1
2. Item 2
3. Item 3

[Aqui](https://www.loom.com/share/30053b9c581347bb8a99825706277dc7?sharedAppSource=personal_library) tem um vídeo bem curtinho falando sobre as listas.

### Listas Não Ordenadas
Para os momentos em que queremos mostrar os itens da lista como tópicos.  
O `ul` vem de `Unordered List`.

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

O código acima produzira uma lista exatamente como a lista abaixo:
- Item 1
- Item 2
- Item 3

[Aqui](https://www.loom.com/share/30053b9c581347bb8a99825706277dc7?sharedAppSource=personal_library) tem um vídeo bem curtinho falando sobre as listas.

### Itens das Listas `<li>`
Como visto nas duas listas acima, ambas compartilham a mesma estrutura de tags para o conteúdo.  
O `li` vem de `List Item`.  
Os itens das listas vão se comportar de acordo com a tag de lista que eles estiverem dentro, sendo `ul` ou `ol`.

### Imagens `<img>`
Utilizando a tag `<img>` podemos adicionar imagens as nossas páginas, tanto imagens que estão no nosso computador, quanto imagens publicadas na internet. 

```html
<img src="caminho ou URL da sua imagem" alt="Texto alternativo">
```

Como visto acima, é bastante simples configurar a tag `<img>`, precisamos apenas das propriedades:
- `src` local onde informaremos o caminho da imagem, caso a mesma esteja no nosso computador, ou a `URL` caso seja uma imagem publicada na ***Internet***.  
***Importante***: caso seja uma imagem do computador, não esqueça de informar a extensão do arquivo juntamente com o nome e o caminho, por exemplo: `/imagens/logo.png`.
- `alt` local onde informaremos um texto alternativo, caso a imagem não seja carregada, muito útil quando utilizamos imagens da ***Internet***, pois suas `URLs` podem ser removidas após algum tempo.

[Aqui](https://www.loom.com/share/f666a45e1db847b090951d1bb6aa2142?sharedAppSource=personal_library) tem um vídeo bem curtinho falando sobre as imagens.

### Divs `<div>`
Apesar de parecer extremamente simples, os elementos `<div>` são fundamentais para criação de páginas elaboradas e funcionais.

Essa tag serve para criar **divisões na tela**, ou seja, dividir uma tela inteira em diversas partes ou áreas, onde cada nova área pode ser trabalhada individualmente, tanto em termos de *posicionamento* quanto em *aparência*.

Como os elementos `<div>` são utilizados para criar novas áreas, a ideia é que a gente inclua outros elementos dentro delas. Assim, essa tag funciona como uma espécie de ***container***, desses de návio mesmo, pois podemos incluir diversos outros elementos dentro. 

```html
<!-- uma div simples e vazia -->
<div></div>

<!-- uma div contendo elementos -->
<div>
  <p>Alguma coisa escrita aqui</p>
  <img src="logo.jpg" alt="Logo">
  ...
</div>
```

# CSS

O `CSS` (Cascading Style Sheets ou Folhas de Estilo em Cascata) é o responsável pela aparência das nossas páginas ou Sites. É com ele que definimos a nossa identidade visual.

Aproveitando o paralelo com o corpo humano que fizemos no começo deste texto, o `CSS` seria não apenas a pele, mas também todas roupas, jóias, maquiagem e até mesmo tatuagens que temos no corpo e que nos diferencia dos demais indivíduos.

Assim como o `HTML`, o `CSS` também possui uma sintaxe própria, que por sua vez, é bem diferente da primeira linguagem que estudamos.

Podemos criar o `CSS` de 3 formas diferentes para criar as nossas páginas com conteúdo e estilo.

## Do jeito *"feio"*
A primeira forma de trabalhar com o `CSS` e que é considerada a mais *"feia"*, é utilizando a propriedade `style` que todo elemento `HTML` possui.

```html
<p style="color:blue">Um parágrafo qualquer</p>
```

Essa é sem dúvida a forma mais rápida e normalmente aprendemos por aqui, no entanto, o problema com esse modo é que o estilo é criado individualmente para cada elemento e se você tiver 10 elementos como esse na sua página, você precisará replicar esse código nos 10 elemento.

```html
<p style="color:blue">Um parágrafo qualquer</p>
<p style="color:blue">Um parágrafo qualquer</p>
<p style="color:blue">Um parágrafo qualquer</p>
<p style="color:blue">Um parágrafo qualquer</p>
<p style="color:blue">Um parágrafo qualquer</p>
<p style="color:blue">Um parágrafo qualquer</p>
<p style="color:blue">Um parágrafo qualquer</p>
```

Não apenas isso, mas se por algum motivo você precisar alterar o estilo, terá que alterar em todos!

## Do jeito *"mais ou menos"*
O modo *"mais ou menos"* de trabalhar com o `CSS` busca facilitar o problema que existe no modo anterior, ou seja, aqui não fazemos os estilos de maneira duplicada para cada elemento. 

Nesse modo, tentamos trabalhar de maneira mais genérica, para que o maior número de elementos se beneficie dos estilos criados.

```html
<head>
  ...
  <title>Título da página</title>

  <style>
    p {
      color: blue;
    }
  </style>
</head>
```

Para isso, criamos uma tag `<style>` no cabeçalho da nossa página e lá definimos as modificações que faremos. Essas modificações podem ser aplicadas para todos os elementos da página, dependendo da forma como configurarmos.

Por exemplo, o código acima está aplicando a cor azul para todos os elementos `<p>` da página.  
Repare dentro da tag `<style>` é código `CSS` que está sendo empregado e não mais o `HTML`, justamente por isso não é necessário a utilização de tags `<>` no código.

Você pode estar se perguntando: 
> E por que esse é o modo *"mais ou menos"* se já resolve os problemas apontados anteriormente?

Porque todo estilo criado dentro da tag `style` pode ser aproveitado apenas por essa página, e um site por mais simples que seja dificilmente terá apenas uma página. Nesse caso, teremos que lidar com duplicações e possivelmente com modificações. 

## Do jeito ***"certo"***
O melhor modo de trabalhar com o `CSS` é tendo **um arquivo dedicado para isso**. Assim poderemos nos beneficiar de todos os pontos anteriores, teremos estilos aplicados facilmente para todos os elementos da página e ainda poderemos compartilhar esses estilos entre páginas de um mesmo site. Mantendo assim uma identidade visual coerente e mais fácil de gerenciar.

Os arquivos `CSS` tem a extensão `.css` e tem a seguinte estrutura:

```css
p {
  color: blue;
}

img {
  width: 120px;
}

...
```

Como estamos trabalhando com o `CSS` em um arquivo a parte, é necessário informar para o HTML qual o arquivo estamos utilizando para os estilos da nossa página, para isto, basta incluir a tag `<link>` no cabeçalho da nossa página:

```html
<head>
  ...
  <title>Título da página</title>

  <link rel="stylesheet" href="estilo.css">
</head>
```

A propriedade `rel="stylesheet"` é referente ao tipo de link que estamos fazendo, neste caso, com uma folha de estilos.  
Já a propriedade `href="estilo.css"` é onde estamos informando qual o arquivo de estilo que queremos utilizar na nossa página (é necessário informar o nome do arquivo e a extensão).

**Importante**: podemos linkar quantos arquivos CSS forem necessários em nossas páginas! Porém, precisamos ter cuidado para que os mesmos elementos não estejam sendo modificado nos diversos arquivos, pois isso pode ocasionar efeitos coloterais difíceis de rastrear.
