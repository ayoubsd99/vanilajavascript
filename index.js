  // data json 
    const products=[
        {"id":"1","tilte":"swite modern","category":"women clouting","description":"the best on the the summer for you","image":"https://res.cloudinary.com/dgjvthpnh/image/upload/v1606400375/j4mptpvkyza1oyim6u1y.jpg"},
        {"id":"2","tilte":"t-shirt black","category":"mens clouting","description":"the best on the the summer for you","image":"https://res.cloudinary.com/dgjvthpnh/image/upload/v1606400375/j4mptpvkyza1oyim6u1y.jpg"},
        {"id":"3","tilte":"swite sumer","category":"girls clouting","description":"the best on the the summer for you","image":"https://res.cloudinary.com/dgjvthpnh/image/upload/v1606400375/j4mptpvkyza1oyim6u1y.jpg"},
        {"id":"4","tilte":"jaket cuir","category":"women clouting","description":"the best on the the summer for you","image":"https://res.cloudinary.com/dgjvthpnh/image/upload/v1606400375/j4mptpvkyza1oyim6u1y.jpg"},
        {"id":"5","tilte":"shorte draw","category":"women clouting","description":"the best on the the summer for you","image":"https://res.cloudinary.com/dgjvthpnh/image/upload/v1606400375/j4mptpvkyza1oyim6u1y.jpg"},
        {"id":"6","tilte":"swite sleep","category":"mens clouting","description":"the best on the the summer for you","image":"https://res.cloudinary.com/dgjvthpnh/image/upload/v1606400375/j4mptpvkyza1oyim6u1y.jpg"},
        {"id":"7","tilte":"t-shirt modern","category":"women clouting","description":"the best on the the summer for you","image":"https://res.cloudinary.com/dgjvthpnh/image/upload/v1606400375/j4mptpvkyza1oyim6u1y.jpg"},
        {"id":"8","tilte":"winter jacket","category":"youngs clouting","description":"the best on the the summer for you","image":"https://res.cloudinary.com/dgjvthpnh/image/upload/v1606400375/j4mptpvkyza1oyim6u1y.jpg"},
        {"id":"9","tilte":"cloun red","category":"women clouting","description":"the best on the the summer for you","image":"https://res.cloudinary.com/dgjvthpnh/image/upload/v1606400375/j4mptpvkyza1oyim6u1y.jpg"},
        {"id":"10","tilte":"swite sumer","category":"bebe clouting","description":"the best on the the summer for you","image":"https://res.cloudinary.com/dgjvthpnh/image/upload/v1606400375/j4mptpvkyza1oyim6u1y.jpg"},
        {"id":"12","tilte":"swite sumer","category":"bebe clouting","description":"the best on the the summer for you","image":"https://res.cloudinary.com/dgjvthpnh/image/upload/v1606400375/j4mptpvkyza1oyim6u1y.jpg"},
        {"id":"13","tilte":"swite sumer","category":"bebe clouting","description":"the best on the the summer for you","image":"https://res.cloudinary.com/dgjvthpnh/image/upload/v1606400375/j4mptpvkyza1oyim6u1y.jpg"},
        {"id":"14","tilte":"swite sumer","category":"bebe clouting","description":"the best on the the summer for you","image":"https://res.cloudinary.com/dgjvthpnh/image/upload/v1606400375/j4mptpvkyza1oyim6u1y.jpg"},
        {"id":"15","tilte":"swite sumer","category":"bebe clouting","description":"the best on the the summer for you","image":"https://res.cloudinary.com/dgjvthpnh/image/upload/v1606400375/j4mptpvkyza1oyim6u1y.jpg"},
        {"id":"16","tilte":"swite sumer","category":"bebe clouting","description":"the best on the the summer for you","image":"https://res.cloudinary.com/dgjvthpnh/image/upload/v1606400375/j4mptpvkyza1oyim6u1y.jpg"},
    
    ]
    // create a copy data
    const copy_products=products
    
    
