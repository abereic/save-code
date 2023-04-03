import requests
from io import BytesIO
from PIL import Image, ImageDraw

def image_recognition():
    url = input("Enter the URL of the image: ")
    response = requests.get(url)
    img = Image.open(BytesIO(response.content))
    draw = ImageDraw.Draw(img)
    subscription_key = "YOUR_SUBSCRIPTION_KEY"
    endpoint = "YOUR_ENDPOINT"
    analyze_url = endpoint + "vision/v3.2/analyze"
    headers = {'Ocp-Apim-Subscription-Key': subscription_key,
               'Content-Type': 'application/octet-stream'}
    response = requests.post(
        analyze_url, headers=headers, data=response.content)
    response.raise_for_status()
    analysis = response.json()
    for obj in analysis["objects"]:
        bbox = obj["rectangle"]
        draw.rectangle([bbox["x"], bbox["y"], bbox["x"]+bbox["w
