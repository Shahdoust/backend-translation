import axios from "axios";

export const textTranslator = async (req, res, next) => {
  console.log(req.body);
  try {
    const { data } = await axios.post(
      "https://api-free.deepl.com/v2/translate",
      // text: [req.body.textInput],
      // target_lang: req.body.targetLang || "DE",
      req.body,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `DeepL-Auth-Key ${process.env.DEEPL_ACCESS_KEY}`,
        },
      }
    );
    res.json(data);
  } catch (error) {
    next(error);
  }
};

export default textTranslator;
