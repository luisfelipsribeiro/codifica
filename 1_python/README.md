
# Python

## Por que?
Acho que que melhor explicação de porque utilizar **Python** pode ser encontrada na própria página [sobre](https://www.python.org/about/) deles.
>Python is powerful... and fast;  
>plays well with others;  
>runs everywhere;  
>is friendly & easy to learn;  
>is Open.  

Hue-Hue-BR por favor!
>Python é poderosa... e rápida;  
>joga bem com os outros;  
>roda em qualquer lugar;  
>é amigável e fácil de aprender;
>é aberta.

Acredito que **Python** seja uma ótima linguagem de entrada no mundo da programação, não exige grandes requisitos em termos de ambientes de desenvolvimento, tem uma sintaxe leve, direta e fácil de entender e tem grande utilização no mercado atualmente.

É uma ótima maneira de colocar em prática os conceitos aprendidos de maneira visual nos fluxogramas e esse conceitos serão muito importantes quando iniciarmos o desenvolvimento utilizando **Javascript**.

## Ambiente para as aulas
Para as aulas decidimos realizar a instalação do Python nas máquinas e o utilizamos apenas como interpretador, todo o código foi escrito e rodado no **VSCode**, juntamente com algumas extensões que auxiliam no desenvolvimento. 

O **VSCode** foi escolhido por ser bastante customizável e possibilitar o desenvolvimento com diversas linguagens de programação diferentes. Ao longo do curso utilizaremos o VSCode para desenvolver em **Python**, **HTML**, **CSS**, **Javascript** e o que mais aparecer. 

Instalações necessárias:
- [Aqui](https://www.python.org/downloads/) você pode realizar o download do Python.  
- [Aqui](https://code.visualstudio.com/) você pode realizar o download do VSCode.  
- E [aqui](https://marketplace.visualstudio.com/items?itemName=ms-python.python) você pode baixar e instalar a extensão oficial do Python para facilitar no desenvolvimento.  

Para quem tiver problemas com a instalação do Python, devido a limitações de sistema operacional ou qualquer outro proglema, gravei alguns vídeos de apoio mostrando como contornar algumas das situações mais comuns:
 - [Instalação do Python no Windows 7](https://www.loom.com/share/01aed3846d0e43688b29044ae1a62a13?sharedAppSource=personal_library)
 - [3 opções para rodar o Python no navegador sem precisar instalar nada](https://www.loom.com/share/b3ce7c8813434d5dacdef502ab962879?sharedAppSource=personal_library)
 - [Melhor forma de rodar códigos Python no navegador sem precisar instalar nada](https://www.loom.com/share/990623642e814188b4792d2bbb1607b6?sharedAppSource=personal_library)

## Conceitos aprezentados

### Variáveis, tipos e suas sintaxes
```python
# string
nome = "Caio"
# inteiro
idade = 29
# booleano (lógico)
casado = True
# numérico (decimal)
altura = 1.75
```

### Print
É a forma que o Python utiliza para "imprimir" uma mensagem no terminal para o usuário.
```python
print("Olá mundo!")
print("Olá", nome_do_usuario, ", seja bem vindo!")
```

### Input
É a forma que o Python utiliza para solicitar que o usuário digite algo no terminal.  
Essa `função` sempre retorna o valor que o usuário digitar e normalmente é utilizada em conjunto com uma `variável`, para que seja possível salvar esse valor.  
O valor obtido de um input **sempre é uma string (texto)**.
```python
nome = input("Digite seu nome: ")
```

### Concatenação
É a ação de juntar (ou somar?) textos.
```python
nome = "Caio"
sobrenome = "Ramos"
#Aqui estamos juntando os textos das variáveis nome e sobrenome (e acrescentando um espaço em branco entre elas!)
nome_completo = nome + " " + sobrenome
```

### Conversão de valores
Muitas vezes precisamos transformar um valor ou uma variável para outro tipo para que seja possível realizar alguma operação matemática ou concatenação.
```python
#As vezes queremos que um valor digitado pelo usuário no Input seja um número inteiro
idade = int(input("Digite sua idade: "))
#... ou um valor monetário
salario = float(input("Digite seu salário: "))

#As vezes queremos transformar um valor numérico em um texto para pode concatenar com outro texto
idade = 18
idade_em_texto = str(idade)
mensagem = "Sua idade é: " + idade_em_texto
```

### Operadores matemáticos
Utilizados para realizar contas entre valores ou variáveis numéricas (inteiras ou decimais).
```python
#soma
resultado = numero1 + numero2
#subtração
resultado = numero1 - numero2
#múltiplicação
resultado = numero1 * numero2
#divisão
resultado = numero1 / numero2
#mod (resto de uma divisão)
resultado = numero1 % numero2
#potenciação
resultado = numero1 **2
```

### Operadores relacionais
Utilizados para comparar valores, normalmente utilizados em conjunto com estruturas condicionais IF ou WHILE.
```python
== #igual
!= #diferente
> #maior que
< #menor que
>= #maior ou igual que
<= #menor ou igual que
```

### Operadores lógicos
Utilizados para unir várias comparações de valores, normalmente utilizados em conjunto com estruturas condicionais IF ou WHILE.
```python
and #(E) utilizado quando você quer usar mais do que uma comparação ao mesmo tempo e você quer que todas as partes da sua comparação sejam verdade para prosseguir 

or #(OU) utilizado quando você quer usar mais do que uma comparação ao mesmo tempo e você quer que alguma das partes da sua comparação seja verdade para prosseguir

in #(EM) utilizado quando você quer saber se algo um valor está contido em outro

not #(NÃO) utilizado para negar alguma condição 
```

### IF 
Estrutura condicional, utilizada quando precisamos tomar alguma decisão beseada em uma ou várias condições.
```python
#Existem situações onde queremos que algo só aconteça SE alguma condição for verdade
if numero1 >= numero2:
  #algo acontece se a comparação acima for verdade
```

### IF / ELSE
Estrutura condicional, utilizada quando precisamos tomar alguma decisão beseada em uma ou várias condições.
```python
#Existem situações onde temos um plano B caso a condição não seja verdade
if numero1 == numero2:
  #algo acontece se a comparação acima for verdade
else:
  #algo acontece se a comparação acima NÃO for verdade
```

### IF / ELIF / ELSE
Estrutura condicional, utilizada quando precisamos tomar alguma decisão beseada em uma ou várias condições.
```python
#Existem situações onde temos que comparar muitas condições
if opcao == 1:
  #algo acontece se o valor de opção for igual a 1
elif opcao == 2:
  #algo acontece se o valor de opção for igual a 2
elif opcao == 3:
  #algo acontece se o valor de opção for igual a 3
else:
  #algo acontece se nenhuma das condições acima for verdade
```

### FOR
...

### WHILE
...

### Funções
...

### Listas
...
