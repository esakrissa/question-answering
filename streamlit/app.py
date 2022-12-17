import streamlit as st
from requests_toolbelt.multipart.encoder import MultipartEncoder
import requests
import logging
from PIL import Image


img = Image.open('img/qa_logo.png')

st.beta_set_page_config(page_title='QA',page_icon=img, layout="centered")

# PAGE_CONFIG = {"page_title":"QA", "page_icon":"img", "layout":"centered"}
# st.beta_set_page_config(**PAGE_CONFIG)


# interact with FastAPI endpoint
# backend = 'http://0.0.0.0:8008/qna'
backend = 'http://fastapi:8008/qna/'


def process(context: str, question: str, server_url: str):

    m = MultipartEncoder(
        fields={'context': context, 'question': question}
        )
    r = requests.post(server_url,
                      data=m,
                      params=m.fields,
                      headers={'Content-Type': m.content_type},
                      timeout=8000)
    return r

# construct UI layout
st.title('IndoBERT Question Answering')

st.write('''IndoBERT Question Answering oleh Kelompok 5. PBA (A).
         \nKunjungi URL di `:8008/docs` untuk melihat dokumentasi FastAPI.''')

user_input_context = st.text_area("Konteks:", height=160)
user_input_question = st.text_area("Pertanyaan:")

if st.button('Submit'):

    if user_input_context and user_input_question:
        result = process(user_input_context, user_input_question, backend)
        res = result.content
        st.write(f'Answer:    {res.decode("utf-8")}')

    elif user_input_context:
        # handle case with no image
        st.write("Masukkan pertanyaan!")

    elif user_input_context:
        # handle case with no image
        st.write("Masukkan konteks!")

    else:
        # handle case with no image
        st.write("Masukkan konteks dan pertanyaan!")

# RUN COMMAND
# streamlit run app.py