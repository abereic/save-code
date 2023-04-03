from flask import Flask, request
from twilio.twiml.messaging_response import MessagingResponse

app = Flask(__name__)

@app.route("/webhook", methods=['POST'])
def webhook():
    incoming_msg = request.values.get('Body', '').lower()
    resp = MessagingResponse()
    if 'hello' in incoming_msg:
        resp.message("Hi there!")
    elif 'help' in incoming_msg:
        resp.message("I'm here to help!")
    else:
        resp.message("Sorry, I don't understand. Please try again.")
    return str(resp)

if __name__ == "__main__":
    app.run(debug=True)
