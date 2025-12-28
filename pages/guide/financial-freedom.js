import { useState } from 'react';
import Head from 'next/head';
import { TrendingUp, CheckCircle, Download } from 'lucide-react';

export default function FinancialFreedom() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleCapture = async (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>Free Guide: Financial Freedom Blueprint | The Richest Man in the Crypto Capital</title>
      </Head>

      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <span className="text-green-400 font-bold tracking-wider uppercase">Free Blueprint</span>
          <h1 className="text-5xl font-bold mt-4 mb-6">The Financial Freedom Map</h1>
          <p className="text-xl text-gray-400">
            The exact step-by-step roadmap to replace your 9-5 income with automated assets.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
            <TrendingUp className="w-16 h-16 text-green-400 mb-6" />
            <h3 className="text-2xl font-bold mb-4">Inside The Blueprint:</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                Calculating your "Freedom Number"
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                Asset allocation for passive income
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                The "Infinite Banking" concept simplified
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                How to leverage debt responsibly
              </li>
            </ul>
          </div>

          <div>
            {!submitted ? (
              <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-bold mb-2">Download The Map</h3>
                <p className="text-gray-400 mb-6">Where should we send your free copy?</p>
                <form onSubmit={handleCapture} className="space-y-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full px-4 py-3 rounded-lg bg-black border border-gray-700 focus:border-green-400 outline-none transition-colors"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full py-3 bg-green-500 hover:bg-green-600 text-black font-bold rounded-lg transition-colors flex items-center justify-center"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Get The Blueprint
                  </button>
                </form>
              </div>
            ) : (
              <div className="bg-green-900/20 p-8 rounded-2xl border border-green-500/30 text-center">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">It's On The Way!</h3>
                <p className="text-gray-300 mb-6">
                  Check your email ({email}) for the download link.
                </p>
                <div className="bg-yellow-500/10 p-4 rounded-lg border border-yellow-500/30">
                  <p className="text-yellow-400 font-bold mb-2">Next Step:</p>
                  <p className="text-sm text-gray-300 mb-4">
                    Ready to implement this map? The Marcus Protocol gives you the tools to do it.
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
