import cv2
from pathlib import Path
import hashlib
import google.generativeai as genai
import time

# Function to configure Gemini API
def configure_gemini():
    genai.configure(api_key="AIzaSyBML16c6vEnbPs3zG5lqBdk2YDOxM6DFCA")

# Function to capture an image using OpenCV
def capture_image():
    # Access the default camera (usually the webcam)
    cap = cv2.VideoCapture(0)

    # Check if the camera is opened successfully
    if not cap.isOpened():
        print("Error: Could not open camera")
        return None

    # Capture a frame
    ret, frame = cap.read()

    # Release the camera
    cap.release()

    # Check if the frame is captured successfully
    if not ret:
        print("Error: Could not capture frame")
        return None

    return frame

# Function to upload an image to Gemini
def upload_image(image):
    # Save the captured image
    image_path = "captured_image.png"
    cv2.imwrite(image_path, image)

    # Calculate hash for the image
    hash_id = hashlib.sha256(Path(image_path).read_bytes()).hexdigest()

    # Upload the image to Gemini
    uploaded_file = genai.upload_file(path=image_path, display_name=hash_id)
    
    return uploaded_file

# Function to delete an uploaded file from Gemini
def delete_uploaded_file(uploaded_file):
    genai.delete_file(name=uploaded_file.name)

# Function to continuously process frames
def process_frames():
    while True:
        # Capture an image using OpenCV
        captured_image = capture_image()

        # Check if an image is captured
        if captured_image is not None:
            # Upload the image to Gemini
            uploaded_file = upload_image(captured_image)
            
            # Generate content using Gemini
            prompt_parts = [uploaded_file ,"Return in order the sender of the letter the most likely subject of the letter the most likely recipient of the letter  a summary of the letter and a classification of whether its spam or important if its not possible to tell return nothing."]
            response = model.generate_content(prompt_parts)
            print(response.text)

            # Delete the uploaded image
            delete_uploaded_file(uploaded_file)
        else:
            print("Error: Failed to capture image")

        # Introduce a delay before capturing the next frame
        time.sleep(5)  # Adjust the delay as needed

# Set up the model
generation_config = {
    "temperature": 1,
    "top_p": 0.95,
    "top_k": 0,
    "max_output_tokens": 8192,
}

safety_settings = [
    {
        "category": "HARM_CATEGORY_HARASSMENT",
        "threshold": "BLOCK_MEDIUM_AND_ABOVE"
    },
    {
        "category": "HARM_CATEGORY_HATE_SPEECH",
        "threshold": "BLOCK_MEDIUM_AND_ABOVE"
    },
    {
        "category": "HARM_CATEGORY_SEXUALLY_EXPLICIT",
        "threshold": "BLOCK_MEDIUM_AND_ABOVE"
    },
    {
        "category": "HARM_CATEGORY_DANGEROUS_CONTENT",
        "threshold": "BLOCK_MEDIUM_AND_ABOVE"
    },
]

# Create a Gemini model
model = genai.GenerativeModel(model_name="gemini-1.5-pro-latest",
                              generation_config=generation_config,
                              safety_settings=safety_settings)

# Configure Gemini API
configure_gemini()

# Start processing frames
process_frames()
