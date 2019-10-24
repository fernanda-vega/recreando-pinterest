import React from 'react';
import './Navbar.css';

function Navbar() {
   return (
      <nav className="headerContainer">
         <div className="headerContent">
            <div className="pinterest-icon"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" fillRule="evenodd" clipRule="evenodd" fill='#e60023'/></svg></div>

            
            <div className="commonBox">
               <div className="search-container">
                  <div className="search-bar">
                     <svg className="search-icon" height="20" width="20" viewBox="0 0 24 24" aria-label="Icono de búsqueda" role="img"><path d="M10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6m13.12 2.88l-4.26-4.26A9.842 9.842 0 0 0 20 10c0-5.52-4.48-10-10-10S0 4.48 0 10s4.48 10 10 10c1.67 0 3.24-.41 4.62-1.14l4.26 4.26a3 3 0 0 0 4.24 0 3 3 0 0 0 0-4.24"></path></svg>
                     <input className="search-input" placeholder="Buscar" type='text'></input>
                  </div>
               </div>
            </div>

            <div className="button-container">
               <div className="nav-button"><div className="btn">Inicio</div></div>
               <div className="nav-button"><div className="btn">Siguiendo</div></div>
               <div className="nav-button">
                  <div className="icon"><div className="user-icon">F</div></div>
                  <div className="btn">Fernanda</div>
               </div>
               <span className="nav-separator"></span>
               <div className="pinterest-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 12.5a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 18 12.5m-6 0a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 12 12.5m-6 0a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 6 12.5M12 0C5.925 0 1 4.925 1 11c0 2.653.94 5.086 2.504 6.986L2 24l5.336-3.049A10.93 10.93 0 0 0 12 22c6.075 0 11-4.925 11-11S18.075 0 12 0" fillRule="evenodd" clipRule="evenodd" fill='#8e8e8e'></path></svg></div>
               <div className="pinterest-icon"><svg width="24" height="24" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill="#8e8e8e" d="M8 16c-1.12 0-2.03-.9-2.03-2h4.06c0 1.1-.91 2-2.03 2zm4.72-6.92c1.02.95 1.74 2.19 2.03 3.59H1.25c.29-1.4 1.01-2.64 2.02-3.59V4.67C3.27 2.09 5.39 0 8 0c2.61 0 4.72 2.09 4.72 4.67v4.41z"></path></svg></div>
               <div className="pinterest-icon"><svg cheight="22" width="22" viewBox="0 0 24 24" aria-hidden="true" aria-label="" role="img"><path fill="#8e8e8e" d="M12 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3M3 9c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm18 0c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z"></path></svg></div>
            </div>

         </div>
      </nav>
   )
}

export default Navbar;