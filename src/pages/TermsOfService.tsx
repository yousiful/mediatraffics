import React from 'react';
import { ArrowLeft, FileText, Scale, AlertTriangle } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';
import { businessInfo } from '../config/seo';

interface TermsOfServiceProps {
  onBack: () => void;
}

export default function TermsOfService({ onBack }: TermsOfServiceProps) {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <SEOHead
        title={`Terms of Service | ${businessInfo.name}`}
        description="Read Media Traffics LLC's Terms of Service. Understand your rights and obligations when using our marketing and advertising services."
        canonicalUrl={`${businessInfo.url}/terms`}
        keywords={['terms of service', 'user agreement', 'legal terms', 'service agreement', ...businessInfo.keywords]}
      />
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <Breadcrumbs
          items={[
            { label: 'Terms of Service', href: '/terms', current: true }
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
            <Scale className="w-8 h-8 text-cyan-400" />
            <h1 className="text-4xl md:text-5xl font-black">Terms of Service</h1>
          </div>

          <p className="text-gray-400 mb-8">
            <strong>Effective Date:</strong> January 1, 2013
            <br />
            <strong>Last Updated:</strong> February 12, 2026
          </p>

          <div className="space-y-8 text-gray-300 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>
              <p>
                These Terms of Service ("Terms") constitute a legally binding agreement between you ("Client," "you," or "your") and Media Traffics LLC ("Company," "we," "us," or "our") concerning your access to and use of our website, services, products, and marketing solutions.
              </p>
              <p className="mt-4">
                By accessing our website, purchasing our services, or engaging with our company in any capacity, you agree to be bound by these Terms, our Privacy Policy, and our Refund Policy. If you do not agree to these Terms, you must not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Services Provided</h2>
              <p>
                Media Traffics LLC provides digital marketing and advertising services, including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li><strong>Client Generation Loop:</strong> A comprehensive lead generation system and service package</li>
                <li><strong>Kenji AI:</strong> AI-powered marketing automation and campaign optimization platform</li>
                <li><strong>Voice Front Desk:</strong> AI receptionist and call handling services</li>
                <li><strong>Paid Advertising Management:</strong> Expert management of campaigns on Facebook, Instagram, Google Ads, LinkedIn, and other platforms</li>
                <li><strong>Training Programs:</strong> Educational courses and materials on paid advertising and marketing</li>
                <li><strong>Strategy Consultations:</strong> One-on-one consultations and strategy development</li>
                <li><strong>Partnership Programs:</strong> Joint venture and partnership opportunities</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Eligibility and Account Requirements</h2>

              <h3 className="text-xl font-semibold text-cyan-400 mb-3 mt-6">3.1 Age and Authority</h3>
              <p>
                You must be at least 18 years old and have the legal authority to enter into contracts to use our services. If you are accessing services on behalf of a business entity, you represent that you have the authority to bind that entity to these Terms.
              </p>

              <h3 className="text-xl font-semibold text-cyan-400 mb-3 mt-6">3.2 Accurate Information</h3>
              <p>
                You agree to provide accurate, current, and complete information when creating an account or purchasing services. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Payment Terms and Billing</h2>

              <h3 className="text-xl font-semibold text-cyan-400 mb-3 mt-6">4.1 Pricing and Fees</h3>
              <p>
                All prices are quoted in USD and are subject to change with 30 days notice for ongoing services. One-time purchases are charged at the rate displayed at the time of purchase.
              </p>

              <h3 className="text-xl font-semibold text-cyan-400 mb-3 mt-6">4.2 Payment Methods</h3>
              <p>
                We accept major credit cards, debit cards, and other payment methods as indicated at checkout. You authorize us to charge your payment method for all fees incurred.
              </p>

              <h3 className="text-xl font-semibold text-cyan-400 mb-3 mt-6">4.3 Recurring Charges</h3>
              <p>
                For subscription services, you authorize recurring charges at the specified billing interval (monthly, quarterly, or annually). Your subscription will automatically renew unless you cancel before the next billing date.
              </p>

              <h3 className="text-xl font-semibold text-cyan-400 mb-3 mt-6">4.4 Failed Payments</h3>
              <p>
                If a payment fails, we may suspend or terminate your access to services. You remain responsible for all amounts due, plus any collection costs or legal fees incurred.
              </p>

              <h3 className="text-xl font-semibold text-cyan-400 mb-3 mt-6">4.5 No Refunds</h3>
              <p>
                All sales are final. Please refer to our separate Refund Policy for complete details. NO REFUNDS will be issued under any circumstances.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Client Responsibilities and Obligations</h2>

              <h3 className="text-xl font-semibold text-cyan-400 mb-3 mt-6">5.1 Cooperation and Communication</h3>
              <p>You agree to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>Respond to requests for information, materials, or approvals in a timely manner</li>
                <li>Provide accurate business information, offers, and marketing materials</li>
                <li>Maintain open and professional communication with our team</li>
                <li>Attend scheduled calls and meetings or provide advance notice of cancellations</li>
              </ul>

              <h3 className="text-xl font-semibold text-cyan-400 mb-3 mt-6">5.2 Platform Access and Compliance</h3>
              <p>For advertising management services, you agree to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>Provide necessary access to advertising accounts, business pages, and relevant platforms</li>
                <li>Comply with all platform policies (Facebook, Google, LinkedIn, etc.)</li>
                <li>Maintain valid business licenses and legal compliance in your industry</li>
                <li>Not request or engage in prohibited advertising practices</li>
              </ul>

              <h3 className="text-xl font-semibold text-cyan-400 mb-3 mt-6">5.3 Prohibited Uses</h3>
              <p>You agree NOT to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>Use our services for any illegal, fraudulent, or unauthorized purpose</li>
                <li>Violate any laws, regulations, or third-party rights</li>
                <li>Promote illegal products, services, or activities</li>
                <li>Engage in deceptive, misleading, or false advertising</li>
                <li>Harass, abuse, or harm others through marketing activities</li>
                <li>Infringe on intellectual property rights of others</li>
                <li>Attempt to reverse engineer, copy, or replicate our proprietary systems</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Service Delivery and Performance</h2>

              <h3 className="text-xl font-semibold text-cyan-400 mb-3 mt-6">6.1 Best Efforts</h3>
              <p>
                We will provide services using our best professional efforts, industry expertise, and proven strategies. However, we do not guarantee specific results, lead volumes, conversion rates, revenue amounts, or return on investment (ROI).
              </p>

              <h3 className="text-xl font-semibold text-cyan-400 mb-3 mt-6">6.2 Factors Beyond Our Control</h3>
              <p>
                Marketing and advertising performance depends on numerous factors beyond our control, including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>Your business offer, pricing, and value proposition</li>
                <li>Market conditions, competition, and seasonal factors</li>
                <li>Your sales process, follow-up, and closing abilities</li>
                <li>Platform algorithm changes and policy updates</li>
                <li>Economic conditions and industry trends</li>
                <li>Quality and appeal of your products or services</li>
              </ul>

              <h3 className="text-xl font-semibold text-cyan-400 mb-3 mt-6">6.3 Service Modifications</h3>
              <p>
                We reserve the right to modify, suspend, or discontinue any aspect of our services at any time. We will make reasonable efforts to notify clients of material changes, but are not liable for any modifications or discontinuations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Intellectual Property Rights</h2>

              <h3 className="text-xl font-semibold text-cyan-400 mb-3 mt-6">7.1 Our Intellectual Property</h3>
              <p>
                All content, materials, software, methodologies, and systems provided by Media Traffics LLC are protected by copyright, trademark, and other intellectual property laws. This includes:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>Kenji AI software and platform</li>
                <li>Client Generation Loop system and methodologies</li>
                <li>Training materials, courses, and educational content</li>
                <li>Templates, frameworks, and proprietary processes</li>
                <li>Branding, logos, and marketing materials</li>
              </ul>
              <p className="mt-3">
                You may not copy, reproduce, distribute, or create derivative works from our intellectual property without explicit written permission.
              </p>

              <h3 className="text-xl font-semibold text-cyan-400 mb-3 mt-6">7.2 Client Content</h3>
              <p>
                You retain ownership of your business materials, content, and intellectual property. By providing content to us, you grant us a limited license to use, modify, and display such content solely for the purpose of providing services to you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Confidentiality</h2>
              <p>
                Both parties agree to maintain confidentiality of proprietary information, trade secrets, and sensitive business information disclosed during the course of our relationship. This obligation survives termination of services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. Disclaimers and Limitations of Liability</h2>

              <h3 className="text-xl font-semibold text-cyan-400 mb-3 mt-6">9.1 No Warranties</h3>
              <p>
                SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
              </p>

              <h3 className="text-xl font-semibold text-cyan-400 mb-3 mt-6">9.2 Results Disclaimer</h3>
              <p>
                WE MAKE NO REPRESENTATIONS OR WARRANTIES REGARDING THE RESULTS YOU WILL ACHIEVE THROUGH USE OF OUR SERVICES. PAST PERFORMANCE, TESTIMONIALS, AND CASE STUDIES DO NOT GUARANTEE FUTURE RESULTS. INDIVIDUAL RESULTS VARY SIGNIFICANTLY.
              </p>

              <h3 className="text-xl font-semibold text-cyan-400 mb-3 mt-6">9.3 Limitation of Liability</h3>
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, MEDIA TRAFFICS LLC SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, REVENUE, DATA, OR BUSINESS OPPORTUNITIES, ARISING FROM OR RELATED TO YOUR USE OF OUR SERVICES.
              </p>
              <p className="mt-3">
                OUR TOTAL LIABILITY TO YOU FOR ANY CLAIMS ARISING FROM OR RELATED TO OUR SERVICES SHALL NOT EXCEED THE TOTAL AMOUNT YOU PAID TO US IN THE SIX (6) MONTHS PRECEDING THE CLAIM.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">10. Indemnification</h2>
              <p>
                You agree to indemnify, defend, and hold harmless Media Traffics LLC, its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including reasonable attorneys' fees) arising from:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>Your violation of these Terms</li>
                <li>Your violation of any laws or regulations</li>
                <li>Your violation of third-party rights</li>
                <li>Your content, products, or services advertised through our campaigns</li>
                <li>Your business practices and customer relationships</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">11. Termination</h2>

              <h3 className="text-xl font-semibold text-cyan-400 mb-3 mt-6">11.1 Termination by Client</h3>
              <p>
                You may cancel ongoing services at any time by providing written notice. Upon cancellation, services will continue through the end of your current paid billing period. No refunds will be issued for services already rendered or the current billing period.
              </p>

              <h3 className="text-xl font-semibold text-cyan-400 mb-3 mt-6">11.2 Termination by Company</h3>
              <p>
                We reserve the right to suspend or terminate your access to services immediately, without notice, for:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>Violation of these Terms</li>
                <li>Non-payment or fraudulent payment activity</li>
                <li>Abusive or threatening behavior toward staff</li>
                <li>Illegal activities or requests</li>
                <li>Violation of advertising platform policies</li>
                <li>Any conduct that we reasonably believe harms our business or reputation</li>
              </ul>

              <h3 className="text-xl font-semibold text-cyan-400 mb-3 mt-6">11.3 Effect of Termination</h3>
              <p>
                Upon termination, your right to use our services ceases immediately. You remain liable for all amounts due, and sections of these Terms that by their nature should survive termination shall survive, including but not limited to intellectual property rights, disclaimers, indemnification, and dispute resolution provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">12. Dispute Resolution and Arbitration</h2>

              <h3 className="text-xl font-semibold text-cyan-400 mb-3 mt-6">12.1 Informal Resolution</h3>
              <p>
                Before initiating any legal action, you agree to first contact us at Support@mediatraffics.com to attempt to resolve the dispute informally. We will work in good faith to resolve disputes through direct communication.
              </p>

              <h3 className="text-xl font-semibold text-cyan-400 mb-3 mt-6">12.2 Binding Arbitration</h3>
              <p>
                Any dispute, claim, or controversy arising out of or relating to these Terms or our services that cannot be resolved informally shall be settled by binding arbitration in accordance with the Commercial Arbitration Rules of the American Arbitration Association (AAA).
              </p>
              <p className="mt-3">
                The arbitration shall be conducted by a single arbitrator and shall take place in San Francisco, California, or remotely via video conference. The arbitrator's decision shall be final and binding, and judgment on the award may be entered in any court of competent jurisdiction.
              </p>

              <h3 className="text-xl font-semibold text-cyan-400 mb-3 mt-6">12.3 Class Action Waiver</h3>
              <p>
                YOU AGREE THAT DISPUTES MUST BE BROUGHT IN YOUR INDIVIDUAL CAPACITY AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS, COLLECTIVE, OR REPRESENTATIVE PROCEEDING. YOU WAIVE ANY RIGHT TO PARTICIPATE IN A CLASS ACTION LAWSUIT OR CLASS-WIDE ARBITRATION.
              </p>

              <h3 className="text-xl font-semibold text-cyan-400 mb-3 mt-6">12.4 Governing Law</h3>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law principles.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">13. Modifications to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. Material changes will be communicated via email or prominent notice on our website. Your continued use of our services after changes are posted constitutes acceptance of the modified Terms. If you do not agree to the changes, you must discontinue use of our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">14. General Provisions</h2>

              <h3 className="text-xl font-semibold text-cyan-400 mb-3 mt-6">14.1 Entire Agreement</h3>
              <p>
                These Terms, together with our Privacy Policy and Refund Policy, constitute the entire agreement between you and Media Traffics LLC regarding the use of our services.
              </p>

              <h3 className="text-xl font-semibold text-cyan-400 mb-3 mt-6">14.2 Severability</h3>
              <p>
                If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.
              </p>

              <h3 className="text-xl font-semibold text-cyan-400 mb-3 mt-6">14.3 No Waiver</h3>
              <p>
                Our failure to enforce any provision of these Terms shall not constitute a waiver of that provision or any other provision.
              </p>

              <h3 className="text-xl font-semibold text-cyan-400 mb-3 mt-6">14.4 Assignment</h3>
              <p>
                You may not assign or transfer these Terms or your account without our prior written consent. We may assign or transfer our rights and obligations without restriction.
              </p>

              <h3 className="text-xl font-semibold text-cyan-400 mb-3 mt-6">14.5 Force Majeure</h3>
              <p>
                We shall not be liable for any failure or delay in performance due to circumstances beyond our reasonable control, including but not limited to acts of God, natural disasters, war, terrorism, labor disputes, or technical failures.
              </p>
            </section>

            <section className="bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 p-6 rounded-xl border border-cyan-500/30">
              <h2 className="text-2xl font-bold text-white mb-4">15. Contact Information</h2>
              <p className="mb-4">
                For questions regarding these Terms of Service or to discuss any legal matters:
              </p>
              <div className="space-y-3 text-gray-200">
                <p><strong>Email:</strong> <a href="mailto:Support@mediatraffics.com" className="text-cyan-400 hover:text-cyan-300">Support@mediatraffics.com</a></p>
                <p><strong>Phone:</strong> <a href="tel:+18312634402" className="text-cyan-400 hover:text-cyan-300">+1 (831) 263-4402</a> (24/7 Front Desk)</p>
                <p><strong>Business Name:</strong> Media Traffics LLC</p>
                <p><strong>Location:</strong> San Francisco, California</p>
              </div>
            </section>

            <section className="mt-8 p-4 bg-gray-800/50 rounded-lg border border-cyan-700/30">
              <p className="text-sm text-gray-300">
                <strong className="text-cyan-400">Acknowledgment:</strong> By using Media Traffics LLC's services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service, our Privacy Policy, and our Refund Policy. If you do not agree with any part of these Terms, you must discontinue use of our services immediately.
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
