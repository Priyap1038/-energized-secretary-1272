 import React, { createContext, useState } from 'react'

export const Authval = createContext()
function Authcontext({children}) {

    const [histry, sethistry] = useState([]);

    const [userlogin, setuserlogin] = useState({
      user: null,
      mail: null,
      pass: null
  })

  return (
    <Authval.Provider value={{histry , sethistry,userlogin,setuserlogin}}>
        {children}
    </Authval.Provider>
  )
}

export default Authcontext