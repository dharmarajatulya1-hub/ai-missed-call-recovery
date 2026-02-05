/**
 * Email Subscription API Endpoint
 * 
 * Usage: POST /api/subscribe
 * Body: { businessName, phone, email, businessType }
 * 
 * This is a placeholder implementation. In production, you would:
 * - Validate input data
 * - Store in a database (Supabase, MongoDB, etc.)
 * - Send confirmation email
 * - Add to CRM system
 * - Trigger welcome workflow
 */

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      error: 'Method not allowed. Use POST.'
    });
  }

  try {
    const { businessName, phone, email, businessType } = req.body;

    // Basic validation
    if (!businessName || !phone || !email || !businessType) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields: businessName, phone, email, businessType'
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid email address'
      });
    }

    // Phone validation (basic)
    const phoneRegex = /^\(\d{3}\)\s\d{3}-\d{4}$/;
    if (!phoneRegex.test(phone)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid phone format. Expected: (555) 123-4567'
      });
    }

    // TODO: In production, store this data
    // Examples:
    // - await db.collection('leads').insertOne({ businessName, phone, email, businessType, createdAt: new Date() })
    // - await sendConfirmationEmail(email, businessName)
    // - await notifyTeam(businessName, email)
    
    // For now, just log it (Vercel logs can be viewed in dashboard)
    console.log('New subscription:', {
      businessName,
      phone,
      email,
      businessType,
      timestamp: new Date().toISOString()
    });

    // Success response
    return res.status(200).json({
      success: true,
      message: 'Subscription received! We\'ll contact you within 24 hours.',
      data: {
        businessName,
        email,
        businessType
      }
    });

  } catch (error) {
    console.error('Subscription error:', error);
    
    return res.status(500).json({
      success: false,
      error: 'Internal server error. Please try again later.'
    });
  }
}
