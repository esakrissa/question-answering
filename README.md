# question-answering

Projek UAS Kelompok 5 Mata Kuliah PBA (A).

# Question Answering Menggunakan Model IndoBERT
Dataset yang digunakan adalah SQuAD versi Bahasa Indonesia yang didapatkan dari repository Github Wikidepia/indonesian_datasets/question-answering/squad.
Model yang digunakan adalah BERT (Bidirectional Encoder Representations from Transformers) versi Bahasa Indonesia yaitu IndoBERTm yang ditrain oleh Tim IndoLEM (Indonesian Language Evaluation Montage) menggunakan kumpulan dataset Bahasa Indonesia.

IndoBERT is the Indonesian version of BERT model. We train the model using over 220M words, aggregated from three main sources:

Indonesian Wikipedia (74M words)
news articles from Kompas, Tempo (Tala et al., 2003), and Liputan6 (55M words in total)
an Indonesian Web Corpus (Medved and Suchomel, 2017) (90M words).
We trained the model for 2.4M steps (180 epochs) with the final perplexity over the development set being 3.97 (similar to English BERT-base).

# SQuAD 2.0
Stanford Question Answering Dataset (SQuAD) is a reading comprehension dataset, consisting of questions posed by crowdworkers on a set of Wikipedia articles, where the answer to every question is a segment of text, or span, from the corresponding reading passage, or the question might be unanswerable.
