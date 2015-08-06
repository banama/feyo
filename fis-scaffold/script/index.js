var query = function(sizz){
    return document.querySelector(sizz)
}

query('.icon-list').addEventListener('click', function(){
    console.log(query('.content').classList)
    query('.content').classList.add('ai-modal-open')
}, true)

query('.icon-close').addEventListener('click', function(){
    query('.content').classList.remove('ai-modal-open')
}, true)

document.addEventListener('touchmove', function(e){
    e.preventDefault();
})
