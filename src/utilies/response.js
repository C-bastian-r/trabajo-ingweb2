exports.success = function(req, res, status=200, message="", err){
  res.status(status).send({
    error: false,
    status: status,
    body: message
  });
}

exports.fail = function(req, res, status=500, message="", err){
  res.status(status).send({
    error: true,
    status: status,
    body: message
  });
}