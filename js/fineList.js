"use strict";
window.fineList = {
    searchFines : searchFines
}

//Ця зміна містить всі дані які в нас зберігаються у файлі data
let DB = data.finesData;

function searchFines(searchKey){

     window.fineList = {
        searchFines: searchFines
    };
    
    let DB = data.finesData;
    
    function searchFines(searchKey) {
        let result = [];
    
        if (searchKey === "Пошук за номером" || searchKey === "Пошук за типом штрафу") {
            // Filter fines 
            result = DB.filter(fine => {
                if (searchKey === "Пошук за номером") {
                    return fine.номер === '001';
                } else if (searchKey === "Пошук за типом штрафу") {
                    return fine.тип === 'Перевищення швидкості';
                }
            });
        }
    
        return result;
    }


    return [
        {номер: '001', тип: 'Перевищення швидкості', сума: 100, дата: '2023-01-15'}
    ];
}

