import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { package: packageType, amount, monthly, productName } = req.body;

    let sessionConfig = {
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: productName,
            },
            unit_amount: amount,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/`,
    };

    // Handle subscription if monthly fee exists (e.g. Receptionist)
    if (monthly) {
       // Note: For subscriptions, you typically need a Price ID from Stripe, 
       // but for simplicity in this template we are doing a one-time charge first.
       // To do real subscriptions, mode should be 'subscription' and price should be a price_id.
       // For now, we'll stick to the one-time setup fee charge as per the code structure.
    }

    const session = await stripe.checkout.sessions.create(sessionConfig);

    res.status(200).json({ url: session.url });
  } catch (error) {
    console.error('Stripe error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
