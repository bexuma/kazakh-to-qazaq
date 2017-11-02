import { Component, Input, OnChanges, SimpleChange } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  form;
  ngOnInit() {
    this.form = new FormGroup({
      kazakh: new FormControl(""),
      qazaq: new FormControl("")
    });
  }

  // Қазақстан

  alphabetChanged = function(oldValue, newValue) {

    if (oldValue != "") {
      var str = oldValue;
      var nstr = "";

      for (var i = 0; i < str.length; i++) {
        var c = str.charAt(i);

        switch(c) {
          case 'а':
            nstr += 'a';
            break;
          case 'ә':
            nstr += 'a\'';
            break;
          case 'б':
            nstr += 'b';
            break;
          case 'в':
            nstr += 'v';
            break;
          case 'г':
            nstr += 'g';
            break;
          case 'ғ':
            nstr += 'g\'';
            break;
          case 'д':
            nstr += 'd';
            break;
          case 'е':
            nstr += 'e';
            break;
          case 'ё':
            nstr += '';
            break;
          case 'ж':
            nstr += 'j';
            break;
          case 'з':
            nstr += 'z';
            break;
          case 'и':
            nstr += 'i\'';
            break;
          case 'й':
            nstr += 'i\'';
            break;
          case 'к':
            nstr += 'k';
            break;
          case 'қ':
            nstr += 'q';
            break;
          case 'л':
            nstr += 'l';
            break;
          case 'м':
            nstr += 'm';
            break;
          case 'н':
            nstr += 'n';
            break;
          case 'ң':
            nstr += 'n\'';
            break;
          case 'о':
            nstr += 'o';
            break;
          case 'ө':
            nstr += 'o\'';
            break;
          case 'п':
            nstr += 'p';
            break;
          case 'р':
            nstr += 'r';
            break;
          case 'с':
            nstr += 's';
            break;
          case 'т':
            nstr += 't';
            break;
          case 'у':
            nstr += 'y\'';
            break;
          case 'ұ':
            nstr += 'u';
            break;
          case 'ү':
            nstr += 'y\'';
            break;
          case 'ф':
            nstr += 'f';
            break;
          case 'х':
            nstr += 'h';
            break;
          case 'һ':
            nstr += 'h';
            break;
          case 'ч':
            nstr += '';
            break;
          case 'ш':
            nstr += 's\'';
            break;
          case 'щ':
            nstr += '';
            break;
          case 'ъ':
            nstr += '';
            break;
          case 'ы':
            nstr += 'y';
            break;
          case 'і':
            nstr += 'i';
            break;
          case 'ь':
            nstr += '';
            break;
          case 'э':
            nstr += '';
            break;
          case 'ю':
            nstr += '';
            break;
          case 'я':
            nstr += '';
            break;
          case ' ':
            nstr += ' ';
            break;

          default:
            nstr += c;
        };
      }

      this.form.patchValue({qazaq: nstr});

    } else {
      this.form.patchValue({qazaq: ""});
    }
  }

}
