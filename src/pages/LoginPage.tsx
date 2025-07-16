import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const SimpleLoginForm = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Logging in with:", form);
    // Add login logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg space-y-6">
        <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>

        <div className="space-y-4">
          <div>
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              name="username"
              value={form.username}
              onChange={handleChange}
              placeholder="Enter your username"
            />
          </div>

          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
          </div>

          <Button className="w-full mt-2" onClick={handleSubmit}>
            Login
          </Button>
        </div>

        <div className="flex justify-between text-sm text-blue-600 mt-4">
          <a href="/signup" className="hover:underline">
            Sign up
          </a>
          <a href="/forgot-password" className="hover:underline">
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default SimpleLoginForm;
