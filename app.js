    document.querySelector('ul').addEventListener('click', onClick)
    function onClick(e) {
        const val = e.target.innerText = 'TEXT-1';
    

        e.preventDefault();
        console.log('clicked once')
    }
        


 document.querySelector('ul').addEventListener('dblclick', onClick2)
        function onClick2(e){
        const val2 = e.target.innerText = 'TEXT-2';
            
        
        e.preventDefault();
        
       console.log('clicked twice')
}
