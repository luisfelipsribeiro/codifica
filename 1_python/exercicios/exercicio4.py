'''
4. Escreva um programa que receba o nome, a idade e a profissão do usuário e no 
final apresente a mensagem a seguir:
Bem vindo [fulano], você disse que tem [X] anos e é [alguma coisa]
'''

nome = input("Digite seu nome: ")
idade = int(input("Digite sua idade: "))
profissao = input("Digite a sua profissão: ")

# solução 1
print("Bem vindo", nome, ", você disse que tem", idade, "anos e é", profissao)

# solução 2
print("Bem vindo " + nome + ", você disse que tem " +
      str(idade) + " anos e é " + profissao)

# solução 3
print("Bem vindo {}, você disse que tem {} anos e é {}".format(
    nome, idade, profissao))
