text = document.getElementById("text");
image = document.getElementById("canvas");
var t = null;
evidence = document.getElementById("evidence");
nameTag = document.getElementById("nameTag");
choice1 = document.getElementById("choice1");
choice2 = document.getElementById("choice2");
choice3 = document.getElementById("choice3");
choice4 = document.getElementById("choice4");

storyVar = 0; // how far into the story we are


update = function(decision){ //main function that updates everytime a choice is clicked


  decide = function(){ //decides what happens
    switch(decision){
      case 0:
        nameTag.innerHTML = "Dee Leader";
        image.src = "assets/DeeHappy.png";

        text.innerHTML = "Hey there, rookie!";
        break;
      case 1:
        image.src = "assets/DeeNormal.png";
        text.innerHTML = "Ready for your first case?";
        break;
      case 2:
        image.src = "assets/DeeConcerned.png";
        text.innerHTML = "Looks like a murder case... <br> You sure you're up for this?";
        break;
      case 3:
        nameTag.innerHTML = "Han Gaman";
        image.src = "assets/HanGaman.png";

        text.innerHTML = "Alrighty then. The victim is a middle aged man who goes by the name <span id='important'> Han Gaman</span>. <br> <span id='important'>Remember this.</span>";
        
        var victimEvidence = document.createElement("P");
        t = document.createTextNode("VICTIM: Han Gaman - Middle-Aged Man. Died on 12/02.");
        victimEvidence.appendChild(t);
        evidence.appendChild(victimEvidence);
        //Add Evidence box ID
        var att=document.createAttribute("id");
        att.value="evidenceBox";
        document.getElementsByTagName("P")[0].setAttributeNode(att);        

        break;
      case 4:
        nameTag.innerHTML = "Toddle E. Innowsent";
        image.src = "assets/TEINormal.png";

        text.innerHTML = "The suspect is another man named <span id='important'> Toddle E. Innowsent </span>.";
        var victimEvidence = document.createElement("P");
        t = document.createTextNode("SUSPECT: Toddle E. Innowsent - suspected of hanging Han's body and murdering him. Claims to be good friends with Han.");
        victimEvidence.appendChild(t);
        evidence.appendChild(victimEvidence);     

        var att=document.createAttribute("id");
        att.value="evidenceBox";
        document.getElementsByTagName("P")[1].setAttributeNode(att);   
        break;
      case 5:
        nameTag.innerHTML = "Dee Leader";
        image.src = "assets/DeeConcerned.png";

        text.innerHTML = "Here is the autopsy report: <br> <span id='important'>Victim <strong> Han Gaman </strong> died at around <strong>2:30PM-3:00PM</strong> on <strong>December 2nd.</strong>. He was found hanging from the ceiling with a <strong>belt</strong> tied around his neck.";
        var autopsy = document.createElement("P");
        t = document.createTextNode("AUTOPSY: Victim Han Gaman died around 2:30PM - 3:00PM on 12/02. Found hanging from a ceiling with a belt tied around his neck.");
        autopsy.appendChild(t);
        evidence.appendChild(autopsy);    

        var att=document.createAttribute("id");
        att.value="evidenceBox";
        document.getElementsByTagName("P")[2].setAttributeNode(att);    
        break;
      case 6:

        nameTag.innerHTML = "Justin Time";
        image.src = "assets/JustinNormal.png";

        text.innerHTML = "There was a <strong> witness </strong> who saw the crime. His name is <span id='important'> Justin Time</span>.";
        var witnessEvidence1 = document.createElement("P");
        t = document.createTextNode("WITNESS: Justin Time, another middle-aged man who claims to have seen Toddle enter the victim's apartment right before he saw the body of Han Gaman.");
        witnessEvidence1.appendChild(t);
        evidence.appendChild(witnessEvidence1);   

        var att=document.createAttribute("id");
        att.value="evidenceBox";
        document.getElementsByTagName("P")[3].setAttributeNode(att);     
        break;
      case 7:
        nameTag.innerHTML = "Dee Leader";
        image.src = "assets/Photo1.png";

        text.innerHTML = "We also have other evidence: <br> <span id = 'important'> A <strong> photo </strong> of Toddle entering Han's apartment at 2:00 PM. <br>  </span>"
        //ENTIRE BOX
        var photoBox1 = document.createElement("DIV");
        evidence.appendChild(photoBox1);
        //TEXT of photo 1
        var photoEvidence1Text = document.createElement("P"); 
        t = document.createTextNode("Photo of Toddle entering Han's apartment at 2:00 PM.");
        photoEvidence1Text.appendChild(t);
        photoBox1.appendChild(photoEvidence1Text);
        //ACTUAL PHOTO 1           
        var photoEvidence1 = document.createElement("img");
        t = document.createAttribute("src");
        t.value = "assets/Photo1.png";
        photoEvidence1.setAttributeNode(t);
        photoBox1.appendChild(photoEvidence1); 

        var att=document.createAttribute("id");
        att.value="evidenceBox";
        document.getElementsByTagName("DIV")[7].setAttributeNode(att);               
        break;

        var att=document.createAttribute("id");
        att.value="evidenceBox";
        document.getElementsByTagName("P")[4].setAttributeNode(att);
      case 8:
        text.innerHTML = "<span id='important'> Another photo of Justin Time entering Han's apartment at around 2:30. </span>";
        image.src = "assets/Photo2.png";
        
        //ENTIRE BOX
        var photoBox2 = document.createElement("DIV");
        evidence.appendChild(photoBox2);

        //TEXT 
        var photoEvidence2Text = document.createElement("P"); //TEXT of photo 1
        t = document.createTextNode("Photo of Justin entering Han's apartment at around 2:30 PM.");
        photoEvidence2Text.appendChild(t);
        photoBox2.appendChild(photoEvidence2Text);
        //ACTUAL PHOTO 1           
        var photoEvidence2 = document.createElement("img");
        t = document.createAttribute("src");
        t.value = "assets/Photo2.png";
        photoEvidence2.setAttributeNode(t);
        photoBox2.appendChild(photoEvidence2);  
        //ID for Evidence Box
        var att=document.createAttribute("id");
        att.value="evidenceBox";
        document.getElementsByTagName("DIV")[8].setAttributeNode(att);       
        break;
      case 9:
        text.innerHTML = "And of course, the <span id = 'important'> belt </span> itself.";
        image.src = "http://www.mooshoes.com/media/catalog/product/cache/1/thumbnail/100x/9df78eab33525d08d6e5fb8d27136e95/C/L/CLIFF_belt_brown_34172.jpg";

        var photoBox3 = document.createElement("DIV");
        evidence.appendChild(photoBox3);

        //TEXT 
        var weaponEvidence1Text = document.createElement("P"); //TEXT of photo 1
        t = document.createTextNode("The 'weapon' used to kill Han Gaman.");
        weaponEvidence1Text.appendChild(t);
        photoBox3.appendChild(weaponEvidence1Text);
        //ACTUAL PHOTO 1           
        var weaponEvidence1 = document.createElement("img");
        t = document.createAttribute("src");
        t.value = "http://www.mooshoes.com/media/catalog/product/cache/1/thumbnail/100x/9df78eab33525d08d6e5fb8d27136e95/C/L/CLIFF_belt_brown_34172.jpg";
        weaponEvidence1.setAttributeNode(t);
        photoBox3.appendChild(weaponEvidence1);  
        //ID for Evidence Box
        var att=document.createAttribute("id");
        att.value="evidenceBox";
        document.getElementsByTagName("DIV")[9].setAttributeNode(att);
        break;
      case 10:
        image.src = "assets/DeeMad.png";
        text.innerHTML = "<span id= 'important'> <strong> DID YOU GET ALL THAT?</strong></span>";
        

        break;
      case 11:
        text.innerHTML = "Then good luck out there. Remember to look over the evidence.";
        break;
      default:
        nameTag.innerHTML = "Jay Sandal";
        text.innerHTML = "<span id='thought'>What is happening.... the world is spinning...</span>";
        break;
    }
  }



  textBoxChange = function(){ //changes the choice boxes
    switch(decision){ //General rule of thumb: 'case' number down here is the reply to the 'case' number in the decide() function.
      case 0:
        choice1.value = "Oh, hello.";
        choice2.value = "---";
        choice2.disabled = true;
        choice3.value = "---";
        choice3.disabled = true;
        choice4.value = "---";
        choice4.disabled = true;
        break;
      case 1:
        choice1.value = "Totally!";
        break;
      case 2:
        choice1.value = "I was born ready... I mean... 'yes'.";
        break;
      case 3:
        choice2.disabled = true;
        choice3.disabled = true;
        choice2.value = "---";
        choice3.value = "---";
        choice1.disabled = false;
        choice1.value = "Continue.";
      case 4:
        choice1.value = "Continue.";
        break;
      case 5:
        choice1.value = "I'll write all this down.";
        break;
      case 6:
      case 7:
      case 8:
      case 9:
        choice1.value = "Continue.";
        break;
      case 10:
        choice1.value = "Choose one!";
        choice1.disabled = true;
        choice2.value = "Got it!";
        choice2.disabled = false;
        choice3.value = "Please repeat that...";
        choice3.disabled = false;
        break;
      case 11:
        choice1.value = "Got it. Thanks, Chief.";
        choice1.disabled = false;
        choice2.value = "---";
        choice2.disabled = true;
        choice3.value = "---";
        choice3.disabled = true;
        break;
      default:
        choice1.value = "Erm... I think something went wrong.";
        break;
    }
  }
  textBoxChange();
  decide();

};

choice1.onclick = function(){
  storyVar++;
  update(storyVar);
};
choice2.onclick = function(){
  if(storyVar == 10){
    storyVar++;
    update(storyVar);
  }
  else{
    storyVar++;
    update(storyVar);
  }
}
choice3.onclick = function(){
  if(storyVar == 10){
    storyVar = 3;
    update(storyVar);
  }
  else{
    storyVar++;
    update(storyVar);
  }
}

update(storyVar);
