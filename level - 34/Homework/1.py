def simple_calculator(num1, num2, operation):
    if operation == "დამატება":
        return num1 + num2
    elif operation == "გამოკლება":
        return num1 - num2
    elif operation == "გამრავლება":
        return num1 * num2
    elif operation == "გაყოფა":
        return "შეცდომა: ნულზე გაყოფა შეუძლებელია" if num2 == 0 else num1 / num2
    return "შეცდომა: არასწორი ოპერაცია"
