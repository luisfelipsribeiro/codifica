# Desafio #1 - Parcelas de um cartão de crédito (médio)
Você está construindo um sistema para ajudar pessoas que compram com cartão de crédito a saber até quando seus parcelamentos vão.

Seu sistema deve solicitar o mês atual (apenas número), o valor total da compra e em quantas vezes o usuário deseja parcelar, após isso, o sistema deverá mostrar em que mês cairá cada parcela e o valor, por exemplo:
* Parcela 1 em 12/2021: R$100,00
* Parcela 2 em 01/2022: R$100,00
* Parcela ...

Lembrando que:
* a primeira parcela sempre deve ser cobrada no mês seguinte ao atual informado;
* cada ano só tem 12 meses
* considere o ano atual sempre como 2021

# Desafio #2 - Dano em um jogo online (difícil)
Você está jogando com um mago em um jogo online.

Você sabe que se vc aplicar seu combo completo, ou seja acertar todas as suas habilidades, seu oponente vai perder `50%` dos seus pontos de vida logo de cara e pelos próximos `5 segundos` ele ficará pegando fogo, esse fogo causa `2% da vida máxima` do alvo como dano `por segundo`.

No momento em que for atingido, seu inimigo ainda pode usar (`se` ele tiver em mãos) uma poção de cura que restaura `50 pontos de vida a cada 3 segundos`.

Você precisará informar para o programa:
1. a vida máxima do seu oponente 
2. se ele tem uma poção de cura ou não

No fim, seu programa deverá mostrar a vida atual do seu inimigo, se o valor for menor ou igual a 0 o sistema deverá informar que ele morreu!

Caso ele não morra, se você quiser pode mostrar quanto de dano ele sofreu.
