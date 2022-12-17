# question-answering

Projek UAS Kelompok 5. Mata Kuliah PBA (A).

# Deskripsi Aplikasi: BERT-QATA2
BERT-QATA2 merupakan aplikasi question-answering yang menggunakan model Deep Learning atau Natural Language Processing untuk menjawab pertanyaan user berdasarkan konteks yang diinputkan. 


# Question Answering Menggunakan Model IndoBERT
Dataset yang digunakan adalah SQuAD versi Bahasa Indonesia yang didapatkan dari repository Github Wikidepia/indonesian_datasets/question-answering/squad.
Model yang digunakan adalah BERT (Bidirectional Encoder Representations from Transformers) versi Bahasa Indonesia yaitu IndoBERT yang ditrain oleh Tim IndoLEM (Indonesian Language Evaluation Montage) menggunakan kumpulan dataset Bahasa Indonesia https://indolem.github.io/IndoBERT/.

  "IndoBERT is the Indonesian version of BERT model. We train the model using over 220M words, aggregated from three main sources:

  Indonesian Wikipedia (74M words)
  news articles from Kompas, Tempo (Tala et al., 2003), and Liputan6 (55M words in total)
  an Indonesian Web Corpus (Medved and Suchomel, 2017) (90M words).
  We trained the model for 2.4M steps (180 epochs) with the final perplexity over the development set being 3.97 (similar to English BERT-base)."

# Dataset yang Digunakan: SQuAD Bahasa Indonesia 2.0
Dataset yang digunakan adalah SQuAD versi Bahasa Indonesia yang didapatkan dari Github Wikidepia https://depia.wiki/files/squad/tar/. Dataset berupa "train-v2.0.json" dan "dev-v2.0.json" diupload pada Huggingface untuk memudahkan pembuatan model. Dataset yang digunakan untuk training atau fine-tuning model IndoBERT dapat dilihat pada link berikut https://huggingface.co/datasets/esakrissa/squad_id_v2.
 
  "Stanford Question Answering Dataset (SQuAD) is a reading comprehension dataset, consisting of questions posed by crowdworkers on a set of Wikipedia      articles, where the answer to every question is a segment of text, or span, from the corresponding reading passage, or the question might be unanswerable."

# Arsitektur Aplikasi
Aplikasi dibangun di atas docker container menggunakan docker compose dan terdiri dari dua container yaitu frontend dan backend. Arsitektur backend menggunakan framework Python yaitu FastAPI. Sedangkan frontend menggunakan framework JavaScript, React.js dan framework Python, Streamlit. Nginx digunakan untuk konfigurasi port antar container yang akan memberikan output berupa IP yang dapat diakses untuk menjalankan aplikasi.

![arsitektur](https://user-images.githubusercontent.com/37507654/208256155-9766996a-3f4f-4436-b6bf-ea6121fa3a1b.png)

# Cara Penggunaan Aplikasi
