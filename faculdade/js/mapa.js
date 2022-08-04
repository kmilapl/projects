function initMap(){
    var options = {
        zoom: 10,
        center: {lat:-23.5424874, lng: -46.603589}
    }

    var map = new
    google.maps.Map(document.getElementById('map'), options);

    /*-------- LOJAS/PETSHOPS -------- */

    addMarker({
        coords:{lat:-23.6399953, lng: -46.6990595},
        iconImage: 'imagens/petshop.png',
        content:'<h3>Petz Alto da Boa Vista</h3> ' +
                '<b>PET STORE</b><br>' +
                'Av. Adolfo Pinheiro, 1600 - Santo Amaro, <br>São Paulo/SP, CEP: 04734-004<br>' +
                '(11) 2181-7330'
    });

    addMarker({
        coords:{lat:-23.5574389, lng: -46.5758682},
        iconImage: 'imagens/petshop.png',
        content:'<h3>Petz Anália Franco</h3> ' +
                '<b>PET STORE</b><br>' +
                'Av. Regente Feijó, 677 - Vila Regente Feijó, <br>São Paulo/SP, CEP: 03342-000<br>' +
                '(11) 2181-7360'
    });

    addMarker({
        coords:{lat:-23.5499554, lng: -46.6616171},
        iconImage: 'imagens/petshop.png',
        content:'<h3>Petz Angélica</h3> ' +
                '<b>PET STORE</b><br>' +
                'Av. Angélica, 2011 - Higienópolis, <br>São Paulo/SP, CEP: 01227-200<br>' +
                '(11) 2181-7342'
    });

    addMarker({
        coords:{lat:-23.5910414, lng: -46.5446856},
        iconImage: 'imagens/petshop.png',
        content:'<h3>Petz Anhaia Mello</h3> ' +
                '<b>PET STORE</b><br>' +
                'Av. Prof. Luiz Ignacio Anhaia Mello, 5657 - Vila Graciosa, <br>São Paulo/SP, CEP: 03295-000<br>' +
                '(11) 2181-7470'
    });

    addMarker({
        coords:{lat:-23.5941415, lng: -46.6228373},
        iconImage: 'imagens/petshop.png',
        content:'<h3>Cobasi SP Ipiranga</h3> ' +
                '<b>PET SHOP</b><br>' +
                'Av. Doutor Ricardo Jafet, 2033 - Vila Mariana, <br>São Paulo/SP, CEP: 04123-030<br>' +
                '(11) 4562-0030'
    });

    addMarker({
        coords:{lat:-23.4935597, lng: -46.4203595},
        iconImage: 'imagens/petshop.png',
        content:'<h3>Cobasi Marechal Tito</h3> ' +
                '<b>PET SHOP</b><br>' +
                'Av. Marechal Tito, 2813 - São Miguel Paulista, <br>São Paulo/SP, CEP: 08022-000<br>' +
                '(11) 4395-4416'
    });

    addMarker({
        coords:{lat:-23.6142343, lng: -46.7435781},
        iconImage: 'imagens/petshop.png',
        content:'<h3>Cobasi Portal do Morumbi</h3> ' +
                '<b>PET SHOP</b><br>' +
                'Av. Dr Guilherme Dumont Vilares, 1210 - Jardim Londrina, <br>São Paulo/SP, CEP: 05640-902<br>' +
                '(11) 2500-6097'
    });

    addMarker({
        coords:{lat:-23.5411204, lng: -46.5568612},
        iconImage: 'imagens/petshop.png',
        content:'<h3>Cobasi Carrão</h3> ' +
                '<b>PET SHOP</b><br>' +
                'Rua Serra de Botucatu, 1759 - Vila Gomes Cardim, <br>São Paulo/SP, CEP: 03317-001<br>' +
                '(11) 4550-3902'

    });

    /*-------- VETERINÁRIOS -------- */

    addMarker({
        coords:{lat:-23.5472055, lng: -46.5629553},
        iconImage: 'imagens/hospital.png',
        content:'<h3>Animaniac´s Tatuapé</h3>' +
                '<b>HOSPITAL VETERINÁRIO</b><br>' +
                'Rua Monte Serrat, 1090 - Tatuapé, <br>São Paulo/SP, CEP: 03312-001<br>' +
                '(11) 2090-9230'
    });

    addMarker({
        coords:{lat:-23.5435953, lng: -46.5217992},
        iconImage: 'imagens/hospital.png',
        content:'<h3>Animaniac´s Vila Matilde</h3>' +
                '<b>HOSPITAL VETERINÁRIO</b><br>' +
                'Av. Pasteur, 50 - Vila Nova Savoia, <br>São Paulo/SP, CEP: 03531-000<br>' +
                '(11) 3053-1667'
    });

    addMarker({
        coords:{lat:-23.5709303, lng: -46.5926417},
        iconImage: 'imagens/hospital.png',
        content:'<h3>Animaniac´s Mooca</h3>' +
                '<b>HOSPITAL VETERINÁRIO</b><br>' +
                'Rua Juventus, 467 - Parque da Mooca, <br>São Paulo/SP, CEP: 03124-020<br>' +
                '(11) 2066-1616'
    });

    addMarker({
        coords:{lat:-23.5405401, lng: -46.7762141},
        iconImage: 'imagens/hospital.png',
        content:'<h3>Centro Veterinário Cães e Gatos 24H</h3>' +
                '<b>VETERINÁRIO</b><br>' +
                'R. Narciso Sturlini, 186 - Centro, <br>Osasco/SP, CEP: 06018-100<br>' +
                '(11) 3684-1080' 
    });

    addMarker({
        coords:{lat:-23.6292666, lng: -46.550614},
        iconImage: 'imagens/hospital.png',
        content:'<h3>Dr. Hato - Hospital Veterinário e Pet Shop (Unidade Campestre)</h3>' +
                '<b>HOSPITAL VETERINÁRIO</b><br>' +
                'Av. Dom Pedro II, 3309 - Campestre, <br>Santo André/SP, CEP: 09080-111<br>' +
                '(11) 4428-1222'
    });

    addMarker({
        coords:{lat:-23.6286523, lng: -46.5178568},
        iconImage: 'imagens/hospital.png',
        content:'<h3>Dr. Hato - Clínica Veterinária e Pet Shop (Unidade Vila Alto de Santo André)</h3>' +
                '<b>HOSPITAL VETERINÁRIO</b><br>' +
                'Av. Martim Francisco, 802 - Vila Alto de Santo André, <br>Santo André/SP, CEP: 09230-700<br>' +
                '(11) 4200-1160'
    });

    addMarker({
        coords:{lat:-23.691659, lng: -46.5499165},
        iconImage: 'imagens/hospital.png',
        content:'<h3>Dr. Hato - Hospital Veterinário e Pet Shop (Unidade Baeta Neves)</h3>' +
                '<b>HOSPITAL VETERINÁRIO</b><br>' +
                'Rua Thales dos Santos Freire, 136 - Baeta Neves, <br>São Bernardo do Campo/SP, CEP: 09751-020<br>' +
                '(11) 4336-7185'
    });

    addMarker({
        coords:{lat:-23.5711681, lng: -46.8554617},
        iconImage: 'imagens/hospital.png',
        content:'<h3>Hospital Veterinário Granja Viana</h3>' +
                '<b>HOSPITAL VETERINÁRIO</b><br>' +
                'Av. São Camilo, 3510 - Vilarejo, <br>Carapicuíba/SP, CEP: 06350-010<br>' +
                '(11) 4169-4133' 
    });

    addMarker({
        coords:{lat:-23.5829625, lng: -46.6659532},
        iconImage: 'imagens/hospital.png',
        content:'<h3>Pet Care Hospital Veterinário - Unidade Ibirapuera</h3>' +
                '<b>HOSPITAL VETERINÁRIO</b><br>' +
                'Av. República do Líbano, 270 - Ibirapuera, <br>São Paulo/SP, CEP: 04502-000<br>' +
                '(11) 4673-0056' 
    });

    addMarker({
        coords:{lat:-23.5421533, lng: -46.6669355},
        iconImage: 'imagens/hospital.png',
        content:'<h3>Pet Care Hospital Veterinário Unidade Pacaembu</h3>' +
                '<b>HOSPITAL VETERINÁRIO</b><br>' +
                'Av. Pacaembu, 1839 - Consolação, <br>São Paulo/SP, CEP: 01234-001<br>' +
                '(11) 4673-0064' 
    }); 

    addMarker({
        coords:{lat:-23.5477861, lng: -46.5704988},
        iconImage: 'imagens/hospital.png',
        content:'<h3>Pet Care Hospital Veterinário - Unidade Tatuapé</h3>' +
                '<b>HOSPITAL VETERINÁRIO</b><br>' +
                'R. Serra de Japi, 965 - Tatuapé, <br>São Paulo/SP, CEP: 03309-000<br>' +
                '(11) 4673-0066'
    }); 

    function addMarker(props){
        var marker = new google.maps.Marker({
            position:props.coords,
            map: map,
            icon:props.iconImage
        });

        if(props.iconImage){
            marker.setIcon(props.iconImage);
        }

        if(props.content){
            var infoWindow = new google.maps.InfoWindow({
                content:props.content
            });
        
            marker.addListener('click', function(){
                infoWindow.open(map, marker);
            });
        }
    }
}