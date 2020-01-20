/*==================================================
            Fyma_MS_Application_031.16
==================================================*/

// jQuery code for slideAnimation and inputfield effect
$(function() {
    var rho = $('input.r'),
        massa = $('input.m'),
        volume = $('input.v'),

        thisRho = $('input.rThis'),
        thisMassa = $('input.mThis'),
        thisVolume = $('input.vThis');

    $('button#b_rho').on('click', function() {
        rho.addClass('click');
        thisRho.removeClass('click');
    });
    $('button#b_massa').on('click', function() {
        massa.addClass('click');
        thisMassa.removeClass('click');
    });
    $('button#b_volume').on('click', function() {
        volume.addClass('click');
        thisVolume.removeClass('click');
    });
});


// javascript code for input and output
function getResults() {
    var rhoNum = document.getElementById('rhoNum').value,
        massaNum = document.getElementById('massaNum').value, 
        volumeNum = document.getElementById('volumeNum').value,
        rhoVal = document.getElementById('rhoVal').value.toUpperCase(), 
        massaVal = document.getElementById('massaVal').value.toUpperCase(), 
        volumeVal = document.getElementById('volumeVal').value.toUpperCase(),
        massaNew, rhoNew, volumeNew,
        output = document.getElementById('output');

    // waarden voor eenheidsverandering berekenen 
    function newRho() {
        switch(rhoVal) {
            // kilogram devided by volume
            case'KG/KL':case'KG/M3': rhoNew = 1;
                break;
            case'KG/HL': rhoNew = (1/10);
                break;
            case'KG/L':case'KG/DM3': rhoNew = (1/1000);
                break;
            case'KG/DL': rhoNew = (1/10000);
                break;
            case'KG/CL': rhoNew = (1/100000);
                break;
            case'KG/ML':case'KG/CM3': rhoNew = (1/1000000);
                break;
            
            // hectogram devided by volume
            case'HG/KL':case'HG/M3': rhoNew = 10;
                break;
            case'HG/HL': rhoNew = 1;
                break;
            case'HG/L':case'HG/DM3': rhoNew = (1/100);
                break;
            case'HG/DL': rhoNew = (1/1000);
                break;
            case'HG/CL': rhoNew = (1/10000);
                break;
            case'HG/ML':case'HG/CM3': rhoNew = (1/100000);
                break;
            
            // decagram devided by volume
            case'DAG/KL':case'DAG/M3': rhoNew = 100;
                break;
            case'DAG/HL': rhoNew = 10;
                break;
            case'DAG/L':case'DAG/DM3': rhoNew = (1/10);
                break;
            case'DAG/DL': rhoNew = (1/100);
                break;
            case'DAG/CL': rhoNew = (1/1000);
                break;
            case'DAG/ML':case'DAG/CM3': rhoNew = (1/10000);
                break;
              
            // gram devided by volume
            case'G/KL':case'G/M3': rhoNew = 1000;
                break;
            case'G/HL': rhoNew = 100;
                break;
            case'G/DM3': rhoNew = 1;
                break;
            case'G/DL': rhoNew = (1/10);
                break;
            case'G/CL': rhoNew = (1/100);
                break;
            case'G/ML':case'G/CM3': rhoNew = (1/1000);
                break;
                
            // decigram devided by volume
            case'DG/KL':case'DG/M3': rhoNew = 10000;
                break;
            case'DG/HL': rhoNew = 1000;
                break;
            case'DG/L':case'DG/DM3': massaNew = 10;
                break;
            case'DG/DL': rhoNew = 1;
                break;
            case'DG/CL': rhoNew = (1/10);
                break;
            case'DG/ML':case'DG/CM3': rhoNew = (1/100);
                break;
                
            // centigram devided by volume
            case'CG/KL':case'CG/M3': rhoNew = 100000;
                break;
            case'CG/HL': rhoNew = 10000;
                break;
            case'CG/L':case'CG/DM3': massaNew = 100;
                break;
            case'CG/DL': rhoNew = 10;
                break;
            case'CG/CL': rhoNew = 1;
                break;
            case'CG/ML':case'CG/CM3': rhoNew = (1/10);
                break;
                
            // miligram devided by volume
            case'CG/KL':case'CG/M3': rhoNew = 1000000;
                break;
            case'CG/HL': rhoNew = 100000;
                break;
            case'MG/L':case'MG/DM3': massaNew = 1000;
                break;
            case'MG/DL': rhoNew = 100;
                break;
            case'MG/CL': rhoNew = 10;
                break;
            case'MG/ML':case'MG/CM3': rhoNew = 1;
                break;
                
            // standaard g/l
            default: rhoNew = 1;
        };
    };
    function newMassa() {
        switch(massaVal) {
            case'KG': massaNew = (1/1000);
                break;
            case'HG': massaNew = (1/100);
                break;
            case'DAG': massaNew = (1/10);
                break;
            case'DG': massaNew = (10);
                break;
            case'CG': massaNew = (100);
                break;
            case'MG': massaNew = (1000);
                break;
            default: massaNew = 1;
        };
    };
    function newVolume() {
        switch(volumeVal) {
            case'KL':case'M3': volumeNew = (1/1000);
                break;
            case'HL': volumeNew = (1/100);
                break;
            case'DM3': volumeNew = 1;
                break;
            case'DL': volumeNew = 10;
                break;
            case'CL': volumeNew = 100;
                break;
            case'ML':case'CM3': volumeNew = 1000;
                break;
            default: volumeNew = 1;
        };
    };
    
    
    // calculate the value of every piece of code
    // returns the value of massa / rho --> (volume)
    if(rhoNum !== '' && massaNum !== '' && volumeNum == '') {
        newRho(); newMassa();
        // print the value on the screen
        var rmNew = (massaNew/rhoNew) * (massaNum/rhoNum);
        output.value = 'Het volume is '+ rmNew +' liter!';
        return false;

    // returns the value of massa / volume --> (rho)
    }else if(massaNum !== '' && volumeNum !== '' && rhoNum == '') {
        newMassa(); newVolume();
        // print the value on the screen
        var mvNew = (massaNew/volumeNew) * (massaNum/volumeNum);
        output.value = 'De massa dichtheid is '+ mvNew +' gram per liter!';
        return false;

    // returns the value of rho * volume --> (massa)
    }else if(volumeNum !== '' && rhoNum !== '' && massaNum == '') {
        newVolume(); newRho();
        // print the value on the screen
        var vrNew = (volumeNew*rhoNew) * (volumeNum*rhoNum);
            output.value = 'De massa is '+ vrNew +' gram!';
            return false;

    // error if the code doesn't work!
    }else { alert('vul de juiste waarde in'); };
};


// info en waarden van de massadichtheid
$('.info').on('click', function() {
    $('.infocontent, .infopage').fadeToggle();
});


