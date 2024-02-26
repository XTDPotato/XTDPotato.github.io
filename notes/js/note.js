var note_text = document.getElementById("note_text");
var noteTextContent = note_text.textContent;


// 发送消息到父页面
parent.postMessage({ type: 'updateText', text: noteTextContent }, '*');