// function create table body and append data 
  
    function createrows(){
        const helloWorldsKeys = Object.keys(copy_products);
        const tbody=document.querySelector("#products-table")
        tbody.innerHTML=''
        for (let row = 0; row < helloWorldsKeys.length; row++) {
            tbody.innerHTML+="<tr><td>"+
            copy_products[row].id+
            "</td><td>"+
            copy_products[row].tilte+
            "</td><td>"+copy_products[row].description+
            "</td><td>"+copy_products[row].category+"</td><td><img src="+
            copy_products[row].image+" alt='image not loaded'>"+
            "</td><td><button id="+copy_products[row].id+
            " class='btn-delete' onclick='deletrow(this)'>delete</button> </td><td><button id="+
            copy_products[row].id+" class='btn-update'  onclick='updaterow(this)'>update</button></td><td><button id="+
            copy_products[row].id+" class='btn-show' onclick='showrow(this)'>show</button></td></tr>"
            
        }
    }
      // load function 
        document.addEventListener("readystatechange",function(e){ 
            
        if (e.target.readyState === "complete") {
          
            alert("welcome!!");
           
            console.log(copy_products) 
            // call create row function
            createrows()
            // button save data after updating on click event
           
            var save_update= document.getElementById("save_update")
            var newurl=null
            save_update.addEventListener("click",function(){
                
                // call function save data
                var id=document.getElementById("txt_upid").value
               for(let row in copy_products){
                if(id==copy_products[row].id){
               copy_products[row].tilte =document.getElementById("up_title").value
               copy_products[row].description =document.getElementById("up_description").value
               copy_products[row].category =document.getElementById("up_category").value
               if(newurl==null){
                  
               }else{
                 copy_products[row].image=newurl
                 
            }
                 console.log(copy_products[row])

            }
      }
        
      // hide the update modal after save change 
            document.getElementById("modal_update").style.display = "none"
            document.getElementById("modal_update").className += document.getElementById("modal_update").className.replace("show", "")
            createrows(copy_products)
            });
            // file upload update image on change event and set the url image
            
            document.getElementById("up_image").addEventListener("change",function(e){
               newurl= URL.createObjectURL(e.target.files[0])
               console.log(newurl)
           });
         
           // file upload new image on change event
           var newimage=null
           document.getElementById("new_image").addEventListener("change",function(e){
                   newimage=URL.createObjectURL(e.target.files[0])
                   console.log(newimage)
           })
          // btn hide in the show modal on click event 
           document.getElementById("hide_modal_show").onclick=function(){
            document.getElementById("modal_show").style.display = "none"
            document.getElementById("modal_show").className += document.getElementById("modal_show").className.replace("show", "")
         }
          // btn close in the update modal on click event 
          document.getElementById("btn_close_update_modal").onclick=function(){
            document.getElementById("modal_update").style.display = "none"
            document.getElementById("modal_update").className += document.getElementById("modal_update").className.replace("show", "")
         }
       
         // btn add product  on click event && get the last id and show it in the textbox new id  
         document.getElementById("add_product").onclick=function(){
             togleclass_modaladdrow()
             document.getElementById("new_image").value=""
             var lastid=parseInt(copy_products[copy_products.length-1].id)+1
             document.getElementById("txt_newid").value=lastid
        }
         // btn close in the adding modal on click event 
         document.getElementById("btn_close_adding_modal").onclick=function(){
            
           document.getElementById("modal_adding").style.display = "none"
           document.getElementById("modal_adding").className += document.getElementById("modal_adding").className.replace("show", "")
        }
         
          // button add new row the data on click event
          var add_newrow=document.getElementById("save_newrow")
          add_newrow.onclick=function(e){
        
           const newrow={}
           newrow["id"]=document.getElementById("txt_newid").value
           newrow["tilte"]=document.getElementById("new_title").value
           newrow["description"]=document.getElementById("new_description").value
           newrow["category"]=document.getElementById("new_category").value
           newrow["image"]=newimage
           console.log(newrow)
           copy_products.push(newrow)
           document.getElementById("modal_adding").style.display = "none"
           document.getElementById("modal_adding").className += document.getElementById("modal_adding").className.replace("show", "")
           createrows(copy_products)
          }
        }     
    })
    
   // button delet row on click event
      function deletrow(td){
        const tbody=document.querySelector("#products-table")
        let newdata={}
        var id=td.id;
        var r=confirm('are you sur you want to delet thid row')
        if(r==true){
            for(let row in copy_products){
                if(id==copy_products[row].id){
                    console.log(id)
                     copy_products.splice(row,1) 
                }
        }
             
        }
             newdata=copy_products
              console.log(newdata)
              createrows()      
     } 
     // function show modal update 
      function togleclass_modalupdate(){
            var modal =document.getElementById("modal_update")
             modal.classList.add("show");
            document.getElementById("modal_update").style.display = "block"
     }
     // function show modal shoW 
     function togleclass_modalshow(){
        var modal =document.getElementById("modal_show")
         modal.classList.add("show");
        document.getElementById("modal_show").style.display = "block"
 }
 // function show modal adding new row 
 function togleclass_modaladdrow(){
    var modal =document.getElementById("modal_adding")
     modal.classList.add("show");
    document.getElementById("modal_adding").style.display = "block"
}
 
// function show the content of the product in update modal element befor updating
     function updaterow(td){
         let id=td.id
         togleclass_modalupdate()
         document.getElementById("txt_upid").value=id
         document.getElementById("up_image").value=""
         for(let row in copy_products){
             if(id==copy_products[row].id){
                document.getElementById("up_title").value=copy_products[row].tilte
                document.getElementById("up_description").value=copy_products[row].description
                document.getElementById("up_category").value=copy_products[row].category
                document.getElementById("up_img").setAttribute("src",copy_products[row].image)
             }
         }
     }
    
    // show the content of the row clicked
     function showrow(td){
         // call function show modal
        togleclass_modalshow()
         var id=td.id
         for(let row in copy_products){
             if(id==copy_products[row].id){
                 document.getElementById("show_id").innerHTML=copy_products[row].id
                 document.getElementById("show_title").innerHTML=copy_products[row].tilte
                 document.getElementById("show_category").innerHTML=copy_products[row].category
                 document.getElementById("show_description").innerHTML=copy_products[row].description
                 document.getElementById("show_image").setAttribute("src", copy_products[row].image)


             }
         }

     }

     // hide all the modals when click any where on the window
    
      window.onclick = function (event) {
            var modalup =document.getElementById("modal_update")
            var modalsh=document.getElementById("modal_show")
            var modaladd=document.getElementById("modal_adding")
                if (event.target == modalup ) {
               document.getElementById("modal_update").style.display = "none"
               document.getElementById("modal_update").className += document.getElementById("modal_update").className.replace("show", "")
              
      }else if( event.target == modalsh){
        document.getElementById("modal_show").style.display = "none"
        document.getElementById("modal_show").className += document.getElementById("modal_show").className.replace("show", "")
      }else if(event.target==modaladd){
        document.getElementById("modal_adding").style.display = "none"
        document.getElementById("modal_adding").className += document.getElementById("modal_adding").className.replace("show", "")
      }
}
    
       

    
