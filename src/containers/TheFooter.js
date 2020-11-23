import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        {/* <a href="https://orange.cd" target="_blank" rel="noopener noreferrer">Orange</a> */}
        <span className="ml-1">&copy; 2020 Orange RDC.</span>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">Powered by</span>
        <a href="http://kinshasadigital.academy/" target="_blank" rel="noopener noreferrer">Kinshasa Digital Academy</a>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
