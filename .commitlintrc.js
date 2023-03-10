// commitlint.config.js
// emojis like "โ ", "๐ ", ...
const matchAnyEmojiWithSpaceAfter =
  /(๐จ|โก๏ธ|๐ฅ|๐|๐๏ธ|โจ|๐|๐|๐|๐|โ|๐๏ธ|๐|๐|๐จ|๐ง|๐|โฌ๏ธ|โฌ๏ธ|๐|๐ท|๐|โป๏ธ|โ|โ|๐ง|๐จ|๐|โ๏ธ|๐ฉ|โช๏ธ|๐|๐ฆ๏ธ|๐ฝ๏ธ|๐|๐|๐ฅ|๐ฑ|โฟ๏ธ|๐ก|๐ป|๐ฌ|๐๏ธ|๐|๐|๐ฅ|๐ธ|๐๏ธ|๐ฑ|๐คก|๐ฅ|๐|๐ธ|โ๏ธ|๐๏ธ|๐ท๏ธ|๐ฑ|๐ฉ|๐ฅ|๐ซ|๐๏ธ|๐|๐ฉน|๐ง|โฐ๏ธ|๐งช|๐|๐ฉบ|๐งฑ|๐งโ๐ป|๐ธ|๐งต|๐ฆบ)/s;
const subjectThatDontStartWithBracket = /([^\[].+)/; // "Add tests" but don't allow "[ Add tests"

module.exports = {
  parserPreset: {
    parserOpts: {
      headerPattern: new RegExp(
        "^" +
          matchAnyEmojiWithSpaceAfter.source +
          subjectThatDontStartWithBracket.source +
          "$"
      ),
      headerCorrespondence: ["emoji", "subject"],
    },
  },
  plugins: [
    {
      rules: {
        "header-match-pattern": (parsed) => {
          const { emoji, subject } = parsed;
          if (emoji === null && subject === null) {
            return [
              false,
              `header must be in format 'โ Add tests', emoji:${emoji}, subject:${subject}`,
            ];
          }
          return [true, ""];
        },
      },
    },
  ],
  rules: {
    "header-match-pattern": [2, "always"],
  },
};
