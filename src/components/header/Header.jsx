import './Header.css';

function Header() {
  return (
    <header className='header'>
    <nav className='nav'>
      <div className="navbar">
        <div className='logo'><img className='Logo' src="./Group 190.svg" alt="chiqoo" />
          <h1 className='h1'>Product</h1>
       </div>
       <div className='ullinks'>
        <div className='ull'>
          <ul className='ul'>
            <li>Product</li>
            <li>Custumers</li>
            <li>Pricing</li>
            <li>Resources</li>
            <button className='button1'>Sign in</button>
            <button className='button2'>Sign up</button>
            <img className='ikoncha' src="./Frame (6).svg" alt="ikoncha" />
          </ul>
        </div>
       </div>
      </div>
    </nav>
    <nav className='secondqism'>
      <div className='padding'>
      <div className='yozuv'>
        <h1 className='hh1'>Work at the speed <br /> of thought</h1>
        <p className='plar'>Tools, tutorials, design and innovation experts, all in one place! The most intuitive way to imagine your next user experience.</p>
        <button className='button3'>Get started</button>
        <img className='watch' src="./button (3).svg" alt="button3" />
      </div>
      </div>
      <div className='immg'>
        <img src="./amico.svg" alt="" />
      </div>
    </nav>
  </header>
  )
   

 
}

export default Header;
