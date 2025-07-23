import authBg from '@/assets/auth-bg.jpg';
import LoginForm from '@/components/LoginForm';

export function Login() {
  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4 bg-gradient-auth relative overflow-hidden"
      style={{
        backgroundImage: `url(${authBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-gradient-auth opacity-80" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary-glow/10 rounded-full blur-3xl" />
      
      {/* Login form */}
      <div className="relative z-10 w-full max-w-md">
        <LoginForm />
      </div>
    </div>
  );
}