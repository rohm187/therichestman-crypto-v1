import { useState } from 'react';
import { motion } from 'framer-motion';
import { DollarSign, TrendingUp, Shield, BookOpen, Users, Star, CheckCircle } from 'lucide-react';
import Head from 'next/head';

export default function MarcusProtocol() {
  const [email, setEmail] = useState('');
  const [selectedPackage, setSelectedPackage] = useState('protocol');

  const packages = {
    protocol: {
      name: 'The Marcus Protocol PDF',
      price: 97,
      description: 'Complete guide to cash value life insurance as wealth building.',
      features: [
        'How whole life insurance accumulates cash value',
        'The infinite banking concept explained',
        'Step-by-step setup process',
        'Real case studies with numbers',
        'Tax strategies and legal structures',
        'Instant PDF Download'
      ]
    },
    borrowing: {
      name: 'Borrowing from Life Insurance Guide',
      price: 47,
      description: 'Tactical guide for leveraging policy loans.',
      features: [
        'How to access cash value without penalties',
        'Interest rate strategies',
        'Repayment schedules that maximize growth',
        'Real estate investing with policy loans',
        'Instant PDF Download'
      ]
    },
    bundle: {
      name: 'Complete Wealth Bundle',
      price: 127,
      description: 'Get both guides and save $17.',
      features: [
        'The Marcus Protocol PDF ($97 Value)',
        'Borrowing from Life Insurance Guide ($47 Value)',
        'Bonus: Policy Comparison Spreadsheet',
        'Instant Access to Everything'
      ],
      highlight: true
    },
    course: {
      name: 'The Marcus Protocol Course',
      price: 497,
      description: '8-week video course with implementation support.',
      comingSoon: true,
      features: [
        '8-module video course',
        'Implementation support',
        'Private community access',
        'Monthly Q&A calls',
        'Wealth Perpetuation Module'
      ]
    },
    receptionist: {
      name: 'AI Receptionist Bot',
      price: 269,
      monthly: 149,
      description: 'Automate your client intake and scheduling.',
      features: [
        '24/7 Call Handling',
        'Instant Appointment Booking',
        'Custom Script Integration',
        'CRM Integration',
        '$269 Setup + $149/mo'
      ]
    }
  };

  const handleLeadCapture = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/capture-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email, 
          source: 'marcus-protocol-hero-waitlist',
          timestamp: new Date().toISOString()
        })
      });
      if (response.ok) {
        alert('You have been added to the waitlist! Check your email for your free guide.');
        setEmail('');
      }
    } catch (error) {
      console.error('Lead capture failed:', error);
    }
  };

  const handlePurchase = async (packageType) => {
    const pkg = packages[packageType];
    if (pkg.comingSoon) return;

    try {
      const response = await fetch('/api/create-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          package: packageType,
          amount: pkg.price * 100,
          productName: pkg.name
        })
      });

      const { url } = await response.json();
      window.location.href = url;
    } catch (error) {
      console.error('Purchase failed:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white font-sans">
      <Head>
        <title>The Richest Man in the Crypto Capital | Build Wealth Like the Rich</title>
        <meta name="description" content="Build wealth like the rich do - with life insurance as your personal bank. The Marcus Protocol teaches you to borrow from yourself instead of banks." />
      </Head>

      {/* Navigation */}
      <nav className="relative z-10 bg-black/20 backdrop-blur-sm border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl md:text-2xl font-bold tracking-tight">The Richest Man in the Crypto Capital</div>
          <div className="space-x-6 hidden md:block text-sm font-medium">
            <a href="#protocol" className="hover:text-yellow-400 transition-colors">Protocol</a>
            <a href="#products" className="hover:text-yellow-400 transition-colors">Products</a>
            <a href="/guide/tax-loopholes" className="text-yellow-400 hover:text-yellow-300 transition-colors">
              Free Tax Guide
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-yellow-500/10 text-yellow-400 text-sm font-bold mb-6 border border-yellow-500/20">
              THE MARCUS PROTOCOL
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Build Wealth Like The Rich <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">
                With Life Insurance As Your Bank
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Stop paying interest to banks. Start borrowing from yourself. 
              Combine traditional wealth vehicles with modern crypto strategies for tax-free growth.
            </p>

            <div className="flex flex-col md:flex-row justify-center gap-4 mb-16">
              <a 
                href="#products"
                className="px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-black font-bold rounded-lg text-lg transition-all shadow-lg shadow-yellow-500/20"
              >
                Get The Protocol ($97)
              </a>
              <a 
                href="/guide/tax-loopholes"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg text-lg transition-all border border-white/10"
              >
                Free Tax Loophole Guide
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-yellow-500/30 transition-colors">
              <Shield className="w-12 h-12 text-yellow-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Tax-Advantaged Wealth</h3>
              <p className="text-gray-400">
                Life insurance isn't just insurance. It's a vehicle for tax-free accumulation and access.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-yellow-500/30 transition-colors">
              <DollarSign className="w-12 h-12 text-green-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Infinite Banking</h3>
              <p className="text-gray-400">
                Turn your policy into a personal financing system. Borrow from yourself, pay yourself back.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-yellow-500/30 transition-colors">
              <TrendingUp className="w-12 h-12 text-blue-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Crypto Integration</h3>
              <p className="text-gray-400">
                Use policy loans to buy assets like Bitcoin during dips without selling your base capital.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Choose Your Path</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(packages).map(([key, pkg]) => (
              <div 
                key={key}
                className={`relative p-6 rounded-2xl border flex flex-col ${
                  pkg.highlight 
                    ? 'border-yellow-500 bg-yellow-500/10' 
                    : 'border-white/10 bg-white/5'
                }`}
              >
                {pkg.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                    BEST VALUE
                  </div>
                )}
                
                <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                <p className="text-gray-400 text-sm mb-6 flex-grow">{pkg.description}</p>
                
                <div className="text-3xl font-bold mb-6">
                  ${pkg.price}
                  {pkg.comingSoon && <span className="text-sm font-normal text-gray-500 ml-2 block">Coming Soon</span>}
                </div>

                <ul className="space-y-3 mb-8 text-sm text-gray-300">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handlePurchase(key)}
                  disabled={pkg.comingSoon}
                  className={`w-full py-3 rounded-lg font-bold transition-all ${
                    pkg.comingSoon
                      ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                      : pkg.highlight
                        ? 'bg-yellow-500 hover:bg-yellow-400 text-black'
                        : 'bg-white text-black hover:bg-gray-200'
                  }`}
                >
                  {pkg.comingSoon ? 'Join Waitlist' : 'Get Instant Access'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 text-center text-gray-500 bg-black/20">
        <p>&copy; {new Date().getFullYear()} The Richest Man in the Crypto Capital. All rights reserved.</p>
      </footer>
    </div>
  );
}
