(function() {

    const id = new URLSearchParams(location.search).get('schoen');

    if(id) {
        document.getElementById(id).setAttribute('visible','true');
    }
    if(id === 'custom'){

        document.getElementById("kleuren").style.display="block"

    }

})()


    

            if(document.getElementById('zwart')){
                document.getElementById('zwart').addEventListener('click', function (event) {
                    const sizeRadios = document.getElementsByName('onderdelen');
            let activeSize = '';
            for (let i = 0; i < sizeRadios.length; i++) {
                if (sizeRadios[i].checked) {
                    activeSize = sizeRadios[i].value;
                    break;
                }
            }
      
                    document.getElementById(activeSize).setAttribute('material','color: #000000');
                    document.getElementById(activeSize+"1").setAttribute('material','color: #000000');
                    document.getElementById(activeSize+"2").setAttribute('material','color: #000000');
                });
            }


            if(document.getElementById('grijs')){
                document.getElementById('grijs').addEventListener('click', function (event) {
                    const sizeRadios = document.getElementsByName('onderdelen');
            let activeSize = '';
            for (let i = 0; i < sizeRadios.length; i++) {
                if (sizeRadios[i].checked) {
                    activeSize = sizeRadios[i].value;
                    break;
                }
            }
                    document.getElementById(activeSize).setAttribute('material','color: #7B7B7B');
                    document.getElementById(activeSize+"1").setAttribute('material','color: #7B7B7B');
                    document.getElementById(activeSize+"2").setAttribute('material','color: #7B7B7B');
                });
            }

            if(document.getElementById('groen')){
                document.getElementById('groen').addEventListener('click', function (event) {
                    const sizeRadios = document.getElementsByName('onderdelen');
            let activeSize = '';
            for (let i = 0; i < sizeRadios.length; i++) {
                if (sizeRadios[i].checked) {
                    activeSize = sizeRadios[i].value;
                    break;
                }
            }
                    document.getElementById(activeSize).setAttribute('material','color: #047857');
                    document.getElementById(activeSize+"1").setAttribute('material','color: #047857');
                    document.getElementById(activeSize+"2").setAttribute('material','color: #047857');
                });
            }

            if(document.getElementById('lime')){
                document.getElementById('lime').addEventListener('click', function (event) {
                    const sizeRadios = document.getElementsByName('onderdelen');
            let activeSize = '';
            for (let i = 0; i < sizeRadios.length; i++) {
                if (sizeRadios[i].checked) {
                    activeSize = sizeRadios[i].value;
                    break;
                }
            }
                    document.getElementById(activeSize).setAttribute('material','color: #84CC16');
                    document.getElementById(activeSize+"1").setAttribute('material','color: #84CC16');
                    document.getElementById(activeSize+"2").setAttribute('material','color: #84CC16');
                });
            }

            if(document.getElementById('oranje')){
                document.getElementById('oranje').addEventListener('click', function (event) {
                    const sizeRadios = document.getElementsByName('onderdelen');
            let activeSize = '';
            for (let i = 0; i < sizeRadios.length; i++) {
                if (sizeRadios[i].checked) {
                    activeSize = sizeRadios[i].value;
                    break;
                }
            }
                    document.getElementById(activeSize).setAttribute('material','color: #F97316');
                    document.getElementById(activeSize+"1").setAttribute('material','color: #F97316');
                    document.getElementById(activeSize+"2").setAttribute('material','color: #F97316');
                });
            }


   