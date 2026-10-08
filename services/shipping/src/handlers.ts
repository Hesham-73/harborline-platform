export function health(_request, response) { response.json({ service: 'shipping', handler: 'health' }); }

export function createShipment(_request, response) { response.json({ service: 'shipping', handler: 'createShipment' }); }

export function readShipment(_request, response) { response.json({ service: 'shipping', handler: 'readShipment' }); }
