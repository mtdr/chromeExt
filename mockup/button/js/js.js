function getProgress(X,max)
{
	
	$('.BlockMain span').width(' ' + X/max * 100+ '%');
	
}

/*Получение количество баллов*/
/*Максимальное кличесвто баллов*/

var CountUser = 10;
var CountMax = 16;

getProgress(CountUser,CountMax);
