import * as React from "react"
import Phaser from 'phaser'
import { IonPhaser } from '@ion-phaser/react'

class Game extends React.Component {

    game = {
        width: "100%",
        height: "100%",
        type: Phaser.AUTO,
        scene: {
          init: function() {
            this.cameras.main.setBackgroundColor('#fff');
            this.load.setCORS('anonymous');
          },
          preload: function(){
            this.load.image('forg', 'https://64.media.tumblr.com/tumblr_l6ncfsPLYQ1qzj5ggo1_1280.jpg');
          },
          create: function() {
            this.helloWorld = this.add.text(
              this.cameras.main.centerX, 
              this.cameras.main.centerY, 
              "OOOOOOH FUC K ITS CODE WEEKEEND!!!!!!", { 
                font: "40px Arial", 
                fill: "#000" 
              }
            );
            this.helloWorld.setOrigin(0.5);
            
            this.forg = this.add.sprite(
              this.cameras.main.centerX, 
              this.cameras.main.centerY, 
              'forg'
            );
            this.forg.setScale(0.1);
            this.forg.setOrigin(0.5);

          },
          update: function() {
            this.helloWorld.angle += 1;
            this.forg.angle -= 1;
          }
        }
      }

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <IonPhaser game={this.game} />
        )
    }
}

export default Game