export function health(_request, response) { response.json({ service: 'billing', handler: 'health' }); }

export function issueInvoice(_request, response) { response.json({ service: 'billing', handler: 'issueInvoice' }); }
