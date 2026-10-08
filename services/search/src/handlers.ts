export function health(_request, response) { response.json({ service: 'search', handler: 'health' }); }

export function searchCatalog(_request, response) { response.json({ service: 'search', handler: 'searchCatalog' }); }
