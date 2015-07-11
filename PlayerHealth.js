#pragma strict

var Health : int = 200;

function Start () {

}

function Update () 
{
	if(Health <= 0)
	{
		Destroy(this.gameObject);
	}
}
function ApplyDammage(TheDammage : int)
{
	Health -= TheDammage;
}