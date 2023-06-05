const connection = require("../../connection");

const getEventWebhook = (req, res) => {
  const findId = req.query.id ? `WHERE id = ${req.query.id}` : "";

  try {
    connection.query(
      `SELECT * FROM EVENT_LOG ${findId}`,
      (error, result, _filds) => {
        if (error) return res.status(400);

        return res.send({ result: result });
      }
    );
  } catch (error) {
    return res.status(500).send();
  }
};

module.exports = getEventWebhook;
