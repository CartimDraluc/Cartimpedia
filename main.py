print("Hello, I'm Maths Bot. How can I help you?")
sign = input(print("Type +,_,/,*"))
if sign == "+":
    first = input(print("type first number"))
    second = input(print("type second number"))
    result = int(first) + int(second)
    print(result)

if sign == "-":
    first = input(print("type first number"))
    second = input(print("type second number"))
    result = int(first) - int(second)
    print(result)

if sign == "/":
    first = input(print("type first number"))
    second = input(print("type second number"))
    result = int(first) / int(second)
    print(result)

if sign == "*":
    first = input(print("type first number"))
    second = input(print("type second number"))
    result = int(first) * int(second)
    print(result)
