import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <main className="pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
        
        <div className="space-y-8 text-gray-300">
          <section>
            <h2 className="text-xl font-semibold mb-4 text-white">1. Terms</h2>
            <p>
              By accessing InvestMinD, you agree to be bound by these terms of service and agree that 
              you are responsible for compliance with any applicable local laws.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-white">2. Use License</h2>
            <p className="mb-4">
              Permission is granted to temporarily access InvestMinD for personal, non-commercial use. 
              This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose</li>
              <li>Attempt to decompile or reverse engineer any software</li>
              <li>Remove any copyright or other proprietary notations</li>
              <li>Transfer the materials to another person</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-white">3. Disclaimer</h2>
            <p>
              The materials on InvestMinD are provided on an 'as is' basis. We make no warranties, 
              expressed or implied, and hereby disclaim and negate all other warranties including, 
              without limitation, implied warranties or conditions of merchantability, fitness for a 
              particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-white">4. Limitations</h2>
            <p>
              In no event shall InvestMinD or its suppliers be liable for any damages (including, 
              without limitation, damages for loss of data or profit, or due to business interruption) 
              arising out of the use or inability to use InvestMinD.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-white">5. Revisions</h2>
            <p>
              We may revise these terms of service at any time without notice. By using InvestMinD 
              you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-white">6. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with applicable 
              laws, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default TermsOfService;