def reverse_list(items):
    reversed_list = []  
    for item in items:  
        reversed_list.insert(0, item)  
    return reversed_list  

original_list = [1, 2, 3, 4, 5]
result = reverse_list(original_list) 
print("გადაბრუნებული სია:", result)