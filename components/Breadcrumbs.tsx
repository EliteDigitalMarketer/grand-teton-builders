import Link from 'next/link'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" style={{ padding: '16px 5vw', background: 'var(--snowfield)', borderBottom: '1px solid rgba(31,36,33,0.08)' }}>
      <ol
        style={{
          display: 'flex',
          gap: '8px',
          alignItems: 'center',
          listStyle: 'none',
          fontSize: '11px',
          letterSpacing: '0.06em',
          color: 'var(--text-light)',
        }}
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        {items.map((item, index) => (
          <li
            key={index}
            style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            {index > 0 && <span aria-hidden="true" style={{ color: 'var(--brass)', opacity: 0.5 }}>/</span>}
            {item.href ? (
              <Link
                href={item.href}
                itemProp="item"
                style={{ color: 'var(--text-light)', textDecoration: 'none' }}
              >
                <span itemProp="name">{item.label}</span>
              </Link>
            ) : (
              <span itemProp="name" style={{ color: 'var(--charcoal)', fontWeight: 500 }}>{item.label}</span>
            )}
            <meta itemProp="position" content={String(index + 1)} />
          </li>
        ))}
      </ol>
    </nav>
  )
}
