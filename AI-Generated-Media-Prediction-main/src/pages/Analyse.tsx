import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, FileImage, Video, TrendingUp, LogOut } from "lucide-react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

const Analyse = () => {
  const navigate = useNavigate();
  const [analytics, setAnalytics] = useState({
    totalUsers: 0,
    totalPredictions: 0,
    todayUsers: 0,
    aiDetected: 0,
    realDetected: 0,
  });
  const [dailyStats, setDailyStats] = useState<any[]>([]);

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const fetchAnalytics = async () => {
    try {
      // Get total unique users
      const { count: totalUsers } = await supabase
        .from("profiles")
        .select("*", { count: "exact", head: true });

      // Get total predictions
      const { count: totalPredictions } = await supabase
        .from("predictions")
        .select("*", { count: "exact", head: true });

      // Get today's unique users
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const { data: todaySessions } = await supabase
        .from("user_sessions")
        .select("user_id")
        .gte("logged_in_at", today.toISOString());
      
      const uniqueTodayUsers = new Set(todaySessions?.map(s => s.user_id)).size;

      // Get AI vs Real counts
      const { data: predictions } = await supabase
        .from("predictions")
        .select("prediction");
      
      const aiCount = predictions?.filter(p => p.prediction === "AI").length || 0;
      const realCount = predictions?.filter(p => p.prediction === "Real").length || 0;

      // Get daily stats for the last 7 days
      const sevenDaysAgo = new Date();
      sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
      
      const { data: recentSessions } = await supabase
        .from("user_sessions")
        .select("logged_in_at")
        .gte("logged_in_at", sevenDaysAgo.toISOString())
        .order("logged_in_at", { ascending: true });

      const { data: recentPredictions } = await supabase
        .from("predictions")
        .select("created_at, file_type")
        .gte("created_at", sevenDaysAgo.toISOString())
        .order("created_at", { ascending: true });

      // Process daily stats
      const dailyData: any = {};
      const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      
      for (let i = 6; i >= 0; i--) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        const dayName = days[date.getDay()];
        dailyData[dayName] = { name: dayName, users: 0, images: 0, videos: 0 };
      }

      recentSessions?.forEach((session: any) => {
        const date = new Date(session.logged_in_at);
        const dayName = days[date.getDay()];
        if (dailyData[dayName]) {
          dailyData[dayName].users++;
        }
      });

      recentPredictions?.forEach((pred: any) => {
        const date = new Date(pred.created_at);
        const dayName = days[date.getDay()];
        if (dailyData[dayName]) {
          if (pred.file_type.startsWith('image')) {
            dailyData[dayName].images++;
          } else if (pred.file_type.startsWith('video')) {
            dailyData[dayName].videos++;
          }
        }
      });

      setDailyStats(Object.values(dailyData));
      setAnalytics({
        totalUsers: totalUsers || 0,
        totalPredictions: totalPredictions || 0,
        todayUsers: uniqueTodayUsers,
        aiDetected: aiCount,
        realDetected: realCount,
      });
    } catch (error) {
      console.error("Error fetching analytics:", error);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  const accuracyData = [
    { name: 'Images', accuracy: 94 },
    { name: 'Videos', accuracy: 91 },
    { name: 'Overall', accuracy: 93 },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="absolute top-6 right-6 z-50">
        <Button
          variant="ghost"
          size="sm"
          onClick={handleLogout}
          className="gap-2"
        >
          <LogOut className="w-4 h-4" />
          Logout
        </Button>
      </div>

      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Analytics <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Dashboard</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-12 text-center">
            Real-time insights and performance metrics
          </p>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="glass-card p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/20">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total Users</p>
                  <p className="text-2xl font-bold">{analytics.totalUsers}</p>
                </div>
              </div>
            </Card>

            <Card className="glass-card p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-secondary/20">
                  <TrendingUp className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Today's Users</p>
                  <p className="text-2xl font-bold">{analytics.todayUsers}</p>
                </div>
              </div>
            </Card>

            <Card className="glass-card p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/20">
                  <FileImage className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total Predictions</p>
                  <p className="text-2xl font-bold">{analytics.totalPredictions}</p>
                </div>
              </div>
            </Card>

            <Card className="glass-card p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-secondary/20">
                  <Video className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">AI Detected</p>
                  <p className="text-2xl font-bold">{analytics.aiDetected}</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <Card className="glass-card p-6">
              <h3 className="text-lg font-semibold mb-4">Daily User Activity</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={dailyStats}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="name" stroke="hsl(var(--foreground))" />
                  <YAxis stroke="hsl(var(--foreground))" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--background))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="users" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={2}
                    name="Active Users"
                  />
                </LineChart>
              </ResponsiveContainer>
            </Card>

            <Card className="glass-card p-6">
              <h3 className="text-lg font-semibold mb-4">Detection Types</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={dailyStats}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="name" stroke="hsl(var(--foreground))" />
                  <YAxis stroke="hsl(var(--foreground))" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--background))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  <Legend />
                  <Bar dataKey="images" fill="hsl(var(--primary))" name="Images" />
                  <Bar dataKey="videos" fill="hsl(var(--secondary))" name="Videos" />
                </BarChart>
              </ResponsiveContainer>
            </Card>
          </div>

          {/* Detection Accuracy */}
          <Card className="glass-card p-6">
            <h3 className="text-lg font-semibold mb-4">Detection Accuracy</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={accuracyData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis type="number" domain={[0, 100]} stroke="hsl(var(--foreground))" />
                <YAxis dataKey="name" type="category" stroke="hsl(var(--foreground))" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--background))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                />
                <Bar dataKey="accuracy" fill="hsl(var(--primary))" />
              </BarChart>
            </ResponsiveContainer>
          </Card>

          {/* Additional Insights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <Card className="glass-card p-6 text-center">
              <p className="text-muted-foreground mb-2">Detection Rate</p>
              <p className="text-3xl font-bold text-primary">
                {analytics.totalPredictions > 0 
                  ? ((analytics.aiDetected / analytics.totalPredictions) * 100).toFixed(1)
                  : 0}%
              </p>
              <p className="text-sm text-muted-foreground mt-2">AI Content Detected</p>
            </Card>

            <Card className="glass-card p-6 text-center">
              <p className="text-muted-foreground mb-2">Average Daily</p>
              <p className="text-3xl font-bold text-secondary">
                {analytics.totalUsers > 0 
                  ? (analytics.totalPredictions / Math.max(analytics.totalUsers, 1)).toFixed(1)
                  : 0}
              </p>
              <p className="text-sm text-muted-foreground mt-2">Predictions Per User</p>
            </Card>

            <Card className="glass-card p-6 text-center">
              <p className="text-muted-foreground mb-2">Content Split</p>
              <p className="text-3xl font-bold">
                {analytics.aiDetected}:{analytics.realDetected}
              </p>
              <p className="text-sm text-muted-foreground mt-2">AI vs Real</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analyse;
