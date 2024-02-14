//定义常驻变量
var main_snackbar = document.querySelector(".snackbar_no_action");
var note_copy_dialog = document.querySelector(".note_copy_dialog");
var close_btn = document.getElementById("close_btn");
var btn_notes = document.querySelectorAll(".btn_note")
var copy_btn = document.getElementById("copy_btn");

var note_frame = document.querySelector(".note_frame");
var copy_content = document.querySelector(".copy_content");
var note_loading_progress = document.getElementById("note_loading_progress");


//笔记点击事件
// 遍历列表项，给每个列表项添加点击事件
for (let btn_note of btn_notes) {
  btn_note.addEventListener("click", () => {
   note_copy_dialog.open = true;
    
   
   note_copy_dialog.headline = btn_note.textContent;
   
      
    
    // 获取 <iframe> 元素
   var note_frame = document.getElementById("note_frame");
      
      
      //内容需要用其他方法展现
      let note_id = "notes/"+btn_note.id+".html";
      note_frame.src = note_id;
    
    
    
    copy_content.style = "border:0px;display:none;";
   note_frame.style = "border:0px;display:none;";
   note_loading_progress.style = "border:0px;display:block;";
    
      
// 定义要执行的函数
function frame_loaded() {

note_frame = document.querySelector(".note_frame");
copy_content = document.querySelector(".copy_content");
note_loading_progress = document.getElementById("note_loading_progress");

  copy_content.style = "border:0px;display:block;";
   note_frame.style = "border:0px;display:none;";
   note_loading_progress.style = "border:0px;display:none;";
   
  // 访问 iframe 内部文档
var note_frame_doc = note_frame.contentDocument || note_frame.contentWindow.document;

// 获取 iframe 的源码
var sourceCode = note_frame_doc.body.innerHTML;




// 获取 iframe 中 id 为 note_text 的元素的文本，并且应用到编辑框
var note_texts = note_frame_doc.getElementById("note_text").innerText;
copy_content.value = note_texts;
  
}
// 使用 setTimeout 函数等待 500ms
setTimeout(frame_loaded, 500);

 

 
  



      
    

    
  })
}

//复制按钮
copy_btn.addEventListener("click", ()=>{
  copyStr();

});
//关闭按钮
close_btn.addEventListener("click", ()=>{
  note_copy_dialog.open = false;

});




// 定义一个复制函数
async function copyStr() { // 使用异步函数
  // 获取textarea元素
  var textarea = document.getElementById("copy_content");
  // 选中textarea中的文本
  textarea.select();
  document.execCommand("copy");


}
