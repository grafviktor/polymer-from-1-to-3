import { Polymer, html } from '@polymer/polymer/polymer-legacy';
import '@polymer/iron-icons/iron-icons.js';

import '../icon-toggle.js';

Polymer({
  _template: html`
    <style>
      :host {
        font-family: sans-serif;
      };
    </style>
  
    <h3>Statically-configured icon-toggles</h3>
    
    <icon-toggle toggle-icon="star"></icon-toggle>
    <icon-toggle toggle-icon="star" pressed=""></icon-toggle>
    
    <h3>Data-bound icon-toggle</h3>

    <!-- use a computed binding to generate the message -->
    <div><span>[[message(isFav)]]</span></div>

    <!-- curly brackets ({{}}} allow two-way binding --> 
    <icon-toggle toggle-icon="favorite" pressed="{{isFav}}"></icon-toggle>
`,

  is: "icon-toggle-demo",

  message: function(fav) {
    if (fav) {
      return "You really like me!";
    } else {
      return "Do you like me?";
    }
  }
});
