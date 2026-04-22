export default function ContentPage() {
    return ( 
        <div class="min-h-screen bg-slate-900 text-white flex p-5 gap-5">

  <div class="w-20 bg-slate-800 rounded-2xl p-5 flex flex-col gap-7">
    <div class="text-2xl font-bold">☁</div>

    <div class="flex flex-col gap-5 text-slate-300">
      <div class="flex flex-col text-sm items-center gap-3">
        <span>🌤</span>
        <span>Weather</span>
      </div>
      <div class="flex flex-col text-sm items-center gap-3">
        <span>📊</span>
        <span>Cities</span>
      </div>
      <div class="flex flex-col text-sm items-center gap-3">
        <span>🗺️</span>
        <span>Map</span>
      </div>
      <div class="flex flex-col text-sm items-center gap-3">
        <span>⚙️</span>
        <span>Settings</span>
      </div>
    </div>
  </div>

  <div class="flex-1 flex gap-5">

    <div class="flex-1 flex flex-col gap-5">

      <div class="flex justify-between items-center">
        <div>
          <h1 class="text-4xl font-bold">Madrid</h1>
          <p class="text-slate-400">Chance of rain: 0%</p>
          <h2 class="text-6xl font-bold mt-3">31°</h2>
        </div>
        <div class="text-8xl text-yellow-400">𖤓</div>
      </div>

      <div class="bg-slate-800 rounded-2xl p-5">
        <h3 class="text-slate-400 mb-3">Todays Forecast</h3>
        <div class="grid grid-cols-6 gap-3 text-center">
          <div className="border-r border-slate-700">
            <p class="text-slate-400">6:00 AM</p>
            <p class="text-2xl">☁</p>
            <p>25°</p>
          </div>
          <div className="border-r border-slate-700" >
            <p class="text-slate-400">9:00 AM</p>
            <p class="text-2xl">🌤️</p>
            <p>28°</p>
          </div>
          <div className="border-r border-slate-700">
            <p class="text-slate-400">12:00 PM</p>
            <p class="text-2xl">☀️</p>
            <p>33°</p>
          </div>
          <div className="border-r border-slate-700">
            <p class="text-slate-400">3:00 PM</p>
            <p class="text-2xl">☀️</p>
            <p>34°</p>
          </div>
          <div className="border-r border-slate-700">
            <p class="text-slate-400">6:00 PM</p>
            <p class="text-2xl">☀️</p>
            <p>32°</p>
          </div>
          <div>
            <p class="text-slate-400">9:00 PM</p>
            <p class="text-2xl">🌤️</p>
            <p>30°</p>
          </div>
        </div>
      </div>

      <div class="bg-slate-800 rounded-2xl p-5">
        <div class="flex justify-between items-center mb-3">
          <h3 class="text-slate-400">Air Conditions</h3>
          <button class="bg-sky-500 px-4 py-1 rounded-full text-sm">
            See more
          </button>
        </div>

        <div class="grid grid-cols-2 gap-5">
          <div class="flex items-center gap-3">
            <span class="text-2xl">🌡️</span>
            <div>
              <p class="text-slate-400">Real Feel</p>
              <p class="text-2xl font-semibold">30°</p>
            </div>
          </div>
          <div class="flex items-center gap-3">
            <span class="text-2xl">💨</span>
            <div>
              <p class="text-slate-400">Wind</p>
              <p class="text-2xl font-semibold">0.2 km/h</p>
            </div>
          </div>
          <div class="flex items-center gap-3">
            <span class="text-2xl">💧</span>
            <div>
              <p class="text-slate-400">Chance of rain</p>
              <p class="text-2xl font-semibold">0%</p>
            </div>
          </div>
          <div class="flex items-center gap-3">
            <span class="text-2xl">☀️</span>
            <div>
              <p class="text-slate-400">UV Index</p>
              <p class="text-2xl font-semibold">3</p>
            </div>
          </div>
        </div>
      </div>

    </div>

    <div class="w-80 bg-slate-800 rounded-2xl p-5">
  <h3 class="text-slate-400 mb-5">7-Day Forecast</h3>

  <div class="flex flex-col gap-4">
    <div class="flex justify-between items-center border-b border-slate-700 pb-3">
      <span>Today</span>
      <span>☀ Sunny</span>
      <span>36/22</span>
    </div>
    <div class="flex justify-between items-center border-b border-slate-700 pb-3">
      <span>Tue</span>
      <span>☀ Sunny</span>
      <span>37/21</span>
    </div>
    <div class="flex justify-between items-center border-b border-slate-700 pb-3">
      <span>Wed</span>
      <span>☀ Sunny</span>
      <span>37/21</span>
    </div>
    <div class="flex justify-between items-center border-b border-slate-700 pb-3">
      <span>Thu</span>
      <span>☁ Cloudy</span>
      <span>37/21</span>
    </div>
    <div class="flex justify-between items-center border-b border-slate-700 pb-3">
      <span>Fri</span>
      <span>☁ Cloudy</span>
      <span>37/21</span>
    </div>
    <div class="flex justify-between items-center border-b border-slate-700 pb-3">
      <span>Sat</span>
      <span>☁ Cloudy</span>
      <span>37/21</span>
    </div>
    <div class="flex justify-between items-center">
      <span>Sun</span>
      <span>⛈ Storm</span>
      <span>37/21</span>
    </div>
  </div>
</div>

  </div>
</div>
    )
}