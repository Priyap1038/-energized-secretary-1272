import React, { createContext, useState } from 'react'

export const Authval = createContext()
function Authcontext({children}) {
    const [histry, sethistry] = useState([])
  return (
    <Authval.Provider value={{histry , sethistry}}>
        {children}
    </Authval.Provider>
  )
}

export default Authcontext