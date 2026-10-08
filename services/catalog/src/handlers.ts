export function health(_request, response) { response.json({ service: 'catalog', handler: 'health' }); }

export function listProducts(_request, response) { response.json({ service: 'catalog', handler: 'listProducts' }); }

export function readProduct(_request, response) { response.json({ service: 'catalog', handler: 'readProduct' }); }
