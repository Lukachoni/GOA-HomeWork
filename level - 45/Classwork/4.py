def count_words_and_letters(text):
    words = len(text.split())  
    letters = len(text.replace(" ", ""))  
    return words, letters

#:
text = input("შეიყვანეთ ტექსტი: ")
words, letters = count_words_and_letters(text)

print(f"სიტყვების რაოდენობა: {words}")
print(f"ასოების რაოდენობა: {letters}")