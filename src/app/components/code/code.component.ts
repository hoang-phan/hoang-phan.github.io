import { Component, ChangeDetectorRef, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'code-block',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class CodeComponent implements OnChanges {
  @Input() tickIndex;
  @Input() phase;
  pClosed = true;
  spanClosed = true;
  codeIndexes = {};
  codeRaws: String[] = [
    "class HoangPhan < FullStackDeveloper",
    "  def initialize",
    "    @main_skills = ['Ruby on Rails', 'Javascript']",
    "    @traits = [:passionate, :discipline, :logical_thinking]",
    "    @years_of_experience = 3",
    "  end",
    "end"
  ];
  literals = {
    kw: /(class|def|end)/mg,
    iv: /(\@\w+)/mg,
    sl: /('Ruby on Rails'|'Javascript')/mg,
    mn: /(initialize)/mg,
    sy: /(:\w+)/mg,
    cn: /(HoangPhan|FullStackDeveloper)/mg
  }
  codeHtml;

  constructor(private _changeRef: ChangeDetectorRef) {
    var codeParts = [];
    for (var i = 0; i< this.codeRaws.length; i++) {
      codeParts.push('<p>' + this.codeRaws[i].replace(/  /g, '&nbsp;&nbsp;').replace(/</g, '&lt;') + '</p>');
    }
    this.codeHtml = codeParts.join('');

    var that = this;
    Object.keys(this.literals).map(function(key) {
      var regex = that.literals[key];
      that.codeHtml = that.codeHtml.replace(regex, "<span class='" + key + "'>"+ "$1" + "</span>")
    });
  }

  ngOnChanges(changes) {
    this._changeRef.detectChanges();
  }

  html() {
    if (this.phase != 'show-code') {
      return this.codeHtml;
    }

    var pos = this._subIndex(this.tickIndex);
      
    if (pos >= 0) {
      var html = this.codeHtml.substring(0, pos);
      if (!this.spanClosed) {
        html += '</span>'
      }
      html += '<span class="blinking-cursor">_</span>'
      if (!this.pClosed) {
        html += '</p>'
      }

      return html;
    }
  }

  codeClass() {
    return this.phase == 'show-code' ? '' : 'transparent';
  }

  private _subIndex(pos: number) {
    if (pos < 0) {
      return -1;
    }

    if (this.codeIndexes[pos]) {
      return this.codeIndexes[pos];
    }

    var i = this._subIndex(pos - 1) + 1;
    var tagClosed = true;

    while (i < this.codeHtml.length) {
      var char = this.codeHtml.charAt(i);
      if (char == '<') {
        if (this.codeHtml.substring(i, i + 2) == '<p') {
          this.pClosed = false;
          tagClosed = false;
          i += 2;
        } else if (this.codeHtml.substring(i, i + 4) == '</p>') {
          this.pClosed = true;
          i += 4;
        } else if (this.codeHtml.substring(i, i + 5) == '<span') {
          this.spanClosed = false;
          tagClosed = false;
          i += 5;
        } else if (this.codeHtml.substring(i, i + 7) == '</span>') {
          this.spanClosed = true;
          i += 7;
        } else {
          this.codeIndexes[pos] = i;
          return i;
        }
      } else if (char == '>') {
        tagClosed = true;
        i++;
      } else if (char == '&') {
        var semicolonIndex = this.codeHtml.indexOf(';', i);
        this.codeIndexes[pos] = semicolonIndex;
        return semicolonIndex;
      } else if (tagClosed) {
        this.codeIndexes[pos] = i;
        return i;
      } else {
        i++;
      }
    }

    return -1;
  }
}
