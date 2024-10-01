import { createClient } from '@/prismicio';
import { PrismicNextLink } from '@prismicio/next';
import Link from 'next/link';

export default async function Footer() {
  const client = createClient();

  const settings = await client.getSingle('settings');
  return (
    <footer>
      <Link href="/">{settings?.data?.site_title}</Link>
      <p>
        © {new Date().getFullYear()} {settings?.data?.site_title}
      </p>
      <nav>
        <ul>
          {settings?.data.navigation?.map(({ label, link }) => (
            <li key={label}>
              <PrismicNextLink field={link}>{label}</PrismicNextLink>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
}
