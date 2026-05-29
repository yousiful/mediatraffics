import React from 'react';
import { ArrowLeft, AlertCircle, XCircle, Shield } from 'lucide-react';
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
        description="Media Traffics LLC maintains a strict no refund policy for all services, products, and subscriptions. Read our complete refund and cancellation policy."
        canonicalUrl={`${businessInfo.url}/refund-policy`}
        keywords={['refund policy', 'no refunds', 'cancellation policy', 'terms and conditions', ...businessInfo.keywords]}
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
            <XCircle className="w-8 h-8 text-red-400" />
            <h1 className="text-4xl md:text-5xl font-black">Refund Policy</h1>
          </div>

          <p className="text-gray-400 mb-8">
            <strong>Effective Date:</strong> January 1, 2013
            <br />
            <strong>Last Updated:</strong> February 12, 2026
          </p>

          <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/30 rounded-xl p-6 mb-8">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold text-white mb-3">Strict No Refund Policy</h2>
                <p className="text-gray-200 leading-relaxed">
                  All sales are final. Media Traffics LLC maintains a strict no refund policy for all services, products, and subscriptions. By making a purchase, you acknowledge and agree that all payments are non-refundable under any circumstances.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8 text-gray-300 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. No Refund Policy Overview</h2>
              <p>
                Media Traffics LLC ("we," "us," or "our") maintains a strict no refund policy for all services, products, and subscriptions offered through our business. This policy applies without exception to all purchases, including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>Client Generation Loop packages and services</li>
                <li>Kenji AI subscriptions and software licenses</li>
                <li>Voice Front Desk services and subscriptions</li>
                <li>Paid advertising management services</li>
                <li>Ads training programs and educational materials</li>
                <li>Strategy calls and consultation services</li>
                <li>Partnership packages and joint venture agreements</li>
                <li>Any other products, services, or digital goods offered by Media Traffics LLC</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. All Sales Are Final</h2>
              <p>
                By purchasing any service or product from Media Traffics LLC, you acknowledge and expressly agree that:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>All payments are non-refundable under any circumstances</li>
                <li>All sales are final at the moment of purchase</li>
                <li>No refunds, chargebacks, or reimbursements will be issued for any reason</li>
                <li>You have reviewed all service descriptions, pricing, and terms before purchasing</li>
                <li>You understand the nature of digital services and marketing campaigns</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. No Refund Circumstances</h2>
              <p>
                Refunds will NOT be issued under any circumstances, including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li><strong>Change of Mind:</strong> You decide you no longer want the service or product</li>
                <li><strong>Business Closure:</strong> Your business closes or changes direction</li>
                <li><strong>Dissatisfaction with Results:</strong> You are not satisfied with campaign performance, lead quality, or return on investment</li>
                <li><strong>Technical Difficulties:</strong> Technical issues, platform outages, or integration challenges</li>
                <li><strong>Lack of Use:</strong> You do not use the service or access the materials purchased</li>
                <li><strong>Financial Hardship:</strong> You experience financial difficulties or budget constraints</li>
                <li><strong>Duplicate Purchase:</strong> You accidentally purchase the same service twice</li>
                <li><strong>Unauthorized Purchase:</strong> A purchase made without your authorization (subject to verification and dispute resolution)</li>
                <li><strong>Competitive Alternatives:</strong> You find or prefer a competing service</li>
                <li><strong>Expected Results Not Achieved:</strong> Specific outcomes, lead volumes, or revenue targets are not met</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Service Characteristics and Risks</h2>
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
              <h2 className="text-2xl font-bold text-white mb-4">5. Subscription Services</h2>
              <p>
                For subscription-based services (including Kenji AI, Voice Front Desk, and ongoing management services):
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>Subscriptions are billed on a recurring basis (monthly, quarterly, or annually as specified)</li>
                <li>You may cancel your subscription at any time to prevent future charges</li>
                <li>Cancellation does NOT result in a refund for the current billing period or any previous periods</li>
                <li>Upon cancellation, you will retain access to the service until the end of your current paid billing period</li>
                <li>No partial refunds are provided for unused portions of a billing period</li>
                <li>Cancellation must be requested at least 24 hours before the next billing date to prevent the next charge</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Service Cancellation and Termination</h2>

              <h3 className="text-xl font-semibold text-cyan-400 mb-3 mt-6">6.1 Client-Initiated Cancellation</h3>
              <p>
                You may request to cancel ongoing services at any time by contacting our support team. Upon cancellation:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>Services will continue through the end of your current paid period</li>
                <li>No refunds will be issued for services already rendered or the current billing period</li>
                <li>Future billing will cease after your current period expires</li>
                <li>Access to software, platforms, or training materials may be revoked at the end of the paid period</li>
              </ul>

              <h3 className="text-xl font-semibold text-cyan-400 mb-3 mt-6">6.2 Company-Initiated Termination</h3>
              <p>
                Media Traffics LLC reserves the right to terminate services or cancel accounts in cases of:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>Violation of our Terms of Service</li>
                <li>Fraudulent activity or chargebacks</li>
                <li>Abusive behavior toward staff or other clients</li>
                <li>Illegal activities or requests</li>
                <li>Non-payment or failed payment methods</li>
              </ul>
              <p className="mt-3">
                In cases of company-initiated termination, no refunds will be issued regardless of the reason for termination.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Chargebacks and Disputes</h2>
              <p>
                Initiating a chargeback or payment dispute for services rendered is considered a material breach of this agreement. By making a purchase, you agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>Contact our support team first to resolve any billing concerns or disputes</li>
                <li>Not initiate chargebacks for services that have been delivered or are being delivered</li>
                <li>Understand that chargebacks may result in immediate service termination and legal action</li>
                <li>Be responsible for all costs, fees, and legal expenses incurred in responding to or disputing chargebacks</li>
              </ul>
              <p className="mt-3">
                We take chargebacks seriously and maintain detailed records of all services provided. Fraudulent chargebacks will be contested vigorously and may result in legal action to recover damages.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Pre-Purchase Due Diligence</h2>
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
              <h2 className="text-2xl font-bold text-white mb-4">9. Exceptions</h2>
              <p>
                There are NO exceptions to our no refund policy. However, we are committed to client satisfaction and will work with you to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>Address concerns about service delivery or performance</li>
                <li>Optimize campaigns and improve results within the scope of our services</li>
                <li>Provide additional support or training as needed</li>
                <li>Adjust strategies or approaches based on campaign data</li>
              </ul>
              <p className="mt-3">
                While we cannot offer refunds, we are dedicated to delivering value and will make reasonable efforts to address legitimate concerns within the scope of our service agreements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">10. Billing and Payment Terms</h2>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>All prices are in USD unless otherwise specified</li>
                <li>Payment is required in full before services commence (unless otherwise agreed in writing)</li>
                <li>For subscription services, you authorize recurring charges to your payment method</li>
                <li>You are responsible for maintaining valid and current payment information</li>
                <li>Failed payments may result in service suspension or termination without refund</li>
                <li>Price changes for ongoing services will be communicated at least 30 days in advance</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">11. Contact and Dispute Resolution</h2>
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
              <h2 className="text-2xl font-bold text-white mb-4">12. Modifications to This Policy</h2>
              <p>
                Media Traffics LLC reserves the right to modify this Refund Policy at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services after changes are posted constitutes acceptance of the modified policy. Material changes will be communicated via email to active clients.
              </p>
            </section>

            <section className="bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 p-6 rounded-xl border border-cyan-500/30">
              <h2 className="text-2xl font-bold text-white mb-4">13. Contact Information</h2>
              <p className="mb-4">
                For questions regarding this Refund Policy or to discuss billing concerns:
              </p>
              <div className="space-y-3 text-gray-200">
                <p><strong>Email:</strong> <a href="mailto:Support@mediatraffics.com" className="text-cyan-400 hover:text-cyan-300">Support@mediatraffics.com</a></p>
                <p><strong>Phone:</strong> <a href="tel:+18312634402" className="text-cyan-400 hover:text-cyan-300">+1 (831) 263-4402</a> (24/7 Front Desk)</p>
                <p><strong>Business Name:</strong> Media Traffics LLC</p>
              </div>
            </section>

            <section className="mt-8 p-4 bg-gray-800/50 rounded-lg border border-red-700/30">
              <p className="text-sm text-gray-300">
                <strong className="text-red-400">Final Acknowledgment:</strong> By purchasing any service, product, or subscription from Media Traffics LLC, you acknowledge that you have read, understood, and expressly agree to this No Refund Policy. You understand that all sales are final and that no refunds will be issued under any circumstances. You agree to resolve any disputes in accordance with our Terms of Service and waive any right to refunds, chargebacks, or reimbursement for services purchased.
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
