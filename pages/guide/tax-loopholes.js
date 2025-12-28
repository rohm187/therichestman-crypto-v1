import { useState } from 'react';
import Head from 'next/head';
import { Shield, CheckCircle, Download } from 'lucide-react';

export default function TaxLoopholes() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleCapture = async (e) => {
    e.preventDefault();
    // Simulate capture
    setSubmitted(true);
    // In production: await fetch('/api/capture-lead', ...)
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans">
      <Head>
        <title>Free Guide: 5 Tax Loopholes the Rich Use | The Richest Man in the Crypto Capital</title>
      </Head>

      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <span className="text-yellow-400 font-bold tracking-wider uppercase">Free PDF Guide</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">5 Tax Loopholes The Rich Use</h1>
          <p className="text-xl text-gray-400">
            Discover the legal strategies the ultra-wealthy use to protect their assets and minimize taxes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
            <Shield className="w-16 h-16 text-yellow-400 mb-6" />
            <h3 className="text-2xl font-bold mb-4">What You'll Discover:</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                Why the rich love "Buy, Borrow, Die"
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                The "Section 7702" Tax Code Secret
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                How to access money tax-free
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                Protecting assets from lawsuits
              </li>
            </ul>
          </div>

          <div>
            {!submitted ? (
              <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-bold mb-2">Get The Free Guide</h3>
                <p className="text-gray-400 mb-6">Enter your email to download the PDF instantly.</p>
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
                  100% Secure. We never spam.
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
                  <p className="text-yellow-400 font-bold mb-2">Next Step:</p>
                  <p className="text-sm text-gray-300 mb-4">
                    Ready to implement these strategies? Get the full Marcus Protocol guide.
                  </p>
                  <a href="/" className="block w-full py-2 bg-yellow-500 text-black font-bold rounded hover:bg-yellow-400 transition-colors">
                    View The Protocol
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
