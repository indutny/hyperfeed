'use strict';

require('./common')().get('/api/message', [
  'feed_key', 'index:i'
], (err, data) => {
  if (err)
    throw err;

  console.log(JSON.stringify(data, null, 2));
});
