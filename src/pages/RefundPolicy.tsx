import React from 'react';
import { ArrowLeft, Shield } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';
import { businessInfo } from '../config/seo';

interface RefundPolicyProps {
  onBack: () => void;
}

export default function RefundPolicy({ onBack }: RefundPolicyProps) {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <SEOHead
        title={`Refund Policy | ${businessInfo.name}`}
        description="Media Traffics LLC's 30-day money-back guarantee, cancellation terms, and refund policy for all services, products, and subscriptions."
        canonicalUrl={`${businessInfo.url}/refund-policy`}
        keywords={['refund policy', '30-day guarantee', 'cancellation policy', 'terms and conditions', ...businessInfo.keywords]}
      />
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <Breadcrumbs
          items={[
            { label: 'Refund Policy', href: '/refund-policy', current: true }
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
            <h1 className="text-4xl md:text-5xl font-black">Refund Policy</h1>
          </div>

          <p className="text-gray-400 mb-8">
            <strong>Effective Date:</strong> January 1, 2013
            <br />
            <strong>Last Updated:</strong> September 6, 2026
          </p>

          <div className="bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 border border-cyan-500/30 rounded-xl p-6 mb-8">
            <div className="flex items-start gap-3">
              <Shield className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold text-white mb-3">30-Day Money-Back Guarantee</h2>
                <p className="text-gray-200 leading-relaxed">
                  If you're not satisfied within 30 days of your initial purchase, contact us at Support@mediatraffics.com and we'll refund it, no hoops. See the terms below for what the guarantee covers and how to request a refund.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8 text-gray-300 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. What This Policy Covers</h2>
              <p>
                Media Traffics LLC ("we," "us," or "our") offers a 30-day money-back guarantee on the initial purchase of the services and products below. This is the only refund window; requests made after 30 days from the original purchase date are not eligible, except where required by law (see Section 3).
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>Client Generation Loop packages and services</li>
                <li>Kenji AI subscriptions and software licenses</li>
                <li>Voice Front Desk services and subscriptions</li>
                <li>Paid advertising management services</li>
                <li>Ads training programs and educational materials</li>
                <li>Strategy calls and consultation services</li>
                <li>Partnership packages and joint venture agreements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. How to Request a Refund</h2>
              <p>
                To request a refund within your 30-day window:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>Email Support@mediatraffics.com with your name, purchase date, and the service purchased</li>
                <li>We'll confirm receipt within 2 business days and process approved refunds within 5-10 business days to your original payment method</li>
                <li>No forms, no retention calls required, no need to explain why</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Unauthorized Charges</h2>
              <p>
                If you believe a charge on your account was not authorized by you, contact us immediately at Support@mediatraffics.com. We will investigate and refund confirmed unauthorized charges regardless of the 30-day window, consistent with your rights under your card issuer's rules.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Outside the Guarantee Window</h2>
              <p>
                Requests made more than 30 days after the original purchase date are handled case-by-case and are not guaranteed, including situations such as:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>Change of mind after the 30-day window has passed</li>
                <li>Dissatisfaction with results reported after 30 days (see our Results Disclaimer -- outcomes depend on many factors outside our control and are never guaranteed)</li>
                <li>Lack of use of materials or access already provided</li>
              </ul>
              <p className="mt-3">
                We'd still rather work it out with you directly than have you dispute a charge -- email us first and we'll see what we can do.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Service Characteristics and Risks</h2>
              <p>
                You acknowledge and understand that:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li><strong>Results May Vary:</strong> Marketing and advertising results vary significantly based on industry, market conditions, budget, offer quality, and numerous other factors beyond our control</li>
                <li><strong>No Guarantees:</strong> We do not guarantee specific outcomes, lead volumes, conversion rates, revenue amounts, or return on investment (ROI)</li>
                <li><strong>Performance Dependent on Multiple Factors:</strong> Success depends on your business, offer, market, follow-up processes, sales skills, and external market conditions</li>
                <li><strong>Time Investment Required:</strong> Most services require active participation, implementation, and ongoing management to achieve results</li>
                <li><strong>Service Delivery:</strong> Services are provided as-is, and while we strive for excellence, unforeseen circumstances may affect delivery timelines or outcomes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Subscription Services</h2>
              <p>
                For subscription-based services (including Kenji AI, Voice Front Desk, and ongoing management services):
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>Subscriptions are billed on a recurring basis (monthly, quarterly, or annually as specified)</li>
                <li>You can cancel anytime from your account settings or by emailing Support@mediatraffics.com -- cancellation takes effect before your next billing date as long as you cancel before that date arrives</li>
                <li>You'll get an email confirming your cancellation went through -- if you don't receive one, your cancellation may not have processed, so follow up with us</li>
                <li>Outside the 30-day guarantee window, cancellation stops future billing but does not refund the current or past billing periods</li>
                <li>You keep access through the end of your current paid billing period</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Service Cancellation and Termination</h2>

              <h3 className="text-xl font-semibold text-cyan-400 mb-3 mt-6">7.1 Client-Initiated Cancellation</h3>
              <p>
                You may cancel ongoing services at any time by contacting our support team. Upon cancellation:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>Services continue through the end of your current paid period</li>
                <li>Future billing stops after your current period expires</li>
                <li>Access to software, platforms, or training materials ends at the end of the paid period</li>
              </ul>

              <h3 className="text-xl font-semibold text-cyan-400 mb-3 mt-6">7.2 Company-Initiated Termination</h3>
              <p>
                Media Traffics LLC reserves the right to terminate services or cancel accounts in cases of:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>Violation of our Terms of Service</li>
                <li>Fraudulent activity</li>
                <li>Abusive behavior toward staff or other clients</li>
                <li>Illegal activities or requests</li>
                <li>Non-payment or failed payment methods</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Billing Concerns and Disputes</h2>
              <p>
                If you have a question about a charge, please contact us first at Support@mediatraffics.com -- most billing concerns can be resolved directly and faster than through your bank. We keep records of every service delivered and every subscription's status, and we investigate every dispute in good faith.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. Pre-Purchase Due Diligence</h2>
              <p>
                Before making any purchase, you are encouraged and expected to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>Carefully review all service descriptions, pricing, and terms</li>
                <li>Ask questions and seek clarification on any points of confusion</li>
                <li>Review client testimonials and case studies (understanding results may vary)</li>
                <li>Schedule a strategy call or consultation to discuss your specific needs</li>
                <li>Ensure you have the budget and resources to invest in the services</li>
                <li>Understand that marketing services require time, testing, and optimization</li>
                <li>Verify that our services align with your business goals and expectations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">10. Our Commitment</h2>
              <p>
                Beyond the 30-day guarantee, we're committed to client satisfaction and will work with you to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>Address concerns about service delivery or performance</li>
                <li>Optimize campaigns and improve results within the scope of our services</li>
                <li>Provide additional support or training as needed</li>
                <li>Adjust strategies or approaches based on campaign data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">11. Billing and Payment Terms</h2>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>All prices are in USD unless otherwise specified</li>
                <li>Payment is required in full before services commence (unless otherwise agreed in writing)</li>
                <li>For subscription services, you authorize recurring charges to your payment method</li>
                <li>You are responsible for maintaining valid and current payment information</li>
                <li>Failed payments may result in service suspension or termination</li>
                <li>Price changes for ongoing services will be communicated at least 30 days in advance</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">12. Contact and Dispute Resolution</h2>
              <p>
                If you have concerns about billing, service delivery, or any other matter:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>Contact our support team immediately at Support@mediatraffics.com</li>
                <li>We will work in good faith to address legitimate concerns</li>
                <li>For formal disputes, refer to the Dispute Resolution section of our Terms of Service</li>
                <li>All disputes are subject to binding arbitration as outlined in our Terms of Service</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">13. Modifications to This Policy</h2>
              <p>
                Media Traffics LLC reserves the right to modify this Refund Policy at any time. Changes will be effective immediately upon posting to our website and will not apply retroactively to reduce the guarantee window on a purchase already made. Material changes will be communicated via email to active clients.
              </p>
            </section>

            <section className="bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 p-6 rounded-xl border border-cyan-500/30">
              <h2 className="text-2xl font-bold text-white mb-4">14. Contact Information</h2>
              <p className="mb-4">
                For questions regarding this Refund Policy or to discuss billing concerns:
              </p>
              <div className="space-y-3 text-gray-200">
                <p><strong>Email:</strong> <a href="mailto:Support@mediatraffics.com" className="text-cyan-400 hover:text-cyan-300">Support@mediatraffics.com</a></p>
                <p><strong>Phone:</strong> <a href="tel:+18312634402" className="text-cyan-400 hover:text-cyan-300">+1 (831) 263-4402</a> (24/7 Front Desk)</p>
                <p><strong>Business Name:</strong> Media Traffics LLC</p>
              </div>
            </section>

            <section className="mt-8 p-4 bg-gray-800/50 rounded-lg border border-cyan-700/30">
              <p className="text-sm text-gray-300">
                <strong className="text-cyan-400">Acknowledgment:</strong> By purchasing any service, product, or subscription from Media Traffics LLC, you acknowledge that you have read and understood this Refund Policy, including the 30-day guarantee window and how to request a refund.
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
