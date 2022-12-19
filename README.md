# question-answering

Projek UAS Kelompok 5. Mata Kuliah PBA (A).

# Deskripsi Aplikasi: BERT-QATA2

BERT-QATA2 merupakan aplikasi question-answering menggunakan model Deep Learning pada Natural Language Processing (NLP) untuk menjawab pertanyaan user berdasarkan konteks yang diberikan.

# Question Answering Menggunakan Model IndoBERT

Dataset yang digunakan adalah SQuAD versi Bahasa Indonesia yang didapatkan dari repository Github Wikidepia/indonesian_datasets/question-answering/squad.
Model yang digunakan adalah BERT (Bidirectional Encoder Representations from Transformers) versi Bahasa Indonesia yaitu IndoBERT yang ditrain oleh Tim IndoLEM (Indonesian Language Evaluation Montage) menggunakan kumpulan dataset Bahasa Indonesia https://indolem.github.io/IndoBERT/.

"IndoBERT is the Indonesian version of BERT model. We train the model using over 220M words, aggregated from three main sources:

Indonesian Wikipedia (74M words)
news articles from Kompas, Tempo (Tala et al., 2003), and Liputan6 (55M words in total)
an Indonesian Web Corpus (Medved and Suchomel, 2017) (90M words).
We trained the model for 2.4M steps (180 epochs) with the final perplexity over the development set being 3.97 (similar to English BERT-base)."

# Dataset yang Digunakan: SQuAD Bahasa Indonesia 2.0

Dataset yang digunakan adalah SQuAD versi Bahasa Indonesia yang didapatkan dari Github Wikidepia https://depia.wiki/files/squad/tar/. Dataset berupa "train-v2.0.json" dan "dev-v2.0.json" diupload pada Huggingface untuk memudahkan pembuatan model. Dataset yang digunakan untuk training atau fine-tuning model IndoBERT dapat dilihat pada tautan berikut https://huggingface.co/datasets/esakrissa/squad_id_v2.

"Stanford Question Answering Dataset (SQuAD) is a reading comprehension dataset, consisting of questions posed by crowdworkers on a set of Wikipedia articles, where the answer to every question is a segment of text, or span, from the corresponding reading passage, or the question might be unanswerable."

# Arsitektur Aplikasi

Aplikasi BERT-QATA2 dibangun di atas docker container menggunakan docker compose yang terdiri dari dua container yaitu frontend dan backend. Arsitektur backend menggunakan framework Python yaitu FastAPI. Sedangkan frontend menggunakan framework JavaScript, React.js dan framework Python, Streamlit. Nginx digunakan untuk konfigurasi port antar container yang akan memberikan output berupa IP address yang dapat diakses untuk menjalankan aplikasi.

![arsitektur_aplikasi](https://user-images.githubusercontent.com/37507654/208256250-90adc987-ee5b-4abb-a783-3817aaef27a2.png)

# Training Model

Proses training, dataset dan algoritma yang digunakan, serta hasil dan evaluasi model terlampir pada repository Hugging Face berikut
https://huggingface.co/esakrissa/IndoBERT-SQuAD.

# Cara Penggunaan Aplikasi

User dapat menginputkan konteks pada kolom Konteks sebagai basis pengetahuan bagi model. Konteks dapat berupa teks paragraf yang diketik sendiri atau didapat dari sumber lain seperti artikel Wikipedia. Lalu user dapat menginputkan pertanyaan yang ingin ditanyakan pada kolom Pertanyaan sesuai dengan konteks yang diberikan. Klik Submit untuk melihat jawaban yang diberikan oleh model IndoBERT yang telah ditrain dengan dataset SQuAD 2.0 terjemahan Bahasa Indonesia.

# Demo Aplikasi

Untuk menjalankan aplikasi BERT-QATA2 dapat diakses melalui http://bert-qata2.xyz:8501. Aplikasi dideploy pada Google Cloud Platform (GCP) di atas sistem operasi Ubuntu 18.4. BERT-QATA2 dapat melakukan task question answering berdasarkan konteks yang diberikan oleh user menggunakan Bahasa Indonesia.
