import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Visual only - no actual auth logic
    console.log("Login submitted:", { email });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#faf8fc] px-4 relative overflow-hidden">
      {/* Centered radial glow behind card */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Primary purple glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d4c4e0]/40 rounded-full blur-[120px]" />
        {/* Secondary rose accent glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] w-[400px] h-[400px] bg-[#f0e0e8]/50 rounded-full blur-[100px]" />
        {/* Subtle top-left accent */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#e8e0f0]/30 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-md"
      >
        {/* Logo */}
        <Link to="/" className="block text-center mb-8">
          <span className="lattice-logo text-2xl text-foreground/70 hover:text-foreground/90 transition-colors">
            Lattice
          </span>
        </Link>

        {/* Login Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl shadow-[#6d5a7d]/10 p-8 border border-[#e0d4eb]/50">
          <div className="text-center mb-8">
            <h1 className="font-serif text-3xl font-semibold text-[#4a3d5c] mb-2">
              Welcome Back
            </h1>
            <p className="text-foreground/60">
              Continue your inner journey
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground/80">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 bg-white/60 border-[#d4c4e0] focus:border-[#9e6878] focus:ring-[#9e6878]/20"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-foreground/80">
                  Password
                </Label>
                <Link
                  to="#"
                  className="text-sm text-[#9e6878] hover:text-[#8a5a68] transition-colors"
                >
                  Forgot password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12 bg-white/60 border-[#d4c4e0] focus:border-[#9e6878] focus:ring-[#9e6878]/20"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full h-12 bg-[#6d5a7d] text-white hover:bg-[#5c4a6a] shadow-lg hover:shadow-xl hover:-translate-y-0.5 font-serif tracking-widest uppercase text-sm transition-all"
            >
              Sign In
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-foreground/60">
              Don't have an account?{" "}
              <Link
                to="#"
                className="text-[#9e6878] hover:text-[#8a5a68] font-medium transition-colors"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>

        {/* Back to home */}
        <p className="text-center mt-6">
          <Link
            to="/"
            className="text-foreground/50 hover:text-foreground/70 text-sm transition-colors"
          >
            ← Back to home
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
