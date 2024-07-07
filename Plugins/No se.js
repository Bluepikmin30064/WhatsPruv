module.exports = {
    usage: ['Hi'], // 🎯 Command usage trigger
    description: 'Say hello!', // 📜 Description of the command
    emoji: '👋', // 🎨 Emoji associated with the command
    isGroupOnly: false, // 👥 Set to true if the command should only work in groups
    isChannelOnly: false, // 📢 Set to true if the command should only work in channels
    isWorkAll: true, // 🌍 Set to true if the command should work all type
    async execute(sock, m, args) {
        // 🧠 The function to be executed when the command is called
        await hacxk.reply('Hello! 👋', m);
    }
};