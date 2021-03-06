import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'doan5';
  constructor (private renderer: Renderer2){}
ngAfterViewInit(){
  setTimeout(() => 
  {
    this.loadScripts();
  });
}
  public loadScripts() {
    this.renderExternalScript('assets/js/_ProductDetail.min.js').onload = () => {
    }
  }
public renderExternalScript(src: string): HTMLScriptElement {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    script.async = true;
    script.defer = true;
    this.renderer.appendChild(document.body, script);
    return script;
  }
}