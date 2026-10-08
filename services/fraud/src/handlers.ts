export function health(_request, response) { response.json({ service: 'fraud', handler: 'health' }); }

export function reviewOrder(_request, response) { response.json({ service: 'fraud', handler: 'reviewOrder' }); }
