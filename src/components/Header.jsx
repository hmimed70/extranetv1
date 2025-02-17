import React from 'react'
import logo1 from '../assets/logo1.png'
import logo2 from '../assets/logo2.jpg'
import Heading from './Heading'

const Header = () => {
  return (
    <div className='flex justify-between items-center'>
      <img src={logo1} width={100} alt="logo"/>
      <div className='flex justify-start  flex-col items-center '>
         <Heading text={"الــجمـهورية الــجزائريــــة الـديـمقــراطـية الــشعــبيــة"}  size={28}/>
         <Heading text={"ولاية الجزائر"}  size={22} />
         <Heading text={"مؤسسة اكسترانت"}  size={18}/>
      </div>
      <img src={logo2} width={90} alt="logo"/>

    </div>
  )
}

export default Header