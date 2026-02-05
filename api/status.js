/**
 * API Status Check Endpoint
 * 
 * Usage: GET /api/status
 * Returns system health and API status
 */

export default function handler(req, res) {
  const status = {
    success: true,
    service: 'AI Missed Call Recovery API',
    status: 'operational',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
    endpoints: {
      hello: '/api/hello',
      subscribe: '/api/subscribe (POST)',
      status: '/api/status'
    },
    uptime: process.uptime(),
    environment: process.env.VERCEL_ENV || 'development'
  };

  res.status(200).json(status);
}
