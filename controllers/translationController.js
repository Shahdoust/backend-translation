import Translation from "../models/Translation.js";

export const getOneTranslation = async (req, res) => {
  // const {translation}
};

export const textTranslator = async (req, res, next) => {
  try {
    const { data } = await axios.post(
      "https://api-free.deepl.com/v2/translate",
      {
        text: [req.body.textInput],
        target_lang: req.body.targetLang || "DE",
      },
      {
        headers: {
          Authorization: process.env.DEEPL_ACCESS_KEY,
        },
      }
    );
    res.json(data);
    return data;
  } catch (error) {
    next(error);
  }
};

// post translation words
export const postOneTranslation = async (req, res) => {
  const text = req.body.text;
  const targetLanguage = req.body.targetLanguage;

  const translation = await Translation.create({
    originText: text,
    translateText: translateText,
    targetLanguage: targetLanguage,
  });

  try {
    if (!translation) {
      return res
        .status(200)
        .json({ msg: "Not enough information to translate" });
    } else {
      res.status(200).json(translation);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// get last translations
export const getLastTranslation = async (req, res) => {};
