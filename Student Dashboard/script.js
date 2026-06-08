function counter(id,start,end,speed){

    let obj=document.getElementById(id);

    let current=start;

    let timer=setInterval(()=>{

        current++;

        obj.textContent=current;

        if(current>=end){
            clearInterval(timer);
        }

    },speed);
}

counter("students",0,500,5);
counter("active",0,450,5);
counter("courses",0,25,80);
counter("topper",0,50,40);

function showMessage(){
    alert("Student Added Successfully 🎉");
}