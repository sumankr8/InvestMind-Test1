import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <main className="pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="space-y-8 text-gray-300">
          <section>
            <h2 className="text-xl font-semibold mb-4 text-white">Information We Collect</h2>
            <p className="mb-4">
              We collect information you provide directly to us when you create an account, 
              use our services, or communicate with us. This may include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name and contact information</li>
              <li>Account credentials</li>
              <li>Investment preferences and portfolio data</li>
              <li>Transaction history and financial information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-white">How We Use Your Information</h2>
            <p className="mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Process your transactions and send you related information</li>
              <li>Send you technical notices, updates, and support messages</li>
              <li>Respond to your comments and questions</li>
              <li>Personalize your experience</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-white">Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information. 
              However, no method of transmission over the Internet or electronic storage is 
              100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-white">Updates to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. We will notify you of any 
              changes by posting the new privacy policy on this page and updating the effective date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-white">Contact Us</h2>
            <p>
              If you have any questions about this privacy policy, please contact us at{' '}
              <a href="mailto:privacy@investmind.com" className="text-blue-400 hover:text-blue-300">
                privacy@investmind.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicy;