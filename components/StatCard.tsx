interface StatCardProps {
  number: string
  label: string
  accent?: 'teal' | 'gold'
}

// Renders a key metric highlight card.
export function StatCard({ number, label, accent = 'teal' }: StatCardProps) {
  const accentClass = accent === 'gold' ? 'text-brand-gold' : 'text-brand-dark'
  
  return (
    <div className="p-6 bg-white border-l-4 rounded-lg info-card card-lift" style={{ borderColor: accent === 'gold' ? '#C9A24A' : '#0B7A97' }}>
      <div className={`text-4xl font-display font-bold mb-2 ${accentClass}`}>
        {number}
      </div>
      <p className="text-body">{label}</p>
    </div>
  )
}
