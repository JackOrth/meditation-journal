import './App.css';
import JournalList from './components/JournalList';

function App() {
  return (
  <div class="min-h-screen bg-blue-100 py-6 flex flex-col justify-center sm:py-12">
  <div class="relative py-3 sm:max-w-xl sm:mx-auto">
    <div class="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-300 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
    <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
      <div class="max-w-md mx-auto">
        <div class="divide-y divide-gray-200">
          <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
            <h1 class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-3xl sm:leading-7">welcome to your personal meditation journal.</h1>
            <p>the perfect opportunity to stay in tune with your practice's progress</p>
          </div>
          <div>
            <JournalList class="h-6 flex items-center sm:h-7"  />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  );
}

export default App;
