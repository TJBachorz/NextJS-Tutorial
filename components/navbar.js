import Link from 'next/link';


export default () => (
    <div>
        <nav>
            <ul>
                <Link href="/"><li>Home</li></Link>
                <Link href="/about"><li>About</li></Link>
                <li>Contact</li>
                <li>FAQs</li>
            </ul>
        </nav>
    </div>
)