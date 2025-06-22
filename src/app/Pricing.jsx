const Pricing = () => {
  return (
    <section
      id="pricing"
      className="min-h-screen px-4 sm:px-6 py-14 sm:py-20 bg-[#1C1C1E] text-white"
    >
      {/* Section Heading */}
      <div className="text-center mb-10">
        <h3 className="text-2xl sm:text-3xl font-bold mb-3">
          Quality Work For The
        </h3>
        <p className="text-base sm:text-lg text-gray-400">
          Choose a plan that fits your needs
        </p>
      </div>

      {/* Pricing Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Basic Plan */}
        <div className="bg-[#2C2C2E] p-6 rounded-xl shadow-md">
          <h4 className="text-lg sm:text-xl font-semibold mb-4">Basic Plan</h4>
          <div className="space-y-3 text-sm sm:text-base">
            <div className="flex justify-between">
              <span>Hair Style</span>
              <span>$30</span>
            </div>
            <div className="flex justify-between">
              <span>Wash</span>
              <span>$10</span>
            </div>
            <div className="flex justify-between">
              <span>Color</span>
              <span>$25</span>
            </div>
            <div className="flex justify-between">
              <span>Beard Trim</span>
              <span>$15</span>
            </div>
          </div>
        </div>

        {/* Standard Plan */}
        <div className="bg-[#2C2C2E] p-6 rounded-xl shadow-md">
          <h4 className="text-lg sm:text-xl font-semibold mb-4">Standard Plan</h4>
          <div className="space-y-3 text-sm sm:text-base">
            <div className="flex justify-between">
              <span>Hair Style</span>
              <span>$45</span>
            </div>
            <div className="flex justify-between">
              <span>Wash</span>
              <span>$15</span>
            </div>
            <div className="flex justify-between">
              <span>Color</span>
              <span>$30</span>
            </div>
            <div className="flex justify-between">
              <span>Beard Trim</span>
              <span>$20</span>
            </div>
          </div>
        </div>

        {/* Premium Plan */}
        <div className="bg-[#2C2C2E] p-6 rounded-xl shadow-md">
          <h4 className="text-lg sm:text-xl font-semibold mb-4">Premium Plan</h4>
          <div className="space-y-3 text-sm sm:text-base">
            <div className="flex justify-between">
              <span>Hair Style</span>
              <span>$60</span>
            </div>
            <div className="flex justify-between">
              <span>Wash</span>
              <span>$20</span>
            </div>
            <div className="flex justify-between">
              <span>Color</span>
              <span>$40</span>
            </div>
            <div className="flex justify-between">
              <span>Beard Trim</span>
              <span>$25</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
