from PIL import Image
import io
from transformers import pipeline

__version__= "0.1.0"

def get_model():

    qa = pipeline('question-answering', 
              model="esakrissa/indobert-squad", 
              tokenizer="esakrissa/indobert-squad")
    return qa

def get_result(qa, context, question, max_size=512):
    r = qa(context=context, question=question)
    return r
