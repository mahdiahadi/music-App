import React,{useState} from 'react';
import { HiOutlineHashtag, HiOutlineHome, HiOutlineMenu, HiOutlinePhotograph, HiOutlineUserGroup } from 'react-icons/hi';
import { RiCloseLine } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import { logo } from '../assets';

const links = [
  { name: 'Discover', to: '/', icon: HiOutlineHome },
  { name: 'Around You', to: '/around-you', icon: HiOutlinePhotograph },
  { name: 'Top Artists', to: '/top-artists', icon: HiOutlineUserGroup },
  { name: 'Top Charts', to: '/top-charts', icon: HiOutlineHashtag },
];

const NavLinks =({handleClick})=>(
  <div>
    {links.map((item)=>(
      <NavLink
      key={item.name}
        className='flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-cyan-400 '
        to={item.to}
        onClick={ ()=> handleClick && handleClick()}
      >
        <item.icon className="w-6 h-6 mr-2" />
        {item.name}
      </NavLink>
    ))}
  </div>
)
const Sidebar = () => {
  const[mobileMenuOpen,setMobileMenuOpen]=useState(false)
 
  return(
    <>
    <div className='md:flex hidden w-[240px] flex-col py-10 px-4 bg-[#191624]'>
        <img src={logo} alt='logo' className='h-14 w-full object-contain' />
        <NavLinks/>
    </div>
    <div className='absolute md:hidden block top-6 right-3'>
      {!mobileMenuOpen ? (
        <HiOutlineMenu className='w-6 h-6 mr-2 text-white' onClick={()=>setMobileMenuOpen(true)}/>
        
      ) : (
        <RiCloseLine className='w-6 h-6 mr-2 text-white' onClick={()=>setMobileMenuOpen(false)}/>
      )}
    </div>
    <div className={ `absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#483D8B] backdrop-blur-lg z-10 p-6  md:hidden smooth-transition ${mobileMenuOpen ? "left-0" : "-left-full"}`}>
          <img src={logo} alt="logo" className='h-14 w-full object-contain' />
          <NavLinks handleClick={()=>setMobileMenuOpen(false)} />
    </div>
    </>
)};

export default Sidebar;
