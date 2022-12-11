from typing import Optional
from fastapi import FastAPI, File, Query
from starlette.responses import Response
import io
from model import get_model, get_result
from model import __version__ as model_version
import logging


logging.basicConfig(level=logging.DEBUG)

app = FastAPI(title="Question Answering",
              description=''' Question answering with BERT.''',
              version="0.1.0",
              )
model = get_model()

@app.get("/")
def read_root():
    return {"message": "Welcome to the API", "health_check": "OK", "model_version:": model_version}


@app.post("/qna/")
async def get_qna(context: str = Query(..., min_length=3), question: str = Query(..., min_length=3)):
    '''Get question answering'''
    logging.debug("Running model...")

    if context and question:
        result = get_result(model, context, question)
        logging.debug("Running model...")
        return result["answer"]
    return {"items": "Null"}
