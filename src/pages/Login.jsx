import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem("healthsync_isLoggedIn", "true");
    navigate("/calculator");
  };

  return (
    <section className="flex min-h-[80vh] items-center justify-center bg-slate-50 px-6">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md rounded-2xl bg-white p-8 shadow"
      >
        <h1 className="mb-2 text-2xl font-bold text-slate-900">
          Login Simulasi
        </h1>

        <p className="mb-6 text-sm text-slate-500">
          Login ini hanya simulasi menggunakan localStorage.
        </p>

        <input
          type="text"
          placeholder="Nama pengguna"
          className="mb-4 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-emerald-500"
        />

        <button
          type="submit"
          className="w-full rounded-xl bg-emerald-600 px-4 py-3 font-semibold text-white hover:bg-emerald-700"
        >
          Masuk
        </button>
      </form>
    </section>
  );
}

export default Login;
