import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {

 constructor(private sanitizer:DomSanitizer){}
  transform(value: string,city:string): string {
    // return 'City Name : ' + city;
    // if(cityCode === 'BK'){
    //   return 'The Big Apple';

    // }else{

    //   return 'Garden City';
    // }
    //return this.sanitizer.bypassSecurityTrustHtml('<div style="background-color:#fffcc">'+ city +'</div>');
    return city;
  }

}
