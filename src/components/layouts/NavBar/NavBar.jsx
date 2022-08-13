import React from 'react';
import styles from './style.module.scss';
import { useRouter } from 'next/router';

const NavBar = () => {
  const router = useRouter();
  
  const menu = [
    {id: 1, title: 'Home', path: '/'},
    {id: 2, title: 'About us', path: '/about'},
    {id: 3, title: 'Services', path: '/services'},
    {id: 4, title: 'News', path: '/news'},
    {id: 5, title: 'Contact', path: '/contact'},
  ];

  const menuItemStyle = (item) => {
    return `mr-8 cursor-pointer font-semibold text-16 hover:text-primary ${router.pathname === item.path ? 'text-primary' : ''}`;
  }; 

  return(
    <>
      <div className='w-full h-14 lg:h-32 flex items-center justify-between'>
        <div className="flex pl-12 lg:pl-24 w-1/2 justify-between">
          <div className="flex flex-col">
            <p className={styles.title}>
              <span className='mr-1.5'>Dr</span>
              <span className='text-primary'>PRO</span>
            </p>
            <p className='text-12 text-gray mt-0.5 font-medium'>Plastic Surgery</p>
          </div>
          <div className="pr-12 lg:pr-24">
            <ul className='flex flex-row items-center justify-center'>
              {
                menu.map(item => {
                  const itemStyle = menuItemStyle(item);
                  return(
                    <li key={item.id} className={ itemStyle }>
                      <a href={item.path}>{item.title}</a>
                    </li>
                  );
                })
              }
            </ul>
           
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="flex items-center justify-center">

          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;