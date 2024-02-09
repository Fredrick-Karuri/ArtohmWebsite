// TermsAndConditions.js

import React from 'react'

const TermsAndConditions = () => {
  //manually setting up updated terms and conditions date
  const lastUpdated = new Date('2024-02-09T00:00:00')

  const emailAddress = 'fred@aartohm.com'

  return (
    <div className='max-w-2xl mx-auto my-8 sm:mx-4'>
      <h1 className='text-3xl font-bold mb-4 sm:text-2xl'>
        Artohm Terms and Conditions
      </h1>
      <p className='text-sm mb-4'>
        Last updated: {lastUpdated.toLocaleDateString()}
      </p>

      <h2 className='text-xl font-bold mt-6 mb-2'>1. Acceptance of Terms</h2>
      <p className='text-gray-700 mb-4'>
        By using Artohm, you agree to comply with and be bound by these Terms
        and Conditions. If you do not agree to these Terms and Conditions,
        please do not use Artohm.
      </p>

      <h2 className='text-xl font-bold mt-6 mb-2'>2. User Conduct</h2>
      <p className='text-gray-700 mb-4'>
        You agree to abide by all applicable local, state, national, and
        international laws and regulations in your use of Artohm.
      </p>

      <h2 className='text-xl font-bold mt-6 mb-2'>3. Intellectual Property</h2>
      <p className='text-gray-700 mb-4'>
        Artohm and its content, including but not limited to text, graphics,
        images, logos, and software, are protected by intellectual property laws
        and are the property of Artohm or its licensors.
      </p>

      <h2 className='text-xl font-bold mt-6 mb-2'>4. Disclaimers</h2>
      <p className='text-gray-700 mb-4'>
        Artohm makes no representations or warranties about the accuracy,
        reliability, or completeness of Artohm's content or services.
      </p>

      <h2 className='text-xl font-bold mt-6 mb-2'>5. Privacy</h2>
      <p className='text-gray-700 mb-4'>
        By using Artohm, you agree to the collection, use, and disclosure of
        your personal information as described in our Privacy Policy.
      </p>

      <h2 className='text-xl font-bold mt-6 mb-2'>
        6. Limitations of Liability
      </h2>
      <p className='text-gray-700 mb-4'>
        In no event shall Artohm be liable for any direct, indirect, incidental,
        special, or consequential damages arising out of or in connection with
        your use of Artohm.
      </p>

      <h2 className='text-xl font-bold mt-6 mb-2'>7. Termination</h2>
      <p className='text-gray-700 mb-4'>
        Artohm reserves the right to terminate your access to Artohm at any
        time, without notice.
      </p>

      <h2 className='text-xl font-bold mt-6 mb-2'>
        8. Changes to Terms and Conditions
      </h2>
      <p className='text-gray-700 mb-4'>
        Artohm reserves the right to modify these Terms and Conditions at any
        time.
      </p>

      <h2 className='text-xl font-bold mt-6 mb-2'>9. Governing Law</h2>
      <p className='text-gray-700 mb-4'>
        These Terms and Conditions shall be governed by and construed in
        accordance with the laws of [Your Country].
      </p>

      <h2 className='text-xl font-bold mt-6 mb-2'>10. Entire Agreement</h2>
      <p className='text-gray-700 mb-4'>
        These Terms and Conditions constitute the entire agreement between
        Artohm and you regarding your use of Artohm.
      </p>

      <h2 className='text-xl font-bold mt-6 mb-2'>
        11. Additional Terms and Conditions
      </h2>
      <p className='text-gray-700 mb-4'>
        If you have additional terms and conditions that apply to your use of
        Artohm, please contact us at [your email address].
      </p>

      <h2 className='text-xl font-bold mt-6 mb-2'>12. Contact Us</h2>
      <p className='text-gray-700 mb-4'>
        If you have any questions about these Terms and Conditions, please
        contact us at <a 
        className='text-blue-500'
        href={`mailto:${emailAddress}`}> {emailAddress}. </a>
      </p>
    </div>
  )
}

export default TermsAndConditions
