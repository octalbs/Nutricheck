import React, { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, DoughnutController } from "chart.js";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, DoughnutController);

const Tracker = () => {
  // State for food items and form
  const [foodItems, setFoodItems] = useState([]);
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [unit, setUnit] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);

  // Dropdown visibility states
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [showNameDropdown, setShowNameDropdown] = useState(false);
  const [showUnitDropdown, setShowUnitDropdown] = useState(false);

  // Dropdown data
  const foodCategories = ["Karbohidrat", "Protein", "Sayur", "Buah"];
  const foodNames = {
    Karbohidrat: ["Nasi Putih", "Nasi Merah", "Roti Gandum", "Kentang", "Mie"],
    Protein: ["Ayam", "Daging Sapi", "Ikan", "Tahu", "Tempe", "Telur"],
    Sayur: ["Brokoli", "Bayam", "Wortel", "Kangkung", "Sawi"],
    Buah: ["Apel", "Pisang", "Jeruk", "Mangga", "Alpukat"],
  };
  const units = ["Porsi", "Buah", "Butir"];

  // Chart reference
  const chartRef = React.useRef(null);
  const chartInstance = React.useRef(null);

  // Fetch food items on component mount
  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const response = await fetch("http://localhost:9000/foods");
        const result = await response.json();

        if (result.status === "success") {
          setFoodItems(result.data);
        } else {
          console.error("Failed to fetch foods:", result.message);
        }
      } catch (error) {
        console.error("Error fetching foods:", error);
      }
    };

    fetchFoods();
  }, []);

  // Initialize chart
  useEffect(() => {
    if (chartRef.current && analysisResult) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const ctx = chartRef.current.getContext("2d");
      chartInstance.current = new ChartJS(ctx, {
        type: "doughnut",
        data: {
          labels: ["Karbohidrat", "Protein", "Lemak", "Serat"],
          datasets: [
            {
              data: [analysisResult.karbohidrat || 40, analysisResult.protein || 25, analysisResult.lemak || 20, analysisResult.serat || 15],
              backgroundColor: ["#FF6B6B", "#4ECDC4", "#45B7D1", "#5ce846"],
              borderWidth: 0,
              cutout: "70%",
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
          },
        },
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [analysisResult]);

  // Handle form submission (Add/Edit)
  const handleSubmit = async () => {
    if (!category || !name || !unit) {
      alert("Harap isi semua field!");
      return;
    }

    const foodData = {
      category,
      name,
      quantity: Number(quantity),
      unit,
    };

    try {
      let response;
      if (editingId) {
        // Update existing food
        response = await fetch(`http://localhost:9000/foods/${editingId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(foodData),
        });
      } else {
        // Add new food
        response = await fetch("http://localhost:9000/foods", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(foodData),
        });
      }

      const result = await response.json();

      if (result.status === "success") {
        if (editingId) {
          setFoodItems(foodItems.map((item) => (item.id === editingId ? result.data : item)));
        } else {
          setFoodItems([...foodItems, result.data]);
        }
        resetForm();
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Handle edit button click
  const handleEdit = (food) => {
    setEditingId(food.id);
    setCategory(food.category);
    setName(food.name);
    setQuantity(food.quantity);
    setUnit(food.unit);
  };

  // Handle delete
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:9000/foods/${id}`, {
        method: "DELETE",
      });

      const result = await response.json();

      if (result.status === "success") {
        setFoodItems(foodItems.filter((item) => item.id !== id));
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Handle analysis
  const handleAnalysis = async () => {
    if (foodItems.length === 0) {
      alert("Tidak ada makanan untuk dianalisis!");
      return;
    }

    setIsAnalyzing(true);
    try {
      // TODO: Ganti dengan endpoint analisis ML Anda
      const response = await fetch("http://localhost:9000/foods/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ foods: foodItems }),
      });

      const result = await response.json();

      if (result.status === "success") {
        setAnalysisResult(result.data);
      } else {
        // Temporary mock data for demo
        setAnalysisResult({
          totalCalories: 1250,
          karbohidrat: 45,
          protein: 25,
          lemak: 20,
          serat: 10,
          recommendation: "Konsumsi makanan Anda sudah cukup seimbang, namun perlu menambah asupan serat.",
        });
      }
    } catch (error) {
      console.error("Error analyzing foods:", error);
      // Temporary mock data for demo
      setAnalysisResult({
        totalCalories: 1250,
        karbohidrat: 45,
        protein: 25,
        lemak: 20,
        serat: 10,
        recommendation: "Konsumsi makanan Anda sudah cukup seimbang, namun perlu menambah asupan serat.",
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  // Reset form fields
  const resetForm = () => {
    setEditingId(null);
    setCategory("");
    setName("");
    setQuantity(1);
    setUnit("");
  };

  // Filter food names based on selected category
  const filteredFoodNames = category ? foodNames[category] || [] : [];

  // Get category color
  const getCategoryColor = (category) => {
    const colors = {
      Karbohidrat: "bg-red-100 text-red-800",
      Protein: "bg-blue-100 text-blue-800",
      Sayur: "bg-green-100 text-green-800",
      Buah: "bg-yellow-100 text-yellow-800",
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-6 mt-33">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Food Tracker</h1>
          <p className="text-gray-600">Pantau asupan makanan Anda dengan analisis nutrisi otomatis</p>
        </div>

        {/* Add/Edit Food Section */}
        <div className="bg-white backdrop-blur-sm bg-opacity-90 shadow-xl rounded-2xl p-8 mb-8 border border-gray-100">
          <div className="flex items-center mb-6">
            <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mr-4"></div>
            <h2 className="text-2xl font-bold text-gray-800">{editingId ? "Edit Makanan" : "Tambah Makanan"}</h2>
          </div>
          <p className="text-gray-600 mb-6">Masukkan makanan yang kamu konsumsi hari ini untuk dianalisis secara otomatis</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Category Dropdown */}
            <div className="relative">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Kategori</label>
              <input
                type="text"
                placeholder="Pilih/Ketik Kategori"
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                  setName("");
                }}
                onFocus={() => setShowCategoryDropdown(true)}
                onBlur={() => setTimeout(() => setShowCategoryDropdown(false), 200)}
                className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
              {showCategoryDropdown && (
                <div className="absolute z-10 w-full mt-2 bg-white border border-gray-200 rounded-xl shadow-xl max-h-60 overflow-auto">
                  {foodCategories
                    .filter((item) => item.toLowerCase().includes(category.toLowerCase()))
                    .map((item, index) => (
                      <div
                        key={index}
                        className="p-3 hover:bg-blue-50 cursor-pointer transition-colors duration-150 first:rounded-t-xl last:rounded-b-xl"
                        onClick={() => {
                          setCategory(item);
                          setShowCategoryDropdown(false);
                        }}
                      >
                        {item}
                      </div>
                    ))}
                </div>
              )}
            </div>

            {/* Food Name Dropdown */}
            <div className="relative">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Nama Makanan</label>
              <input
                type="text"
                placeholder="Pilih/Ketik Nama Makanan"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onFocus={() => setShowNameDropdown(true)}
                onBlur={() => setTimeout(() => setShowNameDropdown(false), 200)}
                className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 disabled:bg-gray-50"
                disabled={!category}
              />
              {showNameDropdown && category && (
                <div className="absolute z-10 w-full mt-2 bg-white border border-gray-200 rounded-xl shadow-xl max-h-60 overflow-auto">
                  {filteredFoodNames
                    .filter((item) => item.toLowerCase().includes(name.toLowerCase()))
                    .map((item, index) => (
                      <div
                        key={index}
                        className="p-3 hover:bg-blue-50 cursor-pointer transition-colors duration-150 first:rounded-t-xl last:rounded-b-xl"
                        onClick={() => {
                          setName(item);
                          setShowNameDropdown(false);
                        }}
                      >
                        {item}
                      </div>
                    ))}
                </div>
              )}
            </div>

            {/* Quantity Input */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Jumlah</label>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                min="1"
                className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            {/* Unit Dropdown */}
            <div className="relative">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Satuan</label>
              <input
                type="text"
                placeholder="Pilih/Ketik Satuan"
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
                onFocus={() => setShowUnitDropdown(true)}
                onBlur={() => setTimeout(() => setShowUnitDropdown(false), 200)}
                className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
              {showUnitDropdown && (
                <div className="absolute z-10 w-full mt-2 bg-white border border-gray-200 rounded-xl shadow-xl max-h-60 overflow-auto">
                  {units
                    .filter((item) => item.toLowerCase().includes(unit.toLowerCase()))
                    .map((item, index) => (
                      <div
                        key={index}
                        className="p-3 hover:bg-blue-50 cursor-pointer transition-colors duration-150 first:rounded-t-xl last:rounded-b-xl"
                        onClick={() => {
                          setUnit(item);
                          setShowUnitDropdown(false);
                        }}
                      >
                        {item}
                      </div>
                    ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex space-x-4 mt-8">
            <button
              onClick={handleSubmit}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              {editingId ? "Update" : "Simpan"}
            </button>
            <button type="button" onClick={resetForm} className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-8 py-3 rounded-xl font-semibold transition-all duration-200">
              Batal
            </button>
          </div>
        </div>

        {/* Food List Section */}
        <div className="bg-white backdrop-blur-sm bg-opacity-90 shadow-xl rounded-2xl p-8 mb-8 border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <div className="w-2 h-8 bg-gradient-to-b from-green-500 to-teal-500 rounded-full mr-4"></div>
              <h2 className="text-2xl font-bold text-gray-800">Daftar Makanan</h2>
            </div>
            <button
              onClick={handleAnalysis}
              disabled={foodItems.length === 0 || isAnalyzing}
              className="bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 disabled:from-gray-400 disabled:to-gray-500 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg disabled:transform-none disabled:cursor-not-allowed"
            >
              {isAnalyzing ? "Menganalisis..." : "Analisis Sekarang"}
            </button>
          </div>

          {foodItems.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <p className="text-gray-500 text-lg">Belum ada makanan yang ditambahkan</p>
              <p className="text-gray-400">Tambahkan makanan untuk memulai analisis</p>
            </div>
          ) : (
            <div className="grid gap-4">
              {foodItems.map((item) => (
                <div key={item.id} className="bg-gray-50 rounded-xl p-4 flex items-center justify-between hover:bg-gray-100 transition-colors duration-200">
                  <div className="flex items-center space-x-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(item.category)}`}>{item.category}</span>
                    <div>
                      <h3 className="font-semibold text-gray-800">{item.name}</h3>
                      <p className="text-gray-600 text-sm">
                        {item.quantity} {item.unit}
                      </p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button onClick={() => handleEdit(item)} className="text-blue-500 hover:text-blue-700 p-2 rounded-lg hover:bg-blue-50 transition-all duration-200">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </button>
                    <button onClick={() => handleDelete(item.id)} className="text-red-500 hover:text-red-700 p-2 rounded-lg hover:bg-red-50 transition-all duration-200">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Analysis Result Section */}
        {analysisResult && (
          <div className="bg-white backdrop-blur-sm bg-opacity-90 shadow-xl rounded-2xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="w-2 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full mr-4"></div>
              <h2 className="text-2xl font-bold text-gray-800">Hasil Analisis Nutrisi</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Chart */}
              <div className="flex flex-col items-center">
                <div className="relative w-64 h-64 mb-6">
                  <canvas ref={chartRef}></canvas>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-3xl font-bold text-gray-800">{analysisResult.totalCalories}</span>
                    <span className="text-sm text-gray-600">KCAL</span>
                  </div>
                </div>

                {/* Legend */}
                <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-red-400 rounded-full"></div>
                    <span className="text-sm text-gray-700">Karbohidrat {analysisResult.karbohidrat}%</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-teal-400 rounded-full"></div>
                    <span className="text-sm text-gray-700">Protein {analysisResult.protein}%</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
                    <span className="text-sm text-gray-700">Lemak {analysisResult.lemak}%</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-green-400 rounded-full"></div>
                    <span className="text-sm text-gray-700">Serat {analysisResult.serat}%</span>
                  </div>
                </div>
              </div>

              {/* Recommendation */}
              <div className="flex flex-col justify-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Rekomendasi</h3>
                <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-6 border border-green-200">
                  <p className="text-gray-700 leading-relaxed">{analysisResult.recommendation}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 text-center border border-blue-200">
                    <div className="text-2xl font-bold text-blue-600">{analysisResult.totalCalories}</div>
                    <div className="text-sm text-gray-600">Total Kalori</div>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-4 text-center border border-green-200">
                    <div className="text-2xl font-bold text-green-600">{analysisResult.protein}g</div>
                    <div className="text-sm text-gray-600">Protein</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tracker;
