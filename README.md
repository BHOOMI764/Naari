🚨 Naari Naari: Women Safety App
A comprehensive women’s safety platform providing real-time SOS alerts, geolocation tracking, AI-based threat detection, and live video/audio evidence for rapid response and enhanced security. Built using React, Django, TensorFlow, OpenCV, and Firebase.
Naari is an advanced women safety application designed to ensure protection and empowerment through real-time assistance, educational tools, and community support. With features like GPS mapping, emergency alerts, AI threat detection, and NGO connections, Naari aims to create a robust safety ecosystem for women.

Problem Statement
Women face a range of safety challenges, including physical harassment, unsafe environments, and lack of real-time assistance. Naari seeks to address these issues by leveraging technology for preventive, protective, and responsive solutions.

## 🚨 Core Features

### 🆘 Emergency SOS Button
- **What it does**: Sends instant alerts to:
  - Pre-defined emergency contacts
  - Nearby police stations
  - Trusted NGOs
- **Technologies**:
  - `Google Maps API`: Live location tracking
  - `WebSocket`: Real-time SOS alert transmission

---

### 🗺️ GPS Mapping & Geofencing
- **What it does**: Continuously tracks the user’s location and alerts them when they enter high-risk or geofenced areas.
- **Technologies**:
  - `Google Maps API`: Display maps and user movement
  - `MongoDB`: Store geolocation zones and risk boundaries

---

### 🏢 NGO & Police Station Connectivity
- **What it does**: Displays and connects the user to nearby verified NGOs and police stations.
- **Technologies**:
  - `Google Places API`: Discover nearby support centers
  - `Twilio`: Direct call feature integration

---

### 🧠 AI-Based Threat Detection
- **What it does**: Monitors surroundings via the device camera to detect:
  - Following/stalking
  - Aggressive or suspicious behavior
- **Technologies**:
  - `OpenCV + TensorFlow`: Process real-time camera input
  - `YOLOv8`: Detect individuals
  - `DeepSORT`: Track movement across frames
  - `MoveNet`: Analyze body posture and actions

---

### 🎥 Live Video & Audio Streaming
- **What it does**: Streams live video/audio to trusted contacts during emergencies for assistance and documentation.
- **Technologies**:
  - `WebRTC`: Real-time secure peer-to-peer streaming
  - `Firebase`: Backup and store recorded content in the cloud


| **AI Models**  | YOLOv8, DeepSORT, MoveNet, TensorFlow, OpenCV |
| **APIs**       | Google Maps API, Places API |


🌐 Table of Contents
Overview

Tech Stack

Frontend (React.js)

Backend (Django)

AI/ML Threat Detection

Database & Cloud Infrastructure

Core Features

Integration Flow

Deployment & CI/CD

Future Enhancements

🛡️ Overview
Naari Naari aims to enhance women's safety using technology by providing:

🚨 Emergency SOS functionality

📍 GPS & geofencing with nearest NGO/police integration

📹 Real-time video/audio capture

🧠 AI-based threat analysis

🎓 Educational content for self-defense

💻 Tech Stack
1. Frontend (React.js)
🧠 Core Responsibilities
User Interface (UI) and User Experience (UX)

Real-time interaction with backend APIs

Handling user inputs like SOS, settings

Displaying maps, alerts, and tutorials

⚙️ Key Features & Technologies
Feature	Tech Stack
Emergency SOS Button	React UI, Google Maps API
GPS Mapping & Geofencing	Google Maps API, React Native Maps
NGO/Police Directory	Google Places API
Live Video/Audio Streaming	WebRTC
Self-Defense Tutorials	React.js Video Player, ARKit/ARCore (Optional)
Customizable Security Modes	React, AsyncStorage
User Authentication & Profile	JWT-based Auth

📦 Frontend Libraries & APIs
React.js

React Navigation

Axios / Fetch API

Redux / Context API

WebRTC (Live streaming)

Google Maps & Places API

Twilio (optional)

2. Backend (Django)
🧠 Core Responsibilities
Handling emergency alerts & real-time notifications

User data & location management

API integration with external services

AI/ML inference result processing

⚙️ Key Features & Technologies
Feature	Tech Stack
Emergency SOS Alert System	Django, WebSockets
User Authentication & Security	JWT, OAuth2, AES Encryption
Geofencing & Location Tracking	MongoDB (Geo Queries), Google Maps API
NGO/Police Communication	Twilio (SMS/Calls), Google Places API
Live Stream Storage	Firebase Storage / AWS S3
RESTful APIs	Django REST Framework / Express.js (optional)

📦 Backend Libraries & APIs
Django REST Framework

Django ORM / Mongoose

WebSockets / Socket.IO

Firebase Cloud Messaging (FCM)

Twilio API


3. AI/ML (OpenCV, TensorFlow)
🧠 Core Responsibilities
Real-time threat detection

Facial and behavioral recognition

Audio analysis (optional distress recognition)

AI-based alert escalation

⚙️ Key Features & Technologies
Feature	Tech Stack
Threat Detection (Vision)	OpenCV, TensorFlow (YOLO / SSD)
Facial/Behavioral Analysis	TensorFlow Lite
Audio Distress Detection	Librosa, NLP Models
Model Serving	Flask / FastAPI, Keras, Scikit-learn

📦 AI Libraries & Tools
OpenCV (CV)

TensorFlow/Keras

Flask or FastAPI (for model APIs)

Librosa (Audio Analysis)

YOLO, SSD, Wav2Vec (Model architectures)

![image](https://github.com/user-attachments/assets/e884a7ec-0e5f-421c-9a31-c5592e7d6a51)



4. Database & Cloud Infrastructure
Component	Technology Stack
Primary Database	MongoDB (User data, geolocation)
Realtime Sync & Auth	Firebase Auth, Firestore (optional)
Media Storage	AWS S3 / Firebase Storage
Backend Hosting	AWS EC2 / Google Cloud / Heroku
CI/CD Pipeline	GitHub Actions / Jenkins

🚀 Core Features
🔴 Emergency SOS with geolocation & video stream

📡 Live alerts via SMS, WebSocket, and push notifications

🔍 Nearby police stations/NGOs with instant contact

🤖 AI-powered threat detection from live stream

🔐 User login and secure profile management

📚 Self-defense tutorials with optional AR modules

⚙️ Customizable security settings (silent mode, fake calls)

🔄 Integration & Communication Flow
![image](https://github.com/user-attachments/assets/88b0d502-24dd-41a3-aaa8-62a3c2a37c6e)


☁️ Deployment & CI/CD
Stage	Tools/Platforms
Frontend Hosting	Netlify / Vercel / Firebase Hosting
Backend Hosting	AWS EC2 / Google Cloud / Heroku
Database Hosting	MongoDB Atlas / Firebase Firestore
Media Storage	Firebase Storage / AWS S3
CI/CD	GitHub Actions / Jenkins

📩 Contact
Developer: Bhoomi Jaiswal

Email: [bhoomicat2005@gmail.com]
