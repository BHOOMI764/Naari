# Naari
Naari: Women Safety App - Tech Stack 
1. Frontend (React Js)
Core Responsibilities
User Interface (UI) and User Experience (UX)

Real-time interaction with backend APIs

Handling user inputs (SOS triggers, settings, etc.)

Displaying maps, alerts, and educational content

Key Features & Tech Stack
Feature	Technology Used
Emergency SOS Button ---	React UI, Google Maps API (for location)
GPS Mapping & Geofencing	--- Google Maps API, React Native Maps
NGO/Police Station Directory --- 	Google Places API (for nearest locations)
Live Video/Audio Streaming	WebRTC (for real-time streaming)
Educational Content (Self-Defense Tutorials)	--- React js Video, ARKit/ARCore (for AR-based training)
Customizable Security Modes	React UI, AsyncStorage (for local settings)
User Authentication & Profile	--- JWT-based auth
Libraries & APIs
React Navigation (for app routing)

Axios/Fetch (for API calls)

Redux/Context API (state management)

React JS  Maps (for geolocation)

WebRTC (live video/audio streaming)

Twilio (optional) (for direct calls to NGOs/police)

2. Backend (Django)
Core Responsibilities
Handling emergency alerts & notifications

Managing user authentication & data security

Storing & retrieving geolocation data

Integrating third-party APIs (Maps, Twilio, etc.)

Managing AI model inference (if backend-based)

Key Features & Tech Stack
Feature	Technology Used
Emergency SOS Alerts	 Django, WebSocket (for real-time alerts)
User Authentication & Data Security	JWT, OAuth, AES encryption
Geofencing & Location Tracking	MongoDB (Geospatial Queries), Google Maps API
NGO/Police Station Integration	Google Places API, Twilio (for calls/SMS)
Live Video Storage	Firebase Storage / AWS S3
Database Management	MongoDB (for user data), Firebase (for real-time updates)
API Endpoints	RESTful APIs (Express.js / Django REST Framework)
Libraries & APIs
Express.js (Node.js) / Django REST Framework (API development)

Mongoose (Node.js) / Django ORM (MongoDB/PostgreSQL integration)

WebSocket/Socket.io (real-time alerts)

Twilio API (SMS/call integration)

Firebase Cloud Messaging (FCM) (push notifications)


3. AI/ML (OpenCV, TensorFlow)
Core Responsibilities
Real-time threat detection (suspicious activity, following behavior)

Image/video processing for emergency evidence

Audio analysis for distress detection (optional)

Key Features & Tech Stack
Feature	Technology Used
AI-Based Threat Detection	OpenCV (video processing), TensorFlow (object detection)
Facial/Behavior Recognition	TensorFlow Lite 
Audio Distress Detection	Librosa (audio analysis), NLP models (optional)
Model Training & Deployment	Python (scikit-learn, Keras), Flask/FastAPI (API endpoints)
Libraries & APIs
OpenCV (real-time video processing)

TensorFlow/Keras (deep learning models)

Flask/FastAPI (to serve AI models via API)



4. Database & Cloud Infrastructure
Component	Technology Used
Primary Database	MongoDB (for geolocation & user data)
Auth & Realtime Updates	Firebase Auth & Firestore (optional)
Media Storage	AWS S3 / Firebase Storage
Cloud Deployment	AWS EC2 / Google Cloud / Heroku (backend)
CI/CD	GitHub Actions / Jenkins


6. Integration & Communication Flow
Frontend (React js)

Captures SOS trigger → Sends location to backend via API.

Streams video via WebRTC → Stores in Firebase/AWS.

Displays nearby NGOs using Google Places API.

Backend (Django)

Receives SOS → Sends alerts via WebSocket/Twilio.

Stores geolocation in MongoDB (Geospatial indexing).

Fetches AI threat analysis results → Sends alerts.

AI/ML (Python/Flask)

Processes live video → Detects threats using TensorFlow.

Returns threat level to backend → Triggers alerts.

┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│  Frontend       │    │  Backend        │    │  AI Server      │
│  (React js)     │ ◄─►│  (Django REST)  │ ◄─►│  (Flask/FastAPI)│
└─────────────────┘    └─────────────────┘    └─────────────────┘
       ▲                       ▲                       ▲
       │                       │                       │
       ▼                       ▼                       ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│  User Mobile    │    │  Database       │    │  AI Models      │
│  (SOS Alerts)   │    │  (PostgreSQL)   │    │  (YOLO, Wav2Vec)│
└─────────────────┘    └─────────────────┘    └─────────────────┘
