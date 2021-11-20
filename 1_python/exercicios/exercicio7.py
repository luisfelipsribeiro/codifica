'''
7. Escreva um programa que mostre todos os números múltiplos de 3 entre 0 e 20
'''

# solução 1
for numero in range(3, 21, 3):
    print(numero)

print("-----------")

# solução 2
for numero in range(1, 21):
    if(numero % 3 == 0):
        print(numero)
