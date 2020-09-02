/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  ChooserKey,
  ChooserMode,
  ChooserType,
} from './components/chooser/chooser';
import {
  ChooserKey as ChooserKey1,
  ChooserMode as ChooserMode1,
  ChooserOptionStyle,
  ChooserType as ChooserType1,
} from './components/chooser/chooser';
import {
  PulumiEvent,
} from './util/types/events';

export namespace Components {
  interface PulumiBanner {
    'dismissible': boolean;
    'name': string;
    'visible': boolean;
  }
  interface PulumiChoosable {
    'mode': ChooserMode;
    'selection': ChooserKey;
    'type': ChooserType;
    'value': ChooserKey;
    'values': ChooserKey;
  }
  interface PulumiChooser {
    'mode': ChooserMode;
    'optionStyle': ChooserOptionStyle;
    'options': string;
    'selection': ChooserKey;
    'type': ChooserType;
  }
  interface PulumiEventList {
    'events': string;
    'webinars': string;
  }
  interface PulumiEventListItem {
    'event': PulumiEvent;
  }
  interface PulumiExample {}
  interface PulumiExamples {}
  interface PulumiRoot {}
  interface PulumiTooltip {
    'hide': () => Promise<unknown>;
    'show': () => Promise<unknown>;
  }
  interface PulumiTopButton {}
}

declare global {


  interface HTMLPulumiBannerElement extends Components.PulumiBanner, HTMLStencilElement {}
  var HTMLPulumiBannerElement: {
    prototype: HTMLPulumiBannerElement;
    new (): HTMLPulumiBannerElement;
  };

  interface HTMLPulumiChoosableElement extends Components.PulumiChoosable, HTMLStencilElement {}
  var HTMLPulumiChoosableElement: {
    prototype: HTMLPulumiChoosableElement;
    new (): HTMLPulumiChoosableElement;
  };

  interface HTMLPulumiChooserElement extends Components.PulumiChooser, HTMLStencilElement {}
  var HTMLPulumiChooserElement: {
    prototype: HTMLPulumiChooserElement;
    new (): HTMLPulumiChooserElement;
  };

  interface HTMLPulumiEventListElement extends Components.PulumiEventList, HTMLStencilElement {}
  var HTMLPulumiEventListElement: {
    prototype: HTMLPulumiEventListElement;
    new (): HTMLPulumiEventListElement;
  };

  interface HTMLPulumiEventListItemElement extends Components.PulumiEventListItem, HTMLStencilElement {}
  var HTMLPulumiEventListItemElement: {
    prototype: HTMLPulumiEventListItemElement;
    new (): HTMLPulumiEventListItemElement;
  };

  interface HTMLPulumiExampleElement extends Components.PulumiExample, HTMLStencilElement {}
  var HTMLPulumiExampleElement: {
    prototype: HTMLPulumiExampleElement;
    new (): HTMLPulumiExampleElement;
  };

  interface HTMLPulumiExamplesElement extends Components.PulumiExamples, HTMLStencilElement {}
  var HTMLPulumiExamplesElement: {
    prototype: HTMLPulumiExamplesElement;
    new (): HTMLPulumiExamplesElement;
  };

  interface HTMLPulumiRootElement extends Components.PulumiRoot, HTMLStencilElement {}
  var HTMLPulumiRootElement: {
    prototype: HTMLPulumiRootElement;
    new (): HTMLPulumiRootElement;
  };

  interface HTMLPulumiTooltipElement extends Components.PulumiTooltip, HTMLStencilElement {}
  var HTMLPulumiTooltipElement: {
    prototype: HTMLPulumiTooltipElement;
    new (): HTMLPulumiTooltipElement;
  };

  interface HTMLPulumiTopButtonElement extends Components.PulumiTopButton, HTMLStencilElement {}
  var HTMLPulumiTopButtonElement: {
    prototype: HTMLPulumiTopButtonElement;
    new (): HTMLPulumiTopButtonElement;
  };
  interface HTMLElementTagNameMap {
    'pulumi-banner': HTMLPulumiBannerElement;
    'pulumi-choosable': HTMLPulumiChoosableElement;
    'pulumi-chooser': HTMLPulumiChooserElement;
    'pulumi-event-list': HTMLPulumiEventListElement;
    'pulumi-event-list-item': HTMLPulumiEventListItemElement;
    'pulumi-example': HTMLPulumiExampleElement;
    'pulumi-examples': HTMLPulumiExamplesElement;
    'pulumi-root': HTMLPulumiRootElement;
    'pulumi-tooltip': HTMLPulumiTooltipElement;
    'pulumi-top-button': HTMLPulumiTopButtonElement;
  }
}

declare namespace LocalJSX {
  interface PulumiBanner {
    'dismissible'?: boolean;
    'name'?: string;
    'visible'?: boolean;
  }
  interface PulumiChoosable {
    'mode'?: ChooserMode;
    'selection'?: ChooserKey;
    'type'?: ChooserType;
    'value'?: ChooserKey;
    'values'?: ChooserKey;
  }
  interface PulumiChooser {
    'mode'?: ChooserMode;
    'optionStyle'?: ChooserOptionStyle;
    'options'?: string;
    'selection'?: ChooserKey;
    'type'?: ChooserType;
  }
  interface PulumiEventList {
    'events'?: string;
    'webinars'?: string;
  }
  interface PulumiEventListItem {
    'event'?: PulumiEvent;
  }
  interface PulumiExample {}
  interface PulumiExamples {}
  interface PulumiRoot {
    'onRendered'?: (event: CustomEvent<any>) => void;
  }
  interface PulumiTooltip {}
  interface PulumiTopButton {}

  interface IntrinsicElements {
    'pulumi-banner': PulumiBanner;
    'pulumi-choosable': PulumiChoosable;
    'pulumi-chooser': PulumiChooser;
    'pulumi-event-list': PulumiEventList;
    'pulumi-event-list-item': PulumiEventListItem;
    'pulumi-example': PulumiExample;
    'pulumi-examples': PulumiExamples;
    'pulumi-root': PulumiRoot;
    'pulumi-tooltip': PulumiTooltip;
    'pulumi-top-button': PulumiTopButton;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'pulumi-banner': LocalJSX.PulumiBanner & JSXBase.HTMLAttributes<HTMLPulumiBannerElement>;
      'pulumi-choosable': LocalJSX.PulumiChoosable & JSXBase.HTMLAttributes<HTMLPulumiChoosableElement>;
      'pulumi-chooser': LocalJSX.PulumiChooser & JSXBase.HTMLAttributes<HTMLPulumiChooserElement>;
      'pulumi-event-list': LocalJSX.PulumiEventList & JSXBase.HTMLAttributes<HTMLPulumiEventListElement>;
      'pulumi-event-list-item': LocalJSX.PulumiEventListItem & JSXBase.HTMLAttributes<HTMLPulumiEventListItemElement>;
      'pulumi-example': LocalJSX.PulumiExample & JSXBase.HTMLAttributes<HTMLPulumiExampleElement>;
      'pulumi-examples': LocalJSX.PulumiExamples & JSXBase.HTMLAttributes<HTMLPulumiExamplesElement>;
      'pulumi-root': LocalJSX.PulumiRoot & JSXBase.HTMLAttributes<HTMLPulumiRootElement>;
      'pulumi-tooltip': LocalJSX.PulumiTooltip & JSXBase.HTMLAttributes<HTMLPulumiTooltipElement>;
      'pulumi-top-button': LocalJSX.PulumiTopButton & JSXBase.HTMLAttributes<HTMLPulumiTopButtonElement>;
    }
  }
}


