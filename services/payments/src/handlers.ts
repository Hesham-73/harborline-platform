export function health(_request, response) { response.json({ service: 'payments', handler: 'health' }); }

export function createCharge(_request, response) { response.json({ service: 'payments', handler: 'createCharge' }); }

export function createRefund(_request, response) { response.json({ service: 'payments', handler: 'createRefund' }); }
