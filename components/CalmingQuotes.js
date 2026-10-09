import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

const { width } = Dimensions.get('window');

const CalmingQuotes = ({ style, showRefresh = true }) => {
  const { theme } = useTheme();
  const { t } = useLanguage();
  const [currentQuote, setCurrentQuote] = useState(null);

  const styles = getStyles(theme);

  const quotes = [
    {
      text: "Peace comes from within. Do not seek it without.",
      author: "Buddha",
      category: "Peace"
    },
    {
      text: "The present moment is the only time over which we have dominion.",
      author: "Thích Nhất Hạnh",
      category: "Mindfulness"
    },
    {
      text: "You are braver than you believe, stronger than you seem, and smarter than you think.",
      author: "A.A. Milne",
      category: "Strength"
    },
    {
      text: "In the middle of difficulty lies opportunity.",
      author: "Albert Einstein",
      category: "Opportunity"
    },
    {
      text: "The only way out is through.",
      author: "Robert Frost",
      category: "Perseverance"
    },
    {
      text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
      author: "Ralph Waldo Emerson",
      category: "Inner Strength"
    },
    {
      text: "Breathe in peace, breathe out stress.",
      author: "Anonymous",
      category: "Relaxation"
    },
    {
      text: "Every moment is a fresh beginning.",
      author: "T.S. Eliot",
      category: "New Beginnings"
    },
    {
      text: "The greatest revolution of our generation is the discovery that human beings, by changing the inner attitudes of their minds, can change the outer aspects of their lives.",
      author: "William James",
      category: "Change"
    },
    {
      text: "Be yourself; everyone else is already taken.",
      author: "Oscar Wilde",
      category: "Authenticity"
    },
    {
      text: "The journey of a thousand miles begins with one step.",
      author: "Lao Tzu",
      category: "Progress"
    },
    {
      text: "Happiness is not something ready made. It comes from your own actions.",
      author: "Dalai Lama",
      category: "Happiness"
    },
    {
      text: "You yourself, as much as anybody in the entire universe, deserve your love and affection.",
      author: "Buddha",
      category: "Self-Love"
    },
    {
      text: "The only impossible journey is the one you never begin.",
      author: "Tony Robbins",
      category: "Beginning"
    },
    {
      text: "Life isn't about waiting for the storm to pass, it's about learning to dance in the rain.",
      author: "Vivian Greene",
      category: "Resilience"
    },
    {
      text: "Your limitation—it's only your imagination.",
      author: "Anonymous",
      category: "Potential"
    },
    {
      text: "Great things never come from comfort zones.",
      author: "Anonymous",
      category: "Growth"
    },
    {
      text: "The mind is everything. What you think you become.",
      author: "Buddha",
      category: "Mindset"
    },
    {
      text: "Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.",
      author: "Bill Keane",
      category: "Present Moment"
    },
    {
      text: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt",
      category: "Belief"
    },
  ];

  useEffect(() => {
    getRandomQuote();
  }, []);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
  };

  const shareQuote = () => {
    if (currentQuote) {
      Alert.alert(
        'Share Quote',
        `"${currentQuote.text}" - ${currentQuote.author}`,
        [
          { text: 'Copy to Clipboard', onPress: () => {} },
          { text: 'Share via...', onPress: () => {} },
          { text: 'Cancel', style: 'cancel' },
        ]
      );
    }
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Peace': theme.secondary,
      'Mindfulness': theme.primary,
      'Strength': theme.warning,
      'Opportunity': theme.purple,
      'Perseverance': theme.error,
      'Inner Strength': theme.secondary,
      'Relaxation': theme.primary,
      'New Beginnings': theme.warning,
      'Change': theme.purple,
      'Authenticity': theme.error,
      'Progress': theme.secondary,
      'Happiness': theme.warning,
      'Self-Love': theme.error,
      'Beginning': theme.primary,
      'Resilience': theme.secondary,
      'Potential': theme.purple,
      'Growth': theme.warning,
      'Mindset': theme.primary,
      'Present Moment': theme.secondary,
      'Belief': theme.purple,
    };
    return colors[category] || theme.primary;
  };

  if (!currentQuote) {
    return (
      <View style={[styles.container, style]}>
        <View style={styles.loadingContainer}>
          <Ionicons name="refresh-outline" size={24} color={theme.textLight} />
          <Text style={styles.loadingText}>Loading quote...</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={[styles.container, style]}>
      <View style={styles.quoteCard}>
        <View style={styles.quoteHeader}>
          <View style={[styles.categoryBadge, { backgroundColor: getCategoryColor(currentQuote.category) + '20' }]}>
            <Text style={[styles.categoryText, { color: getCategoryColor(currentQuote.category) }]}>
              {currentQuote.category}
            </Text>
          </View>
          <Ionicons name="format-quote" size={24} color={theme.primary} />
        </View>
        
        <Text style={styles.quoteText}>"{currentQuote.text}"</Text>
        
        <Text style={styles.authorText}>— {currentQuote.author}</Text>
        
        <View style={styles.quoteActions}>
          {showRefresh && (
            <TouchableOpacity
              style={[styles.actionButton, { backgroundColor: theme.primary + '20' }]}
              onPress={getRandomQuote}
            >
              <Ionicons name="refresh" size={18} color={theme.primary} />
              <Text style={[styles.actionButtonText, { color: theme.primary }]}>New Quote</Text>
            </TouchableOpacity>
          )}
          
          <TouchableOpacity
            style={[styles.actionButton, { backgroundColor: theme.secondary + '20' }]}
            onPress={shareQuote}
          >
            <Ionicons name="share-outline" size={18} color={theme.secondary} />
            <Text style={[styles.actionButtonText, { color: theme.secondary }]}>Share</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const getStyles = (theme) => StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  loadingContainer: {
    backgroundColor: theme.cardBackground,
    padding: 30,
    borderRadius: 15,
    alignItems: 'center',
    shadowColor: theme.shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  loadingText: {
    fontSize: 14,
    color: theme.textLight,
    marginTop: 10,
  },
  quoteCard: {
    backgroundColor: theme.cardBackground,
    padding: 25,
    borderRadius: 15,
    shadowColor: theme.shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
    borderLeftWidth: 4,
    borderLeftColor: theme.primary,
  },
  quoteHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  categoryBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
  },
  categoryText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  quoteText: {
    fontSize: 18,
    color: theme.text,
    lineHeight: 28,
    fontStyle: 'italic',
    marginBottom: 15,
    textAlign: 'center',
  },
  authorText: {
    fontSize: 14,
    color: theme.textSecondary,
    textAlign: 'right',
    marginBottom: 20,
    fontWeight: '600',
  },
  quoteActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: 15,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
    flex: 1,
    justifyContent: 'center',
  },
  actionButtonText: {
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 6,
  },
});

export default CalmingQuotes;