import { Link } from 'react-router-dom';

const GlassInfoCard = ({
  eyebrow,
  title,
  description,
  href = '/contact',
  icon = true,
  className = '',
}) => {
  return (
    <div className={`glass-card relative ${className}`}>
      {icon && (
        <Link
          to={href}
          className="absolute top-0 right-0 w-[52px] h-[52px] rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
          </svg>
        </Link>
      )}

      {eyebrow && (
        <p className="text-[13px] text-white/50 mb-2 font-medium">{eyebrow}</p>
      )}

      <h3 className="font-serif text-[20px] font-medium text-white mb-3 pr-14 leading-snug">
        {title}
      </h3>

      {description && (
        <p className="text-[14px] text-white/60 leading-relaxed max-w-[280px]">
          {description}
        </p>
      )}
    </div>
  );
};

export default GlassInfoCard;
