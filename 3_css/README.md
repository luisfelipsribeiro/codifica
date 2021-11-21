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

[Aqui](https://www.loom.com/share/48c6b1e970764d44af511efa6cd26e16?sharedAppSource=personal_library) tem um vídeo bem curtinho falando sobre o `CSS` do jeito *"feio"*.

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

[Aqui](https://www.loom.com/share/b44679a6a10b4c44b8ff2a7d52719003?sharedAppSource=personal_library) tem um vídeo bem curtinho falando sobre o `CSS` do jeito *"mais ou menos"*.

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

[Aqui](https://www.loom.com/share/f130cf7119064703b50ebfda194a18f8?sharedAppSource=personal_library) tem um vídeo bem curtinho falando sobre o `CSS` do jeito *"certo"*.