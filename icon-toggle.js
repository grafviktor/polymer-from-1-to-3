import { Polymer, html } from '@polymer/polymer/polymer-legacy';
import '@polymer/iron-icon/iron-icon.js';

Polymer({
  _template: html`
    <style>
      /* local DOM styles go here */
      :host {
        display: inline-block;
      }
      iron-icon {
        fill: rgba(0,0,0,0);
        stroke: currentcolor;
      }
      :host([pressed]) iron-icon {
        fill: currentcolor;
      }
    </style>

    <!-- local DOM goes here -->
    <iron-icon icon="[[toggleIcon]]"></iron-icon>
`,

  is: 'icon-toggle',

  properties: {
    toggleIcon: String,
    pressed: {
      type: Boolean,
      value: false,
      notify: true,
      reflectToAttribute: true
    }
  },

  listeners: {
    'tap': 'toggle'
  },

  toggle: function() {
    this.pressed = !this.pressed;
  }
});
