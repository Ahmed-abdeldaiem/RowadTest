import React, { useState } from 'react'








import AboutUs from '../AboutCompany/AboutUs'
import ForthHSection from '../ForthHomeSection/ForthHSection'
import SecondHSection from '../SecondHomeSection/SecondHSection'

import FirstHSection from '../FirstHomeSection/FirstHSection'
import Header1 from '../Head1/Header1'
import HotelSection from '../HotelSection/HotelSection'






export default function Home() {

const [counter, setcounter] = useState(0)

  return <>
  
<AboutUs/>
<Header1/>
<FirstHSection/>
<SecondHSection/>
<HotelSection/>
<ForthHSection/>


  </>
}
