import './App.css';
import React, { useRef, useState } from 'react';

function App() {

  const inputQ = useRef(null);
  const inputC = useRef(null);

  const [question, setQuestion] = useState(null);
  const [context, setContext] = useState(null);
  const [post, setPost] = useState(false);
  const [answer, setAnswer] = useState(null);

  function Header() {
    return (
      <div className='bar-60-up'>
        <div className='row'>
          <p className='title'>Kelompok 5</p>
          <div className='button-menu'>
            <button className='header-menu'>About</button>
            <button className='header-menu'>GitHub</button>
            <button className='header-menu'>Google</button>
          </div>
        </div>
      </div>
    )
  }

  function DescJudul(){
    return (
      <p className='desc'>
        {/* Deskripsi judul ditulis disini... */}
        Ini adalah sebuah website Question & Answering yang kami buat untuk memenuhi tugas UAS dari matakuliah Pemrosesan Bahasa Alami. p
      </p>
    );
  }

  function DescContent(){
    return (
      <p className='desc'>
      {/* Deskripsi Content ditulis disini... */}
        Tulis pertanyaan yang ingin kamu tanyakan pada kolom Question dan isi konteks sebagai acuan dari pertanyaan yang ingin kamu cari jawabannya pada kolom Context.
      </p>
    );
  }

  function Print() {
    return(
      <div className='content'>
        <div className='row'>
          <div className='col-25'>
            <label>Answer</label>
          </div>
          <div className='col-75'>
            <span className='answer'>{answer}</span>
          </div>
        </div>
      </div>
    );
  }

  function Footer () {
    return (
      <div className='bar-60-down'>
        <p className='desc'>Kelompok 5</p>
      </div>
    )
  }

  function getQuestion (val) {
    setQuestion(val.target.value);
    console.warn('question: ', val.target.value);
  }

  function getContext (val) {
    setContext(val.target.value);
    console.warn('context:  ',val.target.value);
  }

  function getAnswer () { 

    if (question == null || context == null) {
      setAnswer('Tidak ada question atau context')
      setPost(false)
    } else if (question === '' || context === '') {
      setAnswer('Tidak ada question atau context')
      setPost(false)
    } 
  }
  
  React.useEffect(function () {
    getAnswer();
  });

  function getPost() {
    
    console.log('question value : ', question)
    console.log('context value : ', context)

    if (question == null || context == null) {
      setPost(false)
      setAnswer('Tidak ada question atau context')
      alert(answer)
    } else if (question === '' || context === '') {
      setPost(false)
      setAnswer('Tidak ada question atau context')
      alert(answer)
    } else {
      setAnswer('ada jawaban')
      setPost(true)
    }
  }


  function Mouse() {
    return (
      <div className='mouse_scroll'>
        <div className='mouse'>
          <div className='wheel'/>
        </div>
        <div>
          <span className='m_scroll_arrows one'></span>
          <span className='m_scroll_arrows two'></span>
          <span className='m_scroll_arrows three'></span>
        </div>
      </div>
    );
  }

  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);

  return (
    <div className='App'>
    <span>
      <Header className='bar-80'/>
    </span>
      <div className='container'>
        <h1 className='heading-1'>Selamat Datang!<br/></h1>
        <DescJudul/>
        <Mouse />
      </div>

      <div className='container reveal'>
        <div className='content'>
          <h1 className='heading-1'>Ayo tanyakan!</h1>
          <DescContent/>  

          {/* INPUT QUESTION */}
          <div className='row'>
            <div className='col-25'>
              <label>Question</label>
            </div>
            <div className='col-75'>
              <input 
                ref={inputQ}
                type='text' 
                id="question-box" 
                name="question-box" 
                placeholder='Type here...' 
                onChange={getQuestion}>
              </input>
            </div>
          </div>

          {/* INPUT CONTEXT */}
          <div className='row'>
            <div className='col-25'>
              <label>Context</label>
            </div>
            <div className='col-75'>
              <textarea 
                ref={inputC}
                id='context-box' 
                name='context-box' 
                placeholder='Write something...' 
                onChange={getContext}>
              </textarea>
            </div>
          </div>

          {/* SUBMIT BUTTON */}
          <div className='row'>
            <button 
              type='submit' 
              onClick={getPost}>
                Submit
            </button>
          </div>

        </div>
        {
          post?
          <Print className='container'/>
          :null
        }
      </div>
      <Footer/>
    </div>
  );
}
export default App;