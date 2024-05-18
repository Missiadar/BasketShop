function speakText(text) {
    window.speechSynthesis.cancel();
  
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  }


  function SpeechProvider( ) {
    const tags = ['h1', 'h2', 'h3', 'h4', 'h5', 'p', 'button', 'input', 'li', 'span'];

    for (const tag of tags) {
        document.querySelectorAll(tag).forEach(elem => {
            let hoverTimeout;

            elem.addEventListener('mouseenter', () => {
                hoverTimeout = setTimeout(() => {
                    console.log(elem.innerHTML);
                    speakText(elem.innerHTML);
                }, 1000); // Удержание в течение 1 секунды
            });

            elem.addEventListener('mouseleave', () => {
                clearTimeout(hoverTimeout);
            });
        });
  }
  }
  SpeechProvider()