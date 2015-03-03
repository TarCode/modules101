var hello = require('./hello');
var tdd = require('./tdd');
tdd.run("testing hello function", function(assert){     
    var result = hello.hello(); 
    // is the result as we expected?
    assert.equals("hello world", result, "testing hello function");
});

/*TestMyCode.run("testing hello_joe function", function(assert){ 
    var result = hello_joe("bob"); 
    // is the result as we expected?
    assert.equals('Hello!', result, "testing hello_joe function");
});

TestMyCode.run("testing hello_uppercase function", function(assert){ 
    var result = hello_uppercase("bob"); 
    // is the result as we expected?
    assert.equals('hello bob', result, "testing hello_uppercase function");
});

TestMyCode.run("testing number_list function", function(assert){ 
    var result = number_list(3);
    var nList = []; 
    for(var x = 1; x < 3; x++){
        nList.push(x);
    }
    // is the result as we expected?
    assert.equals(nList, result, "testing number_list function");
});

TestMyCode.run("testing sum_numbers function", function(assert){ 
    var result = sum_numbers(5); 
    // is the result as we expected?
    assert.equals(10, result, "testing sum_numbers function");
});

passed();*/
