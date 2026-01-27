import "./globals.css";

export default function Home() {
  return (
    <>
      {/* NAVBAR */}
      <header className="navbar">
        <div className="logo">MR PDF KING</div>

        <nav className="nav-links">
          <a href="#">Merge PDF</a>
          <a href="#">Split PDF</a>
          <a href="#">Rotate PDF</a>
          <a href="#">Extract Text PDF</a>
        </nav>

        <div className="auth">
          <a href="/login" className="login">Login</a>
          <a href="/signup" className="signup">Sign up</a>
        </div>

        {/* PROFILE AREA */}
        <div className="profile-wrapper">
          <img src="https://i.pravatar.cc/100" className="avatar" />

          <div className="profile-dropdown">
            <div className="profile-header">
              <img src="https://i.pravatar.cc/100" />
              <div>
                <h4>Rajat Semwal</h4>
                <p>rajat@email.com</p>
              </div>
            </div>

            <div className="subscription">
              <span>Subscription</span>
              <strong>PRO PLAN</strong>
            </div>

            <ul className="profile-menu">
              <li>👤 My Profile</li>
              <li>🌐 Language</li>
              <li>⚙ Settings</li>
              <li>💳 Billing</li>
              <li className="logout">🚪 Logout</li>
            </ul>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <h1>All-in-One PDF, Word & Image Tools</h1>
        <p>Fast • Secure • Easy to Use Online Tools</p>
        <button>Get Started</button>
      </section>

      {/* ABOUT */}
      <section className="about">
        <h2>About Our Website</h2>
        <p>
          ToolHub is a modern online platform that helps you manage PDF, Word,
          and Image files easily. Convert, compress, edit, and optimize your
          documents securely in one place.
        </p>
      </section>

      {/* GALLERY */}
      <section className="gallery">
        <h2>Our Tools</h2>

        <div className="gallery-grid">
          <div className="card">
            <h3>PDF Tools</h3>
            <p>Merge, split, compress and convert PDF files.</p>
          </div>

          <div className="card">
            <h3>Word Tools</h3>
            <p>Edit, convert DOC files quickly and easily.</p>
          </div>

          <div className="card">
            <h3>Image Tools</h3>
            <p>Resize, compress and convert images online.</p>
          </div>

          <div className="card">
            <h3>Secure Storage</h3>
            <p>Your files are auto-deleted for privacy.</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <p>© 2026 <span>ToolHub</span>. All rights reserved.</p>
        <p>Built with ❤️ using HTML, CSS & JavaScript</p>
      </footer>
    </>
  );
}
