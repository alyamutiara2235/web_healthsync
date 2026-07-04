const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

export const apiClient = {
  get: async (url, options = {}) => {
    try {
      const response = await fetch(`${BASE_URL}${url}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          ...options.headers,
        },
        ...options,
      });
      if (!response.ok) throw new Error(`Server merespon ${response.status}`);
      return await response.json();
    } catch (err) {
      console.warn(`[GET ${url}] Menggunakan fallback data mock di dalam.`);
      throw err;
    }
  },

  post: async (url, body, options = {}) => {
    try {
      const response = await fetch(`${BASE_URL}${url}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...options.headers,
        },
        body: JSON.stringify(body),
        ...options,
      });

      if (response.ok) {
        return await response.json();
      }
      
      throw new Error(`Server error (${response.status})`);

    } catch (err) {
      console.warn(`[POST ${url}] Mengaktifkan mock internal:`, err.message);

      const { username, fullName } = body || {};

      if (url === "/login") {
        return {
          success: true,
          message: "Login sukses via mock lokal",
          user: {
            username: username || "user123",
            fullName: username === "admin123" ? "Admin RuangSehat" : "Ahmad Ramadhan"
          }
        };
      }

      if (url === "/register") {
        return {
          success: true,
          message: "Registrasi sukses via mock lokal",
          user: {
            username: username || "user123",
            fullName: fullName || "Ahmad Ramadhan"
          }
        };
      }

      throw err;
    }
  },
};