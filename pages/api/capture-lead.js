// Simple lead capture API
// In production, this would save to Firebase or a CRM
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { email, source, package: pkg, timestamp } = req.body;
    
    // Log lead (replace with DB save)
    console.log('Lead Captured:', { email, source, pkg, timestamp });

    // Simulate success
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Lead capture error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
