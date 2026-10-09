import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Translation strings
const translations = {
  en: {
    // Common
    save: 'Save',
    cancel: 'Cancel',
    continue: 'Continue',
    back: 'Back',
    next: 'Next',
    loading: 'Loading...',
    error: 'Error',
    success: 'Success',
    
    // Auth
    login: 'Login',
    signUp: 'Sign Up',
    email: 'Email',
    password: 'Password',
    confirmPassword: 'Confirm Password',
    fullName: 'Full Name',
    createAccount: 'Create Account',
    forgotPassword: 'Forgot Password?',
    
    // App Name
    appName: 'MindCare',
    appSubtitle: 'Your mental wellness companion',
    
    // Navigation
    moodTracker: 'Mood Tracker',
    professionalHelp: 'Professional Help',
    meditation: 'Meditation',
    settings: 'Settings',
    chatbot: 'AI Assistant',
    thoughts: 'Thoughts',
    activities: 'Activities',
    
    // Settings
    darkMode: 'Dark Mode',
    language: 'Language',
    notifications: 'Notifications',
    
    // Mood Tracker
    howAreYouFeeling: 'How are you feeling today?',
    selectMood: 'Select Your Mood',
    addNote: 'Add a Note (Optional)',
    saveMoodEntry: 'Save Mood Entry',
    moodStats: 'Your Mood Stats',
    
    // Moods
    verySad: 'Very Sad',
    sad: 'Sad',
    neutral: 'Neutral',
    happy: 'Happy',
    veryHappy: 'Very Happy',
    
    // Professional Help
    emergencySupport: 'Emergency Support',
    findPsychiatrist: 'Find a Psychiatrist',
    
    // Meditation
    chooseAPractice: 'Choose a Practice',
    breathingExercise: 'Breathing Exercise',
    bodyScenario: 'Body Scan',
    mindfulWalking: 'Mindful Walking',
    lovingKindness: 'Loving-Kindness',
    gratitudeMeditation: 'Gratitude Meditation',
    
    // AI Chatbot
    aiAssistant: 'AI Assistant',
    typeMessage: 'Type your message...',
    howCanIHelp: 'Hello! I\'m here to support you on your mental wellness journey. How can I help you today?',
    
    // Daily Thoughts
    dailyThought: 'Daily Thought',
    shareThoughts: 'Share your thoughts and feelings...',
    thoughtSaved: 'Your thought has been saved',
    
    // Activities
    activityCenter: 'Activity Center',
    yourHobbies: 'Your Hobbies',
    startActivity: 'Start Activity',
    
    // Quotes
    dailyQuote: 'Daily Quote',
    calmingQuote: 'Calming Quote',
  },
  hi: {
    // Common
    save: 'सेव करें',
    cancel: 'रद्द करें',
    continue: 'जारी रखें',
    back: 'वापस',
    next: 'अगला',
    loading: 'लोड हो रहा है...',
    error: 'त्रुटि',
    success: 'सफलता',
    
    // Auth
    login: 'लॉगिन',
    signUp: 'साइन अप',
    email: 'ईमेल',
    password: 'पासवर्ड',
    confirmPassword: 'पासवर्ड की पुष्टि करें',
    fullName: 'पूरा नाम',
    createAccount: 'खाता बनाएं',
    forgotPassword: 'पासवर्ड भूल गए?',
    
    // App Name
    appName: 'मन केयर',
    appSubtitle: 'आपका मानसिक स्वास्थ्य साथी',
    
    // Navigation
    moodTracker: 'मूड ट्रैकर',
    professionalHelp: 'व्यावसायिक सहायता',
    meditation: 'ध्यान',
    settings: 'सेटिंग्स',
    chatbot: 'AI असिस्टेंट',
    thoughts: 'विचार',
    activities: 'गतिविधियां',
    
    // Settings
    darkMode: 'डार्क मोड',
    language: 'भाषा',
    notifications: 'सूचनाएं',
    
    // Mood Tracker
    howAreYouFeeling: 'आज आप कैसा महसूस कर रहे हैं?',
    selectMood: 'अपना मूड चुनें',
    addNote: 'एक नोट जोड़ें (वैकल्पिक)',
    saveMoodEntry: 'मूड एंट्री सेव करें',
    moodStats: 'आपके मूड की आंकड़े',
    
    // Moods
    verySad: 'बहुत उदास',
    sad: 'उदास',
    neutral: 'सामान्य',
    happy: 'खुश',
    veryHappy: 'बहुत खुश',
    
    // Professional Help
    emergencySupport: 'आपातकालीन सहायता',
    findPsychiatrist: 'मनोचिकित्सक खोजें',
    
    // Meditation
    chooseAPractice: 'एक अभ्यास चुनें',
    breathingExercise: 'सांस की एक्सरसाइज',
    bodyScenario: 'बॉडी स्कैन',
    mindfulWalking: 'सचेत चलना',
    lovingKindness: 'प्रेम-दया',
    gratitudeMeditation: 'कृतज्ञता ध्यान',
    
    // AI Chatbot
    aiAssistant: 'AI असिस्टेंट',
    typeMessage: 'अपना संदेश टाइप करें...',
    howCanIHelp: 'नमस्ते! मैं यहाँ आपकी मानसिक स्वास्थ्य यात्रा में सहायता के लिए हूँ। आज मैं आपकी कैसे मदद कर सकता हूँ?',
    
    // Daily Thoughts
    dailyThought: 'दैनिक विचार',
    shareThoughts: 'अपने विचार और भावनाएं साझा करें...',
    thoughtSaved: 'आपका विचार सेव हो गया है',
    
    // Activities
    activityCenter: 'गतिविधि केंद्र',
    yourHobbies: 'आपके शौक',
    startActivity: 'गतिविधि शुरू करें',
    
    // Quotes
    dailyQuote: 'दैनिक उद्धरण',
    calmingQuote: 'शांत करने वाला उद्धरण',
  },
  pa: {
    // Common
    save: 'ਸੇਵ ਕਰੋ',
    cancel: 'ਰੱਦ ਕਰੋ',
    continue: 'ਜਾਰੀ ਰੱਖੋ',
    back: 'ਵਾਪਸ',
    next: 'ਅਗਲਾ',
    loading: 'ਲੋਡ ਹੋ ਰਿਹਾ ਹੈ...',
    error: 'ਗਲਤੀ',
    success: 'ਸਫਲਤਾ',
    
    // Auth
    login: 'ਲਾਗਇਨ',
    signUp: 'ਸਾਈਨ ਅਪ',
    email: 'ਈਮੇਲ',
    password: 'ਪਾਸਵਰਡ',
    confirmPassword: 'ਪਾਸਵਰਡ ਦੀ ਪੁਸ਼ਟੀ ਕਰੋ',
    fullName: 'ਪੂਰਾ ਨਾਮ',
    createAccount: 'ਖਾਤਾ ਬਣਾਓ',
    forgotPassword: 'ਪਾਸਵਰਡ ਭੁੱਲ ਗਏ?',
    
    // App Name
    appName: 'ਮਨ ਕੇਅਰ',
    appSubtitle: 'ਤੁਹਾਡਾ ਮਾਨਸਿਕ ਸਿਹਤ ਸਾਥੀ',
    
    // Navigation
    moodTracker: 'ਮੂਡ ਟਰੈਕਰ',
    professionalHelp: 'ਪੇਸ਼ੇਵਰ ਮਦਦ',
    meditation: 'ਧਿਆਨ',
    settings: 'ਸੈਟਿੰਗਾਂ',
    chatbot: 'AI ਸਹਾਇਕ',
    thoughts: 'ਵਿਚਾਰ',
    activities: 'ਗਤੀਵਿਧੀਆਂ',
    
    // Settings
    darkMode: 'ਡਾਰਕ ਮੋਡ',
    language: 'ਭਾਸ਼ਾ',
    notifications: 'ਸੂਚਨਾਵਾਂ',
    
    // Mood Tracker
    howAreYouFeeling: 'ਅੱਜ ਤੁਸੀਂ ਕਿਵੇਂ ਮਹਿਸੂਸ ਕਰ ਰਹੇ ਹੋ?',
    selectMood: 'ਆਪਣਾ ਮੂਡ ਚੁਣੋ',
    addNote: 'ਇੱਕ ਨੋਟ ਜੋੜੋ (ਵਿਕਲਪਿਕ)',
    saveMoodEntry: 'ਮੂਡ ਐਂਟਰੀ ਸੇਵ ਕਰੋ',
    moodStats: 'ਤੁਹਾਡੇ ਮੂਡ ਦੇ ਅੰਕੜੇ',
    
    // Moods
    verySad: 'ਬਹੁਤ ਉਦਾਸ',
    sad: 'ਉਦਾਸ',
    neutral: 'ਆਮ',
    happy: 'ਖੁਸ਼',
    veryHappy: 'ਬਹੁਤ ਖੁਸ਼',
    
    // Professional Help
    emergencySupport: 'ਸੰਕਟਕਾਲੀ ਸਹਾਇਤਾ',
    findPsychiatrist: 'ਮਨੋਚਿਕਿਤਸਕ ਲੱਭੋ',
    
    // Meditation
    chooseAPractice: 'ਇੱਕ ਅਭਿਆਸ ਚੁਣੋ',
    breathingExercise: 'ਸਾਹ ਦੀ ਕਸਰਤ',
    bodyScenario: 'ਸਰੀਰ ਸਕੈਨ',
    mindfulWalking: 'ਸੁਚੇਤ ਤੁਰਨਾ',
    lovingKindness: 'ਪ੍ਰੇਮ-ਦਯਾ',
    gratitudeMeditation: 'ਧੰਨਵਾਦ ਧਿਆਨ',
    
    // AI Chatbot
    aiAssistant: 'AI ਸਹਾਇਕ',
    typeMessage: 'ਆਪਣਾ ਸੰਦੇਸ਼ ਟਾਈਪ ਕਰੋ...',
    howCanIHelp: 'ਸਤ ਸ੍ਰੀ ਅਕਾਲ! ਮੈਂ ਤੁਹਾਡੀ ਮਾਨਸਿਕ ਸਿਹਤ ਯਾਤਰਾ ਵਿੱਚ ਸਹਾਇਤਾ ਲਈ ਹਾਂ। ਅੱਜ ਮੈਂ ਤੁਹਾਡੀ ਕਿਵੇਂ ਮਦਦ ਕਰ ਸਕਦਾ ਹਾਂ?',
    
    // Daily Thoughts
    dailyThought: 'ਰੋਜ਼ਾਨਾ ਵਿਚਾਰ',
    shareThoughts: 'ਆਪਣੇ ਵਿਚਾਰ ਅਤੇ ਭਾਵਨਾਵਾਂ ਸਾਂਝੀਆਂ ਕਰੋ...',
    thoughtSaved: 'ਤੁਹਾਡਾ ਵਿਚਾਰ ਸੇਵ ਹੋ ਗਿਆ ਹੈ',
    
    // Activities
    activityCenter: 'ਗਤੀਵਿਧੀ ਕੇਂਦਰ',
    yourHobbies: 'ਤੁਹਾਡੇ ਸ਼ੌਕ',
    startActivity: 'ਗਤੀਵਿਧੀ ਸ਼ੁਰੂ ਕਰੋ',
    
    // Quotes
    dailyQuote: 'ਰੋਜ਼ਾਨਾ ਹਵਾਲਾ',
    calmingQuote: 'ਸ਼ਾਂਤ ਕਰਨ ਵਾਲਾ ਹਵਾਲਾ',
  },
  ur: {
    // Common
    save: 'محفوظ کریں',
    cancel: 'منسوخ کریں',
    continue: 'جاری رکھیں',
    back: 'واپس',
    next: 'اگلا',
    loading: 'لوڈ ہو رہا ہے...',
    error: 'خرابی',
    success: 'کامیابی',
    
    // Auth
    login: 'لاگ ان',
    signUp: 'سائن اپ',
    email: 'ای میل',
    password: 'پاس ورڈ',
    confirmPassword: 'پاس ورڈ کی تصدیق کریں',
    fullName: 'پورا نام',
    createAccount: 'اکاؤنٹ بنائیں',
    forgotPassword: 'پاس ورڈ بھول گئے؟',
    
    // App Name
    appName: 'مائنڈ کیئر',
    appSubtitle: 'آپ کا ذہنی صحت کا ساتھی',
    
    // Navigation
    moodTracker: 'موڈ ٹریکر',
    professionalHelp: 'پیشہ ورانہ مدد',
    meditation: 'مراقبہ',
    settings: 'سیٹنگز',
    chatbot: 'AI اسسٹنٹ',
    thoughts: 'خیالات',
    activities: 'سرگرمیاں',
    
    // Settings
    darkMode: 'ڈارک موڈ',
    language: 'زبان',
    notifications: 'اطلاعات',
    
    // Mood Tracker
    howAreYouFeeling: 'آج آپ کیسا محسوس کر رہے ہیں؟',
    selectMood: 'اپنا موڈ منتخب کریں',
    addNote: 'ایک نوٹ شامل کریں (اختیاری)',
    saveMoodEntry: 'موڈ انٹری محفوظ کریں',
    moodStats: 'آپ کے موڈ کے اعداد و شمار',
    
    // Moods
    verySad: 'بہت اداس',
    sad: 'اداس',
    neutral: 'عام',
    happy: 'خوش',
    veryHappy: 'بہت خوش',
    
    // Professional Help
    emergencySupport: 'ہنگامی سہارا',
    findPsychiatrist: 'ماہر نفسیات تلاش کریں',
    
    // Meditation
    chooseAPractice: 'ایک مشق منتخب کریں',
    breathingExercise: 'سانس کی ورزش',
    bodyScenario: 'جسم کا اسکین',
    mindfulWalking: 'ہوشیار چلنا',
    lovingKindness: 'محبت-مہربانی',
    gratitudeMeditation: 'شکر گزاری کا مراقبہ',
    
    // AI Chatbot
    aiAssistant: 'AI اسسٹنٹ',
    typeMessage: 'اپنا پیغام ٹائپ کریں...',
    howCanIHelp: 'السلام علیکم! میں آپ کی ذہنی صحت کے سفر میں مدد کے لیے یہاں ہوں۔ آج میں آپ کی کیسے مدد کر سکتا ہوں؟',
    
    // Daily Thoughts
    dailyThought: 'روزانہ خیال',
    shareThoughts: 'اپنے خیالات اور احساسات شیئر کریں...',
    thoughtSaved: 'آپ کا خیال محفوظ ہو گیا ہے',
    
    // Activities
    activityCenter: 'سرگرمی مرکز',
    yourHobbies: 'آپ کے مشاغل',
    startActivity: 'سرگرمی شروع کریں',
    
    // Quotes
    dailyQuote: 'روزانہ اقتباس',
    calmingQuote: 'پرسکون کرنے والا اقتباس',
  },
};

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  
  // In a real app, you would load this from AsyncStorage
  useEffect(() => {
    // Load saved language preference
    // AsyncStorage.getItem('language').then(value => {
    //   if (value !== null) {
    //     setCurrentLanguage(value);
    //   }
    // });
  }, []);

  const changeLanguage = (languageCode) => {
    setCurrentLanguage(languageCode);
    
    // In a real app, save to AsyncStorage
    // AsyncStorage.setItem('language', languageCode);
  };

  const t = (key) => {
    return translations[currentLanguage][key] || translations.en[key] || key;
  };

  const availableLanguages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'hi', name: 'हिन्दी (Hindi)', flag: '🇮🇳' },
    { code: 'pa', name: 'ਪੰਜਾਬੀ (Punjabi)', flag: '🇮🇳' },
    { code: 'ur', name: 'اردو (Urdu)', flag: '🇮🇳' },
  ];

  const value = {
    currentLanguage,
    changeLanguage,
    t,
    availableLanguages,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;