import React from 'react';
import { ArrowLeft, Mail, Phone, Shield } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';
import { businessInfo } from '../config/seo';

interface PrivacyPolicyProps {
  onBack: () => void;
}

export default function PrivacyPolicy({ onBack }: PrivacyPolicyProps) {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <SEOHead
        title={`Privacy Policy | ${businessInfo.name}`}
        description="Read Media Traffics LLC's comprehensive privacy policy. Learn how we protect your data and comply with FTC, CAN-SPAM, TCPA, and CCPA regulations."
        canonicalUrl={`${businessInfo.url}/privacy`}
        keywords={['privacy policy', 'data protection', 'GDPR', 'CCPA', 'terms of service', ...businessInfo.keywords]}
      />
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <Breadcrumbs
          items={[
            { label: 'Privacy Policy', href: '/privacy', current: true }
          ]}
          className="mb-6"
        />

        <button
          onClick={onBack}
          className="mb-8 flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </button>

        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 border border-gray-700">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-8 h-8 text-cyan-400" />
            <h1 className="text-4xl md:text-5xl font-black">Privacy Policy</h1>
          </div>

          <p className="text-gray-400 mb-8">
            <strong>Effective Date:</strong> November 27, 2024
            <br />
            <strong>Last Updated:</strong> November 27, 2024
          </p>

          <div className="space-y-8 text-gray-300 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
              <p>
                Media Traffics LLC ("we," "us," or "our") is committed to protecting your privacy and complying with all applicable data protection laws, including the Federal Trade Commission (FTC) Act, CAN-SPAM Act, Telephone Consumer Protection Act (TCPA), California Consumer Privacy Act (CCPA), and other relevant federal and state regulations.
              </p>
              <p className="mt-4">
                This Privacy Policy describes how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with our marketing campaigns.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>

              <h3 className="text-xl font-semibold text-cyan-400 mb-3 mt-6">2.1 Personal Information</h3>
              <p>We may collect the following types of personal information:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>Name, email address, phone number, and business information</li>
                <li>Payment and billing information</li>
                <li>Communication preferences and marketing consent</li>
                <li>Information you provide through forms, surveys, or customer support</li>
                <li>Social media handles and professional profiles</li>
              </ul>

              <h3 className="text-xl font-semibold text-cyan-400 mb-3 mt-6">2.2 Automatically Collected Information</h3>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>Device information, IP address, browser type, and operating system</li>
                <li>Usage data, including pages visited, time spent, and navigation patterns</li>
                <li>Cookies, pixels, and similar tracking technologies</li>
                <li>Advertising identifiers and campaign performance data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
              <p>We use your information for the following purposes:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>To provide, maintain, and improve our marketing services</li>
                <li>To communicate with you about our services, updates, and promotional offers</li>
                <li>To process transactions and manage billing</li>
                <li>To deliver targeted advertising campaigns on your behalf</li>
                <li>To analyze campaign performance and optimize results</li>
                <li>To comply with legal obligations and enforce our Terms of Service</li>
                <li>To prevent fraud and maintain security</li>
                <li>To respond to customer service requests and support needs</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. FTC Compliance and Marketing Disclosures</h2>

              <h3 className="text-xl font-semibold text-cyan-400 mb-3 mt-6">4.1 Truth in Advertising</h3>
              <p>
                We adhere to FTC guidelines requiring that all advertising claims be truthful, not misleading, and substantiated. Any testimonials, results, or performance metrics presented represent actual client experiences, but individual results may vary.
              </p>

              <h3 className="text-xl font-semibold text-cyan-400 mb-3 mt-6">4.2 Endorsements and Testimonials</h3>
              <p>
                All client testimonials and case studies reflect genuine experiences. We do not compensate clients for positive reviews unless explicitly disclosed. Results are not typical, and we make no guarantee of specific outcomes.
              </p>

              <h3 className="text-xl font-semibold text-cyan-400 mb-3 mt-6">4.3 Material Connections</h3>
              <p>
                We disclose any material connections or affiliations that may influence our recommendations or endorsements in accordance with FTC guidelines.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Email Marketing and CAN-SPAM Compliance</h2>
              <p>We comply with the CAN-SPAM Act in all our email marketing activities:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>We never use false or misleading header information</li>
                <li>We do not use deceptive subject lines</li>
                <li>We clearly identify messages as advertisements when applicable</li>
                <li>We include our physical business address in all commercial emails</li>
                <li>We provide a clear and easy way to opt-out of future emails</li>
                <li>We honor opt-out requests promptly (within 10 business days)</li>
                <li>We monitor third-party email marketing activities on our behalf</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Telephone Communications and TCPA Compliance</h2>
              <p>
                We strictly comply with the Telephone Consumer Protection Act (TCPA) and Do Not Call regulations:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>We only contact individuals who have provided express written consent</li>
                <li>We maintain an internal Do Not Call list and honor all opt-out requests</li>
                <li>We do not use automatic telephone dialing systems or artificial/prerecorded voice messages without prior express consent</li>
                <li>We provide clear identification and contact information during calls</li>
                <li>We train our staff on TCPA compliance requirements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Information Sharing and Disclosure</h2>
              <p>We may share your information with:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li><strong>Service Providers:</strong> Third-party vendors who perform services on our behalf (e.g., advertising platforms, payment processors, analytics providers)</li>
                <li><strong>Advertising Partners:</strong> Platforms like Facebook, Google, LinkedIn where we manage campaigns</li>
                <li><strong>Legal Compliance:</strong> Law enforcement, government agencies, or other parties when required by law</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              </ul>
              <p className="mt-4">
                We do not sell your personal information to third parties for their own marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Your Rights and Choices</h2>

              <h3 className="text-xl font-semibold text-cyan-400 mb-3 mt-6">8.1 Access and Correction</h3>
              <p>You have the right to access and correct your personal information. Contact us to request access or updates.</p>

              <h3 className="text-xl font-semibold text-cyan-400 mb-3 mt-6">8.2 Opt-Out Rights</h3>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li><strong>Email Marketing:</strong> Click the "unsubscribe" link in any marketing email</li>
                <li><strong>Phone Calls:</strong> Request to be added to our Do Not Call list</li>
                <li><strong>SMS Messages:</strong> Reply "STOP" to any text message</li>
                <li><strong>Cookies:</strong> Adjust your browser settings to refuse cookies</li>
              </ul>

              <h3 className="text-xl font-semibold text-cyan-400 mb-3 mt-6">8.3 California Privacy Rights (CCPA)</h3>
              <p>California residents have additional rights:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>Right to know what personal information we collect, use, and disclose</li>
                <li>Right to request deletion of personal information</li>
                <li>Right to opt-out of the sale of personal information (we do not sell personal information)</li>
                <li>Right to non-discrimination for exercising privacy rights</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. Data Security</h2>
              <p>
                We implement reasonable security measures to protect your information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your personal information, we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">10. Data Retention</h2>
              <p>
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we securely delete or anonymize it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">11. Children's Privacy</h2>
              <p>
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we learn we have collected information from a child under 18, we will delete it promptly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">12. International Data Transfers</h2>
              <p>
                Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws. By using our services, you consent to the transfer of your information to the United States and other countries.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">13. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">14. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. Your continued use of our services after changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">15. Dispute Resolution</h2>
              <p>
                Any disputes arising from this Privacy Policy will be resolved through binding arbitration in accordance with our Terms of Service, except where prohibited by law.
              </p>
            </section>

            <section className="bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 p-6 rounded-xl border border-cyan-500/30">
              <h2 className="text-2xl font-bold text-white mb-4">16. Contact Us</h2>
              <p className="mb-4">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <a href="mailto:Support@mediatraffics.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    Support@mediatraffics.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-emerald-400" />
                  <a href="tel:+18312634402" className="text-emerald-400 hover:text-emerald-300 transition-colors">
                    +1 (831) 263-4402
                  </a>
                  <span className="text-gray-400 text-sm">(24/7 Front Desk)</span>
                </div>
                <div className="mt-4 text-gray-400">
                  <strong className="text-white">Media Traffics LLC</strong>
                  <br />
                  Business Hours: 24/7 Support Available
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-cyan-500/20">
                <p className="text-gray-300 mb-3">
                  Want to learn more about our services?
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="/"
                    onClick={(e) => {
                      e.preventDefault();
                      onBack();
                    }}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 hover:bg-cyan-500/30 rounded-lg text-cyan-400 transition-colors text-sm"
                  >
                    Return to Homepage
                  </a>
                  <a
                    href="https://go.mediatraffics.com/price"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 hover:bg-emerald-500/30 rounded-lg text-emerald-400 transition-colors text-sm"
                  >
                    Explore Our Services
                  </a>
                  <a
                    href="https://kenjiai.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 rounded-lg text-blue-400 transition-colors text-sm"
                  >
                    Learn About Kenji AI
                  </a>
                </div>
              </div>
            </section>

            <section className="mt-8 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
              <p className="text-sm text-gray-400">
                <strong className="text-white">Acknowledgment:</strong> By using Media Traffics LLC's services, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy and our Terms of Service. If you do not agree with any part of this policy, please discontinue use of our services immediately.
              </p>
            </section>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>© 2013-2026 Media Traffics LLC. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
