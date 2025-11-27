export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 text-center">
      <h3 className="text-xl font-bold mb-4">JOSON LIMITED</h3>
      <p className="mb-4">
        Home | About | Products | Contact
      </p>
      <p className="text-gray-400">
        © {new Date().getFullYear()} JOSON LIMITED. All Rights Reserved.
      </p>
    </footer>
  );
}
