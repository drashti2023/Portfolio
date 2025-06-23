import React from 'react';
import Link from 'next/link';

function Header() {
  return (
    <header id="header" className="header dark-background d-flex flex-column">
    <i className="header-toggle d-xl-none bi bi-list"></i>

    <div className="profile-img">
      <img src="/assets/img/my-profile-img.jpg" alt="" className="img-fluid rounded-circle"/>
    </div>

    <a href="index.html" className="logo d-flex align-items-center justify-content-center">
      {/* <img src="/assets/img/logo.png" alt=""/>  */}
      <h1 className="sitename">Drashti Rathod</h1>
    </a>

    <div className="social-links text-center">
      <a href="https://www.instagram.com/drashtirathod._" className="instagram"><i className="bi bi-instagram"></i></a>
      <a href="https://linkedin.com/in/drashti-rathod-4559112b3" className="linkedin"><i className="bi bi-linkedin"></i></a>
      <a href="https://github.com/drashti2023" className="github"><i className="bi bi-github"></i></a> 


    </div>

    <nav id="navmenu" className="navmenu">
      <ul>
        <li>
          <Link href="/" >
            <i className="bi bi-house navicon"></i> Home
          </Link>
        </li>
        <li>
          <Link href="/about">
            <i className="bi bi-person navicon"></i> About
          </Link>
        </li>
        <li>
          <Link href="/resume">
            <i className="bi bi-file-earmark-text navicon"></i> Resume
          </Link>
        </li>
        <li>
          <Link href="/projects">
            <i className="bi bi-grid navicon"></i> Projects
          </Link>
        </li>
        {/* <li>
          <Link href="/achievements">
            <i className="bi bi-award navicon"></i> Achievements
          </Link>
        </li> */}
        <li>
          <Link href="/contact">
            <i className="bi bi-envelope navicon"></i> Contact
          </Link>
        </li>
      </ul>
    </nav>
  </header>
  )
}

export default Header