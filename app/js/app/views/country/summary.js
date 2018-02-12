
import View from '../../framework/view';

export default class SummaryView extends View {

  constructor ( options = {} ) {

    super(options);

    this.data = options.data;
    this.hasChanged = false;

    this.render();

  }


  render() {

    this.template = $(`

      <div class="summary" data-id="${this.data.id}" data-model="country">
        <div class="summary-content">
          <span class="summary-title">Country Summary</span>
          <span class="summary-section-title">Shipping</span>
          <ul>
            <li class="property-group">
              <span class="property-label">GRT sunk</span>
              <span class="property-value value-up">${this.data.sunk.grt}</span>
            </li>
            <li class="property-group">
              <span class="property-label">Warships sunk</span>
              <span class="property-value value-up">${this.data.sunk.warships}</span>
            </li>
            <li class="property-group">
              <span class="property-label">Merchants sunk</span>
              <span class="value value-up">${this.data.sunk.merchants}</span>
            </li>
            <li class="property-group">
              <span class="property-label">GRT lost</span>
              <span class="property-value value-down">0</span>
            </li>
            <li class="property-group">
              <span class="property-label">Warships lost</span>
              <span class="property-value value-down">0</span>
            </li>
            <li class="property-group">
              <span class="property-label">Merchants lost</span>
              <span class="property-value value-down">0</span>
            </li>
          </ul>
          <span class="summary-section-title">Construction</span>
          <ul>
            <li class="property-group">
              <span class="property-label">Heavy Shipyards</span>
              <span class="property-value">7 <span class="value-up">(+2)</span></span>
            </li>
            <li class="property-group">
              <span class="property-label">Light Shipyards</span>
              <span class="property-value">56 <span class="value-up">(+6)</span></span>
            </li>
          </ul>
        </div>
      </div>

    `);

    $('body').append(this.template);

  }


  setData ( data = {} ) {

    this.data = data;
    this.hasChanged = true;

  }


  update() {

    if (this.hasChanged) {

      this.remove();
      this.render();

    }

    this.hasChanged = false;

  }



  remove() {

    this.template.remove();

  }

  show() {

    this.template.show();

  }

  hide() {

    this.template.hide();

  }


}
