export function health(_request, response) { response.json({ service: 'identity', handler: 'health' }); }

export function issueToken(_request, response) { response.json({ service: 'identity', handler: 'issueToken' }); }

export function readCustomer(_request, response) { response.json({ service: 'identity', handler: 'readCustomer' }); }
