import { useState } from 'react';
import Head from 'next/head';
import { Bot, CheckCircle, Download } from 'lucide-react';

export default function AutomationBlueprint() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleCapture = async (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>Free Guide: Automation Blueprint | The Richest Man in the Crypto Capital</title>
      </Head>

      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <span className="text-blue-400 font-bold tracking-wider uppercase">Free Strategy</span>
          <h1 className="text-5xl font-bold mt-4 mb-6">The Automation Blueprint</h1>
          <p className="text-xl text-gray-400">
            How to use AI to automate your income streams and reclaim your time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
            <Bot className="w-16 h-16 text-blue-400 mb-6" />
            <h3 className="text-2xl font-bold mb-4">Discover:</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                Top 5 AI tools for passive income
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                Setting up an "Auto-Pilot" business
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                Eliminating 90% of manual work
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                Scaling without hiring employees
              </li>
            </ul>
          </div>

          <div>
            {!submitted ? (
              <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-bold mb-2">Get The Blueprint</h3>
                <p className="text-gray-400 mb-6">Enter your email to unlock the PDF.</p>
                <form onSubmit={handleCapture} className="space-y-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full px-4 py-3 rounded-lg bg-black border border-gray-700 focus:border-blue-400 outline-none transition-colors"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg transition-colors flex items-center justify-center"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Send It Now
                  </button>
                </form>
              </div>
            ) : (
              <div className="bg-blue-900/20 p-8 rounded-2xl border border-blue-500/30 text-center">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Sent!</h3>
                <p className="text-gray-300 mb-6">
                  The Automation Blueprint is on its way to <strong>{email}</strong>.
                </p>
                <div className="bg-yellow-500/10 p-4 rounded-lg border border-yellow-500/30">
                  <p className="text-yellow-400 font-bold mb-2">Upgrade Your System:</p>
                  <p className="text-sm text-gray-300 mb-4">
                    Want us to build the automation for you? Check out our Done-For-You service.
                  </p>
                  <a href="/" className="block w-full py-2 bg-yellow-500 text-black font-bold rounded hover:bg-yellow-400 transition-colors">
                    See Done-For-You
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
