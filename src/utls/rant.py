import random

ran = random.randint(0, 100)
inp = input()
attempt = 0
b = False

while(inp != "exit"):
    inp = int(inp)
    attempt += 1
    #print(ran)
    if inp > ran:
        print("too high")

    if inp < ran:
        print("too low")
    if inp == ran:
        b = True
        break
    inp = input()

if b:
    print(f"You won the game with {attempt} attempts!!")
else:
    print("Game over, You LOSE!!")



