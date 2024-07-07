global.settings = {
  botName: 'World',
  ownerNames: ['Blue'], // Array of owner names/usernames
  ownerNumbers: ['+56952119366'], // Array of owner phone numbers (with country code)
  workMode: 'Public',

  maxDownloadSize: 50 * 1024 * 1024, // 50 MB download limit in bytes
  blockedKeywords: [], // Add more keywords as needed
  deleteBadWords: true, // Enable/disable bad word deletion
  isHackEnable: true,
  isAdultSearchEnable: false,
  rejectCalls: true,

  // Other settings...
  defaultLanguage: 'es',
  defaultTimezone: 'America/Chile',

  typingDelay: { // this configuration to determine how long to wait before sending the message this shows typing... mark
    min: 200, // Minimum delay in milliseconds
    max: 600, // Maximum delay in milliseconds
    longMessageThreshold: 300, // Characters
  },
  // Text-to-Speech Settings
  tts: {
    defaultLanguage: 'es',       // Default language code (e.g., 'en', 'es', 'fr')
    defaultSpeed: false,         // Default speaking speed (false for normal, true for slow)
    maxChars: 200,               // Max Letters to Say
  },

  botMenuTitle: 'ALENAILLS COMICS',
  // Additional Settings (customize as needed)
  autoReadMessages: false, // Automatically mark messages as read
  welcomeMessage: 'Bienvenido seas al mundo de Alenails Comics',
  goodbyeMessage: 'Chales, se nos escapo...',

  // API KEY
  giphyAPIKey: '',


};