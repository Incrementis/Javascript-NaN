//Checks pressed example and returns a bool value
//Unsatisfying solution
function unsolution(String, notDefined, Eobject, Object)
{
	var example;
	
	if(String)
	{
		example = document.getElementById('unex_one');
		//alert("");
		example.innerHTML = isNaN("String");
		
		
	}
	else if(notDefined)
	{
		example = document.getElementById('unex_two');
		
		example.innerHTML = isNaN(undefined);
	}
	else if(Eobject)
	{
		example = document.getElementById('unex_three');
		
		example.innerHTML = isNaN({});
	}
	else
	{
		example = document.getElementById('unex_four');
		
		example.innerHTML = isNaN({attribute:"INT"});
	}
	
}



//Checks pressed example and returns a bool value
//Satisfying Solution
function solution(String, notDefined, Eobject, Object)
{
	var example;
	
	if(String)
	{
		example = document.getElementById('sex_one');
		
		example.innerHTML = check_if_NaN("String");
	}
	else if(notDefined)
	{
		example = document.getElementById('sex_two');
		
		example.innerHTML = check_if_NaN(undefined);
	}
	else if(Eobject)
	{
		example = document.getElementById('sex_three');
		
		example.innerHTML = check_if_NaN({});
	}
	else
	{
		example = document.getElementById('sex_four');
		
		example.innerHTML = check_if_NaN({attribute:"INT"});
	}
}


//A satisfying way to check if NaN
function check_if_NaN(Input)
{
	return Input !== Input
}