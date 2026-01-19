
function task1()
{
    console.log("Running Task 1");
    console.log("In Function 1");
};

function task2()
{
    console.log("Running Task 2");
    console.log("In Function 2");
};

function task3()
{
    console.log("Running Task 3");
    console.log("In Function 3");
};

setInterval(task1,1000);
setInterval(task2,5000);
setInterval(task3,10000);