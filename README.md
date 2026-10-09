# MindCare - Enhanced Mental Health App

A comprehensive React Native Expo mobile application designed to support mental wellness through mood tracking, professional help access, meditation practices, AI assistance, and personalized activities.

## 🌟 New Features Added

### 🎨 Customization
- **Dark Mode**: Toggle between light and dark themes
- **Multi-Language Support**: English, Spanish, and French translations
- **Settings Panel**: Comprehensive app customization

### 🤖 AI Support
- **AI Chatbot**: Intelligent mental health assistant
- **Contextual Responses**: Mood-aware conversation support
- **24/7 Availability**: Always ready to provide guidance

### 📝 Personal Growth
- **Daily Thoughts Journal**: Capture and reflect on daily experiences
- **Writing Prompts**: Guided reflection questions
- **Thought History**: Track your mental journey over time

### 🎯 Activity Center
- **Hobby Integration**: Engage with your saved hobbies from profile setup
- **Activity Timer**: Track time spent on wellness activities
- **Progress Tracking**: Monitor your engagement and mood improvements
- **Personalized Suggestions**: Activity recommendations based on your interests

### 💫 Daily Inspiration
- **Calming Quotes**: Curated inspirational messages
- **Category-Based Quotes**: Peace, mindfulness, strength, and more
- **Share & Save**: Share meaningful quotes with others

## 📱 Complete Feature Set

### 🔐 Authentication & Setup
- **Secure Login/Signup**: Email and password authentication
- **Profile Setup**: Hobbies selection and emergency contact setup
- **Data Persistence**: Save user preferences and settings

### 📊 Mood & Wellness Tracking
1. **Advanced Mood Tracker**: 
   - 5-level mood scale with emoji indicators
   - Personal notes and context
   - Historical data and trends
   - Weekly averages and insights

2. **Professional Support**:
   - Comprehensive psychiatrist directory
   - Emergency hotline access
   - Search and filter by specialty
   - Direct contact capabilities

3. **Meditation & Mindfulness**:
   - 5 guided meditation practices
   - Customizable timer (5-30 minutes)
   - Breathing exercises with visual guides
   - Progress tracking and statistics
   - Daily calming quotes

### 🎮 Interactive Features
4. **AI Mental Health Assistant**:
   - Natural conversation interface
   - Keyword-based emotional support
   - Crisis intervention guidance
   - Mood-aware responses

5. **Daily Thoughts & Journaling**:
   - Structured daily reflection
   - Random writing prompts
   - Thought history tracking
   - Mood correlation analysis

6. **Activity Center**:
   - Hobby-based wellness activities
   - Session timing and tracking
   - Activity suggestions and tips
   - Progress visualization

### ⚙️ Customization & Settings
7. **Comprehensive Settings**:
   - Dark/Light mode toggle
   - Language selection (English/Spanish/French)
   - Notification preferences
   - Data backup options
   - Privacy controls

## 🛠 Tech Stack

- **Framework**: React Native with Expo SDK 53
- **Navigation**: React Navigation (Stack & Bottom Tabs)
- **State Management**: React Context API (Theme & Language)
- **Icons**: Expo Vector Icons
- **Styling**: Dynamic StyleSheet with theme support
- **Internationalization**: Custom translation system

## 📁 Enhanced Project Structure

```
MentalHealthApp/
├── contexts/
│   ├── ThemeContext.js       # Dark mode & theming
│   └── LanguageContext.js    # Multi-language support
├── screens/
│   ├── LoginScreen.js
│   ├── SignUpScreen.js
│   ├── ProfileSetupScreen.js
│   ├── MoodTrackerScreen.js
│   ├── ProfessionalHelpScreen.js
│   ├── MeditationScreen.js
│   ├── SettingsScreen.js     # NEW
│   ├── ChatbotScreen.js      # NEW
│   ├── DailyThoughtsScreen.js # NEW
│   └── ActivityCenterScreen.js # NEW
├── components/
│   └── CalmingQuotes.js      # NEW
├── App.js                    # Enhanced navigation
└── README.md
```

## 🚀 Navigation Flow

1. **Authentication** → Login/Signup
2. **Profile Setup** → Hobbies & Emergency Contact ✨(saved after login)
3. **Main App** → 5-Tab Navigation:
   - 💖 Mood Tracker
   - 🏥 Professional Help 
   - 🧘 Meditation & Mindfulness
   - 🤖 AI Assistant ✨NEW
   - ➕ More (Settings, Thoughts, Activities) ✨NEW

