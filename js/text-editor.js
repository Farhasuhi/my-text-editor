
document.getElementById('bold').addEventListener('click',function(){

    const textArea=document.getElementById('textarea');
    const textAeaValue=textArea.value;
    document.getElementById('textarea').style.fontWeight='bold';

});
document.getElementById('italic').addEventListener('click',function(){

    const textArea=document.getElementById('textarea');
    const textAeaValue=textArea.value;
    document.getElementById('textarea').style.fontStyle='italic';

});
document.getElementById('underline').addEventListener('click',function(){

    const textArea=document.getElementById('textarea');
    const textAeaValue=textArea.value;
    document.getElementById('textarea').style.textDecoration='underline';

});
document.getElementById('font-size').addEventListener('click',function(){

    const inputField=document.getElementById('font-size');
    const inputFieldString=inputField.value;
    const input=parseInt(inputFieldString);

    const textArea=document.getElementById('textarea');
    const textAeaValue=textArea.value;

    document.getElementById('textarea').style.fontSize=input+"px";
    


});

document.getElementById('color').addEventListener('click',function(){

    const inputField=document.getElementById('color');
    const input=inputField.value;

    const textArea=document.getElementById('textarea');
    const textAeaValue=textArea.value;
    
    document.getElementById('textarea').style.color=input;

});

document.getElementById('left').addEventListener('click',function(){

    const textArea=document.getElementById('textarea');
    const textAeaValue=textArea.value;
    document.getElementById('textarea').style.textAlign='left';

});
document.getElementById('center').addEventListener('click',function(){

    const textArea=document.getElementById('textarea');
    const textAeaValue=textArea.value;
    document.getElementById('textarea').style.textAlign='center';

});
document.getElementById('right').addEventListener('click',function(){

    const textArea=document.getElementById('textarea');
    const textAeaValue=textArea.value;
    document.getElementById('textarea').style.textAlign='right';

});
document.getElementById('justify').addEventListener('click',function(){

    const textArea=document.getElementById('textarea');
    const textAeaValue=textArea.value;
    document.getElementById('textarea').style.textAlign='justify';

});
