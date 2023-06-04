const connection = require("../../connection");

const handleEventWebhook = (req, res) => {
  const content = req.body;

  const sid = content.sid;
  const searchName = content.search_name;
  const app = content.app;
  const owner = content.owner;

  const resultsLink = content.results_link;
  const result = JSON.stringify(content.result, null, 2);

  try {
    connection.query(
      `INSERT INTO  EVENT_LOG (sid , search_name , app ,owner , results_link , result) VALUES (
        '${sid}' ,'${searchName}' ,'${app}' , '${owner}' ,'${resultsLink}' ,'${result}')`,
      (err, _result, _felds) => {
        if (err) return res.status(400);

        res.send({ ressult: "ok" }).status(200);
      }
    );
  } catch (error) {
    return res.status(500).send();
  }
};

module.exports = handleEventWebhook;
