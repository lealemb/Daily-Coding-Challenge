def check_age(age):
    if age < 18:
        print("You are a minor.")
    elif 18 <= age < 21:
        print("You are an adult, but not yet allowed to drink.")
    else:
        print("You are a legal adult.")

# Call the function with a specific age
check_age(20)
