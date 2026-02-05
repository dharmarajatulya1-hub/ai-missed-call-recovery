/**
 * Simple Hello World API endpoint
 * 
 * Usage: GET /api/hello
 * Returns a welcome message
 */

export default function handler(req, res) {
  const { name = 'World' } = req.query;
  
  res.status(200).json({
    success: true,
    message: `Hello, ${name}!`,
    timestamp: new Date().toISOString(),
    service: 'AI Missed Call Recovery API'
  });
}
