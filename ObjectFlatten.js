
var input = {
    "user1": {
        "key_value_map": {
            "CreatedDate": "123424",
            "Department": {
                "Name": "XYZ",
                "Address": {
                    "Street": "D 1B"
                }
            }
        }
    },
    "user2": {
        "key_value_map": {
            "CreatedDate": "123424",
            "Department": {
                "Name": "XYZ",
                "Address": {
                    "Street": "D 1B"
                }
            }
        }
    }
};

function flattenObject(obj) {
    var fObj = {};
    for (var i in obj) {
      /*   if (!obj.hasOwnProperty(i)) {
            console.log('inside not hasOwnProperty', obj[i]);
            continue;
        } */
        if (typeof obj[i] === 'object' && obj[i] !== null) {
            console.log('2nd if', obj[i]);
            var flatObj = flattenObject(obj[i]);
            for (var x in flatObj) {
                if (!flatObj.hasOwnProperty(x)) {
                    console.log('inside not has OwnProperty', flatObj[x]);
                    continue;
                }
                fObj[i +'.'+ x] = flatObj[x];
            }
        } else {
            console.log('final node of object');
            fObj[i] = obj[i];
        }



    }
    return fObj;
}

output = flattenObject(input);
console.log(output);
/* output.forEach((data) => {
    console.log(data);
});
//console.log(output); */