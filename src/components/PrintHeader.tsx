import { useEffect, useState } from "react";

interface PrintHeaderProps {
  title: string;
}

const PrintHeader = ({ title }: PrintHeaderProps) => {
  const [logo, setLogo] = useState<string | null>(null);

  useEffect(() => {
    const savedLogo = localStorage.getItem("professional-logo");
    if (savedLogo) {
      setLogo(savedLogo);
    }
  }, []);

  return (
    <div className="print-only" style={{ 
      display: 'none',
      marginBottom: '2rem',
      paddingBottom: '1rem',
      borderBottom: '2px solid #e5e7eb'
    }}>
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        gap: '1rem'
      }}>
        {logo && (
          <img 
            src={logo} 
            alt="Logo" 
            style={{ 
              maxHeight: '60px',
              width: 'auto'
            }} 
          />
        )}
        <div style={{ flex: 1, textAlign: logo ? 'right' : 'left' }}>
          <h1 style={{ 
            fontSize: '1.5rem', 
            fontWeight: 'bold',
            margin: 0,
            color: '#1f2937'
          }}>
            {title}
          </h1>
          <p style={{ 
            fontSize: '0.875rem',
            color: '#6b7280',
            margin: '0.25rem 0 0 0'
          }}>
            MenteCare Pro - Sistema para Profissionais de Saúde Mental
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrintHeader;
