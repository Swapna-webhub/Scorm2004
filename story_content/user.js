function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6FSvBvjw87c":
        Script1();
        break;
      case "5cbgHMA07HO":
        Script2();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();

var numValue = player.GetVar("RoundedNum");
var JSRoundedNum = Math.trunc(numValue); 
player.SetVar("RoundedNum",JSRoundedNum);
}

function Script2()
{
  var player = GetPlayer();

function findLMSAPI(win) {
  if (win.hasOwnProperty("GetStudentID")) return win;

  else if (win.parent == win) return null;

  else return findLMSAPI(win.parent);
}

var lmsAPI = findLMSAPI(this);
var myName = lmsAPI.SCORM2004_GetStudentName();
//var array = myName.split('.');
//var newName = array[0]; 
var newName = myName.substr(0,myName.length-1);
player.SetVar("USERFIRSTNAME", newName);
}

