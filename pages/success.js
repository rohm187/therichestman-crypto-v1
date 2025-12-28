import { useRouter } from 'next/router';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function Success() {
  const router = useRouter();
  const { session_id } = router.query;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 text-white flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-black/30 backdrop-blur-md p-8 rounded-2xl border border-white/10 text-center">
        <div className="flex justify-center mb-6">
          <CheckCircle className="w-20 h-20 text-green-400" />
        </div>
        <h1 className="text-3xl font-bold mb-4">Welcome to the Protocol!</h1>
        <p className="text-gray-300 mb-8">
          Your payment was successful. Check your email for access details and next steps.
        </p>
        <Link 
          href="/"
          className="inline-block w-full py-3 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-400 transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
