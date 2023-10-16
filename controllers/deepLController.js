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
  } catch (error) {
    next(error);
  }
};

export default textTranslator;
