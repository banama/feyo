;(function(){
    var dove = {},
        lastTime = 0;
        vendors = ['webkit', 'moz'];

    dove = function(el){
        this.wait = 1000;
        this.$el = el;
    }

    dove.prototype.requestAnimationFrame = (function() {
        
        for(var x = 0; x < vendors.length && !this.requestAnimationFrame; ++x) {
            this.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        }

        if (!window.requestAnimationFrame) {
            this.requestAnimationFrame = function(callback, element) {
                var currTime = new Date().getTime();
                var timeToCall = Math.max(0, 16.7 - (currTime - lastTime));
                var id = window.setTimeout(function() {
                    callback(currTime + timeToCall);
                }, timeToCall);
                lastTime = currTime + timeToCall;
                return id;
            };
        }
    }.call(dove));

    
    dove.prototype.cancelAnimationFrame = (function(){
        for(var x = 0; x < vendors.length && !this.requestAnimationFrame; ++x) {
            this.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] ||
                window[vendors[x] + 'CancelRequestAnimationFrame'];
        }

        if (!window.cancelAnimationFrame) {
            window.cancelAnimationFrame = function(id) {
                clearTimeout(id);
            };
        }
    }.call(dove));


    dove.prototype.add = function(className){
        var self = this;

        if(self.$el.classList){
            self.$el.classList.add(className);
        }
        else{
            self.$el.className += ' ' + className;
        }
        return self;
    };


    dove.prototype.set = function(obj){
        var self = this;

        var styleString = '';
        for(i in obj){
            styleString += i + ':' + obj[i] + ';';
        }
        self.$el.style.cssText = styleString;
        return self;
    };

    // TODO
    dove.prototype.wait = function(func){};

    window.dove = dove;
}())

function query(selector){
    return document.querySelector(selector)
}
function addClass(query, className){
    if(query.classList){
        query.classList.add(className)
    }
    else{
        query.className += className
    }
}
function removeClass(query, className){
     if(query.classList){
        query.classList.remove(className)
    }
    else{
        query.className = query.className.replace(className, '')
    }
}
function showDom(dom){
    dom.style.display = 'block'
}
function hideDom(dom){
    dom.style.display = 'none'
}

function hide_mask(){
    document.querySelector('.mask').style.display = 'none';
}

function imgready(){
    var img_load_count = 0;
    var data_imgs = document.querySelectorAll('#data-image')
    for(var i=0,length=data_imgs.length; i < length; i++){
        var img_url = data_imgs[i].getAttribute('data-src');
        if(img_url === 'null'){
            continue;
        }
        var data_id = data_imgs[i].getAttribute('data-id')
        ;(function(img_doc_index, img_url){
            var img_doc = data_imgs[img_doc_index]
            ;(function(img_url, img_doc){
                loadImage(img_url,
                    function(){},
                    function(){
                        img_doc.setAttribute('src', img_url)
                        img_load_count += 1;
                        if(img_load_count > 3){
                            // hide_mask();
                        }
                    },
                    function(img_url, img_doc){})
                }(img_url, img_doc))
        }(i, img_url))
    }
}

function loadImage(url, ready, load, error){
    var imgReady,
        width,
        height,
        sizeWidth,
        sizeHeight,
        img = new Image(),
        onready = function(){
          sizeWidth = img.width;
          sizeHeight = img.height;
          if(sizeWidth != width || sizeHeight !== height){
            ready.call(img);
            imgReady.end = true;
          }
        };

    img.src = url;
    if(img.complete){
        ready.call(img);
        if(load) load.call(img);
        return;
    }

    width = img.width;
    height = img.height;
    onready();

    img.onerror = function () {
        if(error) error.call(img);
        imgReady = true;
        img = img.onload = img.onerror = null;
    };

    img.onload = function(){
        if(imgReady) onready();
        if(load) load.call(img);
        img = img.onload = img.onerror = null;
    };
}

var first_img = document.querySelectorAll('#data-image')[0].getAttribute('data-src')
loadImage(first_img, function(){},
    function(){
        imgready()
        hide_mask()
    },function(){})
hide_mask()
step_1()

var boxer = new TouchBox('#touchBoxCt', {
    loop: false,
    animation: 'slide'
});

boxer.on('slide', function(activeIndex, oldIndex) {
    activeIndex += 1
    oldIndex += 1
    eval("step_" + activeIndex + "()")
    
    if(oldIndex === activeIndex - 1){
        eval("out_" + oldIndex + "()")
    }
    else{
        if(typeof oldIndex == Number && oldIndex !== 0){
            eval("out_" + oldIndex + "()")            
        }
    }
});

function step_1(){
    showDom(query('#d1 div div.thehide'))
}
function out_1(){
    hideDom(query('#d1 div div.thehide'))
}

function step_2(){
    showDom(query('#d2 div div.thehide'))
}
function out_2(){
    hideDom(query('#d2 div div.thehide'))
}