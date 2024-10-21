def word_count(text):
    words = text.split()  
    return len(words) 


input_text = "ეს არის მაგალითი რომ რამდენი სიტყვა არის"
count = word_count(input_text)  
print("სიტყვის რიცხვი:", count)