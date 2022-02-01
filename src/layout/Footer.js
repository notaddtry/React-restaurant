import React from 'react'

function Footer() {
  return (
    <footer className="page-footer">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Copyright Text
          <a
            className="grey-text text-lighten-4 right"
            href="https://github.com/notaddtry/React-restaurant"
          >
            Repo
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
