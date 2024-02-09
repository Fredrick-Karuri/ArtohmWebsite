import React from 'react'

const PrivacyPolicy = () => {
  // setting up updated policy date
  const date = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  const emailAddress = 'fred@aartohm.com'
  return (
    <div className='max-w-3xl mx-auto my-8 sm:mx-4'>
      <h1 className='text-3xl font-bold mb-4'>Artohm Privacy Policy</h1>
      <p className='text-sm mb-4'>Last updated: {date}</p>

      <h2 className='text-xl font-bold mt-6 mb-2'>1. Introduction</h2>
      <p className='text-gray-700 mb-4'>
        Welcome to Artohm! This Privacy Policy explains how we collect, use, and
        safeguard your personal information when you use our mobile application
        and services. By accessing or using Artohm, you agree to the terms
        outlined in this Privacy Policy.
      </p>

      <h2 className='text-xl font-bold mt-6 mb-2'>2. Information Collection</h2>
      <p className='text-gray-700 mb-4'>
        We may collect personal information such as your name, email address,
        and phone number when you create an account or use our services. We may
        also collect information about your usage of our services, such as
        location and device information. We may also collect information about
        your interactions with other users of our services, such as their names,
        email addresses, and phone numbers.
      </p>

      <h2 className='text-xl font-bold mt-6 mb-2'>3. Use of Information</h2>
      <p className='text-gray-700 mb-4'>
        We use your personal information to provide and improve our services,
        communicate with you, and comply with our legal obligations. We may also
        use your information to personalize your experience and improve our
        services.
      </p>

      <h2 className='text-xl font-bold mt-6 mb-2'>4. Sharing of Information</h2>
      <p className='text-gray-700 mb-4'>
        We do not share your personal information with third parties for
        marketing purposes.
      </p>

      <h2 className='text-xl font-bold mt-6 mb-2'>5. Data Security</h2>
      <p className='text-gray-700 mb-4'>
        We take reasonable measures to protect your personal information from
        unauthorized access, alteration, or disclosure. However, no method of
        transmission over the internet or electronic storage is 100% secure and
        cannot be guaranteed.
      </p>

      <h2 className='text-xl font-bold mt-6 mb-2'>6. Children's Privacy</h2>
      <p className='text-gray-700 mb-4'>
        Our services are not intended for children under the age of 13. We do
        not knowingly collect personal information from children under 13 years
        of age.
      </p>

      <h2 className='text-xl font-bold mt-6 mb-2'>
        7. Changes to this Privacy Policy
      </h2>
      <p className='text-gray-700 mb-4'>
        We may update this Privacy Policy from time to time. We will notify you
        of any changes by posting a notice on our website or by sending you an
        email.
      </p>

      <h2 className='text-xl font-bold mt-6 mb-2'>
        8. Disclaimer of Warranties
      </h2>
      <p className='text-gray-700 mb-4'>
        Our services are provided on an "as is" and "as available" basis. We
        make no representations or warranties of any kind, whether express or
        implied, including but not limited to the implied warranties of
        merchantability and fitness for a particular purpose.
      </p>

      <h2 className='text-xl font-bold mt-6 mb-2'>
        9. Limitation of Liability
      </h2>
      <p className='text-gray-700 mb-4'>
        In no event shall we be liable for any direct, indirect, incidental,
        special, or consequential damages arising out of or in connection with
        your use of our services.
      </p>

      <h2 className='text-xl font-bold mt-6 mb-2'>10. Indemnification</h2>
      <p className='text-gray-700 mb-4'>
        You agree to indemnify and hold us harmless from any claims or
        liabilities arising out of or in connection with your use of our
        services.
      </p>

      <h2 className='text-xl font-bold mt-6 mb-2'>11. Termination</h2>
      <p className='text-gray-700 mb-4'>
        We may terminate or suspend your access to our services at any time,
        without notice or liability, for any reason.
      </p>

      <h2 className='text-xl font-bold mt-6 mb-2'>12. Contact Us</h2>
      <p className='text-gray-700 mb-4'>
        If you have questions or concerns about this Privacy Policy, please
        contact us at
        <a className='text-blue-500' href={`mailto:${emailAddress}`}>
          {' '}
          {emailAddress}.
        </a>
      </p>
    </div>
  )
}

export default PrivacyPolicy
