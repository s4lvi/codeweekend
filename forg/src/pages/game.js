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
            this.cameras.main.setBackgroundColor('#24252A')
          },
          create: function() {
            this.helloWorld = this.add.text(
              this.cameras.main.centerX, 
              this.cameras.main.centerY, 
              "OOOOOOH FUC K ITS CODE WEEKEEND!!!!!!", { 
                font: "40px Arial", 
                fill: "#ffffff" 
              }
            );
            this.helloWorld.setOrigin(0.5);
          },
          update: function() {
            this.helloWorld.angle += 1;
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