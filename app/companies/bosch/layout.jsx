import FixedCallButtons from '@/components/buttons/FixedCallButtons'
import Footer from '@/components/footers/Footer'
import BoschHeader from '@/components/headers/BoschHeader'
import React from 'react'

const BoschLayout = ({children}) => {
  return (
    <section>
        <BoschHeader />
        <main>
            {children}
        </main>
        <Footer />
        <FixedCallButtons />
    </section>
  )
}

export default BoschLayout