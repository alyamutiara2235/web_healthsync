function Personalization() {
  return (
    <section className="min-h-screen bg-slate-50 py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">

        <div className="mb-10">
          <span className="text-emerald-600 font-semibold text-sm">
            HealthSync
          </span>

          <h1 className="text-4xl font-bold text-slate-900 mt-2">
            Personalization & Progress Tracking
          </h1>

          <p className="text-slate-600 mt-3 max-w-2xl">
            Personalize your health journey and monitor your progress over time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          <div className="flex-1 bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Progress Dashboard
            </h2>

            <div className="h-[500px] rounded-2xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center">
              <p className="text-xl font-semibold text-slate-600">
                Coming Soon
              </p>

              <p className="text-slate-400 mt-2">
                Your health progress will appear here.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">

            <h2 className="text-xl font-bold text-slate-900 mb-6">
              Personalization
            </h2>

            <form className="space-y-4">

              <div>
                <label className="block text-sm font-medium mb-1">
                  Gender
                </label>

                <select className="w-full rounded-xl border border-slate-200 p-3">
                  <option>Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Age
                </label>

                <input
                  type="number"
                  placeholder="Enter your age"
                  className="w-full rounded-xl border border-slate-200 p-3"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Starting Weight (kg)
                </label>

                <input
                  type="number"
                  placeholder="75"
                  className="w-full rounded-xl border border-slate-200 p-3"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Height (cm)
                </label>

                <input
                  type="number"
                  placeholder="170"
                  className="w-full rounded-xl border border-slate-200 p-3"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Target Weight (kg)
                </label>

                <input
                  type="number"
                  placeholder="65"
                  className="w-full rounded-xl border border-slate-200 p-3"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  What do you want to accomplish?
                </label>

                <div className="space-y-2 text-sm">

                  <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    Lose Weight
                  </label>

                  <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    Gain Weight
                  </label>

                  <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    Build Muscle
                  </label>

                  <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    Improve Fitness
                  </label>

                  <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    Eat Healthier
                  </label>

                  <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    Maintain My Current Weight
                  </label>

                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Daily Activity Level
                </label>

                <select className="w-full rounded-xl border border-slate-200 p-3">
                  <option>Light</option>
                  <option>Moderate</option>
                  <option>Active</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  What healthy habits would you like to focus on?
                </label>

                <div className="space-y-2 text-sm">

                  <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    Drink More Water
                  </label>

                  <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    Exercise Regularly
                  </label>

                  <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    Sleep Earlier
                  </label>

                  <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    Mindful Breathing
                  </label>

                  <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    Reduce Screen Time
                  </label>

                </div>
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-emerald-600 py-3 text-white font-medium hover:bg-emerald-700 transition-all"
              >
                Save Preferences
              </button>

            </form>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Personalization;
