pword = str(input())
passes = 0
fails = []

if len(pword) < 8:
    fails.append("Password length under 8")
else:
    passes += 1

che = False
for i in pword:
    if i.isupper():
        che = True
        passes += 1
        break
if not che:
    fails.append("Password does not contain an uppercase letter")

che = False

for i in pword:
    if i.islower():
        che = True
        passes += 1
        break
if not che:
    fails.append("Password does not contain a lowercase letter")

che = False

for i in pword:
    if i.isdigit():
        passes += 1
        che = True
        break
if not che:
    fails.append("Password does not contain a number")

che = False

for i in pword:
    if i in "!@#$%":
        che = True
        passes += 1
        break
if not che:
    fails.append("Password does not contain a special character")

if passes == 5:
    print("Very strong password")
if passes == 4:
    print("Strong password")
if passes == 3:
    print("Medium password")
if passes < 3:
    print("Weak password")

print(len(fails))
for i in fails:
    print(i)