import React from 'react'

const Navbar = () => {
const NavbarLinks = [
    { id:1, title: 'Home', link: '#home' },
    {id:2, title: 'Skills', link: '#Skills'},
    {id:3, title: 'Experience', link: '#Experience'},
    {id:4, title: 'My projects', link: '#projects'},
    {id:5, title: 'Contact', link: '#Contact'}, 
];
    return (
    <header className='absolute top-0 flex jsutify-center items-center body-font z-10'>
        <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center jsutify-center'>
            <a className='flex title-font font-medium text-gray-900 mb-4 md:mb-0'>
                <span className='ml-3 mr-11 font-bold text-white text-3xl'>Portfolio</span>
            </a>
            <nav className='md:ml-auto md:mr-auto font-medium flex flex-wrap items-center text-base text-gray-300 justify-center '>
                {
                    NavbarLinks.map((e) =>(
                            <a key={e.id} href={e.link} className='mr-7 hover:text-white'>
                                {e.title}
                            </a>
                    ))
                }
            </nav>
            <button type='button' className='text-gray-950 mt-4 bg-white hover:bg-blue-300 font-semibold rounded-full text-sm px-5 py-2.5 text-center'>
                Contact
            </button>
        </div>
    </header>
  )
}

export default Navbar
