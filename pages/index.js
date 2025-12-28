import { useState } from 'react';
import { motion } from 'framer-motion';
import { DollarSign, TrendingUp, Shield, BookOpen, Users, Star } from 'lucide-react';
import Head from 'next/head';

export default function MarcusProtocol() {
  const [email, setEmail] = useState('');
  const [selectedPackage, setSelectedPackage] = useState('course');

  const packages = {
    course: {
      name: 'Marcus Protocol Course',
      price: 297,
      description: 'Learn to build your own 20% monthly income system',
      comingSoon: true,
      features: [
        '8-module video course (6+ hours)',
        'Step-by-step implementation guide',
        'Cash value life insurance setup',
        'Crypto investment strategies',
        'Private community access',
        'Monthly Q&A calls',
        '90-day money-back guarantee'
      ]
    },
    turnkey: {
      name: 'Done-For-You Setup',
      price: 10000,
      description: 'We set up everything for you - just start earning',
      comingSoon: true,
      features: [
        'Complete Marcus Protocol implementation',
        'Life insurance policy setup',
        'Crypto portfolio creation',
        'Automated income systems',
        'Personal wealth manager',
        '1-year support included',
        'Guaranteed 20% monthly returns*'
      ]
    },
    pdf1: {
      name: 'Crypto Security & Basics Guide',
      price: 37,
      description: 'Essential guide to securing your assets and understanding the market.',
      features: [
        'Wallet security masterclass',
        'Scam prevention checklist',
        'Exchange setup guide',
        'Instant PDF Download'
      ]
    },
    pdf2: {
      name: 'Financial Freedom Strategy',
      price: 68,
      description: 'The mathematical blueprint to replacing your income.',
      features: [
        'Freedom number calculator',
        'Asset allocation models',
        'Debt leverage strategies',
        'Instant PDF Download'
      ]
    },
    pdfBundle: {
      name: 'Complete Knowledge Bundle',
      price: 99,
      description: 'Get both guides and save $6.',
      features: [
        'Crypto Security & Basics Guide',
        'Financial Freedom Strategy',
        'Bonus: Resource Checklist',
        'Instant Access to Both'
      ],
      highlight: true
    },
    receptionist: {
      name: 'AI Receptionist Bot',
      price: 497,
      monthly: 97,
      description: 'AI-powered receptionist for your business',
      features: [
        'Custom AI receptionist setup',
        '24/7 customer service',
        'Lead qualification system',
        'Appointment scheduling',
        'CRM integration',
        'Monthly optimization',
        'Unlimited conversations'
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
          source: 'marcus-protocol-hero',
          package: selectedPackage,
          timestamp: new Date().toISOString()
        })
      });
      
      if (response.ok) {
        // Redirect to checkout after capture
        handlePurchase(selectedPackage);
      }
    } catch (error) {
      console.error('Lead capture failed:', error);
      // Fallback to purchase even if capture fails
      handlePurchase(selectedPackage);
    }
  };

  const handlePurchase = async (packageType) => {
    const pkg = packages[packageType];
    
    try {
      const response = await fetch('/api/create-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          package: packageType,
          amount: pkg.price * 100,
          monthly: pkg.monthly ? pkg.monthly * 100 : null,
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
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 text-white">
      <Head>
        <title>The Richest Man in the Crypto Capital | Marcus Protocol</title>
        <meta name="description" content="The exact 3-step system that generates 20% monthly income through cash value life insurance + strategic crypto investing." />
      </Head>

      {/* Navigation */}
      <nav className="relative z-10 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">The Richest Man in the Crypto Capital</div>
          <div className="space-x-6 hidden md:block">
            <a href="#protocol" className="hover:text-yellow-400">Protocol</a>
            <a href="#course" className="hover:text-yellow-400">Course</a>
            <a href="#turnkey" className="hover:text-yellow-400">Done-For-You</a>
            <a href="https://day1aiautomations.com" className="text-yellow-400 hover:text-yellow-300">
              Phoenix Empire
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              The Marcus Protocol
              <span className="text-yellow-400 block mt-2">$2.75M Transformation</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              From $0 to $2.75M using the exact 3-step system that generates 20% monthly income 
              through cash value life insurance + strategic crypto investing. Now available as a course.
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 max-w-2xl mx-auto mb-12 border border-white/10">
              <h3 className="text-2xl font-bold mb-6">Choose Your Path to Wealth</h3>
              
              <form onSubmit={handleLeadCapture} className="space-y-6">
                <div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    {Object.entries(packages).map(([key, pkg]) => (
                      <div
                        key={key}
                        className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                          selectedPackage === key 
                            ? 'border-yellow-400 bg-yellow-400/20' 
                            : 'border-gray-400 bg-white/5'
                        }`}
                        onClick={() => setSelectedPackage(key)}
                      >
                        <div className="text-center">
                          <h4 className="font-bold mb-2 text-sm">{pkg.name}</h4>
                          <div className="text-xl font-bold text-yellow-400">
                            ${pkg.price.toLocaleString()}
                            {pkg.monthly && <div className="text-xs text-white">+ ${pkg.monthly}/mo</div>}
                          </div>
                          {pkg.comingSoon && (
                            <div className="mt-2 text-xs bg-gray-700 text-white px-2 py-1 rounded inline-block">
                              Coming Soon
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email to access the Marcus Protocol"
                    className="w-full px-6 py-4 rounded-lg text-gray-900 text-lg"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={packages[selectedPackage].comingSoon}
                  className={`w-full py-4 font-bold text-xl rounded-lg transition-colors shadow-lg ${
                    packages[selectedPackage].comingSoon
                      ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                      : 'bg-yellow-500 hover:bg-yellow-600 text-black shadow-yellow-500/20'
                  }`}
                >
                  {packages[selectedPackage].comingSoon ? 'Join Waitlist' : 'Get Instant Access'}
                </button>
              </form>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/5"
              >
                <DollarSign className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">20% Monthly</h3>
                <p className="text-gray-300">Consistent monthly income generation</p>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/5"
              >
                <Shield className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Protected Wealth</h3>
                <p className="text-gray-300">Cash value life insurance foundation</p>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/5"
              >
                <TrendingUp className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Crypto Growth</h3>
                <p className="text-gray-300">Strategic cryptocurrency investments</p>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/5"
              >
                <BookOpen className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Complete System</h3>
                <p className="text-gray-300">Step-by-step implementation guide</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 text-center text-gray-400 bg-black/20">
        <p>&copy; {new Date().getFullYear()} The Richest Man in the Crypto Capital. All rights reserved.</p>
      </footer>
    </div>
  );
}
