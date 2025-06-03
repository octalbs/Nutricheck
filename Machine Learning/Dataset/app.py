from flask import Flask, request, jsonify
import json
import numpy as np
# Import library yang sesuai untuk model dan preprocessor Anda
# Misalnya, jika model dari Keras:
# from tensorflow.keras.models import model_from_json
# Misalnya, jika preprocessor dari scikit-learn (Anda perlu merekonstruksinya secara manual atau menggunakan library pembantu):
# from sklearn.preprocessing import LabelEncoder, StandardScaler

app = Flask(__name__)

# --- Variabel Global untuk Menyimpan Model dan Komponennya ---
model = None
label_encoder_classes = None # Atau objek LabelEncoder yang direkonstruksi
target_scaler_params = None  # Atau objek Scaler yang direkonstruksi
model_metadata = None

# --- Fungsi untuk Memuat Komponen ---
def load_model_components():
    global model, label_encoder_classes, target_scaler_params, model_metadata

    try:
        # 1. Memuat model.json (dan file bobot jika perlu)
        with open('model.json', 'r') as f:
            model_json_str = f.read()
        # Contoh untuk Keras (membutuhkan file bobot terpisah, misal 'model_weights.h5')
        # model = model_from_json(model_json_str)
        # model.load_weights('model_weights.h5')
        # ATAU jika model.json berisi semua (misal, model sederhana atau TF.js bundle):
        # Implementasikan logika pemuatan model Anda di sini berdasarkan format model.json
        # Untuk contoh ini, kita asumsikan 'model' akan menjadi objek yang bisa melakukan .predict()
        print("model.json (struktur) dimuat. Implementasikan pemuatan model penuh dan bobotnya.")
        # Placeholder: model = ... (implementasi Anda)

        # 2. Memuat label_encoder.json
        with open('label_encoder.json', 'r') as f:
            encoder_data = json.load(f)
        # Asumsi encoder_data berisi sesuatu seperti {'classes': ['catA', 'catB', 'catC']}
        label_encoder_classes = encoder_data.get('classes_') # Atau sesuai struktur file Anda
        print(f"Label encoder classes dimuat: {label_encoder_classes}")
        # Jika Anda perlu merekonstruksi objek LabelEncoder sklearn:
        # le = LabelEncoder()
        # le.classes_ = np.array(label_encoder_classes)
        # label_encoder = le # Simpan objek yang sudah direkonstruksi

        # 3. Memuat target_scaler.json
        with open('target_scaler.json', 'r') as f:
            scaler_data = json.load(f)
        # Asumsi scaler_data berisi {'mean_': val1, 'scale_': val2} untuk StandardScaler
        target_scaler_params = scaler_data # Simpan parameter mentah
        print(f"Target scaler params dimuat: {target_scaler_params}")
        # Jika Anda perlu merekonstruksi objek StandardScaler sklearn:
        # scaler = StandardScaler()
        # scaler.mean_ = np.array(scaler_data['mean_'])
        # scaler.scale_ = np.array(scaler_data['scale_'])
        # target_scaler = scaler # Simpan objek yang sudah direkonstruksi

        # 4. Memuat model_metadata.json
        with open('model_metadata.json', 'r') as f:
            model_metadata = json.load(f)
        print(f"Model metadata dimuat: {model_metadata}")

    except FileNotFoundError as e:
        print(f"Error: Salah satu file JSON tidak ditemukan: {e}")
    except Exception as e:
        print(f"Error saat memuat komponen model: {e}")

# Panggil fungsi pemuatan saat aplikasi dimulai
load_model_components()

@app.route('/')
def home():
    return "Server Flask untuk Model dari JSON berjalan!"

@app.route('/predict', methods=['POST'])
def predict():
    # Pastikan semua komponen sudah dimuat
    if model is None or label_encoder_classes is None or target_scaler_params is None:
         return jsonify({'error': 'Model atau komponen preprocessor belum berhasil dimuat. Periksa log server.'}), 500

    try:
        data = request.get_json(force=True)
        # Contoh: data = {"feature1": val1, "feature2": val2, ...}

        # --- 1. Pra-pemrosesan Input ---
        # Anda perlu mengonversi 'data' menjadi format yang diterima model (misalnya, array NumPy)
        # Gunakan model_metadata jika diperlukan untuk urutan fitur, dll.
        # Contoh sangat sederhana:
        # features_order = model_metadata.get('feature_names', [])
        # input_array = np.array([[data[feature] for feature in features_order]])
        # Jika ada scaler untuk fitur, terapkan di sini.
        # Placeholder untuk input_array:
        input_array = np.array([list(data.values())]) # Ini asumsi yang sangat kasar, SESUAIKAN!
        print(f"Input array untuk model: {input_array}")


        # --- 2. Prediksi ---
        # raw_prediction = model.predict(input_array) # Jika 'model' adalah objek model yang sudah jadi
        # Placeholder:
        # Karena kita tidak tahu bagaimana model.json bekerja tanpa bobot, kita mock prediksi
        if not hasattr(model, 'predict'): # Jika model belum benar-benar diinisialisasi dengan kemampuan predict
            print("PERINGATAN: Objek 'model' tidak memiliki metode 'predict'. Ini hanya placeholder.")
            # Jika ini klasifikasi dan Anda punya label_encoder_classes:
            # raw_prediction = np.array([0]) # Contoh prediksi kelas pertama (indeks)
            # Jika ini regresi:
            raw_prediction = np.array([[10.0 * len(data)]]) # Contoh prediksi regresi dummy
        else:
            raw_prediction = model.predict(input_array)
        print(f"Raw prediction: {raw_prediction}")


        # --- 3. Pasca-pemrosesan Output ---
        final_prediction = raw_prediction.tolist() # Default ke list

        # Contoh untuk Regresi dengan Target Scaler (inverse transform)
        # Asumsi raw_prediction adalah [[value]] dan target_scaler_params punya 'mean_' dan 'scale_'
        if 'mean_' in target_scaler_params and 'scale_' in target_scaler_params: # Cek apakah ini seperti StandardScaler
            # Ini adalah contoh invers manual, idealnya Anda merekonstruksi objek scaler
            # scaled_pred = raw_prediction[0][0]
            # original_pred = (scaled_pred * target_scaler_params['scale_'][0]) + target_scaler_params['mean_'][0]
            # final_prediction = original_pred
            # Jika Anda punya objek scaler yang direkonstruksi:
            # final_prediction = target_scaler.inverse_transform(raw_prediction)[0][0]
            print(f"Melakukan inverse transform (implementasi placeholder). Scaler params: {target_scaler_params}")


        # Contoh untuk Klasifikasi dengan Label Encoder
        # Asumsi raw_prediction adalah indeks kelas, misal [[0]] atau [0]
        # dan label_encoder_classes adalah list ['catA', 'catB', 'catC']
        if isinstance(raw_prediction, (np.ndarray, list)) and label_encoder_classes:
            try:
                pred_index = int(raw_prediction.flatten()[0])
                if 0 <= pred_index < len(label_encoder_classes):
                    final_prediction = label_encoder_classes[pred_index]
                    print(f"Prediksi dikonversi ke label: {final_prediction}")
            except ValueError:
                print("Tidak bisa mengonversi prediksi mentah ke indeks untuk label encoder.")


        return jsonify({'prediction': final_prediction})

    except Exception as e:
        print(f"Error pada endpoint /predict: {e}")
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    # Jangan gunakan debug=True di produksi
    app.run(debug=True)
