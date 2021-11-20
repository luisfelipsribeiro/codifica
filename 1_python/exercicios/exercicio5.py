'''
5. Escreva um programa que calcule quanto de pensão uma pessoa precisa pagar para cada filho.
Para isso será necessário solicitar o salário e o número de filhos.
Lembrando que o máximo que uma pessoa paga de pensão é 30%
'''

salario = float(input("Quanto você ganha: "))
filhos = int(input("Quantos filhos você tem: "))

#máximo de 30% do salário
max_pensao = salario * 0.3

#valor por filho
pensao_por_filho = max_pensao / filhos

print("Você precisa pagar", str(pensao_por_filho),
      "para cada um dos", filhos, "fiho(s).")
