import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-[#ffffff70] text-center p-10 mt-auto">
            <p>© 2025 Your Soft Solutions, LLC</p>
            <p>Center for Innovation & Economic Development, Office 226, 214 Central Ave, Dunkirk, NY 14048</p>
            <br/>
            <Link href='/contact'>Contact Us</Link>
        </footer>
    );
}