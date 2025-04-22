import React, { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Eye, EyeOff, Loader2, Lock, Mail, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { login, isLoggedIn } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(formData);
  };
  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <div className="w-full max-w-md space-y-8 py-auto mx-auto">
        {/* LOGO */}
        <div className="text-center mb-8">
          <div className="flex flex-col items-center gap-4 group">
            <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <MessageSquare className="size-6 text-primary" />
            </div>
            <h1 className="text-2xl font-bold ct-2">Create Account</h1>
            <p className="text-base-content/60">
              Get started with your free account
            </p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="form-control ">
            {/* Email */}
            <label className="label">
              <span className="label-text font-medium mb-2">Email</span>
            </label>
            <div className="relative mb-4">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                <Mail className="size-5 text-base-content/40" />
              </div>
              <input
                type="text"
                className={`input input-bordered w-full pl-10`}
                placeholder="euro@gmail.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  })
                }
              />
            </div>
            {/* Password */}
            <label className="label">
              <span className="label-text font-medium mb-2">Password</span>
            </label>
            <div className="relative mb-4">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                <Lock className="size-5 text-base-content/40" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                className={`input input-bordered w-full pl-10`}
                placeholder="************"
                value={formData.password}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    password: e.target.value,
                  })
                }
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 items-center z-10 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="size-5 text-base-content/40 " />
                ) : (
                  <Eye className="size-5 text-base-content/40" />
                )}
              </button>
            </div>
          </div>

          {/* Button Submit */}
          <button type="submit" className="btn btn-primary w-full mt-4">
            {isLoggedIn ? (
              <>
                <Loader2 className="size-5 animate-spin" />
                Loading...
              </>
            ) : (
              "Sign In"
            )}
          </button>
        </form>

        <div className="text-center">
          <p className="text-base-content/60">
            Don't have an account{" "}
            <Link to="/signup" className="link link-primary">
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
