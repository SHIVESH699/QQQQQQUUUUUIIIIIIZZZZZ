class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      background("pink");
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide();
    //write code to change the background color here
    background("yellow")
    console.log("hi");
    //write code to show a heading for showing the result of Quiz

    //call getContestantInfo( ) here

    Contestant.getPlayerInfo();
    //write condition to check if contestantInfor is not undefined
    if(allContestants!==undefined){
      fill("blue");
      textSize(20);
      
    }
    //write code to add a note here
    var y=250
    //write code to highlight contest who answered correctly
    for(var plr in allContestants){
      var correctans="2";
      y=y+30;
      if(correctans==allContestants[plr].answer){
        fill("red")
        text("Your answer is correct",130,230);
        text(allContestants[plr].name,130,y)
        }
      else
        fill("green");
        text(allContestants[plr].name,130,280)
    }
    
  }

}
