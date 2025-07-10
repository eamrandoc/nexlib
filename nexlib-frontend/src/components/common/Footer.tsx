const Footer = () => {
  return (
    <footer className="footer footer-center bg-gradient-to-r from-blue-500 to-indigo-800 text-white p-4">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All rights
          reserved by <span className="font-semibold">NexLib</span>
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