## 🎨 Theme System

### Light Theme
- Primary: #4A90E2 (Blue)
- Background: #f8f9fa (Light Gray)
- Surface: #ffffff (White)
- Text: #2c3e50 (Dark Blue)

### Dark Theme ✨NEW
- Primary: #5dade2 (Light Blue)
- Background: #1a1a1a (Dark Gray)
- Surface: #2c2c2c (Medium Gray)
- Text: #ffffff (White)

## 🌍 Indian Language Support ✨ENHANCED

- **English** 🇺🇸 (Default)
- **हिन्दी (Hindi)** 🇮🇳
- **ਪੰਜਾਬੀ (Punjabi)** 🇮🇳  
- **اردو (Urdu)** 🇮🇳

All UI elements, navigation, and content are fully translated into these Indian languages, making the app accessible to a broader user base.

## 🤖 AI Assistant Features ✨NEW

- **Emotional Support**: Responds to keywords like "sad", "anxious", "stressed"
- **Wellness Guidance**: Provides meditation and mindfulness suggestions
- **Crisis Support**: Directs users to professional help when needed
- **Natural Conversation**: Maintains context and provides thoughtful responses
- **Safety First**: Always emphasizes professional help for serious concerns

## 📝 Daily Thoughts Features ✨NEW

- **Writing Prompts**: "What am I grateful for today?", "What challenged me?"
- **Mood Integration**: Connect thoughts with current emotional state
- **History Tracking**: View past reflections and growth patterns
- **Private & Secure**: All thoughts stored locally and privately

## 🎯 Activity Center Features ✨NEW

- **Hobby Integration**: Uses hobbies saved during profile setup
- **Activity Timer**: Track engagement time with built-in timer
- **Suggestions**: Personalized activity recommendations
- **Progress Stats**: Daily and weekly activity summaries
- **Mood Correlation**: See how activities affect your mood

## 💫 Calming Quotes ✨NEW

- **20+ Curated Quotes**: Inspirational messages for mental wellness
- **Categories**: Peace, Mindfulness, Strength, Happiness, etc.
- **Daily Refresh**: New quote every time you visit
- **Share Feature**: Share meaningful quotes with friends
- **Visual Design**: Beautiful, themed quote cards

## 🔧 Development Features

### Theme Context
- Dynamic styling based on light/dark mode
- Automatic color scheme switching
- Persistent theme preferences

### Language Context
- Runtime language switching
- Comprehensive translation coverage
- Fallback to English for missing translations

### Enhanced Navigation
- 5-tab bottom navigation
- Nested stack navigation for "More" features
- Gesture-enabled navigation with proper guards

## 📲 Testing & Usage

### Quick Start
```bash
cd MentalHealthApp
npm install
npx expo start
```

### Testing Options
- **📱 Mobile**: Scan QR code with Expo Go
- **🌐 Web**: Press 'w' for web browser
- **📋 Emulator**: Press 'a' (Android) or 'i' (iOS)

### New Features Testing
1. **Dark Mode**: Settings → Toggle Dark Mode (now works on all screens including Professional Help and Mood Tracker)
2. **Indian Languages**: Settings → Select Language → Choose Hindi/Punjabi/Urdu
3. **AI Chat**: AI Assistant tab → Start conversation
4. **Daily Thoughts**: More → Daily Thoughts → Write entry
5. **Activities**: More → Activity Center → Start hobby session
6. **Quotes**: Meditation → View Daily Inspiration

## 🔮 Enhanced Roadmap

### Immediate Improvements
- **AsyncStorage Integration**: Persistent data storage
- **Push Notifications**: Daily reminders and encouragement
- **Advanced Analytics**: Detailed mood and activity correlations
- **Social Features**: Support groups and community

### Advanced Features
- **Voice Notes**: Audio journaling capabilities
- **Habit Tracking**: Build positive mental health habits
- **Professional Integration**: Connect with real therapists
- **Wearable Sync**: Heart rate and activity data integration

## 💝 Mental Health Resources

For immediate support:
- **Emergency**: 911 or local emergency services
- **Suicide Prevention**: 988 (US)
- **Crisis Text**: Text HOME to 741741
- **NAMI Helpline**: 1-800-950-6264

## 📄 License

This enhanced version includes significant improvements for mental health support and user experience. Created with ❤️ for mental wellness awareness.

---

**Version 2.0** - Now with AI assistance, dark mode, multi-language support, activity tracking, and daily inspiration! 🚀