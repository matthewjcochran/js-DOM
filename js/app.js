/*Use the Document Object Model (DOM) to complete the following exercises below:*/

/*1. Taylor Swift

Find the div with the id of "name1" and replace the n/a with the following:

Tay-Tay*/

var divName1 = document.getElementById('name1');
divName1.innerHTML = 'Tay-Tay';


/*2. DJ Khaled

Find the div with the id of "position2" and replace the n/a with the following: 

Project Manager*/

var divPosition2 = document.getElementById('position2');
position2.innerHTML = 'Project Manager';


/*3. Piko Taro

Find the div with the id of "alias3" and replace the n/a with the following:

Concatenation*/

var dibAlias3 = document.getElementById('alias3');
dibAlias3.innerHTML = 'Concatenation';


/*4. Prince

Find the div with the class name of "profile" and replace the n/a with a verse from your favorite Prince song.*/

var classList = document.getElementsByClassName('profile');
classList[0].innerHTML = 'Do you want to have some fun?';


/*5. Bruce Lee

Find the div with the class name of "profile" and replace the n/a with a quote from the legend himself.*/

classList[1].innerHTML = 'FIGHT ME!!!';


/*6. Samuel L Jackson

Find the div with the class name of "alias" and replace the n/a with your favorite character that Sammy portrayed.*/

var aliasList = document.getElementsByClassName('alias');
aliasList[2].innerHTML = 'Bad Mother F$@ker';

/*7. Peter Griffin

Create a div element and give it an id of "name7". Inside this div element, give it the contents of "Peter Griffin".

Append this div element to the nameParent div*/

var pg = document.createElement('div');
pg.id = 'name7';
pg.innerHTML = 'Peter Griffin';
nameParent.appendChild(pg);
 

/*8. Tim Duncan

Create a div element give it an id of "alias8". Inside this div element, give it the contents of "Old Man Riverwalk".

Append this div element to the aliasParent div.*/



//Final Boss
/*9. Create your own profile.*/

