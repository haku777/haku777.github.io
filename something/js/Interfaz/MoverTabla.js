// JScript File
// Funciones utilizadas para mover una tabla
        var dragObj = new Object();
        dragObj.zIndex = 10015;
        function dragStart(event, id) 
        {
          var el;
          var x, y;
          if (id)
            dragObj.elNode = MM_findObj(id);
          else 
          {
            if (g_browser.isIE)
              dragObj.elNode = window.event.srcElement;
            if (browser.isNS)
              dragObj.elNode = event.target;
            if (dragObj.elNode.nodeType == 3)
              dragObj.elNode = dragObj.elNode.parentNode;
          }
          if (g_browser.isIE) 
          {
            x = window.event.clientX + document.documentElement.scrollLeft
              + document.body.scrollLeft;
            y = window.event.clientY + document.documentElement.scrollTop
              + document.body.scrollTop;
          }
          if (g_browser.isNS) 
          {
            x = event.clientX + window.scrollX;
            y = event.clientY + window.scrollY;
          }
          if(dragObj.elNode.style.position!="absolute"){ 
            //dragObj.elNode.style.left=x
            //dragObj.elNode.style.top=y
            //dragObj.elNode.style.position="absolute"
          }

          dragObj.cursorStartX = x;
          dragObj.cursorStartY = y;
          dragObj.elStartLeft  = parseInt(dragObj.elNode.style.left, 10);
          dragObj.elStartTop   = parseInt(dragObj.elNode.style.top,  10);
          if (isNaN(dragObj.elStartLeft)) dragObj.elStartLeft = x;
          if (isNaN(dragObj.elStartTop))  dragObj.elStartTop  = y;
          dragObj.elNode.style.zIndex = ++dragObj.zIndex;
          if (g_browser.isIE)
          {
            document.attachEvent("onmousemove", dragGo);
            document.attachEvent("onmouseup",	dragStop);
            window.event.cancelBubble = true;
            window.event.returnValue = false;
          }
          if (g_browser.isNS) {
            document.addEventListener("mousemove", dragGo,   true);
            document.addEventListener("mouseup",   dragStop, true);
            event.preventDefault();
          }
        }
        function dragGo(event) 
        {
          var x, y;
          if (g_browser.isIE) 
          {
            x = window.event.clientX + document.documentElement.scrollLeft
              + document.body.scrollLeft;
            y = window.event.clientY + document.documentElement.scrollTop
              + document.body.scrollTop;
          }
          if (g_browser.isNS) 
          {
            x = event.clientX + window.scrollX;
            y = event.clientY + window.scrollY;
          }
          dragObj.elNode.style.left = (dragObj.elStartLeft + x - dragObj.cursorStartX) + "px";
          dragObj.elNode.style.top  = (dragObj.elStartTop  + y - dragObj.cursorStartY) + "px";
          if (g_browser.isIE) 
          {
            window.event.cancelBubble = true;
            window.event.returnValue = false;
          }
          if (g_browser.isNS)
            event.preventDefault();
        }
        function dragStop(event) 
        {
          if (g_browser.isIE) 
          {
            document.detachEvent("onmousemove", dragGo);
            document.detachEvent("onmouseup",	dragStop);
          }
          if (g_browser.isNS) 
          {
            document.removeEventListener("mousemove", dragGo,	true);
            document.removeEventListener("mouseup",   dragStop, true);
          }
        }  
    

