import React, { useState, useEffect } from "react";

const Tracker = () => {
  // State for food items and form
  const [foodItems, setFoodItems] = useState([]);
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [unit, setUnit] = useState("");
  const [editingId, setEditingId] = useState(null);

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

  return (
    <div className="bg-gray-100 p-8">
      {/* Add/Edit Food Section */}
      <div className="bg-white shadow-md rounded p-6 mb-8">
        <h2 className="text-xl font-bold mb-4">{editingId ? "Edit Makanan" : "Tambah Makanan"}</h2>
        <p className="mb-4">Masukkan makanan yang kamu konsumsi hari ini untuk dianalisis secara otomatis</p>

        {/* Category Dropdown */}
        <div className="relative mb-4">
          <label className="block mb-1">Kategori</label>
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
            className="w-full p-2 border rounded"
          />
          {showCategoryDropdown && (
            <div className="absolute z-10 w-full mt-1 bg-white border rounded shadow-lg max-h-60 overflow-auto">
              {foodCategories
                .filter((item) => item.toLowerCase().includes(category.toLowerCase()))
                .map((item, index) => (
                  <div
                    key={index}
                    className="p-2 hover:bg-gray-100 cursor-pointer"
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
        <div className="relative mb-4">
          <label className="block mb-1">Nama Makanan</label>
          <input
            type="text"
            placeholder="Pilih/Ketik Nama Makanan"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onFocus={() => setShowNameDropdown(true)}
            onBlur={() => setTimeout(() => setShowNameDropdown(false), 200)}
            className="w-full p-2 border rounded"
            disabled={!category}
          />
          {showNameDropdown && category && (
            <div className="absolute z-10 w-full mt-1 bg-white border rounded shadow-lg max-h-60 overflow-auto">
              {filteredFoodNames
                .filter((item) => item.toLowerCase().includes(name.toLowerCase()))
                .map((item, index) => (
                  <div
                    key={index}
                    className="p-2 hover:bg-gray-100 cursor-pointer"
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
        <div className="mb-4">
          <label className="block mb-1">Jumlah</label>
          <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} min="1" className="w-full p-2 border rounded" />
        </div>

        {/* Unit Dropdown */}
        <div className="relative mb-4">
          <label className="block mb-1">Satuan</label>
          <input
            type="text"
            placeholder="Pilih/Ketik Satuan"
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
            onFocus={() => setShowUnitDropdown(true)}
            onBlur={() => setTimeout(() => setShowUnitDropdown(false), 200)}
            className="w-full p-2 border rounded"
          />
          {showUnitDropdown && (
            <div className="absolute z-10 w-full mt-1 bg-white border rounded shadow-lg max-h-60 overflow-auto">
              {units
                .filter((item) => item.toLowerCase().includes(unit.toLowerCase()))
                .map((item, index) => (
                  <div
                    key={index}
                    className="p-2 hover:bg-gray-100 cursor-pointer"
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

        <div className="flex space-x-2">
          <button onClick={handleSubmit} className="bg-green-500 text-white px-4 py-2 rounded">
            {editingId ? "Update" : "Simpan"}
          </button>
          <button type="button" onClick={resetForm} className="bg-gray-300 text-black px-4 py-2 rounded">
            Batal
          </button>
        </div>
      </div>

      {/* Food Analysis Section */}
      <div className="bg-green-100 shadow-md rounded p-6 mb-8">
        <h2 className="text-xl font-bold mb-4">Analisis Makanan</h2>
        <table className="min-w-full bg-white table-fixed border">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">Kategori</th>
              <th className="border px-4 py-2">Nama Makanan</th>
              <th className="border px-4 py-2">Quantity</th>
              <th className="border px-4 py-2">Unit</th>
              <th className="border px-4 py-2">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {foodItems.map((item) => (
              <tr key={item.id}>
                <td className="border px-4 py-2">{item.category}</td>
                <td className="border px-4 py-2">{item.name}</td>
                <td className="border px-4 py-2">{item.quantity}</td>
                <td className="border px-4 py-2">{item.unit}</td>
                <td className="border px-4 py-2 space-x-2">
                  <button onClick={() => handleEdit(item)} className="text-blue-500">
                    Edit
                  </button>
                  <button onClick={() => handleDelete(item.id)} className="text-red-500">
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="bg-green-500 text-white px-4 py-2 mt-4">Analisis Sekarang</button>
      </div>

      {/* Analysis Result Section */}
      <div className="bg-white shadow-md rounded p-6">
        <h2 className="text-xl font-bold mb-4">Hasil Analisis</h2>
        <div className="flex items-center justify-center mb-4">
          <div className="relative w-32 h-32">
            <svg width="100%" height="100%" viewBox="0 0 36 36" className="circular-chart" style={{ transform: "rotate(-90deg)" }}>
              <path className="circle-bg" d="M18 2.0845A15.9155 15.9155 0 0 0 2.0845 18 15.9155 15.9155 0 0 0 18 33.9155 15.9155 15.9155 0 0 0 33.9155 18 15.9155 15.9155 0 0 0 18 2.0845" fill="#f2f2f2" />
              <path className="circle" stroke="#64b64a" strokeWidth="3" d="M18 2.0845A15.9155 15.9155 0 0 0 18 35.9155" fill="none" strokeDasharray="249, 100" strokeDashoffset="5" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xl font-bold">249 KCAL</span>
            </div>
          </div>
        </div>
        <div className="text-center">
          <span className="text-gray-600">Kategori: Karbohidrat</span>
        </div>
      </div>
    </div>
  );
};

export default Tracker;
