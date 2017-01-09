import { Component, AfterViewInit } from '@angular/core';
import { TransformService } from '../../services/transform.service';
import { Transform } from '../../models/transform';

@Component({
  selector: 'scene-a',
  templateUrl: './scene-a.component.html',
  styleUrls: ['./scene-a.component.css'],
  host: {'(window:scroll)': 'onScroll($event)'},
  providers: [TransformService]
})
export class SceneAComponent implements AfterViewInit {
  Intro = 700;
  HalfWidth = 500;
  StartUphill = 400;
  ForegroundWidth = 3500;
  Finalize = 3400;
  units = [
    { type: 3, left: 50, bottom: 680 },
    { type: 3, left: 300, bottom: 670 },
    { type: 2, left: 2100, bottom: 1098 },
    { type: 2, left: 2290, bottom: 1100, transform: 'scale(-0.9, 1)' },
  ];
  particles = [];
  wheelTransform;
  introTransform;
  unitTransform;
  layer1Transform;
  layer2Transform;
  layer3Transform;
  thinkingMan;
  totalLength;
  currentLength;
  intro = false;

  constructor(private _transformer: TransformService) {
    var left = 10;

    while (left < this.ForegroundWidth) {
      let scale = (2 + Math.random() * 8) / 10.0;
      let fallingSpd = (20 + Math.random() * 20) / 20.0;
      let rotate = Math.random() * 360;
      let transform = this._transformer.new().scale(scale, scale).rotate(rotate).transform();
      this.particles.push({left: left, transform: transform, spd: fallingSpd});
      left += Math.random() * 50 + 50;
    }

    this.onScroll(null);
  }

  ngAfterViewInit() {
    this.thinkingMan = document.getElementById('thinking-man');
    this.totalLength = this.thinkingMan.getTotalLength();
  }

  onScroll($event) {
    var scrollTop = document.body.scrollTop + document.documentElement.scrollTop;
    this.currentLength = this.totalLength;

    if (scrollTop < this.Intro) {
      this.renderIntro(scrollTop);
    } else {
      this.renderScene(scrollTop - this.Intro);
    }
  }

  renderIntro(scrollTop) {
    let unitX = scrollTop - this.Intro;
    this.intro = true;
    this.wheelTransform = this._transformer.new().rotate((scrollTop ** 2 - scrollTop) / 2000 % 360).transform();
    this.introTransform = this._transformer.new().translate(0, -(scrollTop ** 2 / 500.0)).transform();
    this.unitTransform = this._transformer.new().translate(unitX, 0).rotate(10).transform();
  }

  renderScene(scrollTop) {
    var unitX, unitY, unitR, layer1X, layer2X, layer3X;
    
    if (scrollTop > this.HalfWidth) {
      let offset = scrollTop - this.HalfWidth;
      unitX = this.HalfWidth;
      layer1X = offset / 2;
      layer2X = offset;
      layer3X = offset / 10;
      this.currentLength = (1 - offset / 2000.0) * this.totalLength; 
    } else {
      unitX = scrollTop;
      layer1X = layer2X = layer3X = 0;
    }

    if (scrollTop > this.Finalize) {
      unitR = 2;
      unitY = -370;
    } else if (scrollTop > this.StartUphill) {
      let offset = scrollTop - this.StartUphill;
      unitR = -20 + offset / 180;
      unitY = this.StartUphill / 7 - 30 - offset ** 0.95 / 5.2;
    } else {
      unitR = 10 - scrollTop / 50;
      unitY = scrollTop / 7;
    }

    this.intro = false;
    this.unitTransform = this._transformer.new().translate(unitX, unitY).rotate(unitR).transform();
    this.layer1Transform = this._transformer.new().translate(-layer1X, 0).transform();
    this.layer2Transform = this._transformer.new().translate(-layer2X, 0).transform();
    this.layer3Transform = this._transformer.new().translate(-layer3X, 0).transform();
  }
}
