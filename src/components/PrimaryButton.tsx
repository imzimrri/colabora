import { ReactNode, ButtonHTMLAttributes } from 'react';

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
}

export function PrimaryButton({ 
  children, 
  variant = 'primary',
  fullWidth = false,
  className = '',
  ...props 
}: PrimaryButtonProps) {
  const baseStyles = "px-8 py-3 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variantStyles = {
    primary: "bg-[#529989] text-white hover:bg-[#529989]/90 focus:ring-2 focus:ring-[#529989] focus:ring-offset-2",
    secondary: "bg-[#879153] text-white hover:bg-[#879153]/90 focus:ring-2 focus:ring-[#879153] focus:ring-offset-2"
  };

  const widthStyle = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${widthStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
