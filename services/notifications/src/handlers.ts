export function health(_request, response) { response.json({ service: 'notifications', handler: 'health' }); }

export function sendMessage(_request, response) { response.json({ service: 'notifications', handler: 'sendMessage' }); }
