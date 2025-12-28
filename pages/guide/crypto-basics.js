import { useState } from 'react';
import Head from 'next/head';
import { BookOpen, CheckCircle, Download } from 'lucide-react';

export default function CryptoBasics() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleCapture = async (e) => {
    e.preventDefault();
    // Simulate capture
    setSubmitted(true);
    // In production: await fetch('/api/capture-lead', ...)
    
    // Redirect to Gumroad or Download
    // window.location.href = "YOUR_GUMROAD_LINK";
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>Free Guide: Crypto Basics | The Richest Man in the Crypto Capital</title>
      </Head>

      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <span className="text-yellow-400 font-bold tracking-wider uppercase">Free Guide</span>
          <h1 className="text-5xl font-bold mt-4 mb-6">Master the Basics of Crypto</h1>
          <p className="text-xl text-gray-400">
            Stop gambling and start investing. Learn the fundamental principles that separate winners from losers in the crypto market.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
            <BookOpen className="w-16 h-16 text-yellow-400 mb-6" />
            <h3 className="text-2xl font-bold mb-4">What You'll Learn:</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                How to set up a secure wallet
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                Understanding blockchain vs. coins
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                The 3 rules of risk management
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                How to spot scams instantly
              </li>
            </ul>
          </div>

          <div>
            {!submitted ? (
              <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-bold mb-2">Get Instant Access</h3>
                <p className="text-gray-400 mb-6">Enter your email to download the PDF guide.</p>
                <form onSubmit={handleCapture} className="space-y-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your best email address"
                    className="w-full px-4 py-3 rounded-lg bg-black border border-gray-700 focus:border-yellow-400 outline-none transition-colors"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-lg transition-colors flex items-center justify-center"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Send Me The Guide
                  </button>
                </form>
                <p className="text-xs text-gray-500 mt-4 text-center">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            ) : (
              <div className="bg-green-900/20 p-8 rounded-2xl border border-green-500/30 text-center">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Check Your Inbox!</h3>
                <p className="text-gray-300 mb-6">
                  We've sent the guide to <strong>{email}</strong>.
                </p>
                <div className="bg-yellow-500/10 p-4 rounded-lg border border-yellow-500/30">
                  <p className="text-yellow-400 font-bold mb-2">Wait! While you're here...</p>
                  <p className="text-sm text-gray-300 mb-4">
                    Want to fast-track your results? Get the full Marcus Protocol Course for 80% off today only.
                  </p>
                  <a href="/" className="block w-full py-2 bg-yellow-500 text-black font-bold rounded hover:bg-yellow-400 transition-colors">
                    See The Offer
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
