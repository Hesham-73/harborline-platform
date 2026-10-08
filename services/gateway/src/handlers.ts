export function health(_request, response) { response.json({ service: 'gateway', handler: 'health' }); }

export function ready(_request, response) { response.json({ service: 'gateway', handler: 'ready' }); }

export function openSession(_request, response) { response.json({ service: 'gateway', handler: 'openSession' }); }
