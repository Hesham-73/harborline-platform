export function health(_request, response) { response.json({ service: 'checkout', handler: 'health' }); }

export function openCart(_request, response) { response.json({ service: 'checkout', handler: 'openCart' }); }

export function submitCart(_request, response) { response.json({ service: 'checkout', handler: 'submitCart' }); }
