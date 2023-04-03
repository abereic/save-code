import requests

def trivia():
    url = "https://opentdb.com/api.php?amount=1"
    response = requests.get(url)
    data = response.json()["results"][0]
    print(data["question"])
    options = data["incorrect_answers"] + [data["correct_answer"]]
    random.shuffle(options)
    for i, option in enumerate(options):
        print(f"{i+1}. {option}")
    response = int(input("Enter your answer: "))
    if options[response-1] == data["correct_answer"]:
        print("Correct!")
    else:
        print(f"Incorrect. The correct answer is {data['correct_answer']}")
