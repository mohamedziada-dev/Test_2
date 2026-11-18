import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [hiddenPass, setHiddenPass] = useState(true);
  const navigate = useNavigate();

  const rulesOfPassword = [
    { key: "length", value: "8 to 25 characters" },
    { key: "characterUppercase", value: "Uppercase letter" },
    { key: "characterLowercase", value: "Lowercase letter" },
    { key: "numbers", value: "At least one number" },
    { key: "symbols", value: "At least one symbol" },
  ];

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    submit: "",
  });

  const [touched, setTouched] = useState({
    email: false,
    password: false,
  });

  const [errorPassword, setErrorPass] = useState({
    length: true,
    characterUppercase: true,
    characterLowercase: true,
    numbers: true,
    symbols: true,
  });

  const getFieldError = (name, value) => {
    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value.trim()) return "Email is required";
      if (!emailRegex.test(value))
        return "Please enter a valid email address (e.g., user@domain.com)";
    }
    return "";
  };

  const validateField = (name, value) => {
    let newErrors = { ...errors };

    if (name === "password") {
      setErrorPass({
        length: value.length < 8 || value.length > 25,
        characterUppercase: !/[A-Z]/.test(value),
        characterLowercase: !/[a-z]/.test(value),
        numbers: !/[0-9]/.test(value),
        symbols: !/[^A-Za-z0-9]/.test(value),
      });
    } else {
      newErrors[name] = getFieldError(name, value);
    }

    setErrors(newErrors);
  };

  function handleChange(e) {
    const { name, value } = e.target;

    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));

    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));

    validateField(name, value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    setTouched({
      email: true,
      password: true,
    });

    const emailError = getFieldError("email", user.email);

    const currentPassError = {
      length: user.password.length < 8 || user.password.length > 25,
      characterUppercase: !/[A-Z]/.test(user.password),
      characterLowercase: !/[a-z]/.test(user.password),
      numbers: !/[0-9]/.test(user.password),
      symbols: !/[^A-Za-z0-9]/.test(user.password),
    };
    setErrorPass(currentPassError);

    const isPasswordValid = Object.values(currentPassError).every(
      (val) => val === false
    );

    if (!emailError && isPasswordValid) {
      localStorage.setItem("token", "user-auth-token-key");
      setErrors({ email: "", submit: "" });
      toast.success("Logged in successfully!");
      navigate(-1, { replace: true });
    } else {
      setErrors((prev) => ({
        ...prev,
        email: emailError,
        submit: "Please make sure all fields are valid before submitting.",
      }));
      toast.error("Invalid login credentials");
    }
  }

return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-linear-to-br from-slate-950 via-slate-900 to-indigo-950 px-4 py-12 text-slate-100">
      <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 p-8 sm:p-10 shadow-2xl shadow-indigo-950/50 backdrop-blur-xl">
        {/* Top Accent Glow */}
        <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-80 -translate-x-1/2 rounded-full bg-indigo-500/20 blur-3xl" />

        {/* Top Navigation (Aligned Left) */}
        <div className="relative mb-6 flex justify-start">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="group inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 -ml-2.5 text-sm font-medium text-slate-400 transition-colors hover:bg-white/5 hover:text-white cursor-pointer"
          >
            <svg
              className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>
        </div>

        {/* Header */}
        <div className="relative mb-8 text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-white">
            Welcome back
          </h1>
          <p className="mt-1.5 text-sm text-slate-400">
            Sign in to continue to your dashboard
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="relative space-y-5 text-left">
          {/* Email Field */}
          <div>
            <label
              htmlFor="email-input"
              className="mb-1.5 block text-left text-xs font-semibold uppercase tracking-wider text-slate-300"
            >
              Email Address
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-500">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.75}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <input
                id="email-input"
                name="email"
                type="email"
                placeholder="name@example.com"
                value={user.email}
                onChange={handleChange}
                className={`w-full rounded-xl border bg-slate-950/60 py-3 pl-11 pr-4 text-sm text-white placeholder:text-slate-500 transition-all focus:outline-none focus:ring-2 ${
                  touched.email && errors.email
                    ? "border-rose-500/70 focus:border-rose-500 focus:ring-rose-500/20"
                    : "border-white/10 focus:border-indigo-500 focus:ring-indigo-500/25"
                }`}
              />
            </div>
            {touched.email && errors.email && (
              <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-rose-400">
                <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
                {errors.email}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password-input"
              className="mb-1.5 block text-left text-xs font-semibold uppercase tracking-wider text-slate-300"
            >
              Password
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-500">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.75}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <input
                id="password-input"
                name="password"
                type={hiddenPass ? "password" : "text"}
                placeholder="••••••••"
                value={user.password}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-slate-950/60 py-3 pl-11 pr-11 text-sm text-white placeholder:text-slate-500 transition-all focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/25"
              />
              <button
                type="button"
                onClick={() => setHiddenPass((prev) => !prev)}
                aria-label={hiddenPass ? "Show password" : "Hide password"}
                className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-slate-400 transition-colors hover:text-indigo-400 focus:outline-none cursor-pointer"
              >
                {hiddenPass ? (
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.75}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.75}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                    />
                  </svg>
                )}
              </button>
            </div>

            {/* Password Checklist Box */}
            {touched.password && (
              <div className="mt-3 rounded-xl border border-white/10 bg-slate-950/50 p-3.5">
                <p className="mb-2.5 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                  Password Requirements
                </p>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {rulesOfPassword.map(({ key, value }) => {
                    const isInvalid = errorPassword[key];
                    return (
                      <div
                        key={key}
                        className={`flex items-center gap-2 text-xs font-medium transition-colors ${
                          isInvalid ? "text-slate-400" : "text-teal-400"
                        }`}
                      >
                        <span
                          className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[10px] font-bold ${
                            isInvalid
                              ? "bg-rose-500/15 text-rose-400"
                              : "bg-teal-500/20 text-teal-400"
                          }`}
                        >
                          {isInvalid ? "✕" : "✓"}
                        </span>
                        <span>{value}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* General Form Error Banner */}
          {errors.submit && (
            <div className="flex items-start gap-2.5 rounded-xl border border-rose-500/30 bg-rose-500/10 p-3.5 text-xs font-medium text-rose-300">
              <svg
                className="mt-0.5 h-4 w-4 shrink-0 text-rose-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{errors.submit}</span>
            </div>
          )}

          {/* Primary Submit Button (No Shadow) */}
          <button
            type="submit"
            className="w-full cursor-pointer rounded-xl bg-linear-to-r from-indigo-600 to-violet-600 py-3.5 text-sm font-semibold text-white transition-all hover:from-indigo-500 hover:to-violet-500 active:scale-[0.98]"
          >
            Sign in
          </button>
        </form>

        {/* Footer Sign Up Link */}
        <div className="relative mt-8 border-t border-white/10 pt-6 text-center text-sm text-slate-400">
          Don&apos;t have an account?{" "}
          <Link
            to="/SignUp"
            className="font-semibold text-indigo-400 transition-colors hover:text-indigo-300 hover:underline"
          >
            Create an account
          </Link>
        </div>
      </div>
    </div>
  );
}