const connection = require("../../connection");

const getEventWebhook = (_req, res) => {
  try {
    connection.query("SELECT * FROM EVENT_LOG", (error, result, _filds) => {
      if (error) return res.status(400);

      return res.send({ result: result });
    });
  } catch (error) {
    return res.status(500).send();
  }
};

module.exports = getEventWebhook;
