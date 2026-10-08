export function health(_request, response) { response.json({ service: 'media', handler: 'health' }); }

export function storeAsset(_request, response) { response.json({ service: 'media', handler: 'storeAsset' }); }
