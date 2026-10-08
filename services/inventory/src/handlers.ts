export function health(_request, response) { response.json({ service: 'inventory', handler: 'health' }); }

export function reserveStock(_request, response) { response.json({ service: 'inventory', handler: 'reserveStock' }); }

export function releaseStock(_request, response) { response.json({ service: 'inventory', handler: 'releaseStock' }); }
