'''
1. Escreva um programa que receba o nome e o sobrenome do usuário e 
no final mostre na tela o nome completo
'''

nome = input("Digite seu nome: ")
sobrenome = input("Digite seu sobrenome: ")

# solução 1
print("Seu nome completo é:", nome, sobrenome)

# solução 2
print("Seu nome completo é: " + nome + " " + sobrenome)

# solução 3
print("Seu nome completo é: {} {}".format(nome, sobrenome))
