def average_of_list(num_list):
    if len(num_list) == 0:
        return 0
    return sum(num_list) / len(num_list)

numbers = [1, 2, 3, 4, 5]
print(average_of_list(numbers))