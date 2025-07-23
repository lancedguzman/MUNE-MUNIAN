import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LogOut, User } from 'lucide-react';


export function Home() {
    return (
       <div className="min-h-screen bg-gradient-auth p-6">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-gradient-card border-auth-border shadow-auth">
          <CardHeader className="flex flex-row items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
                <User className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <CardTitle className="text-2xl font-bold text-foreground">Dashboard</CardTitle>
                <p className="text-muted-foreground">Welcome back, {user.username || user.email}!</p>
              </div>
            </div>
            <Button 
              onClick={logout}
              variant="outline"
              className="border-auth-border text-foreground hover:bg-muted"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-auth-card border-auth-border">
                <CardHeader>
                  <CardTitle className="text-lg text-foreground">User Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Email:</span> {user.email}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">User ID:</span> {user.id}
                  </p>
                  {user.username && (
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium text-foreground">Username:</span> {user.username}
                    </p>
                  )}
                </CardContent>
              </Card>
              
              <Card className="bg-auth-card border-auth-border">
                <CardHeader>
                  <CardTitle className="text-lg text-foreground">Authentication Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-foreground">Successfully authenticated</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Your session is active and secure.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <Card className="bg-auth-card border-auth-border">
              <CardHeader>
                <CardTitle className="text-lg text-foreground">Ready for Django Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  This app is configured to work with your Django REST API. Update the API_BASE_URL in 
                  <code className="mx-1 px-2 py-1 bg-muted rounded text-xs">src/contexts/AuthContext.jsx</code> 
                  to match your Django server.
                </p>
                <div className="bg-muted p-3 rounded-md">
                  <p className="text-xs font-mono text-foreground">
                    Expected Django endpoints:
                  </p>
                  <ul className="text-xs font-mono text-muted-foreground mt-2 space-y-1">
                    <li>POST /api/auth/login/</li>
                    <li>GET /api/auth/verify/</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};


