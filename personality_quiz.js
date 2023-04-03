import random

questions = [
    {
        "question": "What is your favorite color?",
        "answers": [
            {"option": "Red", "score": 3},
            {"option": "Blue", "score": 2},
            {"option": "Green", "score": 1},
            {"option": "Yellow", "score": 0},
        ]
    },
    {
        "question": "What type of music do you prefer?",
        "answers": [
            {"option": "Rock", "score": 3},
            {"option": "Pop", "score": 2},
            {"option": "Hip-hop", "score": 1},
            {"option": "Classical", "score": 0},
        ]
    },
    {
        "question": "What is your favorite animal?",
        "answers": [
            {"option": "Dog", "score": 3},
            {"option": "Cat", "score": 2},
            {"option": "Bird", "score": 1},
            {"option": "Fish", "score": 0},
        ]
    }
]

results = [
    {"name": "Introverted", "score": 0},
    {"name": "Extroverted", "score": 0},
    {"name": "Reserved", "score": 0},
    {"name": "Outgoing", "score": 0},
]

def quiz():
    score = 0
    for question in questions:
        print(question["question"])
        for i, answer in enumerate(question["answers"]):
            print(f"{i+1}. {answer['option']}")
        response = int(input("Enter your answer: "))
        score += question["answers"][response-1]["score"]
    for result in results:
        result["score"] = random.randint(0, 5)
    results.sort(key=lambda x: -x["score"])
    print(f"Your personality type is {results[0]['name']}")
